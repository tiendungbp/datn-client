import {
  Breadcrumb,
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Spin,
  Row,
  Col,
  Table,
  Tag,
  Card,
  Divider,
} from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { getDetailPatientService } from "../../../store/managerPatient.services/thunkAction";
import AnonymousPhoto from "../../../assets/img/image.png";
import { Vertical } from "../../../utils/AnimatedPage";
import Swal from "sweetalert2";
import CommonUtils from "../../../utils/commonUtils";
import { toast } from "react-toastify";
import { ColumnsType } from "antd/es/table";
import moment from "moment";
import {
  cancelAppointmentService,
  getAllAppointmentService,
} from "../../../store/managerAppointment.services/thunkAction";
import { clearMessageAppointment } from "../../../store/managerAppointment.services/slice";
import socketIO from "socket.io-client";

const initAppointment = {
  appointment_id: "",
  type_id: "",
  doctor_schedule_id: "",
  patient_id: "",
  employee_id: "",
  fullname: "",
  dob: "",
  gender: "",
  phone: "",
  status: 1,
  createdAt: "",
  details: [],
  updatedAt: "",
  Type: {
    type_id: "",
    type_name: "",
  },
  Patient: {
    patient_id: "",
    fullname: "",
    avatar: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
  },
  Employee: {
    employee_id: "",
    fullname: "",
    dob: "",
    gender: "",
    phone: "",
  },
  DoctorSchedule: {
    doctor_schedule_id: "",
    doctor_id: "",
    schedule_id: "",
    status: 1,
    createdAt: "",
    updatedAt: "",
    Doctor: {
      doctor_id: "",
      fullname: "",
      avatar: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
    },
    Schedule: {
      schedule_id: "",
      session_id: "",
      date: "",
      createdAt: "",
      updatedAt: "",
      Session: {
        session_id: "",
        time: "",
        status: 1,
        createdAt: "",
        updatedAt: "",
      },
    },
  },
};

interface Appointment {
  appointment_id: string;
  type_id: string;
  doctor_schedule_id: string;
  patient_id: string;
  employee_id: string;
  fullname: string;
  dob: string;
  gender: string;
  phone: string;
  status: number;
  createdAt: string;
  details: never[];
  updatedAt: string;
  Type: {
    type_id: string;
    type_name: string;
  };
  Patient: {
    patient_id: string;
    fullname: string;
    avatar: string;
    dob: string;
    gender: string;
    phone: string;
    email: string;
  };
  Employee: {
    employee_id: string;
    fullname: string;
    dob: string;
    gender: string;
    phone: string;
  };
  DoctorSchedule: {
    doctor_schedule_id: string;
    doctor_id: string;
    schedule_id: string;
    status: number;
    createdAt: string;
    updatedAt: string;
    Doctor: {
      doctor_id: string;
      fullname: string;
      avatar: string;
      dob: string;
      gender: string;
      phone: string;
      email: string;
    };
    Schedule: {
      schedule_id: string;
      session_id: string;
      date: string;
      createdAt: string;
      updatedAt: string;
      Session: {
        session_id: string;
        time: string;
        status: number;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}

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
  const { messagePatient } = useSelector((state: RootState) => state.patient);
  const { message, messageCancel, isLoading } = useSelector(
    (state: RootState) => state.appointment,
  );
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (idNFC) getUserByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idNFC]);

  const getUserByID = async () => {
    await Appdispatch(getDetailPatientService(idNFC));
  };

  useEffect(() => {
    if (messagePatient) setPatient(messagePatient.data);
  }, [messagePatient]);

  const socket = socketIO("https://datn-be-swt5.onrender.com/");
  socket.connect();

  const [appointmentList, setAppointmentList] = useState<Appointment[]>([]);
  const [appointment, setAppointment] = useState<Appointment>(initAppointment);
  const [isOpen, setIsOpen] = useState(false);
  const [searchList, setSearchList] = useState<Appointment[] | null>(null);
  const [keyword, setKeyword] = useState("");

