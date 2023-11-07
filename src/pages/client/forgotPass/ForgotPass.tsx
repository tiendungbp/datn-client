import { Button, Col, Form, Input, Row, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { SendLinkResetPasswordService } from '../../../store/managerAuth.services/thunkAction';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

type valueForgot = {
	role: number;
	email: string;
};

const ForgotPass = () => {
	const [forgotForm] = Form.useForm();
	const Appdispatch = useAppDispatch();
	const { messageForgot, isLoading } = useSelector(
		(state: RootState) => state.auth,
	);
	useEffect(() => {
		if (messageForgot) {
			handleSendResetLink();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [messageForgot]);
	const checkResetLink = async (values: valueForgot) => {
		await Appdispatch(
			SendLinkResetPasswordService({ role: 1, email: values.email }),
		);
	};
	const handleSendResetLink = async () => {
		const { errCode } = messageForgot;
		if (errCode === 0) {
			toast.success('Đã gửi email đặt lại mật khẩu');
			forgotForm.resetFields();
		} else if (errCode === 1) {
			toast.error('Người dùng không tồn tại');
		} else {
			toast.error('Gửi yêu cầu thất bại');
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
							Hãy nhập Email của bạn và check mail ngay sau đó!
						</span>
					</div>
					<div className="form_login">
						<Spin tip="Đang tải..." spinning={isLoading}>
							<Form
								form={forgotForm}
								layout="vertical"
								onFinish={checkResetLink}
								validateMessages={{
									types: {
										email: 'Email không đúng định dạng',
									},
								}}
							>
								<Row>
									<Col lg={24} md={24} xs={24}>
										<Form.Item
											label="Email của tài khoản cần đặt lại mật khẩu"
											name="email"
											rules={[
												{
													type: 'email',
												},
												{
													required: true,
													message: 'Email không được rỗng!',
												},
											]}
										>
											<Input size="large" placeholder="Email" />
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
										Gửi email
									</Button>
								</div>
								<div className="text-center">
									<span className="text-center">
										Bạn đã nhớ mật khẩu? Đăng nhập
										<NavLink to="/login" className="text-[#1386ED] font-bold">
											{' '}
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

export default ForgotPass;
