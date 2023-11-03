export interface Props {
  logo_link?: string;
}

export default function Header({
  logo_link =
    "https://png.pngtree.com/png-vector/20220330/ourmid/pngtree-calligraphy-template-for-electronics-store-design-print-label-layout-vector-png-image_27708338.png",
}: Props) {
  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden flex bg-base-100 fixed w-full z-50">
        <div className="md:hidden flex flex-row justify-between items-center m-auto mt-3 w-11/12">
          <div className="flex-none w-44">
            <a
              className="block px-4 py-3 w-[160px]"
              href="/"
              aria-label="Store logo"
            >
              <img
                src={logo_link}
                alt="Store logo"
                width="126"
                height="16"
                loading="lazy"
              >
              </img>
            </a>
          </div>
          <div className="flex-auto flex justify-end">
            <li className="group flex items-center">
              <a className="px-4 py-3" href="/">
                <span className="group-hover:underline">Início</span>
              </a>
            </li>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex bg-base-100 fixed w-full z-50">
        <div className="hidden md:flex flex-row justify-between items-center m-auto mt-3 w-11/12">
          <div className="flex-none w-44">
            <a
              className="block px-4 py-3 w-[160px]"
              href="/"
              aria-label="Store logo"
            >
              <img
                src={logo_link}
                alt="Store logo"
                width="126"
                height="16"
                loading="lazy"
              >
              </img>
            </a>
          </div>
          <div className="flex-auto flex justify-end">
            <li className="group flex items-center">
              <a className="px-4 py-3" href="/">
                <span className="group-hover:underline">Início</span>
              </a>
            </li>
            <li className="group flex items-center">
              <a className="px-4 py-3" href="/">
                <span className="group-hover:underline">Produtos</span>
              </a>
            </li>
            <li className="group flex items-center">
              <a className="px-4 py-3" href="/">
                <span className="group-hover:underline">Avaliações</span>
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
