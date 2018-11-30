
import axios from 'axios'

import {base} from './zxy_api'

//Facebook 注册
export const registerWithFaceBook = params => { return axios.post(`${base}/app/user/register/facebook`, params) }
// FaceBook 登录
export const loginWithFaceBook = params => { return axios.post(`${base}/app/user/login/facebook`, params) }
//邮箱注册
export const registerUserWithEmail = params => { return axios.post(`${base}/app/user/send-email-register`, params) }
// 账号密码登录
export const loginWithPassAndName = params => { return axios.post(`${base}/app/user/login-password`, params) }
//Facebook SMS注册
export const registerWithFaceBookSMS = params => { return axios.post(`${base}/app/user/register/facebook-sms`, params) }
//Facebook SMS 登录
export const loginWithFaceBookSMS = params => { return axios.post(`${base}/app/user/login-facebook-sms`, params) }
// 退出登录
export const signOutUser = params => { return axios.post(`${base}/app/user/sign-out`, params) }
// 忘记密码 -- 通过手邮箱重置密码
export const forgotEmailPassword = params => { return axios.post(`${base}/app/user/send-forget-password-email`, params) }
// 获取用户信息
export const getUserInfo = params => { return axios.get(`${base}/app/user`) }

// 搜索BuyList接口
export const searchBuyList = params => { return axios.get(`${base}/app/goods/queryList?`+ params) }
// 获取 category
export const getFirstCategoryData = (params) => { return axios.get(`${base}/app/goods/queryCategory`, {params}) }
// Buy details
export const buyInformation = (params) => { return axios.get(`${base}/app/goods/detail?goodsId=` + params) }

export const uploadHeadImgAjax = (params, config) => { return axios.post(`${base}/app/user/update`, params, config) }
//用户修改信息
export const setUserInfo = params => { return axios.post(`${base}/app/user/update-info`, params) }
//修改密码
export const setPassword = params => { return axios.post(`${base}/app/user/update-password`, params) }
//用户修改信息--手机
export const setUserInfoPhone = params => { return axios.post(`${base}/app/user/user/phone-reset`, params) }
//收藏--Save
export const submitSave = params => { return axios.post(`${base}/app/favourite/add`, params) }
//收藏--列表
export const getUserSaveList = params => { return axios.get(`${base}/app/favourite/list?` + params) }
//收藏--delete
export const deleteFavourite = params => { return axios.post(`${base}/app/favourite/cancel`, params) }

//问题反馈--report problem
export const reportProblems = params => { return axios.post(`${base}/app/problem`, params) }
export const reportUser = params => { return axios.post(`${base}/app/problem/report_user`, params) }

//My items List
export const searchMyItemsList = params => { return axios.get(`${base}/app/goods/queryItem?`+ params) }

// 绑定facebook
export const bindingFacebook = (params) => {
    return axios.post(`${base}/app/user/binding_facebook`, params)
}

// 解除绑定facebook
export const unBindingFacebook = (params) => {
    return axios.post(`${base}/app/user/unbind_facebook`, params)
}

// 获取卖家详情
export const getSellerDetail = (params) => { return axios.get(`${base}/app/goods/sellerDetail`, {params}) }
// 获取最新安卓版本信息
export const getShopVersion = params => { return axios.get(`${base}/app/user`) }

// 详情统计
export const getDetailCount = params => { return axios.post(`${base}/app/ad/count/detail/add/count`, params) }
export const getFollow = params => { return axios.post(`${base}/app/follow/follow`, params) }
export const getCancelFollow = params => { return axios.post(`${base}/app/follow/cancel-follow`, params) }
// followers following list
export const followersList = (params) => { return axios.get(`${base}/app/follow/seller-followers`, {params}) }
export const followingList = (params) => { return axios.get(`${base}/app/follow/seller-following`, {params}) }
export const myFollowersList = (params) => { return axios.get(`${base}/app/follow/my-followers`, {params}) }
export const myFollowingList = (params) => { return axios.get(`${base}/app/follow/my-following`, {params}) }
