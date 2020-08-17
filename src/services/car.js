import api from "../api";
import * as yup from "yup";

export const addNewCarSchema = yup.object().shape({
  brand: yup.string().required("Bắt buộc nhập"),
  model: yup.string().required("Bắt buộc nhập"),
  manufacturingYear: yup.string().required("Bắt buộc nhập"),
  licensePlate: yup.string().required("Bắt buộc nhập"),
  numberOfSeats: yup.number().required("Bắt buộc nhập"),
})

class CarService {
  createCar = (data) => api.post("/car/", data);
  updateCarImage = (id, data) => api.post(`/car/${id}`, data);
  deleteCar = (id) => api.delete(`/car/${id}`);
}

export default CarService;
