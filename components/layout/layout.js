import MainFooter from "../common/MainFooter";
import MainNavbar from "../common/MainNavabr";

function Layout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <MainFooter />
    </>
  );
}

export default Layout;
