import axios from 'axios';
import { useCallback } from 'react';
const useApiService = ()=>{
    const apiUrl = process.env.REACT_APP_API_SERVER || 'http://localhost:8000/api';
    const globalAxios = axios.create({
        baseURL: apiUrl,
    });

    const sendRequest = useCallback(({url, method, data, otherConfig}) => {
      return globalAxios({
        url,
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data,
        ...otherConfig
      })
      // return new Promise((resolve, reject) => {
      //   globalAxios({
      //     url,
      //     method,
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //     data,
      //   })
      //     .then((response) => {
      //       resolve(response);
      //     })
      //     .catch((error) => {
      //       console.log("err:", error);
      //       reject(error.response);
      //     });
      // });
  },[globalAxios])

    return {
        sendRequest,
        apiUrl
    }
}

export default useApiService;