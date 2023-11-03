import Carousel from "../islands/Carousel/index.tsx";
import DiscountCard, {
  Props as Category,
} from "../components/DiscountCard/index.tsx";
import SectionTitle from "../components/SectionTitle/index.tsx";

interface Props {
  categories?: Category[];
}

export default function DiscountsByCategory({
  categories = [
    { category: "ELETRODOMÉSTICOS", discount: 72, link: "#" },
    { category: "ELETRÔNICOS", discount: 68, link: "#" },
    { category: "MODA", discount: 65, link: "#" },
    { category: "ESPORTES", discount: 58, link: "#" },
    { category: "BEBIDAS", discount: 53, link: "#" }
  ],
}: Props) {
  return (
    <section className="bg-base-200 py-[8vw] sm:p-[8vw]">
      <div className="w-full flex justify-center sm:justify-start">
        <SectionTitle
          invertMarkedText
          symbol="%"
          text="POR CATEGORIA"
          markedText="DESCONTOS"
        />
      </div>

      {/* desktop design */}
      <div className="hidden md:grid overflow-hidden md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.map((category) => {
          return (
            <DiscountCard
              category={category.category}
              discount={category.discount}
              link={category.link}
            />
          );
        })}
      </div>

      {/* mobile design */}
      <Carousel categories={categories} class="grid md:hidden" />
    </section>
  );
}
