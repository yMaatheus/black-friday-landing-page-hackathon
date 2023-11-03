import Header from "$store/components/ui/SectionHeader.tsx";

export interface Question {
  question: string;
  /** @format html */
  answer: string;
}

export interface Contact {
  title?: string;
  /** @format html */
  description?: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface Props {
  title?: string;
  description?: string;
  questions?: Question[];
  contact?: Contact;
  layout?: {
    variation?: "Compact" | "Full" | "Side to side";
    headerAlignment?: "center" | "left";
  };
}

const DEFAULT_PROPS = {
  title: "",
  description: "",
  questions: [
    {
      question: "Como faço para entrar em contato com o serviço de atendimento ao cliente?",
      answer:
        "Para entrar em contato com nosso serviço de atendimento ao cliente, você pode ligar para o nosso número de suporte listado em nosso site. Além disso, você também pode enviar um e-mail para [endereço de e-mail] ou preencher o formulário de contato em nosso site. Estamos disponíveis para ajudar de segunda a sexta-feira, das 9h às 18h.",
    },
    {
      question: "Vocês oferecem garantia para os produtos?",
      answer:
        "Sim, oferecemos garantia para muitos dos nossos produtos. A duração da garantia pode variar de acordo com o produto específico. Certifique-se de verificar a página de detalhes do produto em nosso site para obter informações sobre a garantia desse produto em particular. Se você tiver algum problema com um produto coberto pela garantia, entre em contato conosco, e nossa equipe de suporte terá prazer em ajudá-lo.",
    },
    {
        question: "Vocês fazem envios internacionais?",
        answer:
          "Sim, fazemos envios internacionais para vários países. Antes de fazer um pedido internacional, verifique se fornecemos entrega para o seu país, e confira as informações de envio e taxas associadas em nosso site. Lembre-se de que os prazos de entrega podem variar dependendo da sua localização. Para obter mais detalhes sobre envios internacionais, entre em contato com nossa equipe de atendimento ao cliente.",
      },
  ],
  contact: {
    title: "",
    description: "",
    button: {
      text: "",
      link: "",
    },
  },
};

function Question({ question, answer }: Question) {
  return (
    <details class="collapse collapse-arrow join-item border-t border-base-200">
      <summary class="collapse-title text-lg font-medium">
        {question}
      </summary>
      <div
        class="collapse-content"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}

function Contact({ title, description, link }: Contact) {
  return (
    <div class="flex flex-col gap-6 items-center text-center">
      <div class="flex flex-col gap-2">
        {title && <h2 class="text-xl lg:text-3xl">{title}</h2>}
        {description && (
          <div
            class="text-lg lg:text-xl"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      {link &&
        <a href={link.href} class="btn">{link.text}</a>}
    </div>
  );
}

export default function FAQ(props: Props) {
  const {
    questions = [],
    title,
    description,
    contact,
    layout,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <>
      {(!layout?.variation || layout?.variation === "Compact") && (
        <div class="w-full container px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-10 lg:px-40">
          <div class="flex flex-col gap-8 lg:gap-10">
            <Header
              title={title || ""}
              description={description || ""}
              alignment={layout?.headerAlignment || "center"}
            />
            <div class="join join-vertical w-full">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>

          <Contact {...contact} />
        </div>
      )}

      {layout?.variation === "Full" && (
        <div class="w-full container px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-10 lg:px-0">
          <div class="flex flex-col gap-8 lg:gap-10">
            <Header
              title={title || ""}
              description={description || ""}
              alignment={layout?.headerAlignment || "center"}
            />
            <div class="join join-vertical w-full">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>

          <Contact {...contact} />
        </div>
      )}

      {layout?.variation === "Side to side" && (
        <div class="w-full container px-4 py-8 grid gap-8 grid-flow-row grid-cols-1 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 lg:py-10 lg:px-0">
          <div class="order-1 lg:order-1">
            <Header
              title={title || ""}
              description={description || ""}
              alignment={layout?.headerAlignment || "center"}
            />
          </div>
          <div class="order-2 lg:order-3 lg:row-span-2">
            <div class="join join-vertical">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>
          <div class="order-3 lg:order-2">
            <Contact {...contact} />
          </div>
        </div>
      )}
    </>
  );
}
