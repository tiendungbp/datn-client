import {
  Breadcrumb,
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Spin,
  Tabs,
  Row,
  Col,
} from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { getDetailPatientService } from "../../../store/managerPatient.services/thunkAction";

import { Vertical } from "../../../utils/AnimatedPage";
const { TabPane } = Tabs;

interface Patient {
  patient_id: string;
  fullname: string | null;
  dob: dayjs.Dayjs | null;
  gender: boolean | null;
  phone: string | null;
  street: string | null;
  ward: string | null;
  district: string | null;
  city: string | null;
  avatar: string | null | undefined;
  email: string;
  password: string | null;
}
const ProfileNFC = () => {
  const { idNFC } = useParams();
  const Appdispatch = useAppDispatch();
  const { message } = useSelector((state: RootState) => state.patient);
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (idNFC) getUserByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idNFC]);
  //XỬ LÝ LẤY BỆNH NHÂN BẰNG ID
  const getUserByID = async () => {
    await Appdispatch(getDetailPatientService(idNFC));
  };
  useEffect(() => {
    if (message) setPatient(message.data);
  }, [message]);
  return (
    <Vertical>
      <div className="m-auto w-wd-primary md:w-wd-secondary mb-12 lg:mt-[1rem]">
        <Breadcrumb
          className={`xl:text-base md:text-sm sm:text-sm text-xs mb-12`}
          items={[
            {
              title: <a href="/">Trang chủ</a>,
            },
            {
              title: <p className="textColor "> Thông tin cá nhân </p>,
            },
          ]}
        />
        {/* // start show profile */}
        <div className="m-auto w-wd-primary md:w-wd-medium box-shadow rounded-lg p-4">
          <Row className="mb-6">
            <Col>
              <h5 className="xl:text-base md:text-sm sm:text-sm text-sm uppercase text-[#1386ED] font-bold text-[1.5rem] mb-0">
                Thông tin khách hàng
              </h5>
            </Col>
          </Row>
          <Row>
            <Col className="flex items-center flex-wrap">
              <img
                className="user-avatar rounded mr-4"
                src={patient?.avatar || undefined}
                alt="user-avatar"
              />
            </Col>
          </Row>

          <div className="tab_profile_user mt-8">
            <div className="box__booking__tsx__1">
              <p className="place__br"></p>
              <div className="profile__user__booking">
                <div className="profile__user__booking__inp py-2 flex content-center justify-between xl:text-base md:text-sm sm:text-sm text-xs">
                  <p className="w-1/5">Khách hàng:</p>
                  <span className="w-4/5 w-sm:w-1/5 text-right">{patient?.fullname}</span>
                </div>
                <div className="profile__user__booking__inp py-2 flex content-center justify-between xl:text-base md:text-sm sm:text-sm text-xs">
                  <p className="w-1/5">Số điện thoại:</p>
                  <span className="w-4/5 w-sm:w-1/5 text-right">{patient?.phone}</span>
                </div>
                <div className="profile__user__booking__inp py-2 flex content-center justify-between xl:text-base md:text-sm sm:text-sm text-xs">
                  <p className="w-1/5">Địa chỉ:</p>
                  <span className="w-4/5 w-sm:w-1/5 text-right">{patient?.street}, {patient?.ward}, {patient?.district}, {patient?.city}</span>
                </div>
                <div className="profile__user__booking__inp py-2 flex content-center justify-between xl:text-base md:text-sm sm:text-sm text-xs">
                  <p className="w-1/5">Email:</p>
                  <span className="w-4/5 w-sm:w-1/5 text-right">{patient?.email}</span>
                </div>
              </div>
              <p>Danh sách lịch khám</p>
              <div className="profile__user__booking">
                <div className="profile__user__booking__inp py-2 flex content-center justify-between xl:text-base md:text-sm sm:text-sm text-xs">
                  <p className="w-1/5">Phòng:</p>
                  <span className="w-4/5 w-sm:w-1/5 text-right">Phòng khám đa khoa ToothHive</span>
                </div>
                <div className="profile__user__booking__inp py-2 flex content-center justify-between xl:text-base md:text-sm sm:text-sm text-xs">
                  <p className="w-1/5">Địa chỉ:</p>
                  <span className="w-4/5 w-sm:w-1/5 text-right">172 Trường chinh, Tân Thới Hiệp, Quận 12, Tp.HCM</span>
                </div>
                <div className="profile__user__booking__inp py-2 flex content-center justify-between xl:text-base md:text-sm sm:text-sm text-xs">
                  <p className="w-1/5">Ngày & Thời gian:</p>
                  <span className="w-4/5 w-sm:w-1/5 text-right">28-11-2023 - 9:00-10:00</span>
                </div>
              </div>
              <p className="place__br"></p>

            </div>
          </div>
        </div>
      </div>
    </Vertical>
  );
};

export default ProfileNFC;
