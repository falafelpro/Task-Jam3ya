import { makeAutoObservable } from "mobx";
import api from "./api";

class Jam3yaStore {
  jam3yat = [];

  constructor() {
    makeAutoObservable(this, {});
  }

  fetchJam3yat = async () => {
    try {
      const response = await api.get("/jam3ya");
      this.jam3yat = response.data;
    } catch (error) {
      console.error("Jam3yaStore -> fetchJam3yat -> error", error);
    }
  };

  createJam3ya = async (jam) => {
    try {
      const response = await api.post("/jam3ya", jam);
      this.jam3yat.push(response.data);
    } catch (error) {
      console.error("Jam3yaStore -> createJam3ya -> error", error);
    }
  };

  deleteJam3ya = async (id) => {
    try {
      console.log(id);
      const response = await api.delete("/jam3ya" + `/${id}`);
      //this.Jam3yaStore.fetchJam3yat();
    } catch (error) {
      console.error("Jam3yaStore -> deleteJam3ya -> error", error);
    }
  };

  joinJam3ya = async (id) => {
    try {
      console.log(id);
      const response = await api.post("/jam3ya/join" + `/${id}`);
    } catch (error) {
      console.error("Jam3yaStore -> deleteJam3ya -> error", error);
    }
  };
}

const jam3yatStore = new Jam3yaStore();
jam3yatStore.fetchJam3yat();
export default jam3yatStore;
