import api from "../api";
import * as yup from "yup";

export const addNewTripSchema = yup.object().shape({
  locationFrom: yup.string().required("Bắt buộc nhập"),
  locationTo: yup.string().required("Bắt buộc nhập"),
  availableSeats: yup.string().required("Bắt buộc nhập"),
  startTime: yup.string().required("Bắt buộc nhập"),
  fee: yup.string().required("Bắt buộc nhập"),
});

export const bookTripSchema = yup.object().shape({
  numberOfBookingSeats: yup.string().required("Bắt buộc nhập"),
  typeCard: yup.string().required("Bắt buộc nhập"),
  name: yup.string().required("Bắt buộc nhập"),
  number: yup.string().required("Bắt buộc nhập"),
  code: yup.string().required("Bắt buộc nhập"),
  locationFrom: yup.string().required("Bắt buộc nhập"),
  locationTo: yup.string().required("Bắt buộc nhập"),
});

class TripService {
  createTrip = (data) => api.post("/trip/", data);
  booktrip = (id, data) => api.post(`/trip/${id}`, data);
  cancelTrip = (id) => api.post(`/trip/cancel/${id}`);
  updateTrip = (id, data) => api.put(`/trip/${id}`, data);
  finishTrip = (id) => api.patch(`/trip/${id}`);
  deleteTrip = (id) => api.delete(`/trip/${id}`);
  getTripById = (id) => api.get(`/trip/${id}`);
  getTrips = () => api.get("/trips/");
  getPassengerTrips = (id) => api.get(`/trips/passenger/${id}`);
  getDriverTrips = (id) => api.get(`/trips/driver/${id}`);
}

export default TripService;
