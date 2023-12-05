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
  Popconfirm,
  Row,
  Col,
} from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import {
  getDetailPatientService,
  updatePatientService,
} from "../../../store/managerPatient.services/thunkAction";
import locationAPI from "../../../services/managerLocation";
import CommonUtils from "../../../utils/commonUtils";
import { toast } from "react-toastify";
import imageAPI from "../../../services/managerImage";
import Cookies from "js-cookie";
import { setUserInfo } from "../../../store/managerAuth.services/userSlice";
import Swal from "sweetalert2";
import {
  changeEmailService,
  changePasswordService,
} from "../../../store/managerAuth.services/thunkAction";
import { Vertical } from "../../../utils/AnimatedPage";
import "./Account.scss";
import { clearMessageUpdate } from "../../../store/managerPatient.services/slice";
import { clearMessageAuth } from "../../../store/managerAuth.services/slice";
const { TabPane } = Tabs;

interface City {
  name: string;
  code: string;
}
interface District {
  name: string;
  code: string;
  province_code: string;
}

interface Ward {
  name: string;
  code: string;
  district_code: string;
}

interface BasicInfo {
  patient_id: string;
  fullname: string | null;
  dob: dayjs.Dayjs | null;
  gender: boolean | null;
  phone: string | null;
  street: string | null;
  ward: string | null;
  district: string | null;
  city: string | null;
}

interface AccountInfo {
  email: string | null;
}
interface valuePatient1 {
  patient_id: string;
  fullname: string | null;
  avatar: string | null | undefined;
  dob: dayjs.Dayjs | null;
  gender: boolean | null;
  phone: string | null;
  street: string | null;
  ward: string | null;
  district: string | null;
  city: string | null;
}
interface PatientInfo {
  fullname: string | null;
  avatar: string | null | undefined;
  dob: dayjs.Dayjs | null;
  gender: boolean | null;
  phone: string | null;
  street: string | null;
  ward: string | null;
  district: string | null;
  city: string | null;
}

interface ChangeEmailFormValues {
  new_email: string;
  password: string;
}

