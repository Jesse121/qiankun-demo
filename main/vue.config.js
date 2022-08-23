const path = require("path");

const resolve = dir => path.join(__dirname, dir);

module.exports = {
	devServer: {
		port: 3000
	},
	configureWebpack: {
		resolve: {
			extensions: [".vue", ".ts"],
			alias: {
				"@": resolve("src")
			}
		}
	},
	chainWebpack: config => {
		config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end();
		config.module
			.rule("icons")
			.test(/\.svg$/)
			.include.add(resolve("src/assets/icons"))
			.end()
			.use("svg-sprite-loader")
			.loader("svg-sprite-loader")
			.options({
				symbolId: "icon-[name]"
			})
			.end();
	}
};
