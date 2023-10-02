import { FC, useMemo, useState } from "react";
import AppHeader from "./app-header";
import Footer from "./footer";
import Container from "./container";
import { useRequest } from "@/lib/hooks/useRequest";
import { API, PaginatedPayload } from "@/api";
import ProductCard from "./product-card";
import Pagination from "./pagination";

// const showItemsOnPage = [10, 20, 30] as const

const Layout: FC = () => {
  
  // const showItems

  const [currentPage, setCurrentPage] = useState(1);
  const paginatedPayload: PaginatedPayload = useMemo(()=>({
    limit: 10,
    page: currentPage
  }), [currentPage])

  const requestData = useRequest(API.getProducts, paginatedPayload);
  return (
    <div className={"flex flex-col h-screen gap-5 pt-20"}>
      <AppHeader />
      <Container className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {requestData.data?.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Container>
      <Pagination
        currentPage={currentPage}
        onChange={setCurrentPage}
        limit={paginatedPayload.limit}
        total={requestData.data?.total ?? 0}
      />
      <Footer />
    </div>
  );
};

export default Layout;
