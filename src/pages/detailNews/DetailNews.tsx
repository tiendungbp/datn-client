import { Button, Checkbox, Divider, Form, Input, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import "./style.scss"
import Search from 'antd/es/input/Search'
import { UpOutlined } from '@ant-design/icons'

const DetailNews = () => {

  return (
    <div className='container_detailNews w-4/5 m-auto'>
      <h1 className='font-medium'>Trang chủ/Tin Tức <span className='text-blue-500'>/  Tại sao phòng khám nha khoa ToothHive...</span></h1>
      <div className='main_content flex'>
        <div className='content_leftNews mt-10 relative w-2/3'>
          <h1 className='main_h1 font-medium text-xl w-4/5'>Tại sao phòng khám nha khoa ToothHive là địa chỉ lý tưởng cho sức khỏe  răng miệng của bạn?</h1>
          <p className='text-gray-500 font-normal mt-4'>Được phát hành ngày 27/01/2023</p>
          <img className='img_news mt-5 w-4/5' src="/img/Rectangle 57.png" alt="" />
          <div className='mt-5 w-4/5'>
            <p>Phòng khám nha khoa ToothHive được coi là địa chỉ lý tưởng cho sức khỏe răng miệng của bạn vì nhiều lý do quan trọng. Đầu tiên, ToothHive có đội ngũ nha sĩ chuyên nghiệp và giàu kinh nghiệm, đảm bảo rằng bạn nhận được chất lượng dịch vụ tốt nhất. Các nha sĩ tại ToothHive không chỉ có kiến thức sâu về lĩnh vực nha khoa, mà còn luôn cập nhật những phương pháp điều trị mới nhất và công nghệ tiên tiến nhất. <br /></p>
            <p>Thứ hai, phòng khám nha khoa ToothHive cung cấp một môi trường thoải mái và thân thiện. Bạn sẽ cảm thấy yên tâm và thoải mái khi đến đây, giúp giảm căng thẳng và lo lắng khi điều trị. Các chuyên gia nha khoa tại ToothHive luôn đặt sự thoải mái của bạn lên hàng đầu, tạo điều kiện thuận lợi cho việc điều trị và chăm sóc răng miệng. <br /></p>
            <p>Thứ ba, ToothHive sử dụng các thiết bị và công nghệ hiện đại nhất để đảm bảo rằng bạn nhận được dịch vụ tốt nhất và kết quả tối ưu. Phòng khám trang bị các thiết bị chẩn đoán tiên tiến, giúp chẩn đoán chính xác và nhanh chóng. Đồng thời, các phương pháp điều trị như phục hình răng, trồng răng, tẩy trắng răng và điều trị nha chu bằng công nghệ tiên tiến đảm bảo kết quả đẹp và bền vững. <br /></p>
            <p>Cuối cùng, ToothHive cam kết đến sự hài lòng của khách hàng. Họ tận tâm lắng nghe và tư vấn cho bạn về các vấn đề liên quan đến sức khỏe răng miệng của bạn và đề xuất giải pháp phù hợp nhất. Đội ngũ nhân viên thân thiện và chuyên nghiệp sẽ tạo ra một trải nghiệm nha khoa thân thiện và đáng nhớ cho bạn. <br /></p>
            <p>Với những yếu tố trên, phòng khám nha khoa ToothHive là một địa chỉ lý tưởng để chăm sóc và duy trì sức khỏe răng miệng của bạn, đảm bảo bạn có một nụ cười khỏe mạnh và rạng rỡ.</p></div>
          <img className='img_news mt-8 w-4/5 ' src="/img/Rectangle 58.png" alt="" />
          <div className='mt-10 w-4/5'>
            <p>Ngoài những điểm mạnh đã đề cập, phòng khám nha khoa ToothHive còn có một số yếu tố khác làm nổi bật nó là địa chỉ lý tưởng cho sức khỏe răng miệng của bạn.</p>
            <p> Một trong những yếu tố đáng chú ý là ToothHive đặt mục tiêu làm việc với mọi đối tượng khách hàng, từ trẻ em đến người lớn và người cao tuổi. Đội ngũ nha sĩ tại đây có kỹ năng và kinh nghiệm để cung cấp dịch vụ nha khoa phù hợp với từng đối tượng khách hàng, đảm bảo sự thoải mái và hiệu quả trong quá trình điều trị.</p>
          </div>
          <div className='comment mt-16'>
            <h3 className='font-bold text-2xl'>2 Bình luận </h3>
            <div className='box_comment mt-10 '>
              <div className='bg-slate-100 pl-7 pt-8 pb-12 w-4/5 rounded-lg '>
                <div className='flex items-center gap-7'>
                  <img className='rounded-md' src="/img/testimonial_thumbnail_1.jpg.png" alt="" />
                  <div>
                    <h3 className='font-semibold'>Trần Thị Nga</h3>
                    <p className='text-gray-500'>January 27, 2023</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='font-semibold'>Phản hồi </p>
                    <img className='w-4' src="/img/icon_feebback.png" alt="" />
                  </div>
                </div>
                <p className='mt-5 text-sm'>Dịch vụ tại ToothHive rất tốt nhé! Và rất nhiệt tình với khách hàng nữa nhen mọi người ơi <br />😍🥰</p>
              </div>
              <div className='box_comment_item1 bg-slate-100 pl-7 pt-8 pb-12 mt-7 ml-10 w-4/5 rounded-lg'>
                <div className='flex items-center gap-7'>
                  <img className='rounded-md' src="/img/testimonial_thumbnail_1.jpg.png" alt="" />
                  <div>
                    <h3 className='font-semibold'>Trần Thị Nga</h3>
                    <p className='text-gray-500'>January 27, 2023</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='font-semibold'>Phản hồi </p>
                    <img className='w-4' src="/img/icon_feebback.png" alt="" />
                  </div>
                </div>
                <p className='mt-5 text-sm'>Dịch vụ tại ToothHive rất tốt nhé! Và rất nhiệt tình với khách hàng nữa nhen mọi người ơi <br />😍🥰</p>
              </div>
              <div className='bg-slate-100 pl-7 pt-8 pb-12 mt-7 w-4/5 rounded-lg'>
                <div className='flex items-center gap-7'>
                  <img className='rounded-md' src="/img/testimonial_thumbnail_1.jpg.png" alt="" />
                  <div>
                    <h3 className='font-semibold'>Trần Thị Nga</h3>
                    <p className='text-gray-500'>January 27, 2023</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='font-semibold'>Phản hồi </p>
                    <img className='w-4' src="/img/icon_feebback.png" alt="" />
                  </div>
                </div>
                <p className='mt-5 text-sm'>Dịch vụ tại ToothHive rất tốt nhé! Và rất nhiệt tình với khách hàng nữa nhen mọi người ơi <br />😍🥰</p>
              </div>
            </div>
            <h1 className='font-bold text-2xl mt-14'>Để lại một câu trả lời</h1>
            <div className='form_feebback'>
              <Form

                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ width: 670 }}
              >
                <div className='content_comment'>
                  <Form.Item
                    labelCol={{ span: 24 }} // Set labelCol to span the full width
                    wrapperCol={{ span: 24 }}
                    label="Nội dung bình luận">
                    <TextArea className='content_comment' rows={9} />
                  </Form.Item>
                </div>

                <div className='input_comment flex gap-7'>
                  <Form.Item
                    labelCol={{ span: 24 }} // Set labelCol to span the full width
                    wrapperCol={{ span: 24 }}
                    label="Họ tên"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input className='input_comment' size='large' placeholder='Nhập tên' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 24 }} // Set labelCol to span the full width
                    wrapperCol={{ span: 24 }}
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input className='input_comment' size='large' placeholder='Nhập Email' />
                  </Form.Item>
                </div>


                <Form.Item
                  name="remember"
                  valuePropName="checked"

                >
                  <Checkbox className='checkbox_comment'>Lưu tên, email và trang web của tôi trong trình duyệt này cho lần tôi bình luận tiếp theo</Checkbox>
                </Form.Item>
                <div className='btn_comment'>
                  <Form.Item >
                    <Button className='btn_comment bg-blue-600 rounded-3xl py-3 pb-10 text-lg font-semibold text-white' type="primary" htmlType="submit">
                      Gửi bình luận
                    </Button>
                  </Form.Item>
                </div>

              </Form>
            </div>

          </div>
        </div>
        <div className='content_rightNews w-1/3 mt-12'>
          <Space direction="vertical">
            <Search className='search_News' size='large' placeholder="Tìm kiếm tin tức..." allowClear />
          </Space>
          <h1 className='text-2xl font-semibold mt-10'>Dịch vụ tại ToothHive</h1>
          <div className='grid grid-cols-1 gap-3 mt-5 '>
            <div className='flex items-center justify-between'>
              <div className='flex gap-5'>
                <input type="checkbox" /><p className='font-normal text-lg '>Niềng răng</p>
              </div>
              <p className='font-normal text-lg'>(18)</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex gap-5'>
                <input type="checkbox" /><p className='font-normal text-lg '>Nhổ răng</p>
              </div>
              <p className='font-normal text-lg'>(11)</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex gap-5'>
                <input type="checkbox" /><p className='font-normal text-lg '>Trám răng</p>
              </div>
              <p className='font-normal text-lg'>(10)</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex gap-5'>
                <input type="checkbox" /><p className='font-normal text-lg '>Trồng răng</p>
              </div>
              <p className='font-normal text-lg'>(8)</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex gap-5'>
                <input type="checkbox" /><p className='font-normal text-lg '>Tẩy trắng răng</p>
              </div>
              <p className='font-normal text-lg'>(4)</p>
            </div>
          </div>
          <Divider className='dash bg-slate-200'></Divider>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold text-2xl'>Các bài viết liên quan </h2><UpOutlined className='float-right' />
          </div>
          <div className='flex gap-5 mt-7'>
            <img className='rounded-lg' src="/img/blog_small_img_3.jpg.png" alt="" />
            <div>
              <h4 className='font-medium text-xl'>5 Dịch Vụ Nổi Bật Tại Phòng Khám Nha Khoa Để Có...</h4>
              <p className='text-sm'>Để có được một hàm răng đẹp rạng ngời tại Tooth...</p>
              <p className='text-sm font-normal text-gray-300'>October 12, 2023</p>
            </div>
          </div>
          <div className='flex gap-5 mt-7'>
            <img className='rounded-lg' src="/img/blog_small_img_3.jpg (1).png" alt="" />
            <div>
              <h4 className='font-medium text-xl'>5 Dịch Vụ Nổi Bật Tại Phòng Khám Nha Khoa Để Có...</h4>
              <p className='text-sm'>Để có được một hàm răng đẹp rạng ngời tại Tooth...</p>
              <p className='text-sm font-normal text-gray-300'>October 12, 2023</p>
            </div>
          </div>
          <div className='flex gap-5 mt-7'>
            <img className='rounded-lg' src="/img/blog_small_img_3.jpg (2).png" alt="" />
            <div>
              <h4 className='font-medium text-xl'>5 Dịch Vụ Nổi Bật Tại Phòng Khám Nha Khoa Để Có...</h4>
              <p className='text-sm'>Để có được một hàm răng đẹp rạng ngời tại Tooth...</p>
              <p className='text-sm font-normal text-gray-300'>October 12, 2023</p>
            </div>
          </div>
          <Divider className='dash mt-10 bg-slate-200'></Divider>

        </div>
      </div>
    </div>
  )
}

export default DetailNews