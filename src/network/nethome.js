import { requestA,requestB } from "./request";

export function getHomedata(){
  return requestA({
    url:'/home/multidata'
  })
}

export function getHomeOptions(type,page){
  return requestB({
    url:'/hoem/data',
    params: {
      type,
      page
  }})
}
