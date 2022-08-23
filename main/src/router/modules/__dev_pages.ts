import Layout from "@/layout/index.vue";

export default {
	path: "/dev",
	component: Layout,
	meta: {
		title: "开发路由",
		hidden: true
	},
	children: [
		{
			path: "",
			component: () => import("@/views/__dev_pages/index.vue"),
			meta: {
				title: "开发页面列表",
				hidden: true
			}
		},
		{
			path: "sysEnum",
			component: () => import("@/views/__dev_pages/sysEnum/index.vue"),
			meta: {
				title: "所有系统分类",
				hidden: true
			}
		}
	]
};
