import React, { useEffect, useRef, useState } from "react";
import logoToothHive from "../../asset/image/ToothHive (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [widthOpen, setWidthOpen] = useState<number>(
    window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  );

  const [scrollY, setscrollY] = useState<number>(0);

  const handleSubmitMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY: number = window.scrollY;
    setscrollY(currentScrollY);
  };
  useEffect(() => {
    const handleResize = () => {
      const currentWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      setWidthOpen(currentWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    const box = document.querySelector(
      ".box__reponsive__nav"
    ) as HTMLElement | null;

    if (box) {
      if (isMenuOpen) {
        box.style.height = "600px";
      } else {
        box.style.height = "0px";
      }
      if (widthOpen >= 1080) {
        box.style.height = "";
      } else {
        if (!isMenuOpen) {
          box.style.height = "0px";
        }
      }
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, widthOpen]);
  const isBackgroundWhite = scrollY >= 90;
  return (
    <div className="header__nav">
      <div
        className={`header__box ${isBackgroundWhite ? "white-background shadow" : ""}`}
      >
        <div className="header__box__setting">
          <div className="reponsive__logo__navbars">
            <div className="header__box1">
              <img src={logoToothHive} alt="logo" />
            </div>
            <div
              className="menu__nav"
              onClick={() => {
                handleSubmitMenu();
              }}
            >
              <FontAwesomeIcon className="menu__icon__sm__ls" icon={faBars} />
            </div>
          </div>
          <div className="box__reponsive__nav">
            <div className="box__reponsive__nav1">
              <div className="header__box2">
                <div className="header__box2__notification">
                  <div className="box__text">
                    <p
                      onClick={() => {
                        handleSubmitMenu();
                      }}
                    >
                      <NavLink to={"/"}>Trang chủ</NavLink>
                    </p>
                  </div>
                  <div className="box__text">
                    <p
                      onClick={() => {
                        handleSubmitMenu();
                      }}
                    >
                      <NavLink to={"/services"}>Dịch vụ</NavLink>
                    </p>
                  </div>
                  <div className="box__text">
                    <p
                      onClick={() => {
                        handleSubmitMenu();
                      }}
                    >
                      <NavLink to={"/priceList"}>Bảng giá</NavLink>
                    </p>
                  </div>
                  <div className="box__text">
                    <p
                      onClick={() => {
                        handleSubmitMenu();
                      }}
                    >
                      <NavLink to={"/introduce"}>Giới thiệu</NavLink>
                    </p>
                  </div>
                  <div className="box__text">
                    <p
                      onClick={() => {
                        handleSubmitMenu();
                      }}
                    >
                      <NavLink to={"/contact"}>Liên hệ</NavLink>
                    </p>
                  </div>
                  <div className="box__text">
                    <p
                      onClick={() => {
                        handleSubmitMenu();
                      }}
                    >
                      <NavLink to={"/news"}>Tin tức</NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="header__box3">
                <button className="booking">Đặt lich</button>
                <button className="booking">Đăng nhập</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
