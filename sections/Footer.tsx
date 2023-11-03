import PoweredByDeco from "apps/website/components/PoweredByDeco.tsx";
export interface Props {
  logo_link?: string;
}

export default function Footer({
  logo_link =
    "https://png.pngtree.com/png-vector/20220330/ourmid/pngtree-calligraphy-template-for-electronics-store-design-print-label-layout-vector-png-image_27708338.png",
}: Props) {
  return (
    <div className="flex flex-row bg-base-300 m-auto justify-between items-center">
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
      <div className="flex justify-end flex-col items-center gap-2">
        <span className="px-4">Powered by:</span> <PoweredByDeco width={76} />
      </div>
    </div>
  );
}
