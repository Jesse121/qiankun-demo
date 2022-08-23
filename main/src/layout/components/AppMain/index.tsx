import "./index.scss";

import { computed, defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

import start from "@/core";

export default defineComponent({
	name: "AppMain",
	setup() {
		const router = useRouter();
		const routerViewLength = computed(() => router.currentRoute.value.matched.length);

		function createRouterView(index: number) {
			if (!--index) return;

			return (
				<router-view
					v-slots={{
						default: ({ Component }: any) => (
							<>
								{index === 1 && Component}
								{createRouterView(index)}
							</>
						)
					}}
				/>
			);
		}

		onMounted(() => {
			start({ prefetch: true, sandbox: { strictStyleIsolation: true } });
		});

		return () => {
			return (
				<section class="app-main">
					<div v-show={!router.currentRoute.value.meta.isMicrApp}>{createRouterView(routerViewLength.value)}</div>
					<div id="subapp-viewport" style="min-height:90.6vh" v-show={router.currentRoute.value.meta.isMicrApp}></div>
				</section>
			);
		};
	}
});
