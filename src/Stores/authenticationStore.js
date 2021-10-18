import api from "./api";
import { makeObservable, action, observable } from "mobx";
import decode from "jwt-decode";

class AuthenticationStore {
  user = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      logging: action,
    });
  }

  setUser = (token) => {
    localStorage.setItem("personalToken", token);
    api.defaults.headers.common.Authorization = `Bearar ${token}`;
    this.user = decode(token);
  };
  logging = async (loggingInfo, path) => {
    try {
      const response = await api.post(`/${path}`, loggingInfo);
      this.setUser(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  logOut = () => {
    delete api.defaults.common.Authorization;
    localStorage.removeItem("personalToken");
    this.user = null;
  };
}

const authenticationStore = new AuthenticationStore();
export default authenticationStore;
