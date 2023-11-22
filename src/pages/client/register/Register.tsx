import { Button, Col, DatePicker, Form, Input, Radio, Row, Spin } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { RootState, useAppDispatch } from "../../../store";
import { useEffect, useState } from "react";
import CommonUtils from "../../../utils/commonUtils";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { registerService } from "../../../store/managerAuth.services/thunkAction";
const Register = () => {
  const { messageRegister } = useSelector((state: RootState) => state.auth);

  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const Appdispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (messageRegister) {
      const { errCode, type } = messageRegister;
      if (errCode === 0) {
        toast.success("Bạn cần xác minh đăng ký qua email");
        form.resetFields();
        navigate("/login");
      } else if (errCode === 2 && type === "phone") {
        toast.error("Số điện thoại đã tồn tại");
      } else if (errCode === 2 && type === "email") {
        toast.error("Email đã tồn tại");
      } else {
        toast.error("Đăng ký thất bại"); //errCode === 5
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageRegister]);
  const handleSubmit = (values: any) => {
    let resultCheckPhone = CommonUtils.checkPhoneNumber(values.phone);
    let resultCheckPassword;

    if (resultCheckPhone) {
      resultCheckPassword = CommonUtils.checkPasswordLength(values.password);
      if (resultCheckPassword) {
        Swal.fire({
          title: "Xác nhận đăng ký?",
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
              registerService({
                fullname: values.fullname,
                dob: values.dob,
                gender: values.gender,
                phone: values.phone,
                email: values.email,
                password: values.password,
              })
            );
            setIsLoading(false);
          }
        });
      } else {
        toast.error("Mật khẩu cần có độ dài 6 - 20 ký tự");
      }
    } else {
      toast.error("Số điện thoại không hợp lệ");
    }
  };
  return (
    <div>
      <div className="w-full  flex flex-col md:flex-row items-start">
        <div className="relative  w-[40%] h-screen flex flex-col bg-pink-200 hidden md:block">
          <img
            src="https://i.pinimg.com/564x/f2/b4/fa/f2b4fa6132ec15d5d7457045fe9678ef.jpg"
            alt=""
            className="w-full h-full object-cover brightness-50"
          />

          <div className="absolute top-[25%] left-[10%] flex flex-col">
            <h1 className=" text-white text-2xl lg:text-3xl  font-bold">
              Chào mừng bạn đến với Tooth
              <span className="text-[#1386ED]">Hive</span>
            </h1>
            <span className="text-white py-4 lg:text-[1rem]">
              Nơi mang đến cho bạn trải nghiệm dịch vụ tuyệt hảo cho nụ cười
              hoàn hảo.
            </span>
            <div className="flex items-center gap-2 mt-4">
              <div className="bg-blue-50 px-6  py-3 rounded-lg text-[#1386ED] border-blue-600 ">
                <FontAwesomeIcon icon={faShare} className="pr-2" />

                <NavLink to="/">Quay về trang chủ</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[60%] h-full flex flex-col p-8 md:p-16 lg:p-20 xl:p-[6rem] bg-white">
          <h1 className=" text-2xl md:text-3xl font-bold tracking-wide leading-loose whitespace-nowrap">
            Đăng ký tài khoản Tooth<span className="text-[#1386ED]">Hive</span>
          </h1>
          <span className="font-light text-gray-500 mt-2">
            Đăng ký tài khoản để trở thành một thành viên của ToothHive
          </span>

          <div className="form_login mt-8">
            <Spin spinning={isLoading} tip="Đang tải">
              <Form
                form={form}
                layout="vertical"
                initialValues={{ gender: 1 }}
                onFinish={handleSubmit}
                validateMessages={{
                  types: {
                    email: "Email không đúng định dạng",
                  },
                }}
              >
                <Row>
                  <Col span={24} className="mt-3">
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
                </Row>
                <Row gutter={24}>
                  <Col span={12} className="mt-3">
                    <Form.Item
                      label="Ngày sinh"
                      name="dob"
                      rules={[
                        {
                          required: true,
                          message: "Ngày sinh không được rỗng",
                        },
                      ]}
                    >
                      <DatePicker
                        size="large"
                        className="w-full"
                        placeholder="Ngày sinh"
                        format="DD-MM-YYYY"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12} className="mt-3">
                    <Form.Item label="Giới tính" name="gender">
                      <Radio.Group>
                        <Radio value={1}>Nam</Radio>
                        <Radio value={0}>Nữ</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} className="mt-3">
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
                <Row>
                  <Col span={24} className="mt-3">
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        {
                          type: "email",
                        },
                        {
                          required: true,
                          message: "Email không được rỗng!",
                        },
                      ]}
                    >
                      <Input placeholder="Nhập Email" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} className="mt-3">
                    <Form.Item
                      label="Mật khẩu"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Mật khẩu không được rỗng!",
                        },
                      ]}
                    >
                      <Input.Password
                        size="large"
                        placeholder="Mật khẩu (6 - 20 ký tự)"
                        visibilityToggle={false}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <div className="pt-4 mb-4">
                  <Button
                    htmlType="submit"
                    type="primary"
                    className="px-5 mr-3 my-3 w-full"
                    style={{ backgroundColor: "#1386ED" }}
                  >
                    Đăng ký
                  </Button>
                  <Button htmlType="reset" className="px-5 w-full">
                    Reset
                  </Button>
                </div>
                <div className="text-center">
                  <span className="text-center">
                    Bạn đã có tài khoản? Đăng nhập
                    <NavLink to="/login" className="text-[#1386ED] font-bold">
                      {" "}
                      tại đây!
                    </NavLink>
                  </span>
                </div>
              </Form>
            </Spin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
