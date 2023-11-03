export interface Props {
  title?: string;
  color?: string;
}

export default function FreeShipping({ title = "Frete Grátis", color }: Props) {
  const boxStyle = {
    background: color || "linear-gradient(to right, #4F46E5, #FC67A1)",
  };

  return (
    <div
      className="box-decoration-slice bg-gradient-to-r from--600 to-pink-500 text-white p-2"
      style={boxStyle}
    >
    <h3 className="text-center">{title}</h3>
    </div>
  );
}
