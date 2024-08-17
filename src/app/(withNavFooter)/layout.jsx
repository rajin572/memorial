const MainLayout = ({ children }) => {
  return (
    // import navbar and footer
    <div>
      {/* <Navbar /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
