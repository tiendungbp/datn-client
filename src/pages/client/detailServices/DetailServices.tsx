import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'

interface DataServiceProp {
  key: React.Key;
  name: string;
  price: string;
  guarantee: string;
  description: string;
}


const columnService: ColumnsType<DataServiceProp> = [
  {
    
    title: 'Dịch vụ',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Giá (VNĐ)',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Bảo hành',
    dataIndex: 'guarantee',
    key: 'guarantee'

    
  },
  
];

const dataService: DataServiceProp[] = [
  {
    key: '1',
    name: 'Niềng răng2',
    price: '320000',
    guarantee: '2 năm',
    description:'Đây là mô tả về dịch vụ. '
  },
  {
    key: '1',
    name: 'Niềng răng2',
    price: '320000',
    guarantee: '2 năm',
    description:'Đây là mô tả về dịch vụ. '
  },{
    key: '1',
    name: 'Niềng răng2',
    price: '320000',
    guarantee: '2 năm',
    description:'Đây là mô tả về dịch vụ. '
  },{
    key: '1',
    name: 'Niềng răng2',
    price: '320000',
    guarantee: '2 năm',
    description:'Đây là mô tả về dịch vụ. '
  },
 
];

const DetailServices = () => {
  return (
    <div className='m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[4rem]'>
      {/* nd title va mo ta cua dich vu */}
      <div className='py-8'>
        <h1  className='font-bold text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] py-2  text-[#1386ED] '>Bọc Răng Sứ</h1>
        <span className='text-1rem md <Table columns={columns} dataSource={data} size="middle" />:text-[1.1rem] lg:text-[1.2rem] leading-9'>Bọc răng sứ thẩm mỹ là kỹ thuật phục hình cố định bằng vật liệu sứ có vai trò phục hồi chức năng ăn nhai, cải thiện thẩm mỹ giúp bạn tự tin với nụ cười rạng rỡ tự nhiên. Những thắc mắc về Bọc răng sứ có đau không? Có những loại răng sứ nào? Chi phí bọc răng sứ bao nhiêu?… sẽ được giải đáp trong bài viết bên dưới.
          Bọc răng sứ thẩm mỹ là kỹ thuật phục hình cố định bằng vật liệu sứ có vai trò phục hồi chức năng ăn nhai, cải thiện thẩm mỹ giúp bạn tự tin với nụ cười rạng rỡ tự nhiên. Những thắc mắc về Bọc răng sứ có đau không? Có những loại răng sứ nào? Chi phí bọc răng sứ bao nhiêu?… sẽ được giải đáp trong bài viết bên dưới.
          Bọc răng sứ thẩm mỹ là kỹ thuật phục hình cố định bằng vật liệu sứ có vai trò phục hồi chức năng ăn nhai, cải thiện thẩm mỹ giúp bạn tự tin với nụ cười rạng rỡ tự nhiên. Những thắc mắc về Bọc răng sứ có đau không? Có những loại răng sứ nào? Chi phí bọc răng sứ bao nhiêu?… sẽ được giải đáp trong bài viết bên dưới.

        </span>
      </div>
      {/* mo ta dich vu */}
      <div className='py-8'>
       <p className='bg-pink-100'> Day la noi dung show ra du lieu phan mo ta chi tiet nhe </p>

      </div>
     
      {/* bang gia */}
      <div className='w-70% md:w-[50%] m-auto py-8'>
      <Table
    columns={columnService}
    expandable={{
      expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={dataService}
  />
        
      </div>
    </div>
  )
}

export default DetailServices