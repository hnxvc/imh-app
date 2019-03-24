import {axios} from 'axios';
import posts from '../data/posts.json';
import categories from '../data/categories.json';

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

  getCategories() {
    const getData = new Promise((resolve, reject) => {
      if (categories) {
        resolve(categories);
      } else {
        reject('Categories is null');
      }
    });
    return getData;
  },

  // getSinglePost(postId) {
  //   return axios.get('../data/single-post.json');
  // },

  // getPosts() {
  //   return axios.get('../data/categories.json');
  // }
}