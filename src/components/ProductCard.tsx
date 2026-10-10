import { IProduct } from '@/type/Product';
import { ArrowUp, ArrowDown } from "lucide-react";

interface IProductPromise {
  product:IProduct;
}

const ProductCard = ({product}:IProductPromise) => {
   //console.log(product);
    console.log("Direction:", product.change?.dir);
    //console.log("UpArrow:", UpArrow);
    return (
      <div className="flex items-center gap-3 whitespace-nowrap  py-2">
        <span className="flex items-center gap-2" key={product.id}>
          <span>{product.categoryIcon}</span>
          <span className="font-medium">{product.nameBn}</span>
          <span className="font-semibold text-green-600">{product.today}</span>
          <span className="text-gray-500">টাকা/{product.unit}</span>
          <span className="flex items-center gap-1">
            {product.change?.dir === "up" && (
              <ArrowUp size={16} className="shrink-0 text-red-500" />
            )}

            {product.change?.dir === "down" && (
              <ArrowDown size={16} className="shrink-0 text-green-500" />
            )}
            <span
              className={
                product.change?.dir === "up" ? "text-red-500" : "text-green-500"
              }
            >
              {product.change?.dir === "down"}
              {Math.abs(Number(product.change?.pct))}%
            </span>
          </span>

          <span className="text-gray-300">|</span>
        </span>
      </div>
    );
};

export default ProductCard;