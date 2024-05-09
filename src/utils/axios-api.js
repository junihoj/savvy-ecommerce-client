import axios from "axios";
import { apiUrl } from "../constants";



const globalAxios = axios.create({
    baseURL: apiUrl,
});
const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
}
export const apiService = ({url, method='get', data, headers=defaultHeaders, otherConfig={} }) => {
  return globalAxios({
    url,
    method,
    data,
    headers,
    ...otherConfig 
  })
}