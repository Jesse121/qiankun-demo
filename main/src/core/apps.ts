const isDev = process.env.NODE_ENV === "development";

const apps = [
	{
		name: "vue3-demo",
		entry: isDev ? "//localhost:3001/" : "/subapp/vue3/",
		activeRule: "/vue3-demo",
		container: "#subapp-viewport", // 子应用挂载的div
		props: {
			routerBase: "/vue3-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
		}
	},
	{
		name: "vue2-demo",
		entry: isDev ? "//localhost:3002/" : "/subapp/vue2/",
		activeRule: "/vue2-demo",
		container: "#subapp-viewport", // 子应用挂载的div
		props: {
			routerBase: "/vue2-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
		}
	},
	{
		name: "react-demo",
		entry: isDev ? "//localhost:3003/" : "/react-demo/",
		activeRule: "/react-demo",
		container: "#subapp-viewport", // 子应用挂载的div
		props: {
			routerBase: "/react-demo" // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
		}
	}
];

export default apps;
