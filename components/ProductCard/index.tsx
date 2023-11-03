import { Product } from "apps/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface Props {
  product: Product | undefined;
}

function ProductCard({ product }: Props) {
  if (!product) {
    return null;
  }

  const {
    image: images,
  } = product;

  const getTotalDiscount = () => {
    const listPrice = product.offers?.highPrice ?? 0;
    const bestPrice = product.offers?.lowPrice ?? 0;
    if (listPrice > bestPrice) {
      return ((listPrice - bestPrice) * 100) / listPrice;
    }
    return 0;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <div className="w-48 shrink-0 rounded-lg bg-neutral-900 select-none sm:w-72">
      <a href={product.isVariantOf?.url}>
        <div className="relative mb-1">
          <Image
            src={images?.[0]?.url || ""}
            alt={product.isVariantOf?.name}
            title={product.isVariantOf?.name}
            loading="lazy"
            width={297}
            height={445}
            className="rounded-t-md h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-sm items-start p-4 ">
          <p className="font-bold text-xl pb-4 text-left">
            {product.isVariantOf?.name}
          </p>

          <div className="flex gap-1">
            {getTotalDiscount() > 0 && (
              <div className="rounded-2xl bg-green-600 px-2">
                {getTotalDiscount()}%
              </div>
            )}
          </div>

          {product.offers?.highPrice !== undefined &&
            product.offers?.lowPrice !== undefined &&
            product.offers?.highPrice > product.offers?.lowPrice && (
              <del>{formatPrice(product.offers?.highPrice)}</del>
            )}

          <span className="font-bold text-lg ">
            {typeof product.offers?.lowPrice === "number" &&
              product.offers.lowPrice > 0
              ? formatPrice(product.offers.lowPrice)
              : null}
          </span>

          <span className="my-1 text-purple-600 font-semibold text-left">
            Black Friday
          </span>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
