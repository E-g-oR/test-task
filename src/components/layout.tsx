import { FC } from "react";
import AppHeader from "./app-header";
import Footer from "./footer";
import Container from "./container";
import { useRequest } from "@/lib/hooks/useRequest";
import { API } from "@/api";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import ProductCard from "./product-card";
const aaa = { limit: 10, page: 1 };

const Layout: FC = () => {
  const requestData = useRequest(API.getProducts, aaa);
  console.log(requestData);

  return (
    <div className={"flex flex-col h-screen gap-5 pt-20"}>
      <AppHeader />
      <Container className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {requestData.data?.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
