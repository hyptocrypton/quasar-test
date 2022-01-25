import axios, { AxiosInstance } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-type": "application/json",
  },
});

const url = "http://localhost:3000/";

class DataService {
  getCompanies() {
    return apiClient.get("/companies");
  }

  getCompanyById(id) {
    return apiClient.get(`/companies/${id}`);
  }

  createCompany(data) {
    return apiClient.post("/companies", data);
  }

  updateCompany(id, data) {
    return apiClient.put(`/tutorials/${id}`, data);
  }

  deleteCompany(id) {
    return apiClient.delete(`/tutorials/${id}`);
  }

  findByName(name) {
    return apiClient.get(`/companies?title=${name}`);
  }
}

export default new DataService();
