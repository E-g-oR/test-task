import { FC } from "react";
import AppHeader from "./app-header";
import Footer from "./footer";
import Container from "./container";

const Layout: FC = () => {
  return (
    <div className={"flex flex-col h-screen gap-5"}>
      <AppHeader />
      <Container className="flex-1">
        outlet
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
