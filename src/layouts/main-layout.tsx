import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import { Outlet, ScrollRestoration } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ScrollRestoration />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default MainLayout;
