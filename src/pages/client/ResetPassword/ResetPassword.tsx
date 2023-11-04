import { Button, Col, Form, Input, Row, Spin } from 'antd';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import {
	ResetPasswordService,
} from '../../../store/managerAuth.services/thunkAction';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Horizontal } from '../../../utils/AnimatedPage';
import CommonUtils from '../../../utils/commonUtils';

type valueReset = {
	user_id: string;
	token: string;
	password: string;
};

const ResetPassword = () => {
	const Appdispatch = useAppDispatch();
	const navigate = useNavigate();
	const [isExpired, setIsExpired] = useState(false);
	const [form] = Form.useForm();
	const { user_id, token } = useParams();
	const { messageReset, isLoading } = useSelector(
		(state: RootState) => state.auth,
	);
	useEffect(() => {
		if (messageReset) {
			handleResetPassword();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [messageReset]);
	const checkResetPassword = async (values: valueReset) => {
		const resultCheckPassword = CommonUtils.checkPasswordLength(
			values.password,
		);
    const data:valueReset={
      user_id: user_id as string,
      token: token as string,
      password: values.password as string,
    }
		if (resultCheckPassword) {
			await Appdispatch(ResetPasswordService(data));
		} else {
			toast.error('Mật khẩu cần có độ dài 6 - 20 ký tự');
		}
	};
	const handleResetPassword = async () => {
		const { errCode } = messageReset;
			if (errCode === 0) {
				toast.success('Đặt mật khẩu mới thành công');
				form.resetFields();
				setTimeout(() => navigate('/login'), 1500);
			} else if (errCode === 1 || errCode === 2) {
				navigate('/login');
			} else if (errCode === 7) {
				toast.error('Đã hết thời gian, hãy gửi yêu cầu mới');
				setIsExpired(true);
			} else {
				toast.error('Gửi yêu cầu thất bại'); //errCode === 5
			}
	};
	return (
		<div>
			<div className="w-full flex flex-col md:flex-row items-start">
				<div className="relative w-[40%] h-screen flex flex-col bg-pink-200 md:block">
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
					<div className="py-8">
						<h1 className=" text-2xl md:text-3xl font-bold tracking-wide leading-loose whitespace-nowrap">
							Quên mật khẩu với Tooth
							<span className="text-[#1386ED]">Hive</span>
						</h1>
						<span className="font-light text-gray-500 mt-2">
							Hãy nhập Email của bạn và checkmail ngay sau đó!
						</span>
					</div>
					<div className="form_login">
						<Horizontal>
							<Spin tip="Đang tải..." spinning={isLoading}>
								<Form
									form={form}
									layout="vertical"
									onFinish={checkResetPassword}
								>
									<Row>
										<Col lg={24} md={24} xs={24}>
											<Form.Item
												label="Mật khẩu mới"
												name="password"
												rules={[
													{
														required: true,
														message: 'Mật khẩu mới không được rỗng',
													},
												]}
											>
												<Input.Password
													size="large"
													placeholder="Mật khẩu"
													visibilityToggle={false}
												/>
											</Form.Item>
										</Col>
									</Row>

									<div className="my-4">
										<Button
											htmlType="submit"
											type="primary"
											className="px-5 w-full"
											style={{ backgroundColor: '#1386ED' }}
										>
											Lưu thông tin
										</Button>
									</div>
									<div className="mt-3" hidden={isExpired ? false : true}></div>
								</Form>
							</Spin>
						</Horizontal>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
