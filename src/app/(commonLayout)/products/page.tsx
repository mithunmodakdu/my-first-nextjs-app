import { ProductCard } from "@/components/Products/ProductCard";
import { IProduct } from "@/types";

const ProductsPage = async() => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store"
  });
  const products = await res.json();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] mx-auto my-10">
      {
        products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>
  );
};

export default ProductsPage;