/* 由脚本生成, 请勿修改!!! */
/* eslint-disable */

import request from "@/utils/request";

interface BaseRes<T = any> {
	msg: string;
	result: T;
	info: string;
	status: boolean;
	[k: string]: any;
}

export interface QueryChildSysEnumParams {
	/**
	 * 区域id 不传则查询最大区域
	 */
	id?: number;
}

export type QueryChildSysEnumData = {
	/**
	 * 枚举id
	 */
	id: number;
	code: string;
	/**
	 * 枚举名
	 */
	name: string;
	parentId: number;
	[k: string]: any;
}[];

/**
 * http://192.168.137.35:3000/project/224/interface/api/28882
 *
 * 查询枚举下级
 * ------------
 *
 * 作者: chency
 *
 * 创建时间: 2021/05/28 10:26:01
 *
 * 更新时间: 2021/06/02 16:40:55
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {number} [id] 区域id 不传则查询最大区域
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 */
export function queryChildSysEnum(
	data: QueryChildSysEnumParams,
	config?: Record<string, any>
): Promise<BaseRes<QueryChildSysEnumData>> {
	return request({
		url:
			process.env.VUE_APP_MOCK === "true"
				? `http://192.168.137.35:3000/mock/224/api/queryChildSysEnum`
				: `/api/queryChildSysEnum`,
		method: "post",
		data,
		...config
	}) as any;
}

export interface QueryOwnAreaParams {
	/**
	 * 区域id 不传则查询最大区域
	 */
	id?: number;
}

export type QueryOwnAreaData = {
	id: number;
	/**
	 * 区域名称
	 */
	areaName: string;
	/**
	 * 父节点id
	 */
	fatherid: number;
	/**
	 * code
	 */
	code: string;
	level: number;
	/**
	 * 是否包含下级 0 代表有下级 1代表没下级
	 */
	isLeaf: string;
	/**
	 * 是否包含公司 1 有公司 0 没公司
	 */
	iscompany: string;
	[k: string]: any;
}[];

/**
 * http://192.168.137.35:3000/project/224/interface/api/29179
 *
 * 查询行政区域本级
 * ------------
 *
 * 作者: chency
 *
 * 创建时间: 2021/06/02 17:24:16
 *
 * 更新时间: 2021/06/08 14:03:11
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {number} [id] 区域id 不传则查询最大区域
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 * --- 备注 ---
 * -----------
 *
 * 江西省id  360000000000
 *
 * 赣州市id  360700000000
 *
 */
export function queryOwnArea(
	data: QueryOwnAreaParams,
	config?: Record<string, any>
): Promise<BaseRes<QueryOwnAreaData>> {
	return request({
		url:
			process.env.VUE_APP_MOCK === "true"
				? `http://192.168.137.35:3000/mock/224/api/queryOwnArea`
				: `/api/queryOwnArea`,
		method: "post",
		data,
		...config
	}) as any;
}

export interface QueryAreaByNameAndCodeParams {
	/**
	 * 组织最大的code 不传则查赣州的3607
	 */
	code?: number;
	/**
	 * 查询内容
	 */
	name: string;
}

export type QueryAreaByNameAndCodeData = {
	id: string;
	/**
	 * 区域名称/单位名称
	 */
	name: string;
	/**
	 * code
	 */
	code: string;
	/**
	 *  0 是公司 1是地区  如果是0  则id 为公司的id  如果为1 则id为地区id ，用于业务筛选具体的公司，部分业务需要传公司id
	 */
	iscompany: string;
	[k: string]: any;
}[];

/**
 * http://192.168.137.35:3000/project/224/interface/api/29944
 *
 * 行政区域：模糊查询地域或单位名称
 * ------------
 *
 * 作者: chency
 *
 * 创建时间: 2021/06/08 19:07:47
 *
 * 更新时间: 2021/06/09 13:55:59
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {number} [code] 组织最大的code 不传则查赣州的3607
 * @property {string} name 查询内容
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 * --- 备注 ---
 * -----------
 *
 * 赣州市code  3607   模糊查询 ，查询条件中code 为非必传字段，不传则查询赣州 3607   name为必传
 *
 */
