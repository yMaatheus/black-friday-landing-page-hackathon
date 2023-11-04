import type { Product } from "apps/commerce/types.ts";
import ProductCard from "$store/components/ProductCard/index.tsx";
import SectionHeader from "$store/components/ui/SectionHeader.tsx";

export interface Props {
  product: Product | null;
  title?: string;
  description?: string;
  layout?: {
    headerAlignment?: "center" | "left";
    headerfontSize?: "Normal" | "Large";
  };
}

export default function FeaturedProduct({
  product,
  title,
  description,
  layout
}: Props) {
  if (!product) {
    return null;
  }

  return (
    <>
      <SectionHeader
        title={title || ""}
        description={description || ""}
        fontSize={layout?.headerfontSize || "Large"}
        alignment={layout?.headerAlignment || "center"}
      />
      <ProductCard
        product={product}
      />
    </>
  );
}