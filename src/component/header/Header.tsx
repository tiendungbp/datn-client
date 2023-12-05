import { useEffect, useState } from "react";
import logoToothHive from "../../assets/img/ToothHive (1).png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { setUserInfo } from "../../store/managerAuth.services/userSlice";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [widthOpen, setWidthOpen] = useState<number>(
    window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  );
  const user = useSelector((state: RootState) => state.user.user);
  const Appdispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("customerRefreshToken");
    Appdispatch(setUserInfo({ user: null, login: false }));
    toast.success("Đăng xuất thành công");
    navigate("/login");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items: MenuProps["items"] = [
    {
      label: (
        <Button className="border-0 w-full mt-2 flex items-start">
          <Link to={"/quan-ly-tai-khoan"}>Quản lý tài khoản</Link>
        </Button>
      ),
      key: "0",
    },
    {
      label: (
        <Button className="border-0 w-full mt-2 flex items-start">
          <Link to={"/quan-ly-lich-hen"}>Quản lý lịch hẹn</Link>
        </Button>
      ),
      key: "1",
    },
    {
      label: (
        <Button
          onClick={handleLogout}
          className="border-0 w-full mt-2 flex items-start"
        >
          Đăng xuất
        </Button>
      ),
      key: "2",
    },
  ];

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
        box.style.height = "100vh";
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
  const isBackgroundWhite = scrollY >= 60;
  return (
    <div className="header__nav">
      <div
        className={`header__box ${
          isBackgroundWhite ? "white-background shadow" : ""
        }`}
      >
        <div className="header__box__setting">
          <div className="reponsive__logo__navbars">
            <div className="header__box1">
              <NavLink to={"/"}>
                <img src={logoToothHive} alt="logo" />
              </NavLink>
            </div>
            <div
              className="menu__nav"
              onClick={() => {
                handleSubmitMenu();
              }}
            >
              <MenuOutlined className="menu__icon__sm__ls" />
            </div>
          </div>
          <div className="box__reponsive__nav ">
            <div className="box__reponsive__nav1">
              {windowWidth < 1025 && user && (
                <div className="dropdownWelcome my-5 mx-auto lg:w-1/2">
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <Link to={"/"} onClick={(e) => e.preventDefault()}>
                      <Button
                        style={{
                          height: "43px",
                          width: "100%",
                          borderRadius: "32px",
                        }}
                      >
                        <Space className="">
                          Xin chào, {user.fullname}
                          <DownOutlined />
                        </Space>
                      </Button>
                    </Link>
                  </Dropdown>
                </div>
              )}

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
                </div>
              </div>
              <div className="header__box3">
                <NavLink to={"/dat-lich"} className="w-full">
                  <button className="booking justify-center">
                    <p>Đặt lịch</p>
                  </button>
                </NavLink>
                {windowWidth > 1025 ? (
                  <>
                    {user ? (
                      <Dropdown menu={{ items }} trigger={["click"]}>
                        <Link to={"/"} onClick={(e) => e.preventDefault()}>
                          <Button
                            style={{
                              height: "43px",
                              width: "100%",
                              borderRadius: "32px",
                            }}
                          >
                            <Space>
                              {`Xin chào, ${user.fullname}`}
                              <DownOutlined />
                            </Space>
                          </Button>
                        </Link>
                      </Dropdown>
                    ) : (
                      <NavLink to={"/login"} className="w-full">
                        <button className="booking bgBlue justify-center">
                          Đăng nhập
                        </button>
                      </NavLink>
                    )}
                  </>
                ) : (
                  <>
                    {!user && (
                      <NavLink to="/login" className="w-full">
                        <button className="booking bgBlue justify-center">
                          Đăng nhập
                        </button>
                      </NavLink>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
