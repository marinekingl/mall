import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
    timeout: 5000,
    method: 'get',
    headers:{
      "Content-type":"tex/plain",
      "Access-Control-Allow-Credentials":true,
    },
  })

  // axios 拦截器
  instance.interceptors.request.use(config => {
      //config中的信息不符合要求，符合服务器要求才能使用
      //每次发送请求时，希望在页面中显示一个请求的图标
      //某些网络请求，必须携带一些特殊信息
      // console.log(config);
      return config
    }, err => {
      console.log(err);
    })
    instance.interceptors.response.use(res => {
        return res
    }, error => {
        console.log(error)
    })

  //发送真正的网络请求
  return instance(config)
}