export function queryAreaByNameAndCode(
	data: QueryAreaByNameAndCodeParams,
	config?: Record<string, any>
): Promise<BaseRes<QueryAreaByNameAndCodeData>> {
	return request({
		url:
			process.env.VUE_APP_MOCK === "true"
				? `http://192.168.137.35:3000/mock/224/api/queryAreaByNameAndCode`
				: `/api/queryAreaByNameAndCode`,
		method: "post",
		data,
		...config
	}) as any;
}

export interface QueryOwnAreaBycodeParams {
	/**
	 * 区域code不传则查询最大区域
	 */
	code?: number;
}

export type QueryOwnAreaBycodeData = {
	id: number;
	/**
	 * 区域名称
	 */
	areaName: string;
	/**
	 * 父节点id
	 */
	fatherid: number;
	/**
	 * code
	 */
	code: string;
	level: number;
	/**
	 * 是否包含下级 0 代表有下级 1代表没下级
	 */
	isLeaf: string;
	/**
	 * 是否包含公司 1 有公司 0 没公司
	 */
	iscompany: string;
	[k: string]: any;
}[];

/**
 * http://192.168.137.35:3000/project/224/interface/api/29784
 *
 * 通过areaCode查询行政区域本级
 * ------------
 *
 * 作者: chency
 *
 * 创建时间: 2021/06/07 18:07:14
 *
 * 更新时间: 2021/06/08 14:03:51
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {number} [code] 区域code不传则查询最大区域
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 * --- 备注 ---
 * -----------
 *
 * 江西省id  360000000000
 *
 * 赣州市id  360700000000
 *
 */
export function queryOwnAreaBycode(
	data: QueryOwnAreaBycodeParams,
	config?: Record<string, any>
): Promise<BaseRes<QueryOwnAreaBycodeData>> {
	return request({
		url:
			process.env.VUE_APP_MOCK === "true"
				? `http://192.168.137.35:3000/mock/224/api/queryOwnAreaBycode`
				: `/api/queryOwnAreaBycode`,
		method: "post",
		data,
		...config
	}) as any;
}

export interface QueryChildAreaBycodeParams {
	/**
	 * 区域code 不传则查询赣州的
	 */
	code?: number;
}

export type QueryChildAreaBycodeData = {
	id: number;
	/**
	 * 区域名称
	 */
	areaName: string;
	/**
	 * 父节点id
	 */
	fatherid: number;
	/**
	 * code
	 */
	code: string;
	level: number;
	/**
	 * 是否包含下级 0 代表有下级 1代表没下级
	 */
	isLeaf: string;
	/**
	 * 是否包含公司 1 有公司 0 没公司
	 */
	iscompany: string;
	[k: string]: any;
}[];

/**
 * http://192.168.137.35:3000/project/224/interface/api/29736
 *
 * 通过区域code查询行政区域下级
 * ------------
 *
 * 作者: chency
 *
 * 创建时间: 2021/06/07 10:32:16
 *
 * 更新时间: 2021/06/08 14:03:25
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {number} [code] 区域code 不传则查询赣州的
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 * --- 备注 ---
 * -----------
 *
 * 江西省id  36
 *
 * 赣州市id  3607
 *
 */
export function queryChildAreaBycode(
	data: QueryChildAreaBycodeParams,
	config?: Record<string, any>
): Promise<BaseRes<QueryChildAreaBycodeData>> {
	return request({
		url:
			process.env.VUE_APP_MOCK === "true"
				? `http://192.168.137.35:3000/mock/224/api/queryChildAreaBycode`
				: `/api/queryChildAreaBycode`,
		method: "post",
		data,
		...config
	}) as any;
}

export interface QueryParentAreaBycodeParams {
	/**
	 * 区域code不传则查询赣州
	 */
	code?: number;
}

export type QueryParentAreaBycodeData = {
	id: number;
	/**
	 * 区域名称
	 */
	areaName: string;
	/**
	 * 父节点id
	 */
	fatherid: number;
	/**
	 * code
	 */
	code: string;
	level: number;
	[k: string]: any;
}[];

/**
 * http://192.168.137.35:3000/project/224/interface/api/29792
 *
 * 通过区域code查询行政区域所有上级
 * ------------
 *
 * 作者: chency
 *
 * 创建时间: 2021/06/07 18:20:34
 *
 * 更新时间: 2021/06/07 18:22:32
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {number} [code] 区域code不传则查询赣州
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 * --- 备注 ---
 * -----------
 *
 * 江西省id  36
 *
 * 赣州市id  3607
 *
 */
