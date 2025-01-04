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
import { DownOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar")
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
  
  const [language, setLanguage] = useState("en");

  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);
  console.log(isLogin);

  useEffect(() => {
    const locale = cookies.get("NEXT_LOCALE");
    console.log({ locale });
    setLanguage(locale);
  }, []);

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

  // const handleLanguageChange = (lang) => {
  //   console.log("handleLanguageChange called with:", lang);
  //   console.log("Current language:", language);

  //   if (lang !== language) {
  //     setLanguage(lang);
  //     cookies.set("NEXT_LOCALE", lang, { path: "/", sameSite: "strict" });
  //     router.refresh();
  //     window.location.reload();
  //     // router.refresh();
  //     // router.reload();
  //   }
  // };


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
      name: t("nav1"), 
      link: "/home",
    },
    {
      name: t("nav2"),
      link: "/about-the-app",
    },
    {
      name: t("nav3"),
      link: "/stories",
    },
    {
      name: t("nav4"),
      link: "/pricing",
    },
  ];

  const profile = [
    {
      name: t("nav5"),
      link: "/profile",
    },
  ];

  // dropdown 
  const handleLanguageChange = (lang) => {
    console.log({lang});
    setLanguage(lang);
    cookies.set("NEXT_LOCALE", lang, { path: "/", sameSite: "strict" });
      router.refresh();
      window.location.reload();
  };

  const items = [
    { key: "en", label: "English", onClick: () => handleLanguageChange("en") },
    { key: "au", label: "Australian", onClick: () => handleLanguageChange("au") },
    { key: "fnc", label: "French", onClick: () => handleLanguageChange("fnc") },
    { key: "gr", label: "German", onClick: () => handleLanguageChange("gr") },
    { key: "spain", label: "Spanish", onClick: () => handleLanguageChange("spain") },
    { key: "korean", label: "Korean", onClick: () => handleLanguageChange("korean") },
    { key: "japanese", label: "Japanese", onClick: () => handleLanguageChange("japanese") },
    { key: "chinese", label: "Chinese", onClick: () => handleLanguageChange("chinese") },
    { key: "hindi", label: "Hindi", onClick: () => handleLanguageChange("hindi") },
  ];

  const languageDisplay = {
    en: "English",
    au: "Australian",
    fnc: "French",
    gr: "German",
    spain: "Spanish",
    korean: "Korean",
    japanese: "Japanese",
    chinese: "Chinese",
    hindi: "Hindi",
  };
  // dropdown 

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
           {t("nav7")}
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
           {t("nav6")}
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
          {t("nav9")}
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
        {t("nav8")}
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
            <div>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
      >
        <Button className="flex items-center justify-between text-base font-semibold text-black">
          {languageDisplay[language] || "English"} <DownOutlined />
        </Button>
      </Dropdown>
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
                      {t("nav7")}
                    </Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button
                      className="py-5 text-primary-color border-none mx-3 bg-base-color hover:bg-base-color hover:text-primary-color font-bold duration-200 delay-75 shadow-md rounded-lg drop-shadow-md"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                     {t("nav6")}
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
                    {t("nav9")}
                  </Button>
                </>
              )}
            </div>
            {/* <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full items-center justify-between px-1 py-2 font-kumbh-sans text-base font-semibold text-white">
          {language === "en" ? "English" : 
 language === "au" ? "Australia" : 
 language === "fnc" ? "France" : 
 language === "gr" ? "German" : 
 language === "spain" ? "Spain" : 
 "English"}

            <ChevronsUpDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-kumbh-sans">
            <div>
              <button onClick={() => handleLanguageChange("pol")}>
                polski
              </button>
            </div>
            <div>
              <button onClick={() => handleLanguageChange("en")}>
                English
              </button>
            </div>
            
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
      
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
