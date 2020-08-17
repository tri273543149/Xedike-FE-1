import React, { useState, useEffect } from "react";
import "./index.css";
import CarImage from "./carimg.png";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { updateCarImage, deleteDriverCar } from "../../store/actions/car";
import Swal from "sweetalert2";
import { domain } from "../../config";

const CarItem = ({ car, index }) => {
  const dispatch = useDispatch();
  const [fileImage, setFileImage] = useState(null);
  let {
    _id,
    brand,
    model,
    carImage,
    numberOfSeats,
    licensePlate,
    manufacturingYear,
  } = car;
  const handleOnChangeFile = (e) => {
    let fileImage = e.target.files && e.target.files[0];
    setFileImage(fileImage);
  };
  const handleOnDeleteCar = () => {
    Swal.fire({
      title: "Bạn muốn hủy đăng ký xe này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hủy đăng ký",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteDriverCar(_id));
        Swal.fire("Hủy thành công", "success");
      }
    });
  };
  useEffect(() => {
    if (fileImage !== null) {
      const formData = new FormData();
      formData.append("carImage", fileImage);
      dispatch(updateCarImage(_id, formData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileImage]);
  return (
    <div className={index % 2 !== 0 ? "car_item background" : "car_item"}>
      <div className="img_box">
        <input type="file" name="fileImage" onChange={handleOnChangeFile} />
        <div className="overlay">
          <i className="fa fa-image"></i>
        </div>
        <img src={carImage ? domain + carImage : CarImage} alt="/" />
      </div>
      <p>
        <i className="fa fa-car mr-2"></i>
        <span className="font-weight-bold">Tên xe: </span>
        <span className="brand mr-2">{brand}</span>
      </p>
      <p>
        <i className="fa fa-calendar-alt mr-2"></i>
        <span className="font-weight-bold">Năm: </span>
        <span className="manufacturingYear">
          <Moment format="YYYY">{manufacturingYear}</Moment>
        </span>
      </p>
      <p>
        <i className="fa fa-city mr-2"></i>
        <span className="font-weight-bold">Hãng: </span>
        <span className="model">{model}</span>
      </p>
      <p>
        <i className="fa fa-adjust mr-2"></i>
        <span className="font-weight-bold">Cỡ vừa - </span>
        <span>{numberOfSeats} chỗ</span>
      </p>
      <p>
        <i className="fa fa-pager mr-2"></i>
        <span className="font-weight-bold">Biển số: </span>
        <span>{licensePlate}</span>
      </p>
      <button className="btn btn-danger" onClick={handleOnDeleteCar}>
        Hủy đăng ký
      </button>
    </div>
  );
};

export default CarItem;