export function queryParentAreaBycode(
	data: QueryParentAreaBycodeParams,
	config?: Record<string, any>
): Promise<BaseRes<QueryParentAreaBycodeData>> {
	return request({
		url:
			process.env.VUE_APP_MOCK === "true"
				? `http://192.168.137.35:3000/mock/224/api/queryParentAreaBycode`
				: `/api/queryParentAreaBycode`,
		method: "post",
		data,
		...config
	}) as any;
}

export interface QueryChildAreaParams {
	/**
	 * 区域id 不传则查询最大区域
	 */
	id?: number;
}

export type QueryChildAreaData = {
	id: number;
	/**
	 * 区域名称
	 */
	areaName: string;
	/**
	 * 父节点id
	 */
	fatherid: number;
	/**
	 * code
	 */
	code: string;
	level: number;
	/**
	 * 是否包含下级 0 代表有下级 1代表没下级
	 */
	isLeaf: string;
	/**
	 * 是否包含公司 1 有公司 0 没公司
	 */
	iscompany: string;
	[k: string]: any;
}[];

/**
 * http://192.168.137.35:3000/project/224/interface/api/28826
 *
 * 通过区域id查询行政区域下级
 * ------------
 *
 * 作者: chency
 *
 * 创建时间: 2021/05/27 17:44:50
 *
 * 更新时间: 2021/06/08 14:02:53
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {number} [id] 区域id 不传则查询最大区域
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 * --- 备注 ---
 * -----------
 *
 * 江西省id  360000000000
 *
 * 赣州市id  360700000000
 *
 */
export function queryChildArea(
	data: QueryChildAreaParams,
	config?: Record<string, any>
): Promise<BaseRes<QueryChildAreaData>> {
	return request({
		url:
			process.env.VUE_APP_MOCK === "true"
				? `http://192.168.137.35:3000/mock/224/api/queryChildArea`
				: `/api/queryChildArea`,
		method: "post",
		data,
		...config
	}) as any;
}

export interface BaseInfoParams {
	/**
	 * 用户id，非必须
	 */
	id?: any;
}

export interface BaseInfoData {
	/**
	 * 用户id
	 */
	userId: number;
	/**
	 * 用户名
	 */
	username: string;
	/**
	 * 邮箱
	 */
	email: string;
	/**
	 * 手机号
	 */
	mobile: string;
	/**
	 * 状态
	 */
	status: number;
	deptId: number;
	/**
	 * 创建时间
	 */
	createTime: string;
	[k: string]: any;
}

/**
 * http://192.168.137.35:3000/project/224/interface/api/29089
 *
 * 查看用户信息
 * ------------
 *
 * 作者: wanxianbo
 *
 * 创建时间: 2021/06/02 12:06:55
 *
 * 更新时间: 2021/06/02 14:25:50
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {any} [id] 用户id，非必须
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 */
export function getBaseInfo(data: BaseInfoParams, config?: Record<string, any>): Promise<BaseRes<BaseInfoData>> {
	const { id } = data;
	return request({
		url:
			process.env.VUE_APP_MOCK === "true"
				? `http://192.168.137.35:3000/mock/224/api/web/getBaseInfo`
				: `/api/web/getBaseInfo`,
		method: "get",
		params: { id },
		...config
	}) as any;
}

export interface AppLoginParams {
	/**
	 * 手机号
	 */
	mobile: string;
	/**
	 * 密码
	 */
	password: string;
}

export interface AppLoginData {
	msg: string;
	code: number;
	/**
	 * token存活时间
	 */
	expire: number;
	/**
	 * token，用于认证头
	 */
	token: string;
	/**
	 * 用户id
	 */
	id: number;
	/**
	 * 用户类型id（10051为驾驶员，10052为押运员，10053为信息员）
	 */
	roleId: number;
	/**
	 * 用户类型名称
	 */
	roleName: string;
	[k: string]: any;
}

