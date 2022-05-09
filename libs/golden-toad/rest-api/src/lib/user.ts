import { apiProvider } from './provider';

const resourcePath = 'users';
export const userAPI = {
  getAll: () => apiProvider.getAll(resourcePath),
};