interface ChangePasswordFormValues {
  current_password: string;
  new_password: string;
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
const Account = () => {
  const Appdispatch = useAppDispatch();
  const navigate = useNavigate();
  const [basicInfoForm] = Form.useForm();
  const [accountInfoForm] = Form.useForm();
  const [changeEmailForm] = Form.useForm();
  const [changePasswordForm] = Form.useForm();
  //API ĐỊA CHỈ VÀ ĐỊA CHỈ CHỌN TỪ SELECT
  const [cityList, setCityList] = useState<City[]>([]);
  const [districtList, setDistrictList] = useState<District[]>([]);
  const [wardList, setWardList] = useState<Ward[]>([]);
  const [city, setCity] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [ward, setWard] = useState<string | null>(null);
  const [street, setStreet] = useState<string | null>(null);
  //THÔNG TIN ẢNH
  const [localPath, setLocalPath] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  //THÔNG TIN BỆNH NHÂN ĐANG ĐĂNG NHẬP
  const [patient, setPatient] = useState<Patient | null>(null);
  const patient_id = useSelector(
    (state: RootState) => state.user.user?.patient_id || null
  );
  const { message, messageUpdate } = useSelector(
    (state: RootState) => state.patient
  );
  const { messageAuthEmail, messageAuthPassword } = useSelector(
    (state: RootState) => state.auth
  );
  //KHỞI TẠO GIÁ TRỊ CHO THÔNG TIN CƠ BẢN
  const basicInfo: BasicInfo = {
    patient_id: patient ? patient.patient_id : "",
    fullname: patient ? patient.fullname : null,
    dob: patient ? dayjs(patient.dob, "YYYY-MM-DD") : null,
    gender: patient ? patient.gender : true,
    phone: patient ? patient.phone : "",
    street: patient && patient.street ? patient.street : null,
    ward: patient && patient.ward ? patient.ward : null,
    district: patient && patient.district ? patient.district : null,
    city: patient && patient.city ? patient.city : null,
  };

  //KHỞI TẠO GIÁ TRỊ CHO THÔNG TIN TÀI KHOẢN
  const accountInfo: AccountInfo = {
    email: patient ? patient.email : null,
  };
  //CALL API BỆNH NHÂN BẰNG ID & API THÀNH PHỐ
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getAllCities();
    if (patient_id) getUserByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (message) setPatient(message.data);
  }, [message]);
  useEffect(() => {
    if (messageUpdate) {
      const { errCode, type } = messageUpdate;
      if (errCode === 0) {
        toast.success("Cập nhật thành công");
      } else if (errCode === 2 && type === "phone") {
        toast.error("Số điện thoại đã tồn tại");
      } else {
        toast.error("Cập nhật thất bại");
      }
      Appdispatch(clearMessageUpdate());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageUpdate]);
  useEffect(() => {
    if (messageAuthEmail) {
      const { errCode, type } = messageAuthEmail || {};
      if (errCode === 0) {
        toast.success("Đã gửi thư xác nhận email mới");
        changeEmailForm.resetFields();
        setIsEmailOpen(false);
        setTimeout(() => {
          toast("Bạn cần đăng nhập lại", { icon: "⚠️" });
        }, 500);
        setTimeout(() => {
          handleLogout();
        }, 1000);
      } else if (errCode === 2 && type === "password") {
        toast.error("Mật khẩu không hợp lệ");
      } else if (errCode === 2 && type === "email") {
        toast.error("Email đã tồn tại");
      } else {
        toast.error("Đổi email thất bại");
      }
      Appdispatch(clearMessageAuth());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageAuthEmail]);
  useEffect(() => {
    if (messageAuthPassword) {
      const { errCode } = messageAuthPassword || {};
      if (errCode === 0) {
        toast.success("Đổi mật khẩu thành công");
        changePasswordForm.resetFields();
        setIsPasswordOpen(false);
      } else if (errCode === 2) {
        toast.error("Mật khẩu không hợp lệ");
      } else {
        toast.error("Đổi mật khẩu thất bại");
      }
      Appdispatch(clearMessageAuth());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageAuthPassword]);
  //XỬ LÝ LẤY BỆNH NHÂN BẰNG ID
  const getUserByID = async () => {
    await Appdispatch(getDetailPatientService(patient_id));
  };
  //GÁN THÔNG TIN BỆNH NHÂN LÊN FORM
  useEffect(() => {
    if (patient) {
      basicInfoForm.setFieldsValue(basicInfo);
      accountInfoForm.setFieldsValue(accountInfo);
      if (patient.avatar) setLocalPath(patient.avatar);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basicInfoForm, accountInfoForm, patient]);

  //LẤY CÁC QUẬN NẾU THÔNG TIN BAN ĐẦU CÓ THÀNH PHỐ
  useEffect(() => {
    if (patient && patient.city) {
      const city = cityList.find((item) => item.name === patient.city);
      if (city) {
        const cityCode = city.code;
        getDistrictsByCity(cityCode);
      }
    }
  }, [patient, cityList]);
  //LẤY CÁC PHƯỜNG NẾU THÔNG TIN BAN ĐẦU CÓ QUẬN
  useEffect(() => {
    if (patient && patient.district) {
      const district = districtList.find(
        (item) => item.name === patient.district
      );
      if (district) {
        const districtCode = district.code;
        getWardsByDistrict(districtCode);
      }
    }
  }, [patient, districtList]);

  const getAllCities = async () => {
    const res = await locationAPI.getAllCities();
    setCityList(res.data);
  };

  const getDistrictsByCity = async (city_code: string) => {
    const res = await locationAPI.getAllDistricts();
    setDistrictList(
      res.data.filter((data: District) => data.province_code === city_code)
    );
  };

  const getWardsByDistrict = async (district_code: string) => {
    const res = await locationAPI.getAllWards();
    setWardList(
      res.data.filter((data: Ward) => data.district_code === district_code)
    );
  };

  const handleChooseAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size <= 5242880) {
        const compressedFile = await CommonUtils.compressImage(selectedFile);
        setFile(compressedFile);
        setLocalPath(URL.createObjectURL(compressedFile));
      } else {
        const size = Math.round((selectedFile.size / 1024 / 1024) * 100) / 100;
        toast.error(`Kích thước ${size}MB vượt quá giới hạn`);
      }
    }
  };

  const handleDeleteAvatar = () => {
    setLocalPath(null);
    setFile(null);
    toast.success("Xóa thành công");
  };

  const handleUpdateProfile = async (values: BasicInfo) => {
    let url;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "user_avatar");
      const res = await imageAPI.uploadImageToCloud(formData);
      url = res?.secure_url;
    }
    if (patient_id) {
      const patientInfo: PatientInfo = {
        fullname: values.fullname,
        avatar: url ? url : localPath ? patient?.avatar : null,
        dob: values.dob,
        gender: values.gender,
        phone: values.phone,
        street: street ? street : values.street,
        ward: ward ? ward : values.ward,
        district: district ? district : values.district,
        city: city ? city : values.city,
      };
      const updatedPatientInfo: valuePatient1 = {
        patient_id: patient_id,
        fullname: patientInfo.fullname || "",
        avatar: patientInfo.avatar,
        dob: patientInfo.dob,
        gender: patientInfo.gender,
        phone: patientInfo.phone,
        street: patientInfo.street,
        ward: patientInfo.ward,
        district: patientInfo.district,
        city: patientInfo.city,
      };
      setIsLoading(true);
      await Appdispatch(
        updatePatientService({ obj: updatedPatientInfo, patient_id })
      );
      setIsLoading(false);
    }
  };

  const handleSubmitBasicInfo = (values: Patient) => {
    let resultCheckPhone = CommonUtils.checkPhoneNumber(
      values.phone ? values.phone.toString() : ""
    );
    let resultCheckPassword;

    if (resultCheckPhone) {
      if (!patient) {
        resultCheckPassword = CommonUtils.checkPasswordLength(
          values.password ? values.password.toString() : ""
        );
      }
      if (resultCheckPassword || patient) {
        Swal.fire({
          title: "Xác nhận lưu thông tin?",
          confirmButtonText: "Xác nhận",
          showCancelButton: true,
          cancelButtonText: "Hủy",
          customClass: {
            title: "fs-5 fw-normal text-dark",
            confirmButton: "btn-primary shadow-none",
            cancelButton: "btn-secondary-cancel shadow-none",
          },
        }).then((result: any) => {
          if (result.isConfirmed) handleUpdateProfile(values);
        });
      } else {
        toast.error("Mật khẩu cần có độ dài 6 - 20 ký tự");
      }
    } else {
      toast.error("Số điện thoại không hợp lệ");
    }
  };

  const handleChangeEmail = async (values: ChangeEmailFormValues) => {
    Swal.fire({
      title: "Xác nhận lưu thông tin?",
      confirmButtonText: "Xác nhận",
      showCancelButton: true,
      cancelButtonText: "Hủy",
      customClass: {
        title: "fs-5 fw-normal text-dark",
        confirmButton: "btn-primary shadow-none",
        cancelButton: "btn-secondary-cancel shadow-none",
      },
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        await Appdispatch(
          changeEmailService({
            new_email: values.new_email,
            password: values.password,
            patient_id,
          })
        );
        setIsLoading(false);
      }
    });
  };

  const handleChangePassword = async (values: ChangePasswordFormValues) => {
    const resultCheckPassword = CommonUtils.checkPasswordLength(
      values.new_password
    );
    if (resultCheckPassword) {
      Swal.fire({
        title: "Xác nhận lưu thông tin?",
        confirmButtonText: "Xác nhận",
        showCancelButton: true,
        cancelButtonText: "Hủy",
        customClass: {
          title: "fs-5 fw-normal text-dark",
          confirmButton: "btn-primary shadow-none",
          cancelButton: "btn-secondary-cancel shadow-none",
        },
      }).then(async (result: any) => {
        if (result.isConfirmed) {
          setIsLoading(true);
          await Appdispatch(
            changePasswordService({
              current_password: values.current_password,
              new_password: values.new_password,
              patient_id,
            })
          );
          setIsLoading(false);
        }
      });
    } else {
      toast.error("Mật khẩu mới cần có độ dài 6 - 20 ký tự");
    }
  };

  const handleLogout = () => {
    Cookies.remove("refreshToken");
    Appdispatch(setUserInfo({ user: null, login: false }));
    navigate("/login");
  };

  return (
    <Vertical>
      <Spin tip="Đang tải..." spinning={false}>
        <div className="m-auto w-wd-primary md:w-wd-secondary mb-12 lg:mt-[1rem]">
          <Breadcrumb
            className={`md:text-sm text-xs`}
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
          <div className="box-shadow rounded-lg p-4">
            <Row className="mb-6">
              <Col>
                <h5 className="uppercase text-[#1386ED] font-bold text-[1.5rem] mb-0">
                  Quản lý tài khoản
                </h5>
              </Col>
            </Row>
            <Row>
              <Col className="flex items-center flex-wrap">
                {localPath ? (
                  <img
                    className="user-avatar rounded mr-4"
                    src={localPath}
                    alt="user-avatar"
                  />
                ) : (
                  <div className="user-avatar mr-4 border-2 flex justify-center items-center rounded">
                    <small>Chưa có ảnh</small>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  id="avatar"
                  hidden
                  onChange={handleChooseAvatar}
                />
                <label
                  className="border-blue-400 text-blue-400 btn-choose-avatar btn bg-white border border-black-50 mx-2 border-1 px-4 py-2 rounded-md text-black hover:text-sky-600 hover:bg-sky-200 hover:border-sky-600"
                  htmlFor="avatar"
                  style={{ fontWeight: "400" }}
                >
                  Chọn
                </label>
                {localPath ? (
                  <Popconfirm
                    title="Bạn có muốn xóa ảnh?"
                    cancelText="Hủy"
                    okText="Xóa"
                    onConfirm={handleDeleteAvatar}
                  >
                    <Button className="mr-2 border-blue-400 text-blue-400 h-[48px]  hover:text-sky-600 hover:bg-sky-200 hover:border-sky-600">
                      Xóa
                    </Button>
                  </Popconfirm>
                ) : (
                  <></>
                )}
                <small className="text-xs">
                  Kích thước ảnh tối đa 5MB (JPEG hoặc PNG)
                </small>
              </Col>
            </Row>

            <div className="tab_profile_user mt-8">
              <Tabs defaultActiveKey="1" type="card">
                <TabPane tab="Thông tin cơ bản" key="1">
                  <Form
                    form={basicInfoForm}
                    className="mt-8"
                    layout="vertical"
                    onFinish={handleSubmitBasicInfo}
                    initialValues={{ gender: true }}
                  >
                    <Row gutter={12}>
                      <Col md={8} xs={24} span={24}>
                        <Form.Item
                          label="Họ và tên"
                          name="fullname"
                          rules={[
                            {
                              required: true,
                              message: "Họ và tên không được rỗng",
                            },
                          ]}
                        >
                          <Input size="large" placeholder="Họ và tên" />
                        </Form.Item>
                      </Col>
                      <Col md={4} span={24}>
                        <Form.Item label="Ngày sinh" name="dob">
                          <DatePicker
                            className="w-full"
                            size="large"
                            placeholder="Ngày sinh"
                            format="DD-MM-YYYY"
                          />
                        </Form.Item>
                      </Col>
                      <Col md={4} span={24}>
                        <Form.Item label="Giới tính" name="gender">
                          <Radio.Group>
                            <Radio value={true}>Nam</Radio>
                            <Radio value={false}>Nữ</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                      <Col md={8} span={24}>
                        <Form.Item
                          label="Số điện thoại"
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Số điện thoại không được rỗng",
                            },
                          ]}
                        >
                          <Input size="large" placeholder="Số điện thoại" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={12}>
                      <Col md={8} span={24} className="mt-4">
                        <Form.Item label="Thành phố/tỉnh" name="city">
                          <Select
                            placeholder="Chọn thành phố/tỉnh"
                            size="large"
                            showSearch
                            options={cityList.map((data) => {
                              return {
                                value: data.name,
                                label: data.name,
                                code: data.code,
                              };
                            })}
                            onChange={(value, obj: any) => {
                              setCity(value);
                              getDistrictsByCity(obj.code);
                            }}
                          />
                        </Form.Item>
                      </Col>
                      <Col md={4} span={24} className="mt-4">
                        <Form.Item label="Quận/huyện" name="district">
                          <Select
                            placeholder="Chọn quận/huyện"
                            size="large"
                            showSearch
                            options={districtList.map((data) => {
                              return {
                                value: data.name,
                                label: data.name,
                                code: data.code,
                              };
                            })}
                            onChange={(value, obj: any) => {
                              setDistrict(value);
                              getWardsByDistrict(obj.code);
                            }}
                            disabled={
                              city || (patient && patient.city) ? false : true
                            }
                          />
                        </Form.Item>
                      </Col>
                      <Col md={4} span={24} className="mt-4">
                        <Form.Item label="Phường/xã" name="ward">
                          <Select
                            placeholder="Chọn phường/xã"
                            size="large"
                            showSearch
                            options={wardList.map((data) => {
                              return {
                                value: data.name,
                                label: data.name,
                                code: data.code,
                              };
                            })}
                            onChange={(value) => setWard(value)}
                            disabled={
                              district || (patient && patient.district)
                                ? false
                                : true
                            }
                          />
                        </Form.Item>
                      </Col>
                      <Col md={8} span={24} className="mt-4">
                        <Form.Item label="Số nhà và tên đường" name="street">
                          <Input
                            size="large"
                            placeholder="Số nhà và tên đường"
                            onChange={(e) => setStreet(e.target.value)}
                            disabled={
                              ward || (patient && patient.ward) ? false : true
                            }
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <div className="mt-4 mb-4 md:flex block">
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="px-6 my-2 mr-2 w-full md:w-[15%] booking justify-center"
                        style={{ backgroundColor: "#1386ED", height: 40 }}
                      >
                        Lưu thông tin
                      </Button>
                      <Button
                        htmlType="reset"
                        className="px-6 w-full md:w-[10%] my-2"
                        style={{ height: 40, borderRadius: 32 }}
                      >
                        Reset
                      </Button>
                    </div>
                  </Form>
                </TabPane>
                <TabPane tab="Thông tin tài khoản" key="2">
                  <Form
                    form={accountInfoForm}
                    className="mt-4"
                    layout="vertical"
                  >
                    <Row gutter={24}>
                      <Col md={8} span={24} className="mt-4">
                        <Form.Item label="Email" name="email">
                          <Input
                            size="large"
                            placeholder="Chưa có thông tin"
                            readOnly
                          />
                        </Form.Item>
                      </Col>
                      <Col md={4} className="mt-4 w-1/2">
                        <Form.Item label="Đổi email">
                          <Button
                            className="booking w-full justify-center"
                            style={{
                              backgroundColor: "rgb(19, 134, 237)",
                              color: "white",
                              borderColor: "white",
                              height: 40,
                            }}
                            onClick={() => setIsEmailOpen(true)}
                          >
                            Đổi email
                          </Button>
                        </Form.Item>
                        <Modal
                          open={isEmailOpen}
                          onCancel={() => {
                            changeEmailForm.resetFields();
                            setIsEmailOpen(false);
                          }}
                          okButtonProps={{ hidden: true }}
                          cancelButtonProps={{ hidden: true }}
                        >
                          <Spin tip="Đang tải..." spinning={isLoading}>
                            <div className="text-center">
                              <h5 className="text-sky-500 text-xl uppercase font-bold mb-5">
                                Đổi địa chỉ email
                              </h5>
                            </div>
                            <Form
                              form={changeEmailForm}
                              layout="vertical"
                              onFinish={handleChangeEmail}
                              validateMessages={{
                                types: {
                                  email: "Email không đúng định dạng",
                                },
                              }}
                            >
                              <Row>
                                <Col span={24} className="mt-2">
                                  <Form.Item
                                    label="Email mới"
                                    name="new_email"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Email mới không được rỗng",
                                      },
                                      {
                                        type: "email",
                                      },
                                    ]}
                                  >
                                    <Input
                                      size="large"
                                      placeholder="Email mới"
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={24} className="mt-2">
                                  <Form.Item
                                    label="Mật khẩu xác nhận"
                                    name="password"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Mật khẩu không được rỗng",
                                      },
                                    ]}
                                  >
                                    <Input.Password
                                      size="large"
                                      visibilityToggle={false}
                                      placeholder="Mật khẩu xác nhận"
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>

                              <div className="mt-6">
                                <Button
                                  htmlType="submit"
                                  type="primary"
                                  className="px-4 mr-2"
                                  style={{ backgroundColor: "#1386ED" }}
                                >
                                  Lưu thông tin
                                </Button>
                                <Button
                                  className="px-4"
                                  onClick={() => changeEmailForm.resetFields()}
                                >
                                  Reset
                                </Button>
                              </div>
                            </Form>
                          </Spin>
                        </Modal>
                      </Col>
                      <Col md={4} className="mt-4 w-1/2">
                        <Form.Item label="Đổi mật khẩu">
                          <Button
                            className="booking w-full justify-center"
                            style={{
                              backgroundColor: "rgb(19, 134, 237)",
                              color: "white",
                              borderColor: "white",
                              height: 40,
                            }}
                            onClick={() => setIsPasswordOpen(true)}
                          >
                            Đổi mật khẩu
                          </Button>
                        </Form.Item>
                        <Modal
                          open={isPasswordOpen}
                          onCancel={() => {
                            changePasswordForm.resetFields();
                            setIsPasswordOpen(false);
                          }}
                          okButtonProps={{ hidden: true }}
                          cancelButtonProps={{ hidden: true }}
                        >
                          <Spin tip="Đang tải..." spinning={isLoading}>
                            <div className="text-center">
                              <h5 className="text-sky-500 text-xl uppercase font-bold mb-5">
                                Đổi mật khẩu
                              </h5>
                            </div>
                            <Form
                              form={changePasswordForm}
                              layout="vertical"
                              onFinish={handleChangePassword}
                            >
                              <Row>
                                <Col span={24} className="mt-3">
                                  <Form.Item
                                    label="Mật khẩu hiện tại"
                                    name="current_password"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Mật khẩu hiện tại không được rỗng",
                                      },
                                    ]}
                                  >
                                    <Input.Password
                                      size="large"
                                      visibilityToggle={false}
                                      placeholder="Mật khẩu hiện tại"
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={24} className="mt-3">
                                  <Form.Item
                                    label="Mật khẩu mới"
                                    name="new_password"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Mật khẩu mới không được rỗng",
                                      },
                                    ]}
                                  >
                                    <Input.Password
                                      size="large"
                                      visibilityToggle={false}
                                      placeholder="Mật khẩu mới"
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>

                              <div className="mt-3">
                                <Button
                                  htmlType="submit"
                                  type="primary"
                                  className="px-6 mr-3"
                                  style={{ backgroundColor: "#1386ED" }}
                                >
                                  Lưu thông tin
                                </Button>
                                <Button
                                  className="px-4"
                                  onClick={() =>
                                    changePasswordForm.resetFields()
                                  }
                                >
                                  Reset
                                </Button>
                              </div>
                            </Form>
                          </Spin>
                        </Modal>
                      </Col>
                    </Row>
                  </Form>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </Spin>
    </Vertical>
  );
};

export default Account;
