/**
 * 安装所有微应用依赖
 */
const fs = require("fs");
const path = require("path");
const util = require("util");

const subApp = fs.readdirSync(path.resolve(__dirname, "../subapp")).filter(item => item !== ".git");

const apps = ["main", ...subApp];

console.info(`[install-all]即将将进入所有模块并下载依赖：${JSON.stringify(apps)} ing...`);

const exec = util.promisify(require("child_process").exec);
//npm源

const registry = process.argv[2];
let registry_script = registry === "cnpm" ? "cnpm install" : registry === "yarn" ? "yarn install" : "npm install";

function install() {
	apps.forEach(async i => {
		if (i !== "main") {
			i = "subapp/" + i;
		}
		if (!fs.existsSync(`${i}/package.json`)) {
			console.log(`[${i}] 应用缺少package.json文件，将跳过此应用`);
			return false;
		}
		if (fs.existsSync(`${i}/node_modules`)) {
			console.log(`[${i}] 应用已检测到node_modules目录，将跳过此应用`);
			return false;
		}
		console.log(`[${i}] 应用开始下载，耗时较久请耐心等待...`);
		const { stdout, stderr } = await exec(registry_script, { cwd: path.resolve(i) });
		console.log(i, "success", stdout);
		console.error(i, "error", stderr);
	});
}

install();

process.on("unhandledRejection", (reason, p) => {
	console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});
