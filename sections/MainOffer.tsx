import type { Product } from "apps/commerce/types.ts";
import Timer from "../components/Timer/index.tsx";
import Newsletter from "../components/Newsletter/index.tsx";
import FeaturedProduct from "../components/FeaturedProduct/index.tsx";
import { HTMLWidget } from "apps/admin/widgets.ts";

export interface TimerProps {
  /**
   * @title Text
   * @default Time left for a campaign to end wth a link
   */
  text?: HTMLWidget;

  /**
   * @title Expires at date
   * @format datetime
   */
  expiresAt?: string;

  /**
   * @title Show days?
   */
  showDays?: boolean;

  labels?: {
    /**
     * @title Text to show when expired
     */
    expired?: string;
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };

  link?: {
    /**
     * @title Link Text
     * @default button
     */
    text?: string;
    /**
     * @title Link href
     * @default #
     */
    href?: string;
  };

  layout?: {
    textPosition?: "Before counter" | "After counter";
  };
}

export interface NewsletterProps {
  text?: string;
  highlight?: string;
  button?: string;
}

export interface Props {
  product: Product | null;
  title?: string;
  TimerProps: TimerProps;
  NewsletterProps: NewsletterProps;
}

export default function MainOffer({
  product,
  title = "Oferta Atual",
  TimerProps,
  NewsletterProps
}: Props) {
  return (
    <div className="w-full bg-base-200 p-8">
      <div className="flex justify-center items-center p-4">
        <h1 className="text-2xl font-bold leading-8 lg:leading-10 text-base-content lg:text-6xl"
        >
          {title}
        </h1>
      </div>
      <div className="container mx-auto flex justify-evenly items-center gap-8">
        <div className="flex flex-col gap-16">
          <Timer {...TimerProps} />

          <Newsletter {...NewsletterProps} />
        </div>

        <div className="">
          <FeaturedProduct
            product={product}
          />
        </div>
      </div>
    </div>
  );
}