import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE, IS_MODAL_OPEN } from "../../store/constants/modal";
import { signInUserSchema } from "../../services/user";
import { login } from "../../store/actions/user";

const SignIn = () => {
  const dispatch = useDispatch();
  const inputErrors = useSelector(
    (state) =>
      state.error.inputErrors || {
        email: "",
        password: "",
      }
  );
  let { email, password } = inputErrors;
  const handleOnSubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <div className="sign_in">
      <div className="item item_first">
        <p className="title">
          <i className="fa fa-car mr-2"></i>XEDIKE
        </p>
        <p className="body">
          Bảo vệ tài khoản của bạn chỉ trong vài phút bằng cách xác thực thông
          tin và hoạt động một cách an toàn.
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signInUserSchema}
          onSubmit={handleOnSubmit}
        >
          {({ handleChange }) => (
            <Form>
              <div className="form-group">
                <div className="form_content">
                  <span className="label_name">Email</span>
                  <ErrorMessage name="email">
                    {(msg) => <span className="text text-danger">{msg}</span>}
                  </ErrorMessage>
                  <span
                    className={email ? "text d-block text-danger" : "d-none"}
                  >
                    {email}
                  </span>
                </div>
                <Field
                  className="form-control"
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <div className="form_content">
                  <span className="label_name">Mật khẩu</span>
                  <ErrorMessage name="password">
                    {(msg) => <span className="text text-danger">{msg}</span>}
                  </ErrorMessage>
                  <span
                    className={password ? "text d-block text-danger" : "d-none"}
                  >
                    {password}
                  </span>
                </div>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-info">
                  Đăng nhập
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="sub_title">Quên mật khẩu?</p>
        <p className="sub_body">Đăng nhập bằng:</p>
        <button className="btn btn-primary w-100 mb-1">FACEBOOK</button>
        <button className="btn btn-warning w-100">GOOGLE</button>
        <div className="text-right mt-2">
          <button
            className="btn btn-outline-light mr-1"
            onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignUp"))}
          >
            Đăng ký
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
          >
            Đóng
          </button>
        </div>
      </div>
      <div className="item item_second">
        <div className="content_box">
          <div className="content_item">
            <p className="title">XEDIKE.VN</p>
            <p className="title">Tổng đài 1800 1199</p>
            <p className="body">
              Nhanh chóng, thân thiện, an toàn, giá cả phải chăng. Đến bất cứ
              nơi đâu bạn muốn!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
