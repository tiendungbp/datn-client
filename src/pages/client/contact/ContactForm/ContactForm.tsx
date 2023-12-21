import React from 'react';
import './ContactForm.scss';
const ContactForm: React.FC = () => (
	<div className="bg-[#DCEDFF] m-auto w-full my-4 py-12">
		<div className=" m-auto w-[90%]">
			<div className="text-center pb-8 ">
				<h1 className="text-[#1386ED] font-bold  text-lg md:text-[1.5rem] lg:text-[1.7rem] mb-3">
					Vị Trí Của Chúng Tôi Trên Google Maps{' '}
				</h1>
				<p className="text-[0.9rem] md:text-sm text-gray-500">
					{' '}
					Hãy cùng khám phá và tới thăm chúng tôi tại đây để trải nghiệm dịch vụ
					nha khoa chất lượng và tận hưởng nụ cười khỏe đẹp!
				</p>
			</div>
			<div className=" md:h-[50vh] h-[50vh] rounded-lg flex items-center justify-center m-auto">
				<iframe
					title="Google Maps"
					className=" w-full h-full object-cover rounded-lg shadow-lg"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53522.97506443701!2d105.77621636333734!3d21.021569763823155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6367a16f17%3A0x67abfeb7e2245dc5!2zMjM3IE5ndXnhu4VuIFThuqV0IFRow6BuaCwgUGjGsOG7nW5nIDE4LCBRdeG6rW4gNCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1698481773076!5m2!1svi!2s"
					width="600"
					height="500"
					loading="lazy"
				></iframe>
			</div>
		</div>
	</div>
);

export default ContactForm;
