import {request} from './request'

export function getHomeMultidata(){
    // console.log(config)
    return request({
        url: '/photos',
    })
}