  const columns: ColumnsType<Appointment> = [
    {
      title: "Mã lịch hẹn",
      dataIndex: "appointment_id",
      render: (appointment_id) => (
        <span className="font-mono font-semibold text-blue-600">
          #{appointment_id.toUpperCase()}
        </span>
      ),
    },
    {
      title: "Loại dịch vụ",
      render: (obj) => (
        <span className="font-medium text-gray-700">{obj.Type.type_name}</span>
      ),
    },
    {
      title: "Bác sĩ phụ trách",
      render: (obj) => (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">
            {obj.DoctorSchedule.Doctor.fullname}
          </span>
          <span className="text-xs text-gray-400">
            {obj.DoctorSchedule.Doctor.phone}
          </span>
        </div>
      ),
    },
    {
      title: "Ngày gửi",
      render: (obj) => moment(obj.createdAt).format("DD/MM/YYYY"),
    },
    {
      title: "Thời gian khám",
      render: (obj) => (
        <div className="flex flex-col">
          <span className="font-medium text-gray-800">
            {moment(obj.DoctorSchedule.Schedule.date).format("DD/MM/YYYY")}
          </span>
          <span className="text-xs text-blue-500 font-semibold">
            {obj.DoctorSchedule.Schedule.Session.time}
          </span>
        </div>
      ),
    },
    {
      title: "Trạng thái",
      render: (obj) => {
        switch (obj.status) {
          case 0:
            return (
              <Tag
                color="warning"
                className="px-2.5 py-0.5 rounded-full font-medium"
              >
                Chờ xác nhận
              </Tag>
            );
          case 1:
            return (
              <Tag
                color="success"
                className="px-2.5 py-0.5 rounded-full font-medium"
              >
                Đã xác nhận
              </Tag>
            );
          case 2:
            return (
              <Tag
                color="error"
                className="px-2.5 py-0.5 rounded-full font-medium"
              >
                Đã hủy
              </Tag>
            );
          default:
            return (
              <Tag
                color="processing"
                className="px-2.5 py-0.5 rounded-full font-medium"
              >
                Đã hoàn thành
              </Tag>
            );
        }
      },
    },
    {
      title: "Thao tác",
      align: "center",
      render: (obj) => (
        <Button
          size="small"
          type="link"
          className="font-medium text-blue-600 hover:text-blue-700 p-0"
          onClick={() => {
            setAppointment(obj);
            setIsOpen(true);
          }}
        >
          Chi tiết
        </Button>
      ),
    },
  ];

  useEffect(() => {
    getAllAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (message) {
      setAppointmentList(message.data);
    }
  }, [message]);

