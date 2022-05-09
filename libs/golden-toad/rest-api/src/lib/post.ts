import { apiProvider } from './provider';

export const postAPI = {
  getPostsByUserId: (userId: number) =>
    apiProvider.getPostsByUserId('posts', userId),
};
