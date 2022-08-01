import { apis } from "./createApiService";

export const loginAccountAPI = (args) => {
  return apis.makeNonAuthRequest({
    url: "/userlogin",
    method: "POST",
    data: args,
  });
};

export const getListAllAccountAPI = (args) => {
  return apis.makeAuthRequest({
    url: "/users-all",
    method: "GET",
    params: args,
  });
};

export const handleUpdateUserInfoAPI = (args) => {
  return apis.makeAuthRequest({
    url: "/users/update-info-admin",
    method: "POST",
    data: args,
  });
};

export const unregisterRefreshTokenAPI = (agrs) => {
  return apis.makeAuthRequest({
    url: "/unregister-token",
    method: "POST",
    data: agrs,
  });
};

export const registerAccountAPI = (agrs) => {
  return apis.makeNonAuthRequest({
    url: "/userregister",
    method: "POST",
    data: agrs,
  });
};
