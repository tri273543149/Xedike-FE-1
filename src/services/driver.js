import api from "../api";
import * as yup from "yup";

export const passportIdDriverSchema = yup.object().shape({
  passportId: yup.string().required("Bắt buộc *"),
});

class DriverService {
  createDriver = () => api.post("/driver/");
  updateDriverInfo = (data) => api.put("/driver/", data);
  ratingDriver = (id, data) => api.put(`/driver/${id}`, data);
  deleteDriver = (id) => api.delete(`/driver/${id}`);
  getDriverInfo = (id) => api.get(`/driver/${id}`);
}

export default DriverService;
