const fs = require("fs");
const path = require("path");
const util = require("util");

const subApp = fs.readdirSync(path.resolve(__dirname, "../subapp")).filter(item => item !== ".git");

const apps = ["main", ...subApp];

console.log(`即将进入所有模块并打包项目：${JSON.stringify(apps)} ing...`);

const exec = util.promisify(require("child_process").exec);
function build() {
	apps.forEach(async i => {
		if (i !== "main") {
			i = "subapp/" + i;
		}
		console.log(`[${i}] 开始打包,耗时较久请耐心等待...`);
		const { stdout, stderr } = await exec("yarn build", { cwd: path.resolve(i) });
		console.log(i, "success", stdout);
		console.error(i, "error", stderr);
	});
}
build();

process.on("unhandledRejection", (reason, p) => {
	console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
	// application specific logging, throwing an error, or other logic here
});
