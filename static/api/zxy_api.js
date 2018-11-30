import axios from 'axios'

// let base = 'api'  本地代理
// let base = 'http://developer.dlintech.com'  测试环境
// let base = 'https://shopgogo.dlintech.com'  //预发正式环境
// let base = 'http://10.7.17.19:8083' // 国栋本地ip
// let base = 'http://10.7.100.104:8084' // 王英本地ip

export const base = 'https://shopgogo.dlintech.com';

// review列表接口
export const reviewList = params => { return axios.get(`${base}/admin/restaurant/review/query-list`, {params}) }

// sell 发布接口
export const sellOnshelf = (params) => { return axios.post(`${base}/app/sell/onshelf`, params) }

// sell 编辑接口
export const sellOnEdit = (params) => { return axios.post(`${base}/app/sell/edit`, params) }
// sell 图片上传
export const sellUpload = (params) => { return axios.post(`${base}/app/goods/imageUpload`, params) }

// feedback 发布接口
export const feedback = (params) => { return axios.post(`${base}/app/feedback`, params) }

// feedback 图片上传
export const feedbackUpload = (params, feedbackId) => { return axios.post(`${base}/app/feedback/${feedbackId}/photo`, params) }

// 商品详情接口
export const getGoodsDetail = params => { return axios.get(`${base}/app/goods/detail?goodsId=${params}`) }

