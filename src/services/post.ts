import request from '@/plugins/axios';

export function getPostsList(){
  return request({
    url: '/posts/list',
    method: 'GET',
  })
}