import { requestA,requestB } from "./request";

export function getHomedata(){
  return requestA({
    url:'/home/multidata'
  })
}

export function getHomeGood(type,page){
  return requestB({
    url:'/home/data',
    params: {
      type,
      page
  }})
}
