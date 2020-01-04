import {request} from './request'


//home 的请求
export function getHomeMultidata(){
    // console.log(config)
    return request({
        url: '/users',
    })
}
export function getHomeGoods(){
    
}