import IconGg from "../../../assets/icons/google.svg";
import IconFace from "../../../assets/icons/facebook.png";
import { Button, Form, Input, Spin } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store";
import { loginService } from "../../../store/managerAuth.services/thunkAction";
import { toast } from "react-toastify";

type FieldType = {
  username?: string;
  password?: string;
};

const Login = (props: any) => {
  const location = useLocation();
  const { state } = location;
  if (state) {
    const { from, error } = state;
  }

  const { message, isLoading } = useSelector((state: RootState) => state.auth);
  console.log(message, isLoading);
  const Appdispatch = useAppDispatch();
  const [loginForm] = Form.useForm();
  useEffect(() => {
    if (message) {
      handleLogin(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  const checkLogin = async (values: FieldType) => {
    await Appdispatch(loginService(values));
  };
  const handleLogin = async (values: any) => {
    const { errCode, type } = message;
    if (errCode === 0) {
      toast.success("Đăng nhập thành công");
      loginForm.resetFields();
      const { refresh_token, ...data } = message.data;
      console.log(refresh_token, data);
      // const action = setUserInfo({ user: data, login: true });
      // dispatch(action);
      // dispatch(setLoginOpen(false));
      // Cookies.set('customerRefreshToken', message.data.refresh_token);
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
            Đăng nhập tới Tooth<span className="text-[#1386ED]">Hive</span>
          </h1>
          <span className="font-light text-gray-500 mt-2">
            Đăng nhập vào tài khoản của bạn
          </span>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <button className="py-4 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex gap-4 justify-center items-center">
                <img src={IconGg} className="w-5" alt="" />
                <span className=" font-medium tracking-wide text-sm text-[#1386ED]">
                  {" "}
                  Đăng nhập với Google
                </span>
              </div>
            </button>
            <button className="py-4 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex gap-4 items-center justify-center">
                <img src={IconFace} className="w-5" alt="" />

                <span className="font-medium tracking-wide text-sm text-[#1386ED]">
                  {" "}
                  Đăng nhập với Facebook
                </span>
              </div>
            </button>
          </div>

          <div className="flex justify-between items-center pt-6">
            <hr className="w-full border-gray-400" />
            <span className="px-4 font-light tracking-wider text-gray-500">
              Hoặc
            </span>
            <hr className="w-full border-gray-400" />
          </div>
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
                <Form.Item
                // wrapperCol={{ offset: 8, span: 16 }}
                >
                  <Button type="primary" htmlType="submit">
                    Đăng nhập
                  </Button>
                </Form.Item>
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
