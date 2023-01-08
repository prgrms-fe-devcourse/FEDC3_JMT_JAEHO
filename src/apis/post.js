import { authRequest, baseRequest } from './core';

// test
const channelId = '63b93150230951110b843cee';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYjk1MTAwOWJjZDMxMTk1ZGY1MDQ1NSIsImVtYWlsIjoiZG9uZ3dvb0BuYXZlci5jb20ifSwiaWF0IjoxNjczMDg5NDc2fQ.JSHRv0sMvz_L-HqE-MrKrvUIPI7Jcn0VYzD1jjWEmp4';

export const getChannels = async () => {
  try {
    const data = await baseRequest.get(`/channels`);
    //console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getChannelPosts = async () => {
  try {
    const data = await baseRequest.get(`/posts/channel/${channelId}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (title) => {
  localStorage.setItem('Token', token);
  try {
    return await authRequest.post(`posts/create`, {
      channelId,
      image: null,
      title,
    });
  } catch (error) {
    console.error(error);
  }
};
