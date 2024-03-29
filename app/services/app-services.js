import {axios} from 'axios';
import posts from '../data/posts.json';
import post from '../data/single-post.json';
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

  getPosts(categoryId) {
    console.log('Category id', categoryId);
    const getData = new Promise((resolve, reject) => {
      if (posts) {
        resolve(posts);
      } else {
        reject('Posts is null');
      }
    });
    return getData;
  },

  getPost(postId) {
    console.log('Post id', postId);
    const getData = new Promise((resolve, reject) => {
      if (post) {
        resolve(post);
      } else {
        reject('Post is null');
      }
    });
    return getData;
  },
}