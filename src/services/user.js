import api from "../api";
import * as yup from "yup";

export const signUpUserSchema = yup.object().shape({
  email: yup.string().required("Bắt buộc nhập").email("Email không hợp lệ!"),
  password: yup.string().required("Bắt buộc nhập"),
  confirmPassword: yup.string().required("Bắt buộc nhập"),
  fullName: yup.string().required("Bắt buộc nhập"),
  userType: yup.string().required("Bắt buộc nhập"),
  phone: yup
    .string()
    .required("Bắt buộc nhập")
    .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/),
});

export const signInUserSchema = yup.object().shape({
  email: yup.string().required("Bắt buộc nhập").email("Email không hợp lệ!"),
  password: yup.string().required("Bắt buộc nhập"),
});

export const updateUserSchema = yup.object().shape({
  email: yup.string().required("Bắt buộc nhập").email("Email không hợp lệ!"),
  fullName: yup.string().required("Bắt buộc nhập"),
  phone: yup.string().required("Bắt buộc nhập"),
  address: yup.string().required("Bắt buộc nhập"),
});

export const changePasswordUserSchema = yup.object().shape({
  oldPassword: yup.string().required("Bắt buộc nhập"),
  newPassword: yup.string().required("Bắt buộc nhập"),
  newPassword2: yup.string().required("Bắt buộc nhập"),
});

class UserService {
  registerUser = (data) => api.post("/user/register", data);
  loginUser = (data) => api.post("/user/login", data);
  uploadAvatar = (id, data) => api.post(`/user/${id}`, data);
  updateUserInfo = (id, data) => api.put(`/user/${id}`, data);
  changePassword = (data) => api.post("/user/changePassword", data);
  getUserInfo = (id) => api.get(`/user/${id}`);
  deleteUser = (id) => api.delete(`/user/${id}`);
  getUsers = () => api.get("/users/");
}

export default UserService;
