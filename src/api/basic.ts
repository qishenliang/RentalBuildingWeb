import { defHttp } from "../utils/http";
enum Api {
  Login = "/api/user/login",
  Register = "/api/user/register",
}

export function login(data: any) {
  return defHttp.post(Api.Login, data);
}

export function register(data: any) {
  return defHttp.post(Api.Register, data);
}
