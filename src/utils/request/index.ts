import Request from 'luch-request';

const url = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_BASE_API}`;

const request = new Request({
  baseURL: url,
  timeout: 8 * 1000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);

request.interceptors.response.use(
  (response) => {
    uni.hideToast();
    const res = response.data;
    if (res.code === 200) {
      return res.data;
    } else {
      uni.showToast({ title: res.msg, icon: 'none' });
    }
    return Promise.reject(res.msg);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;