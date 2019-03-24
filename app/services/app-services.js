import {axios} from 'axios';
import posts from '../data/posts.json';

export const AppService = {

  getHomeData: function() {
    const getData = new Promise((resolve, reject) => {
      if (posts) {
        resolve(posts);
      } else {
        reject('Posts is null');
      }
    });
    return getData;
  }, 

  // getPosts(categoryId) {
  //   return axios.get('../data/posts.json');
  // },

  // getSinglePost(postId) {
  //   return axios.get('../data/single-post.json');
  // },

  // getCategories() {
  //   return axios.get('../data/categories.json');
  // }
}