/**
 * http://192.168.137.35:3000/project/224/interface/api/28927
 *
 * app登录接口
 * ------------
 *
 * 作者: wanxianbo
 *
 * 创建时间: 2021/05/31 15:30:09
 *
 * 更新时间: 2021/06/04 11:48:26
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {string} mobile 手机号
 * @property {string} password 密码
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 */
export function appLogin(data: AppLoginParams, config?: Record<string, any>): Promise<AppLoginData> {
	return request({
		url: process.env.VUE_APP_MOCK === "true" ? `http://192.168.137.35:3000/mock/224/api/login` : `/api/login`,
		method: "post",
		data,
		...config
	}) as any;
}

export interface LoginParams {
	/**
	 * 用户账号
	 */
	username?: string;
	/**
	 * 手机号（账号合手机号都可以登录）
	 */
	mobile?: string;
	/**
	 * 密码
	 */
	password: string;
}

export interface LoginData {
	msg: string;
	code: number;
	/**
	 * token存活时间
	 */
	expire: number;
	/**
	 * tokrn
	 */
	token: string;
	[k: string]: any;
}

/**
 * http://192.168.137.35:3000/project/224/interface/api/28936
 *
 * web后台登录接口
 * ------------
 *
 * 作者: wanxianbo
 *
 * 创建时间: 2021/05/31 15:52:14
 *
 * 更新时间: 2021/05/31 15:54:39
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {string} [username] 用户账号
 * @property {string} [mobile] 手机号（账号合手机号都可以登录）
 * @property {string} password 密码
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 */
export function login(data: LoginParams, config?: Record<string, any>): Promise<LoginData> {
	return request({
		url: process.env.VUE_APP_MOCK === "true" ? `http://192.168.137.35:3000/mock/224/api/web/login` : `/api/web/login`,
		method: "post",
		data,
		...config
	}) as any;
}

export interface RefreshTokenParams {
	refreshToken: any;
}

export interface RefreshTokenData {
	userId: string;
	token: string;
	expire: string;
	refreshToken: string;
	[k: string]: any;
}

/**
 * http://192.168.137.35:3000/project/224/interface/api/29683
 *
 * 刷新token
 * ------------
 *
 * 作者: chency
 *
 * 创建时间: 2021/06/04 12:31:04
 *
 * 更新时间: 2021/06/09 11:09:00
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {any} refreshToken
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 * --- 备注 ---
 * -----------
 *
 * {
 *
 *     "code": 200,
 *
 *     "msg": "success",
 *
 *     "result": {
 *
 *         "userId": "1398253766803771393",
 *
 *         "token": "1b231211be664031a0f676bc6bad67be",
 *
 *         "expire": "7199995",
 *
 *         "refreshToken": "5bc410ed500f42cf8d6953bc663a59af"
 *
 *     }
 *
 * }
 *
 *
 *
 * {
 *
 *     "msg": "refreshToken已过期请重新登录",
 *
 *     "code": 500
 *
 * }
 *
 */
export function refreshToken(
	data: RefreshTokenParams,
	config?: Record<string, any>
): Promise<BaseRes<RefreshTokenData>> {
	const { refreshToken } = data;
	return request({
		url:
			process.env.VUE_APP_MOCK === "true"
				? `http://192.168.137.35:3000/mock/224/api/refreshToken`
				: `/api/refreshToken`,
		method: "post",
		params: { refreshToken },
		...config
	}) as any;
}

export interface LogoutParams {
	token: any;
}

export interface LogoutData {
	msg: string;
	code: number;
	[k: string]: any;
}

/**
 * http://192.168.137.35:3000/project/224/interface/api/28972
 *
 * 退出接口
 * ------------
 *
 * 作者: chency
 *
 * 创建时间: 2021/06/01 14:01:26
 *
 * 更新时间: 2021/06/04 12:34:06
 *
 * 接口状态: 已完成
 *
 * @param {object} data 接口请求参数*
 * @property {any} token
 *
 * @param {object} [config] 自定义配置, 如果需要对请求特殊处理时, 可以通过此配置项来处理
 *
 */
export function logout(data: LogoutParams, config?: Record<string, any>): Promise<LogoutData> {
	const { token } = data;
	return request({
		url: process.env.VUE_APP_MOCK === "true" ? `http://192.168.137.35:3000/mock/224/api/logout` : `/api/logout`,
		method: "post",
		params: { token },
		...config
	}) as any;
}
