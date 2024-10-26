"use client";
import { useEffect, useState } from "react";
import { Button, Dropdown, ConfigProvider } from "antd";
import Image from "next/image";
import { IoLogOut, IoMenu } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { AllImages } from "../../../public/assets/AllImages";
import Link from "next/link";
import Container from "../ui/Container";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "@/redux/slices/authSlice";
import { toast } from "sonner";
import Cookies from "universal-cookie";

const Navbar = () => {
  const path = usePathname();
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const router = useRouter();

  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);
  console.log(isLogin);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleMobileMenuClick = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };

  const select = (index) => {
    setSelected(index);
    setMobileMenuVisible(false);
  };

  const menu = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About App",
      link: "/about-the-app",
    },
    {
      name: "Stories",
      link: "/stories",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
  ];

  const profile = [
    {
      name: "Personal information",
      link: "/profile",
    },
  ];

  const dropdownItems = menu.map((item, index) => ({
    key: String(index),
    label: (
      <Link href={item.link} key={index}>
        <Button
          className={`capitalize font-medium  w-full ${
            path === item.link ? "text-[#F3F3F3]" : "text-[#F3F3F3]"
          }`}
          style={{
            backgroundColor: "#010515",
            color: path === item.link ? "#010515" : "#010515",
          }}
          onClick={() => select(index)}
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt={item.name}
              className="inline-block mr-1 h-6 w-6 text-[#F3F3F3]"
            />
          )}
          {item.name}
        </Button>
      </Link>
    ),
  }));

  if (!isLogin) {
    dropdownItems.push({
      key: "signup",
      label: (
        <Link href="/signup">
          <Button
            className="py-5 w-full bg-secondary-color text-white border-none text-site-color font-semibold duration-200 delay-75 rounded-lg shadow-md  drop-shadow-md"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            Sign up
          </Button>
        </Link>
      ),
    });

    dropdownItems.push({
      key: "signIn",
      label: (
        <Link href="/login">
          <Button
            className="py-5 w-full text-primary-color border-none  bg-base-color hover:bg-base-color hover:text-primary-color font-bold duration-200 delay-75 shadow-md rounded-lg drop-shadow-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Sign in
          </Button>
        </Link>
      ),
    });
  } else {
    dropdownItems.push({
      key: "signIn",
      label: (
        <Button
          className="py-5 w-full bg-secondary-color text-white border-none text-site-color font-semibold duration-200 delay-75 rounded-full shadow-inner shadow-[#ffffff85]"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          Download App
        </Button>
      ),
    });
  }

  const profileItems = profile.map((item, index) => ({
    key: String(index),
    label: (
      <Link href={item.link} key={index}>
        <Button
          className={`capitalize text-start font-medium flex justify-start items-center border-none hover:text-site-color hover:bg-transparent shadow-none text-lg w-full ${
            path === item.link ? "text-[#000106]" : "text-[#000106]"
          }`}
          onClick={() => select(index)}
        >
          <FaUserCircle className="text-site-color size-6 text-secondary-color" />
          {item.name}
        </Button>
      </Link>
    ),
  }));

  profileItems.push({
    key: "signOut",
    label: (
      <Button
        onClick={() => {
          // Dispatch clearAuth to remove token and reset auth state
          // Clear cookies
          cookies.remove("mm_accessToken", { path: "/" });
          cookies.remove("mm_refreshToken", { path: "/" });
          dispatch(clearAuth());
      window.location.href = "/sign-in"
          toast.success("Sign out successfully!");

          // Set login state to false after sign-out
          setIsLogin(false);

          // Optionally, redirect the user to the homepage or login page
          // navigate("/signin"); // Use if needed
        }}
        className={`capitalize text-start font-medium flex justify-start items-center hover:bg-transparent border-none hover:text-site-color shadow-none text-lg w-full`}
      >
        <IoLogOut className="text-site-color size-6 text-secondary-color" />
        Sign out
      </Button>
    ),
  });

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-[#ffffff] shadow-lg">
      <Container>
        <div className="flex items-center justify-between py-1 ">
          <div className="flex justify-between w-full items-center">
            <Link href="/">
              <Image
                src={AllImages.logo}
                alt="logo"
                className="w-[80px] h-[80px]"
              />
            </Link>
            <div className="ml-8 hidden lg:flex gap-x-10 space-x-4">
              {menu.map((item, index) => (
                <Link href={item.link} key={index}>
                  <Button
                    className={`px-2 gap-0 cursor-pointer capitalize font-medium text-lg duration-200 hover:scale-105 shadow-none ${
                      item.link === path
                        ? "text-primary-color border-0 rounded-none border-b-2 border-b-secondary-color"
                        : "text-primary-color border-none"
                    }`}
                    style={{
                      backgroundColor: "transparent",
                      color: path === item.link ? "#ffe6b9" : "white",
                    }}
                    onClick={() => select(index)}
                  >
                    {/* {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.name}
                        className="inline-block h-6 w-6"
                      />
                    )} */}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="lg:flex items-center hidden">
              {!isLogin ? (
                <>
                  <Link href="/sign-up">
                    <Button
                      className="py-5 mx-3 bg-secondary-color text-white border-none text-site-color font-semibold duration-200 delay-75 rounded-lg shadow-md  drop-shadow-md"
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      Sign Up
                    </Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button
                      className="py-5 text-primary-color border-none mx-3 bg-base-color hover:bg-base-color hover:text-primary-color font-bold duration-200 delay-75 shadow-md rounded-lg drop-shadow-md"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Sign In
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <ConfigProvider
                    theme={{
                      components: {
                        Dropdown: {},
                      },
                    }}
                  >
                    <Dropdown
                      menu={{ items: profileItems }}
                      placement="bottomCenter"
                    >
                      <Image
                        src={AllImages.profile}
                        alt="profile_img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="xl:h-[35px] h-[30px] w-[30px] xl:w-[35px]"
                      />
                    </Dropdown>
                  </ConfigProvider>

                  <Button
                    className="py-5 px-5 mx-3 bg-secondary-color text-white border-none text-site-color font-semibold duration-200 delay-75 rounded-full shadow-inner shadow-[#ffffff85]"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    Download App
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-2 items-center lg:hidden">
            {isLogin ? (
              <ConfigProvider
                theme={{
                  components: {
                    Dropdown: {},
                  },
                }}
              >
                <Dropdown
                  menu={{ items: profileItems }}
                  placement="bottomRight"
                >
                  <Image
                    src={AllImages.profile}
                    alt="profile_img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="xl:h-[35px] h-[30px] w-[30px] xl:w-[35px]"
                  />
                </Dropdown>
              </ConfigProvider>
            ) : (
              <div></div>
            )}
            <div className="lg:hidden">
              <ConfigProvider
                theme={{
                  components: {
                    Dropdown: {
                      colorBgElevated: "#F3F3F3",
                    },
                  },
                }}
              >
                <Dropdown
                  menu={{ items: dropdownItems }}
                  placement="bottomRight"
                >
                  <Button
                    shape="circle"
                    icon={
                      <IoMenu className="h-7 w-7 items-center justify-center -mt-1  hover:text-site-color text-site-color" />
                    }
                    onClick={handleMobileMenuClick}
                  />
                </Dropdown>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
