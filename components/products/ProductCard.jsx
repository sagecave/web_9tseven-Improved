import Link from "next/link";
import Image from "next/image";
export default function ProductCards({ title, productImage, category, price, slugName }) {
  return (
    <Link className="w-fit " rel="preload" key={slugName} href={`/productPage/${slugName}`}>
      <div className="hover:shadow-md md:w-fit md:p-4">
        <Image loading="eager" rel="preload" width={300} height={300} src={productImage} alt={title} className="  object-contain  " />
        <div className="pt-4 pr-3 pl-3 pb-4 ">
          <p className="text-HeaderSizeSmall font-bold text-main_black">{title}</p>
          <p className="text-ParagraphSize text-neutral_black">{category}</p>
          <p className="text-ParagraphSize text-neutral_black">{price} kr</p>
        </div>
      </div>
    </Link>
  );
}
