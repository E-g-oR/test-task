import { PaginatedProducts } from "@/types/products";
import ky from "ky";

const apiInstanse = ky.create({
  prefixUrl: "https://dummyjson.com/",
});

export interface PaginatedPayload {
  page: number;
  limit: number;
}

export const API = {
  getProducts: (payload: PaginatedPayload = { page: 1, limit: 30 }) =>
    apiInstanse("products", {
      searchParams: {
        limit: payload.limit,
        skip: payload.page !== 1 ? payload.page * payload.limit : 0,
      },
    }).json<PaginatedProducts>(),
};
