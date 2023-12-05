import React, { useEffect, useState } from "react";
import logoToothHive from "../../assets/img/ToothHive (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { getAllCategory } from "../../services/managerCategory";
import { getAllCategoryStore } from "../../store/managerCategory.services/thunkAction";
const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuOpen1, setIsMenuOpen1] = useState<boolean>(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState<boolean>(false);
  const handleSubmitMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSubmitMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };
  const handleSubmitMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };
  useEffect(() => {
    const box = document.querySelector(
      ".box__content__footee"
    ) as HTMLElement | null;
    const box1 = document.querySelector(
      ".box__content__footee1"
    ) as HTMLElement | null;
    const box2 = document.querySelector(
      ".box__content__footee2"
    ) as HTMLElement | null;
    const iconDown = document.querySelector(
      ".icon__footer__down"
    ) as HTMLElement;
    const iconDown1 = document.querySelector(
      ".icon__footer__down1"
    ) as HTMLElement;
    const iconDown2 = document.querySelector(
      ".icon__footer__down2"
    ) as HTMLElement;
    if (box) {
      if (isMenuOpen) {
        iconDown.style.transform = "rotate(180deg)";
        box.style.height = "170px";
      } else {
        iconDown.style.transform = "rotate(0deg)";
        box.style.height = "34px";
      }
    }
    if (box1) {
      if (isMenuOpen1) {
        iconDown1.style.transform = "rotate(180deg)";
        box1.style.height = "170px";
      } else {
        iconDown1.style.transform = "rotate(0deg)";
        box1.style.height = "34px";
      }
    }
    if (box2) {
      if (isMenuOpen2) {
        iconDown2.style.transform = "rotate(180deg)";
        box2.style.height = "260px";
      } else {
        iconDown2.style.transform = "rotate(0deg)";
        box2.style.height = "34px";
      }
    }
  });

  const Appdispatch = useAppDispatch();
  const { listCategoryActive } = useSelector(
    (state: RootState) => state.managerCategory
  );

  const [arrCategoryActive, setArrCategoryActive] = useState<getAllCategory[]>(
    []
  );
  console.log("arrCategoryActive: ", arrCategoryActive);

  useEffect(() => {
    const fetchData = async () => {
      await Appdispatch(getAllCategoryStore());
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (listCategoryActive) {
      const newCategoryList = listCategoryActive.data.slice(0, 4);
      setArrCategoryActive(newCategoryList);
    }
  }, [listCategoryActive]);

  return (
    <div className="footer__client__toothHive">
      <div className="footer__client__toothHive__Behine">
        <div className="first__footer">
          <div
            className="title__first__footer"
            style={{ fontWeight: "bolder" }}
          >
            <p>
              Nụ Cười Hoàn Hảo <br /> Với Tooth Hive
            </p>
          </div>
          <div className="btn__first__footer">
            <NavLink to={"/contact"} className="w-full">
              <button className="booking justify-center">
                <p>Liên hệ tư vấn</p>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="content__footer pb-3">
          <div className="box__content__footeer">
            <div className="box__content__footer1__logo">
              <img src={logoToothHive} alt="logo" />
            </div>
            <div className="box__content__footer1">
              <p>
                Tooth Hive - Nơi tạo nên nụ cười đẹp và khỏe mạnh hàng đầu. Với
                đội ngũ chuyên gia nha khoa tận tâm và trang bị công nghệ tiên
                tiến, chúng tôi cam kết mang đến cho bạn dịch vụ nha khoa chất
                lượng vượt trội. Hãy đến với chúng tôi và khám phá sự hoàn hảo
                cho nụ cười của bạn.
              </p>
            </div>
          </div>
          <div className="box__content__footee">
            <div
              className="box__content__footer1__first"
              onClick={() => {
                handleSubmitMenu();
              }}
            >
              <p className="first__title__footer">Về chúng tôi</p>
              <FontAwesomeIcon
                className="icon__footer__down"
                icon={faAngleDown}
              />
            </div>
            <div className="box__content__footer1">
              <NavLink to={"/introduce"} className="w-full">
                <p>Giới thiệu</p>
              </NavLink>
            </div>
            <div className="box__content__footer1">
              <NavLink to={"/contact"} className="w-full">
                <p>Liên hệ</p>
              </NavLink>
            </div>
            <div className="box__content__footer1">
              <NavLink to={"/services"} className="w-full">
                <p>Dịch vụ</p>
              </NavLink>
            </div>
            <div className="box__content__footer1">
              <NavLink to={"/services"} className="w-full">
                <p>Đội ngũ bác sĩ</p>
              </NavLink>
            </div>
          </div>
          <div className="box__content__footee1">
            <div
              className="box__content__footer1__first"
              onClick={() => {
                handleSubmitMenu1();
              }}
            >
              <p className="first__title__footer">Dịch vụ</p>
              <FontAwesomeIcon
                className="icon__footer__down1"
                icon={faAngleDown}
              />
            </div>
            <div>
              {arrCategoryActive &&
                arrCategoryActive.map((item, index) => (
                  <div key={index} className="box__content__footer1">
                    <NavLink
                      to={`/detailServices/${item.category_id}`}
                      className="w-full"
                    >
                      <p>
                        {item.category_name.charAt(0).toUpperCase() +
                          item.category_name.slice(1)}
                      </p>
                    </NavLink>
                  </div>
                ))}
            </div>
          </div>
          <div className="box__content__footee2">
            <div
              className="box__content__footer1__first"
              onClick={() => {
                handleSubmitMenu2();
              }}
            >
              <p className="first__title__footer">Liên hệ trực tiếp</p>
              <FontAwesomeIcon
                className="icon__footer__down2 "
                icon={faAngleDown}
              />
            </div>
            <div className="box__content__footer1">
              <PhoneOutlined
                className="text-white mr-2"
                style={{ transform: "rotate(100deg)" }}
              />
              <p>(+84) 0975 383 290</p>
            </div>
            <div className="box__content__footer1">
              <MailOutlined className="text-white mr-2" />{" "}
              <p>toothhive@gmail.com</p>
            </div>
            <div className="box__content__footer1">
              <EnvironmentOutlined className="text-white mr-2" />
              <div>
                <p>Địa chỉ: 237 Nguyễn Tất Thành, Quận 4, Tp.HCM </p>
              </div>
            </div>
          </div>
        </div>
        <div className="the__end__footer">
          <div className="box__the__footer">
            <p className="text-white">
              @ 2022 ToothHive - Nụ cười hoàn hảo và sức khỏe răng miệng hàng
              đầu
            </p>
          </div>
          <div className="box__the__footer">
            <Link to={"https://www.facebook.com/nhakhoatoothhive"}>
              <FacebookOutlined className="text-2xl" />
            </Link>

            <YoutubeOutlined className="text-2xl" />
            <MailOutlined className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
