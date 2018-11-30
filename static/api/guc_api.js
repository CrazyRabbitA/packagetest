import axios from 'axios'

// let base = 'http://consumer.bestproperty.com.mm'
// let base = 'http://bestproperty.com.mm'
// let base = 'api'
// let base = 'http://developer.dlintech.com'
// let base = 'https://shopgogo.dlintech.com'

// 国栋本地ip
// let base = 'http://10.7.17.19:8083'

// 王英本地ip
// let base = 'http://10.7.100.104:8084'
// let base = 'http://10.7.21.68:8084'
// let base = 'http://10.7.19.14:8084'


import {base} from './zxy_api'

// 搜索User接口
export const searchUserList = params => { return axios.get(`${base}/app/user/queryUser?`+ params) }
// user follow
export const followUser = params => { return axios.post(`${base}/app/follow/follow`, params) }
//user unfollow
export const unFollowUser = params => { return axios.post(`${base}/app/follow/cancel-follow`, params) }

