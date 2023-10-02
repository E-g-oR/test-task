import { FC } from "react";
import AppHeader from "./app-header";
import Footer from "./footer";
import ProductsList from "./products-list";

const Layout: FC = () => {
  return (
    <div className={"flex flex-col h-screen gap-5 pt-20"}>
      <AppHeader />
      <main className="flex-1">
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
