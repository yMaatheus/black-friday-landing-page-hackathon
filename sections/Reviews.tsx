import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Reviews {
  text?: string;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
  user?: {
    avatar?: ImageWidget;
    name?: string;
    position?: string;
    company?: string;
  };
}

export interface Props {
  title?: string;
  description?: string;
  testimonials?: Reviews[];
  layout?: {
    variation?: "Grid" | "Slider";
    headerAlignment?: "center" | "left";
  };
}

const DEFAULT_PROPS: Props = {
  "title": "",
  "description": "",
  "testimonials": [{
    "text":
      "Adorei a variedade de produtos e o atendimento impecável da equipe da loja! Sem dúvida, voltarei para fazer mais compras. ",
    "image": {
      "src":
        "https://i.imgur.com/Vd06mNL.png",
      "alt": "Testimonal",
    },
    "user": {
      "avatar": "https://i.imgur.com/Vd06mNL.png",
      "name": "Maria Silva",
      "position": "Professora",
      "company": "Escola Primavera",
    },
  }, {
    "text":
      "A loja superou minhas expectativas! Encontrei exatamente o que estava procurando a preços acessíveis. Recomendo a todos.",
    "image": {
      "src":
        "https://i.imgur.com/1nGULDX.png",
      "alt": "Testimonal",
    },
    "user": {
      "avatar": "https://i.imgur.com/1nGULDX.png",
      "name": "João Oliveira",
      "position": "Engenheiro",
      "company": "TechSolutions",
    },
  }, {
    "text":
      "Excelente experiência de compra! A loja possui um ambiente agradável, e a entrega dos produtos foi rápida e sem problemas.",
    "image": {
      "src":
        "https://i.imgur.com/M1O059X.png",
      "alt": "Testimonal",
    },
    "user": {
      "avatar": "https://i.imgur.com/M1O059X.png",
      "name": "Ana Santos",
      "position": "Estudante",
      "company": "Universidade da Cidade",
    },
  }],
  "layout": {
    "variation": "Grid",
    "headerAlignment": "center",
  },
};

const Testimonal = ({ image, text, user }: Reviews) => (
  <div class="flex flex-col items-center gap-9 text-center">
    {image?.src && (
      <Image
        src={image.src}
        alt={image?.alt}
        width={100}
        height={100}
      />
    )}
    <h3 class="text-xl lg:text-2xl">
      {text}
    </h3>
    <div class="flex flex-col items-center gap-4">
      {user?.avatar && (
        <Image
          src={user.avatar}
          alt={user?.name}
          width={60}
          height={60}
          class="rounded-full"
        />
      )}
      <div class="flex flex-col">
        {user?.name &&
          (
            <p class="text-lg">
              {user?.name}
            </p>
          )}
        {(user?.position || user?.company) &&
          (
            <p class="text-lg">
              {user?.position}, {user?.company}
            </p>
          )}
      </div>
    </div>
  </div>
);

export default function Reviews (
  props: Props,
) {
  const id = useId();
  const { title, description, testimonials, layout } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-14 lg:gap-20 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />

      {layout?.variation === "Grid" && (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials?.map(({ image, text, user }) => (
            <Testimonal image={image} text={text} user={user} />
          ))}
        </div>
      )}

      {layout?.variation !== "Grid" && (
        <div
          class="relative w-full px-8"
          id={id}
        >
          <Slider class="carousel carousel-start gap-4 lg:gap-8 row-start-2 row-end-5 w-full">
            {testimonials?.map(({ image, text, user }, index) => (
              <Slider.Item
                index={index}
                class="flex flex-col gap-4 carousel-item w-full"
              >
                <Testimonal image={image} text={text} user={user} />
              </Slider.Item>
            ))}
          </Slider>
          <>
            <div class="z-10 absolute -left-2 lg:-left-8 top-1/2">
              <Slider.PrevButton class="btn btn-circle btn-outline">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} />
              </Slider.PrevButton>
            </div>
            <div class="z-10 absolute -right-2 lg:-right-8 top-1/2">
              <Slider.NextButton class="btn btn-circle btn-outline">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>
          <SliderJS rootId={id} />
        </div>
      )}
    </div>
  );
}
