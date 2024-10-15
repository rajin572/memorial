import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ mm_accessToken }) => {
  return setToLocalStorage("mm_accessToken", mm_accessToken);
};
export const removeUserInfo = () => {
  return removeFromLocalStorage("mm_accessToken");
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("mm_accessToken");
  if (authToken) {
    const userInfo = decodedToken(authToken);
    return userInfo;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("mm_accessToken");
  return !!authToken;
};
