import { requestA } from "./request";

export function getHomedata(){
  return requestA({
    url:'/home/multidata'
  })
}