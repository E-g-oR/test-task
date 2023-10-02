import { useMemo, useState } from "react";
import Container from "./container";
import ProductCard, { ProductCardSkeleton } from "./product-card";
import { API, PaginatedPayload } from "@/api";
import { useRequest } from "@/lib/hooks/useRequest";
import Pagination from "./pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useTranslation } from "@/lib/hooks/useTranslation";

const showItemsOnPage = [10, 20, 30] as const;

const ProductsList = () => {
  
    const t = useTranslation()
    const [limit, setLimit] = useState<(typeof showItemsOnPage)[number]>(
    showItemsOnPage[0]
  );

  const [currentPage, setCurrentPage] = useState(1);
  const paginatedPayload: PaginatedPayload = useMemo(
    () => ({
      limit,
      page: currentPage,
    }),
    [currentPage, limit]
  );

  const requestData = useRequest(API.getProducts, paginatedPayload);

  return (
    <section>
      <Container className="flex flex-col gap-5">
        <div>
          <p className="mb-2">{t.common.limitTitles}</p>
          <Select value={limit} onValueChange={setLimit}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t.common.limit}</SelectLabel>
                {showItemsOnPage.map((value) => (
                  <SelectItem value={value} key={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {requestData.isLoading ? (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          ) : (
            requestData.data?.products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          onChange={setCurrentPage}
          limit={paginatedPayload.limit}
          total={requestData.data?.total ?? 0}
        />
      </Container>
    </section>
  );
};

export default ProductsList;
