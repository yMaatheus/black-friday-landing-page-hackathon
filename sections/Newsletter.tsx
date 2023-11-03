export interface Props {
  text?: string;
  highlight?: string;
  button?: string;
}

export default function Newsletter({ text = 'INSCREVA-SE EM NOSSA', highlight = 'newsletter!', button = 'Inscrever-se' }: Props) {
  return (
    <div className="w-full bg-base-200">
      <div className="container mx-auto p-6 flex flex-col justify-evenly items-center gap-8 sm:flex-row">
        <div>
          <span className="w-80 text-sm uppercase flex flex-col gap-1 text-center whitespace-nowrap lg:text-xl lg:text-left lg:max-w-lg">
            {text}
            <strong className="text-3xl font-bold">
              {highlight}
            </strong>
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex flex-col gap-2 items-center">
            <label htmlFor="email" className="hidden sm:self-start sm:flex">Email</label>

            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered lg:w-80"
                placeholder="Digite seu email"
              />

              <button
                type="button"
                className="btn btn-secondary sm:self-end"
              >
                {button}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}