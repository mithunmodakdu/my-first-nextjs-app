import { IProduct } from "@/types";
import Image from "next/image";

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="group h-full overflow-hidden border hover:border-primary transition-colors duration-200 shadow-2xl p-5">
      <Image
        src={product.thumbnail}
        alt={product.name}
        width={300}
        height={150}
        loading="lazy"
      />

      <h3 className="text-sm font-medium text-foreground truncate">
        {product.name}
      </h3>

      <p className="text-xs text-muted-foreground">{product.category}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-medium">৳{product.price}</span>
        </div>
      </div>
    </div>
  );
};
