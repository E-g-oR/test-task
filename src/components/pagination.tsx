import { FC, useMemo, useState } from "react";
import { makeBy } from "fp-ts/ReadonlyArray";
import { Button } from "./ui/button";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

interface Props {
  total: number;
  limit: number;
  currentPage: number;
  onChange: (page: number) => void;
}
const numericSequence = (limit: number, total: number) =>
  makeBy(Math.ceil(total / limit), (index) => index + 1);

const Pagination: FC<Props> = ({ limit, total, currentPage, onChange }) => {
  const pages = useMemo(() => numericSequence(limit, total), [limit, total]);

  const disabledRight = useMemo(
    () => currentPage === pages[pages.length - 1],
    [currentPage, pages]
  );
  return (
    <div className="flex gap-2 flex-wrap">
      <Button
        variant={"outline"}
        size={"icon"}
        disabled={currentPage === 1}
        onClick={() => onChange(pages[0])}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        disabled={currentPage === 1}
        onClick={() => onChange((page) => page - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      {pages.map((page) => (
        <Button
          variant={page === currentPage ? "default" : "outline"}
          size={"icon"}
          key={page}
          onClick={() => onChange(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        variant={"outline"}
        size={"icon"}
        disabled={disabledRight}
        onClick={() => onChange((page) => page + 1)}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        disabled={disabledRight}
        onClick={() => onChange(pages[pages.length - 1])}
      >
        <DoubleArrowRightIcon />
      </Button>
    </div>
  );
};

export default Pagination;