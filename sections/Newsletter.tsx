export interface Props {
  text?: string;
  highlight?: string;
  button?: string;
}

export default function Newsletter({ text = 'INSCREVA-SE EM NOSSA', highlight = 'newsletter!', button = 'Inscrever-se' }: Props) {
  return (
    <div className="w-full p-6 bg-base-200 border-t border-t-black flex justify-around items-center">
      <div>
        <span className="uppercase flex flex-col gap-1 text-xl text-center lg:text-lg lg:text-left whitespace-nowrap">
          {text}
          <strong className="text-xl font-bold">
            {highlight}
          </strong>
        </span>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col">
          <label htmlFor="email" className="pl-1 pb-1">Email</label>
          <input type="email" name="email" id="email" className="input input-sm input-bordered lg:w-80" placeholder="Digite seu email" />
        </div>
        <div className="self-end">
          <button
            type="button"
            className="btn btn-sm btn-accent"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}