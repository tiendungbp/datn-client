import { Breadcrumb, DatePicker, Input, Select, Table, Tag } from 'antd'
import { SearchProps } from 'antd/es/input/Search'
import { ColumnsType } from 'antd/es/table';
import React from 'react'


interface DataBookingProfileProp {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataBookingProfileProp> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    // render: (_, record) => (
    //   // <Space size="middle">
    //   //   <a>Invite {record.name}</a>
    //   //   <a>Delete</a>
    //   // </Space>
    // ),
  },
];

const data: DataBookingProfileProp[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const Booking_profile = () => {


  const { Search } = Input;



  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <div className='m-auto w-wd-primary md:w-wd-secondary mt-12 lg:mt-[1rem] '>
        <Breadcrumb
          className={`text-lg mb-8`}
          items={[
            {
              title: <a href="/">Trang chủ</a>,
            },
            {
              title: <p className="textColor ">Thông tin đặt lịch khám</p>,
            },
          ]}
        />
        <div className='bg-white box-shadow rounded-lg  p-8 mb-12'>
          <h1 className='text-[1.5rem] font-bold uppercase text-[#1386ED]'>QUẢN LÝ LỊCH HẸN CÁ NHÂN</h1>
          <div className='grid grid-cols-4 gap-6 my-8 search_booking_profile'>
            <div className='flex flex-col gap-1 admin_input_search_status'>
              <span>Tìm theo trạng thái</span>
              <Select
                showSearch
                style={{ width:"100%", height: '50px', background: '#DCEDFF', borderRadius: '15px' }}
                placeholder="Chọn trạng thái"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                  {
                    value: '1',
                    label: 'Đang hoạt động',
                  },
                  {
                    value: '2',
                    label: 'Ngưng hoạt động',
                  },

                ]}
              />
            </div>
            <div className='flex flex-col gap-1 admin_input_search_date'>
            <span>Tìm theo ngày hẹn </span>

            <DatePicker  format={dateFormatList}  placeholder='Tìm theo ngày hẹn'/>

            </div>
            <div className='flex flex-col gap-1 admin_input_search_phone'>
              <span>Tìm theo tên/số điện thoại </span>
              <Search
                placeholder="Nhập thông tin"
                allowClear
                enterButton="Tìm"
                size="large"
                onSearch={onSearch}
              />
            </div>

          </div>
          <div className='table_booking_profile'>
          <Table columns={columns} dataSource={data} />;

          </div>

        </div>





      </div>

    </>
  )
}

export default Booking_profile