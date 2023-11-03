export interface Props {
  banner_link?: string;
}

export default function BlackFridayLogo({
  banner_link =
    "https://media.istockphoto.com/id/1352457985/pt/vetorial/vector-of-black-friday-poster-or-banner-with-black-gift-box-coins-coupon-shopping-bag-and.jpg?s=612x612&w=0&k=20&c=fenxwRaPD-MBNn6NNnsdxPDb3mIl3bJq5fRU6mMG_YI=",
}: Props) {
  return (
    <div className="relative h-[600px] overflow-y-hidden w-full">
      <img
        className="object-cover w-full h-full"
        src={banner_link}
        loading="eager"
      >
      </img>
    </div>
  );
}
