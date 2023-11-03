import { Product } from "apps/commerce/types.ts";
import ProductCard from "$store/components/ProductCard/index.tsx";

export interface Props {
  products: Product[] | null;
}

export default function FeaturedProduct({ products }: Props) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <>
      {products?.map((e) => (
        <ProductCard
          product={e}
        />
      ))}
    </>
  );
}