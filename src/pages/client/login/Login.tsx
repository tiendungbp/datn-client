import { Button, Form, Input, Spin } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { loginService } from "../../../store/managerAuth.services/thunkAction";
import { toast } from "react-toastify";
import { setUserInfo } from "../../../store/managerAuth.services/userSlice";
import Cookies from "js-cookie";
import { clearMessageAuth } from "../../../store/managerAuth.services/slice";
type FieldType = {
  username?: string;
  password?: string;
};

const Login = () => {
  const { message, isLoading } = useSelector((state: RootState) => state.auth);
  const Appdispatch = useAppDispatch();
  const [loginForm] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    if (message) {
      handleLogin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  const checkLogin = async (values: FieldType) => {
    await Appdispatch(loginService(values));
  };
  //XỬ LÝ ĐĂNG NHẬP
  const handleLogin = async () => {
    const { errCode, type } = message;
    if (errCode === 0) {
      loginForm.resetFields();
      const { refresh_token, ...data } = message.data;
      const action = setUserInfo({ user: data, login: true });
      Appdispatch(action);
      Cookies.set("customerRefreshToken", message.data.refresh_token);
      navigate("/");
      toast.success("Đăng nhập thành công");
    } else if (errCode === 4) {
      toast.error("Tài khoản chưa xác minh email");
    } else if (errCode === 2 && type === "email") {
      toast.error("Sai địa chỉ email");
    } else if (errCode === 2 && type === "password") {
      toast.error("Sai mật khẩu");
    } else if (errCode === 8) {
      toast.error("Tài khoản đã bị khóa");
    } else {
      toast.error("Đăng nhập thất bại");
    }
    Appdispatch(clearMessageAuth());
  };

  return (
    <div>
      <div className="w-full  flex flex-col md:flex-row items-start">
        <div className="relative  w-[40%] h-screen flex flex-col bg-pink-200 md:block hidden">
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
        <div
          className=" w-full md:w-[60%] h-full flex flex-col p-8 md:p-16 lg:p-20 xl:p-[6rem] bg-white"
          style={{ height: "100vh" }}
        >
          <h1 className=" text-lg md:text-3xl font-bold tracking-wide leading-loose whitespace-nowrap">
            Đăng nhập tới Tooth<span className="text-[#1386ED]">Hive</span>
          </h1>
          <span className="font-light text-gray-500 mt-2 md:text-base text-sm">
            Đăng nhập vào tài khoản của bạn
          </span>
          <div className="form_login mt-8">
            <Spin spinning={isLoading}>
              <Form
                form={loginForm}
                layout="vertical"
                onFinish={checkLogin}
                validateMessages={{
                  types: {
                    email: "Email không đúng định dạng",
                  },
                }}
              >
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                    },
                    {
                      required: true,
                      message: "Email không được để trống!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Email" />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không được để trống!",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Mật khẩu"
                    visibilityToggle={false}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="booking justify-center"
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
                <div className="flex justify-evenly">
                  <div className="flex justify-around w-1/2 md:hidden">
                    <div className=" mb-4 ">
                      <Link to={"/"} className="text-sky-600 font-bold">
                        Về trang chủ
                      </Link>
                    </div>
                    <div>|</div>
                  </div>
                  <div className=" mb-4">
                    <Link to={"/forgot"} className="text-sky-600 font-bold">
                      Quên mật khẩu
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-center">
                    Bạn chưa có tài khoản? Đăng ký
                    <NavLink
                      to="/register"
                      className="text-[#1386ED] font-bold"
                    >
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
export default Login;
