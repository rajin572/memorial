"use client";
import { useEffect, useState } from "react";
import { Button, Dropdown, ConfigProvider } from "antd";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { AllImages } from "../../../public/assets/AllImages";
import Link from "next/link";
import Container from "../ui/Container";

const Navbar = () => {
  const path = usePathname();
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  if (path === "/") {
    dropdownItems.push({
      key: "signup",
      label: (
        <Link href="/signup">
          <Button
            className="text-[#010515] border-[#010515] mt-3  w-full"
            style={{
              color: "white",
              backgroundColor: hovered2 ? "#97C6EA" : "#97C6EA",
              border: "1px solid #97C6EA",
            }}
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
            className="text-[#F3F3F3] border-[#F3F3F3] w-full"
            style={{
              color: "white",
              backgroundColor: hovered ? "#010515" : "#010515",
              border: "1px solid #F3F3F3",
            }}
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
        <Link href="/sign-in">
          <Button
            className="w-full text-base py-3 text-white border-secondary-color bg-transparent border hover:bg-secondary-color hover:text-black font-bold duration-200 delay-75"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Sign Out
          </Button>
        </Link>
      ),
    });
  }

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-base-color shadow-lg">
      <Container>
        <div className="flex items-center justify-between py-1 ">
          <div className="flex justify-between w-full items-center">
            <Link href="/">
              <Image
                src={AllImages.logo}
                alt="logo"
                className="w-[150px] h-[70px]"
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
              {path === "/" ? (
                <>
                  <Link href="/sign-up">
                    <Button
                      className="py-5 mx-3 bg-secondary-color text-white border-none text-site-color font-semibold duration-200 delay-75"
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      Sign Up
                    </Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button
                      className="py-5 text-black border-secondary-color mx-3 bg-transparent border hover:bg-secondary-color hover:text-white font-bold duration-200 delay-75"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Sign In
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/profile">
                    <Image
                      src={AllImages.user}
                      alt="profile_img"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-[35px] w-[35px]"
                    />
                  </Link>
                  <Link href="/">
                    <Button
                      className=" text-base py-5 mx-2 bg-secondary-color border-none text-site-color font-bold shadow-inner shadow-[#00000040] duration-200 delay-75"
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      Sign Out
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-2 items-center lg:hidden">
            <Link href="/profile">
              <Image
                src={AllImages.user}
                alt="profile_img"
                width={0}
                height={0}
                sizes="100vw"
                className="h-[35px] w-[40px]"
              />
            </Link>
            <div className="lg:hidden">
              <ConfigProvider
                theme={{
                  components: {
                    Dropdown: {
                      colorBgElevated: "rgb(1,5,21)",
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
