import axios, { AxiosInstance } from 'axios';
import {
  setToken,
  setRefreshToken,
  getToken,
  getTokenKey,
  getRefreshToken,
  getRefreshTokenKey,
  removeToken
} from '../plugins/cookie'

export class Interceptors {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: '/api',
      timeout: 10000
    })
  }

  init() {
    // 请求接口拦截器
    this.instance.interceptors.request.use(
      config => {
        // 判断一下是否有cookie，如果有的话则把cookie放进请求头
        if (getToken()) {
          config.headers[getTokenKey()] = getToken();
          config.headers[getRefreshTokenKey()] = getRefreshToken();
        }

        return config
      },
      err => {
        console.log(err);
      }
    )
    // 响应拦截器
    this.instance.interceptors.response.use(

      response => {
        const res = response.data

        if (res.code !== 200) {
          console.log('系统错误！')
          return;
        }

        if (res.code == 401) {
          console.error('登录过期');
          removeToken();

          return Promise.resolve(res);
        }

        return res;
      },

      err => {
        if (err.message === "Request failed with status code 500") {
          console.error('系统错误，请检查API是否正常！');
          return;
        }
        let code = -110;
        if (err && err.response && err.response.status) {
          code = err.response.status;
          // 登陆过期
          if (code === 401 || code === -3) {
            removeToken()
          }
        } else {
          console.error(err.message);
        }
        const errRes = { errCode: -110, errMsg: err.message || "Error" };
        return Promise.resolve(errRes);
      }
    )
  }

  // 返回一下
  getInterceptors() {
    return this.instance
  }
}