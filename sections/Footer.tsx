import PoweredByDeco from "apps/website/components/PoweredByDeco.tsx";
export interface Props {
  logo_link?: string;
}

export default function Header({
  logo_link =
    "https://png.pngtree.com/png-vector/20220330/ourmid/pngtree-calligraphy-template-for-electronics-store-design-print-label-layout-vector-png-image_27708338.png",
}: Props) {
  return (
    <>
      <div className="flex bg-base-100 fixed w-full z-50">
        <div className="flex flex-row justify-between items-center m-auto mt-3 w-11/12">
          <div className="flex flex-row w-80">
            <span className="m-auto group-hover:underline">
              Desenvolvido por:
            </span>
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
            <span className="px-4">Powered by:</span>{" "}
            <PoweredByDeco width={76} />
          </div>
        </div>
      </div>
    </>
  );
}