  useEffect(() => {
    if (messageCancel) {
      const { errCode } = messageCancel;
      if (errCode === 0) {
        toast.success("Hủy thành công");
        setAppointment(initAppointment);
        setIsOpen(false);
        getAllAppointments();
      } else if (errCode === 2) {
        toast.error("Trạng thái lịch hẹn không phù hợp");
      } else {
        toast.error("Gửi yêu cầu thất bại");
      }
      Appdispatch(clearMessageAppointment());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageCancel]);

  useEffect(() => {
    socket.on("new_accepted_appointment", (data: any) => {
      if (data.patient_id === idNFC) {
        setSearchList(null);
        getAllAppointments();
      }
    });
    socket.on("new_canceled_appointment", (data: any) => {
      if (data.patient_id === idNFC) {
        setSearchList(null);
        getAllAppointments();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const getAllAppointments = async () => {
    await Appdispatch(getAllAppointmentService(idNFC || ""));
  };

  const handleFilterByStatus = (status: number) => {
    if (status === -1) {
      setSearchList(null);
    } else {
      const list = appointmentList.filter(
        (appointment) => appointment.status === status,
      );
      setSearchList(list);
    }
  };

  const handleSearchByDate = (date: string) => {
    const list = appointmentList.filter((appointment) => {
      return appointment.DoctorSchedule.Schedule.date === date;
    });
    setSearchList(list);
  };

  const handleSearchByNameOrPhone = () => {
    if (keyword) {
      const isPhoneNumber = CommonUtils.checkPhoneNumber(keyword);
      if (isPhoneNumber) {
        const list = appointmentList.filter(
          (appointment) => appointment.DoctorSchedule.Doctor.phone === keyword,
        );
        setSearchList(list);
        setKeyword("");
      } else {
        const list = appointmentList.filter((appointment) => {
          return appointment.DoctorSchedule.Doctor.fullname
            .toLowerCase()
            .includes(keyword.toLowerCase());
        });
        setSearchList(list);
        setKeyword("");
      }
    } else {
      setSearchList(null);
    }
  };

  const handleCancelAppointment = () => {
    Swal.fire({
      title: "Xác nhận hủy yêu cầu đặt lịch hẹn?",
      icon: "warning",
      confirmButtonText: "Xác nhận hủy",
      showCancelButton: true,
      cancelButtonText: "Đóng",
      customClass: {
        title: "text-base font-medium text-gray-800",
        confirmButton:
          "bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600",
        cancelButton:
          "bg-gray-200 text-gray-800 rounded px-4 py-2 hover:bg-gray-300",
      },
      buttonsStyling: false,
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        Appdispatch(
          cancelAppointmentService({
            appointment_id: appointment.appointment_id,
            patient_id: idNFC,
          }),
        );
      }
    });
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchByNameOrPhone();
    }
  };

  return (
    <>
      <Vertical>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <Breadcrumb
            className="text-sm"
            items={[
              { title: <a href="/">Trang chủ</a> },
              {
                title: (
                  <span className="text-gray-500 font-medium">
                    Hồ sơ khám bệnh NFC
                  </span>
                ),
              },
            ]}
          />

          {/* Card Hồ sơ bệnh nhân */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <h2 className="text-white text-base font-semibold uppercase tracking-wider mb-0">
                  Thẻ định danh y tế điện tử
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-mono">
                <span>NFC TAG UID:</span>
                <span className="font-bold tracking-widest">
                  {idNFC || "UNKNOWN"}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <img
                    className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover ring-4 ring-blue-50 shadow-inner"
                    src={patient?.avatar || AnonymousPhoto}
                    alt="user-avatar"
                  />
                  <span className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-lg text-xs shadow px-[6px] py-[2px]">
                    ✓
                  </span>
                </div>

                {/* Thông tin cá nhân Grid */}
                <div className="w-full flex-1">
                  <div className="border-b border-gray-100 pb-3 mb-4 flex flex-wrap justify-between items-baseline gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {patient?.fullname || "Chưa cập nhật họ tên"}
                      </h3>
                      <p className="text-xs text-gray-400 font-mono">
                        MÃ HỒ SƠ: #{patient?.patient_id?.toUpperCase() || idNFC}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      Phòng khám nha khoa ToothHive
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
                    <div className="flex items-center justify-between py-1 border-b border-dashed border-gray-100">
                      <span className="text-gray-500 font-medium">
                        Số điện thoại:
                      </span>
                      <span className="text-gray-900 font-semibold font-mono">
                        {patient?.phone || "Chưa cập nhật"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-dashed border-gray-100">
                      <span className="text-gray-500 font-medium">Email:</span>
                      <span className="text-gray-900 font-medium break-all">
                        {patient?.email || "Chưa cập nhật"}
                      </span>
                    </div>

                    <div className="flex items-start justify-between py-1 border-b border-dashed border-gray-100 sm:col-span-2">
                      <span className="text-gray-500 font-medium shrink-0 mr-4">
                        Địa chỉ cư trú:
                      </span>
                      <span className="text-gray-800 text-right">
                        {[
                          patient?.street,
                          patient?.ward,
                          patient?.district,
                          patient?.city,
                        ]
                          .filter(Boolean)
                          .join(", ") || "Chưa cập nhật địa chỉ"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quản lý lịch hẹn Table */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
            <div className="mb-6">
              <h1 className="text-xl font-bold uppercase tracking-wide text-gray-900 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                Lịch sử & Lịch khám cá nhân
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Theo dõi quá trình điều trị lâm sàng và cập nhật trạng thái
                phiếu hẹn tự động theo thời gian thực
              </p>
            </div>

            {/* Bộ lọc */}
            <Form layout="vertical" className="mb-6">
              <Row gutter={[16, 16]}>
                <Col lg={6} md={12} span={24}>
                  <Form.Item
                    label={
                      <span className="text-xs font-semibold text-gray-600">
                        TRẠNG THÁI HẸN
                      </span>
                    }
                    className="mb-0"
                  >
                    <Select
                      className="w-full"
                      placeholder="Tất cả trạng thái"
                      size="middle"
                      options={[
                        { value: -1, label: "Tất cả trạng thái" },
                        { value: 0, label: "Chờ xác nhận" },
                        { value: 1, label: "Đã xác nhận" },
                        { value: 2, label: "Đã hủy" },
                        { value: 3, label: "Đã hoàn thành" },
                      ]}
                      onChange={(value) => handleFilterByStatus(value)}
                    />
                  </Form.Item>
                </Col>

                <Col lg={6} md={12} span={24}>
                  <Form.Item
                    label={
                      <span className="text-xs font-semibold text-gray-600">
                        NGÀY HẸN KHÁM
                      </span>
                    }
                    className="mb-0"
                  >
                    <DatePicker
                      size="middle"
                      className="w-full"
                      placeholder="Chọn ngày hẹn"
                      format="DD-MM-YYYY"
                      onChange={(e: any) => {
                        e && e.$d
                          ? handleSearchByDate(
                              moment(e.$d).format("YYYY-MM-DD"),
                            )
                          : setSearchList(null);
                      }}
                    />
                  </Form.Item>
                </Col>

                <Col lg={12} span={24}>
                  <Form.Item
                    label={
                      <span className="text-xs font-semibold text-gray-600">
                        TÌM KIẾM BÁC SĨ
                      </span>
                    }
                    className="mb-0"
                  >
                    <div className="flex gap-2">
                      <Input
                        className="w-full"
                        size="middle"
                        placeholder="Nhập tên bác sĩ hoặc số điện thoại..."
                        value={keyword}
                        onChange={(e: any) => setKeyword(e.target.value)}
                        onKeyUp={handleEnter}
                      />
                      <Button
                        type="primary"
                        onClick={handleSearchByNameOrPhone}
                        className="bg-blue-600 hover:bg-blue-700 px-6 font-medium shadow-none"
                      >
                        Tìm
                      </Button>
                    </div>
                  </Form.Item>
                </Col>
              </Row>
            </Form>

            {/* Bảng dữ liệu */}
            <Spin tip="Đang đồng bộ dữ liệu..." spinning={isLoading}>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <Table
                  rowKey="appointment_id"
                  columns={columns}
                  dataSource={searchList ? searchList : appointmentList}
                  scroll={{ x: 900 }}
                  pagination={{
                    position: ["bottomCenter"],
                    pageSize: 8,
                    showSizeChanger: false,
                  }}
                  className="modern-dental-table"
                />
              </div>
            </Spin>
          </div>

          {/* Modal Chi tiết lịch hẹn */}
          <Modal
            width={850}
            open={isOpen}
            title={
              <div className="flex items-center justify-between pr-8 border-b pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gray-900">
                    Chi tiết phiếu hẹn
                  </span>
                  <span className="font-mono text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    #{appointment.appointment_id.toUpperCase()}
                  </span>
                </div>
                {appointment.status === 0 ? (
                  <Tag color="warning">Chờ xác nhận</Tag>
                ) : appointment.status === 1 ? (
                  <Tag color="success">Đã xác nhận</Tag>
                ) : appointment.status === 2 ? (
                  <Tag color="error">Đã hủy</Tag>
                ) : (
                  <Tag color="processing">Đã hoàn thành</Tag>
                )}
              </div>
            }
            onCancel={() => {
              setIsOpen(false);
              setAppointment(initAppointment);
            }}
            footer={
              <div className="flex justify-end gap-2 pt-2 border-t">
                <Button onClick={() => setIsOpen(false)}>Đóng</Button>
                {appointment.status !== 2 && (
                  <Button danger onClick={handleCancelAppointment}>
                    Hủy lịch hẹn này
                  </Button>
                )}
              </div>
            }
          >
            <Spin tip="Đang tải..." spinning={isLoading}>
              <div className="py-4 space-y-6">
                {/* 3 Cột thông tin cũ: Ca khám, Người khám, Bác sĩ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Cột 1: Thông tin hẹn */}
                  <Card
                    size="small"
                    title="1. Thông tin ca khám"
                    className="bg-gray-50/60 rounded-xl border-gray-200"
                  >
                    <div className="space-y-2 text-xs">
                      <div>
                        <p className="text-gray-400 mb-0.5">Dịch vụ chính:</p>
                        <p className="font-semibold text-gray-800">
                          {appointment.Type?.type_name || "Khám tư vấn"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">Ngày hẹn khám:</p>
                        <p className="font-semibold text-blue-600">
                          {moment(
                            appointment.DoctorSchedule?.Schedule?.date,
                          ).format("DD/MM/YYYY")}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">Khung giờ trực:</p>
                        <p className="font-semibold text-blue-600">
                          {appointment.DoctorSchedule?.Schedule?.Session?.time}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">
                          Nhân viên tiếp nhận:
                        </p>
                        <p className="font-medium text-gray-700">
                          {appointment.Employee?.employee_id !== "none"
                            ? appointment.Employee?.fullname
                            : "Đang phân bổ"}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Cột 2: Bệnh nhân */}
                  <Card
                    size="small"
                    title="2. Người khám"
                    className="bg-gray-50/60 rounded-xl border-gray-200"
                  >
                    <div className="space-y-2 text-xs">
                      <div>
                        <p className="text-gray-400 mb-0.5">Họ và tên:</p>
                        <p className="font-semibold text-gray-800">
                          {appointment.fullname}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">
                          Ngày sinh / Giới tính:
                        </p>
                        <p className="font-medium text-gray-700">
                          {moment(appointment.dob).format("DD/MM/YYYY")} (
                          {appointment.gender ? "Nam" : "Nữ"})
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">Số điện thoại:</p>
                        <p className="font-semibold font-mono text-gray-800">
                          {appointment.phone}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Cột 3: Bác sĩ */}
                  <Card
                    size="small"
                    title="3. Bác sĩ điều trị"
                    className="bg-gray-50/60 rounded-xl border-gray-200"
                  >
                    <div className="space-y-2 text-xs">
                      <div>
                        <p className="text-gray-400 mb-0.5">
                          Bác sĩ phụ trách:
                        </p>
                        <p className="font-semibold text-gray-800">
                          {appointment.DoctorSchedule?.Doctor?.fullname}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">Mã bác sĩ:</p>
                        <p className="font-mono text-gray-600">
                          #
                          {appointment.DoctorSchedule?.Doctor?.doctor_id?.toUpperCase()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-0.5">Hotline:</p>
                        <p className="font-mono text-gray-700">
                          {appointment.DoctorSchedule?.Doctor?.phone}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* 4. Khối danh sách dịch vụ thực hiện (details) */}
                <Card
                  size="small"
                  title={
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-800 text-sm">
                        4. Dịch vụ chỉ định & thực hiện
                      </span>
                      <span className="text-xs font-normal text-gray-500">
                        Số lượng: {appointment.details?.length || 0} dịch vụ
                      </span>
                    </div>
                  }
                  className="rounded-xl border-gray-200 overflow-hidden shadow-none"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-gray-50 text-gray-500 border-b border-gray-100">
                          <th className="py-2.5 px-3 font-semibold w-12 text-center">
                            STT
                          </th>
                          <th className="py-2.5 px-3 font-semibold">
                            Tên dịch vụ
                          </th>
                          <th className="py-2.5 px-3 font-semibold font-mono">
                            Mã DV
                          </th>
                          <th className="py-2.5 px-3 font-semibold font-mono">
                            Mô tả
                          </th>
                          <th className="py-2.5 px-3 font-semibold text-right">
                            Đơn giá
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {appointment.details &&
                        appointment.details.length > 0 ? (
                          appointment.details.map((item: any, idx) => (
                            <tr
                              key={item.service_id || idx}
                              className="hover:bg-blue-50/30 transition-colors"
                            >
                              <td className="py-2.5 px-3 text-center text-gray-400 font-mono">
                                {idx + 1}
                              </td>
                              <td className="py-2.5 px-3 font-medium text-gray-800">
                                {item.service_name}
                              </td>
                              <td className="py-2.5 px-3 font-mono text-gray-500 text-[11px]">
                                {item.service_id}
                              </td>
                              <td className="py-2.5 px-3 font-mono text-gray-500 text-[11px]">
                                {item.Detail.description}
                              </td>
                              <td className="py-2.5 px-3 text-right font-semibold text-blue-600 font-mono">
                                {Number(item.price).toLocaleString("vi-VN")} đ
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan={4}
                              className="py-6 text-center text-gray-400 italic"
                            >
                              Chưa có dịch vụ phát sinh hoặc đang trong giai
                              đoạn khám sơ bộ
                            </td>
                          </tr>
                        )}
                      </tbody>
                      {appointment.details &&
                        appointment.details.length > 0 && (
                          <tfoot>
                            <tr className="bg-gray-50/80 font-bold border-t border-gray-200">
                              <td
                                colSpan={4}
                                className="py-3 px-3 text-right text-gray-700"
                              >
                                Tổng chi phí dịch vụ:
                              </td>
                              <td className="py-3 px-3 text-right text-red-600 font-mono text-sm">
                                {appointment.details
                                  .reduce(
                                    (total, item: any) =>
                                      total + (Number(item.price) || 0),
                                    0,
                                  )
                                  .toLocaleString("vi-VN")}{" "}
                                đ
                              </td>
                            </tr>
                          </tfoot>
                        )}
                    </table>
                  </div>
                </Card>
              </div>
            </Spin>
          </Modal>
        </div>
      </Vertical>
    </>
  );
};

export default ProfileNFC;
