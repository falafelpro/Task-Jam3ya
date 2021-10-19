import api from "./api";
import { makeObservable, makeAutoObservable, action, observable } from "mobx";
import decode from "jwt-decode";
//after submit form redirect user

class AuthenticationStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});

    // makeObservable(this, {
    //   user: observable,
    //   logging: action,
    // });
  }

  setUser = (token) => {
    localStorage.setItem("personalToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);

    //console.log(token);
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
    //defaults.headers.common.Authorization;
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("personalToken");
    this.user = null;
  };

  checkToken = () => {
    const token = localStorage.getItem("personalToken");
    if (token) {
      const currentTime = Date.now();

      let tempUserToken = decode(token);
      if (tempUserToken.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logOut();
      }
    }
  };
}

const authenticationStore = new AuthenticationStore();
authenticationStore.checkToken();
export default authenticationStore;
