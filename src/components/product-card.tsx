import { Product } from "@/types/products";
import { FC } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { formatPrice } from "@/lib/utils";

interface Props {
  product: Product;
}
const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden flex flex-col">
      <AspectRatio ratio={16 / 10} className="overflow-hidden w-full ">
        <img
          alt={product.title}
          src={product.thumbnail}
          className="object-cover object-center w-full h-full"
        />
      </AspectRatio>
      <div className="p-3 flex flex-col justify-between flex-1 gap-2">
        <div>
          <p className="font-medium text-xl">{product.brand}</p>
          <h1 className="font-bold text-2xl">{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <p className="font-bold text-lg self-end">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
