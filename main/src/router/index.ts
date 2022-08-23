import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Layout from "@/layout/index.vue";

export const constantRoutes: RouteRecordRaw[] = [
	{
		path: "/redirect", //用于tagsView中刷新
		component: Layout,
		meta: {
			hidden: true
		},
		children: [
			{
				path: "/redirect/:path(.*)",
				component: () => import("@/views/redirect/index.vue")
			}
		]
	},
	{
		path: "/login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			title: "登录",
			hidden: true
		}
	},
	{
		path: "/404",
		component: () => import("@/views/errorPage/404.vue"),
		meta: {
			title: "404",
			hidden: true
		}
	},
	{
		path: "/",
		redirect: "/home",
		component: Layout,
		meta: { title: "首页" },
		children: [
			{
				path: "home",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: { title: "首页", icon: "home", breadcrumb: false }
			}
		]
	},
	{
		path: "/vue3-demo", //测试子应用路由
		component: Layout,
		redirect: "noRedirect",
		name: "vue3-demo",
		meta: { title: "vue3子应用", icon: "home", isMicrApp: true },
		children: [
			{
				path: "/vue3-demo/index",
				name: "vue3_index",
				meta: { title: "主页", isMicrApp: true },
				component: () => import("@/views/home/index.vue")
			},
			{
				path: "/vue3-demo/about",
				name: "vue3_about",
				meta: { title: "关于", isMicrApp: true },
				component: () => import("@/views/home/index.vue")
			}
		]
	},
	{
		path: "/vue2-demo", //测试子应用路由
		component: Layout,
		redirect: "noRedirect",
		name: "vue2-demo",
		meta: { title: "vue2子应用", icon: "home", isMicrApp: true },
		children: [
			{
				path: "/vue2-demo/index",
				name: "vue2_index",
				meta: { title: "主页", isMicrApp: true },
				component: () => import("@/views/home/index.vue")
			},
			{
				path: "/vue2-demo/about",
				name: "vue2_about",
				meta: { title: "关于", isMicrApp: true },
				component: () => import("@/views/home/index.vue")
			}
		]
	},
	{
		path: "/react-demo", //测试子应用路由
		component: Layout,
		redirect: "noRedirect",
		name: "react-demo",
		meta: { isMicrApp: true },
		children: [
			{
				path: "/react-demo",
				name: "react_index",
				meta: { title: "react子应用", icon: "home", isMicrApp: true },
				component: () => import("@/views/home/index.vue")
			}
		]
	},

	{
		path: "/:pathMatch(.*)*",
		redirect: "/404",
		meta: { hidden: true }
	}
];

export const asyncRoutes: Array<RouteRecordRaw> = [];

const router = createRouter({
	history: createWebHistory(),
	routes: [...constantRoutes, ...asyncRoutes]
});

// 解决子应用跳转主应用时路由版本不一致导致history.state数据接口不一致问题
// https://github.com/umijs/qiankun/issues/1361
router.beforeEach((to, from, next) => {
	if (!history.state.current) {
		Object.assign(history.state, { current: from.fullPath });
	}
	next();
});

export default router;
