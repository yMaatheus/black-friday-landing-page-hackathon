export interface Props {
  text?: string;
  highlight?: string;
  button?: string;
}

export default function Newsletter({ text = 'INSCREVA-SE EM NOSSA', highlight = 'newsletter!', button = 'Inscrever-se' }: Props) {
  return (
    <div className="sm:flex-row w-full p-6 bg-base-200 border-t border-t-base-content flex flex-col justify-around items-center gap-8">
      <div>
        <span className="uppercase flex flex-col gap-1 text-xl text-center lg:text-lg lg:text-left whitespace-nowrap">
          {text}
          <strong className="text-xl font-bold">
            {highlight}
          </strong>
        </span>
      </div>

      <div className="items-center flex flex-col gap-4 sm:flex-row">
        <div className="flex sm:flex-col gap-2 items-center">
          <label htmlFor="email" className="sm:self-start">Email</label>
          <input type="email" name="email" id="email" className="input input-sm input-bordered lg:w-80" placeholder="Digite seu email" />
        </div>
        <div className="sm:self-end">
          <button
            type="button"
            className="btn btn-sm btn-secondary"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}