import {
  Breadcrumb,
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Tabs,
} from "antd";
import React, { ChangeEvent, useState } from "react";

const { TabPane } = Tabs; // Import TabPane from Tabs
const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};
const Profile = () => {
  // Tab

  //modal
  const [isOpenModalEmail, setIsOpenModalEmail] = useState(false);
  const [isOpenModalPass, setIsOpenModalPass] = useState(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  // XỬ LÝ FILE IAMGE
  const [imgSrc, setImgSrc] = useState<string>("");
  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      if (file.type === "image/jpeg" || file.type === "image/png") {
        if (file.size <= 5 * 1023 * 1024) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            setImgSrc(e.target?.result as string);
          };
        } else {
          alert("Kích thước tệp quá lớn. Vui lòng chọn tẹp dưới 5MB.");
        }
      } else {
        alert("Chỉ chấp nhận tệp JPEG hoặc PNG.");
      }
    }
  };
  const handleImage = () => {
    if (imgSrc === "") {
      return <p>Chưa có ảnh</p>;
    }
    return (
      <img
        className="my-1"
        style={{ width: "100%", height: "100%" }}
        src={imgSrc}
        alt="..."
      />
    );
  };
  const handelRemoveImage = () => {
    setImgSrc("");
  };
  return (
    <>
      <div className="m-auto w-wd-primary md:w-wd-secondary mb-12 lg:mt-[1rem]">
        <Breadcrumb
          className={`text-base mb-12`}
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
          <h1 className="text-[1.5rem] font-bold uppercase text-[#1386ED] pb-4">
            QUẢN LÝ LỊCH HẸN CÁ NHÂN
          </h1>
          <div className="flex items-center mb-3 gap-5">
            <div className="w-[10rem] h-[10rem]  rounded-lg border border-[#1386ED] flex justify-center items-center overflow-hidden ">
              {handleImage()}
            </div>
            <Form.Item>
              <div className="flex items-center gap-5 ">
                <label
                  htmlFor="file-input"
                  className="bg-[#DCEDFF] font-bold border p-3 rounded-lg  border-[#1386ED] text-[#1386ED]  cursor-pointer"
                >
                  Chọn
                </label>
                <p
                  onClick={() => {
                    handelRemoveImage();
                  }}
                  className="bg-[#DCEDFF] font-bold border-[#1386ED] border p-3 rounded-lg text-[#1386ED] cursor-pointer"
                >
                  Xóa
                </p>
                <span>Kích thước tối đa 5MB (JPEG hoặc PNG)</span>
              </div>
              <input
                id="file-input"
                type="file"
                onChange={handleChangeFile}
                accept="image/jpeg,image/png"
              />
            </Form.Item>
          </div>
          <div className="tab_profile_user mt-8">
            <Tabs defaultActiveKey="1" type="card">
              <TabPane tab="Thông tin cơ bản" key="1">
                <Form className="mt-8" layout="vertical">
                  <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 profile_user_input">
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        { required: true, message: "Vui lòng nhập họ tên" },
                      ]}
                      className="w-1/3  "
                    >
                      <Input
                        className="h-[50px] bg-[#DCEDFF] "
                        placeholder="Nhập họ tên"
                      />
                    </Form.Item>
                    <div className="flex items-center gap-8">
                      <Form.Item
                        name="date-picker"
                        label="  Ngày sinh "
                        {...config}
                      >
                        <DatePicker />
                      </Form.Item>
                      <Form.Item
                        name="radio-group"
                        label="Giới tính"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn giới tính",
                          },
                        ]}
                      >
                        <Radio.Group>
                          <Radio value="male">Nam</Radio>
                          <Radio value="female">Nữ</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div>

                    <Form.Item
                      label="Số điện thoại"
                      name="phonenumber"
                      rules={[{ required: true, message: "Vui lòng nhập sdt" }]}
                      className="w-1/3  "
                    >
                      <Input
                        className="h-[50px] bg-[#DCEDFF] "
                        placeholder="Nhập SDT"
                      />
                    </Form.Item>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 profile_user_input ">
                    <Form.Item label="Thành phố/ tỉnh" className="">
                      <Select className="h-[50px] bg-[#DCEDFF]">
                        <Select.Option value="demo">DakLak</Select.Option>
                      </Select>
                    </Form.Item>
                    <div className="select_city flex flex-row gap-8 items-center">
                      <Form.Item label="Quận/huyện" className=" ">
                        <Select className="h-[50px] bg-[#DCEDFF]">
                          <Select.Option value="demo">DakLak</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Phường/xã" className="">
                        <Select className="h-[50px] ">
                          <Select.Option value="demo">DakLak</Select.Option>
                        </Select>
                      </Form.Item>
                    </div>
                    <Form.Item label="Số nhà và tên đường" className="">
                      <Input
                        placeholder="Số nhà và tên đường"
                        className="h-[50px] bg-[#DCEDFF]"
                      />
                    </Form.Item>
                  </div>
                  <div className="button_profile mt-4 mb-8  items-center  flex flex-row gap-4 ">
                    <Button type="primary" htmlType="submit">
                      Lưu thông tin
                    </Button>
                    <Button htmlType="reset" className="">
                      Reset
                    </Button>
                  </div>
                </Form>
              </TabPane>
              <TabPane tab="Thông tin tài khoản" key="2">
                <div className="py-8 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 tab_account_information ">
                  <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="ttnga@gmail.com"
                      className="input_email "
                    />
                  </div>
                  <div className="flex md:flex-row flex-col gap-4 w-full">
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                      <label>Đổi Email</label>
                      <button
                        onClick={() => setIsOpenModalEmail(true)}
                        className="button_email hover:text-[#fff] hover:bg-[#1386ED]"
                      >
                        Đổi Email
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 md:w-1/2 w-full">
                      <label>Đổi mật khẩu</label>
                      <button
                        onClick={() => setIsOpenModalPass(true)}
                        className="button_pass  hover:text-[#fff] hover:bg-[#1386ED]"
                      >
                        Đổi mật khẩu
                      </button>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>

        {/* // start show profile */}

        {/* start modal doi email */}

        <div>
          <Modal
            className="model_email_profile"
            width={600}
            open={isOpenModalEmail}
            onOk={() => setIsOpenModalEmail(false)}
            onCancel={() => setIsOpenModalEmail(false)}
          >
            <h1 className=" text-center text-[1.5rem] font-bold uppercase text-[#1386ED] py-2">
              ĐỔI ĐỊA CHỈ EMAIL
            </h1>
            <hr />
            <div className="py-8">
              <Form
                name="basic"
                layout="vertical"
                // initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  label=" Email mới"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Vui lòng nhập E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Nhập Email mới" />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu xác nhận"
                  name="password"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu!" },
                  ]}
                >
                  <Input.Password className="" placeholder="Nhập mật khẩu" />
                </Form.Item>

                <div className="button_profile mt-8   items-center  flex flex-row gap-4 ">
                  <Button type="primary" htmlType="submit">
                    Lưu thông tin
                  </Button>
                  <Button htmlType="reset" className="">
                    Reset
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
        </div>
        {/* end modal doi email */}

        {/* start modal doi pass */}

        <div>
          <Modal
            className="model_email_profile"
            width={600}
            open={isOpenModalPass}
            onOk={() => setIsOpenModalPass(false)}
            onCancel={() => setIsOpenModalPass(false)}
          >
            <h1 className=" text-center text-[1.5rem] font-bold uppercase text-[#1386ED] py-2">
              ĐỔI MẬT KHẨU
            </h1>
            <hr />
            <div className="py-8">
              <Form
                name="basic"
                layout="vertical"
                // initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label=" Mật khẩu hiện tại"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu hiện tại!",
                    },
                  ]}
                >
                  <Input.Password
                    className=""
                    placeholder="Nhập mật khẩu hiện tại"
                  />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu mới"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu hiện mới!",
                    },
                  ]}
                >
                  <Input.Password
                    className=""
                    placeholder="Nhập mật khẩu mới..."
                  />
                </Form.Item>

                <div className="button_profile mt-8   items-center  flex flex-row gap-4 ">
                  <Button type="primary" htmlType="submit">
                    Lưu thông tin
                  </Button>
                  <Button htmlType="reset" className="">
                    Reset
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
        </div>

        {/* end modal doi email */}
      </div>
    </>
  );
};

export default Profile;
