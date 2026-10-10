import { IProduct } from '@/type/Product';

interface IProductPromise {
  product:IProduct;
}

const MarqueeCard = ({product}:IProductPromise) => {
    return (
      <div className="flex items-center gap-3 whitespace-nowrap  py-2">
        <span className="flex items-center gap-2" key={product.id}>
          <span>{product.categoryIcon}</span>
          <span className="font-medium">{product.nameBn}</span>
          <span className="font-semibold text-green-600">{product.today}</span>
          <span className="text-gray-500">টাকা/{product.unit}</span>

          <span className="flex items-center gap-1">
            {product.change?.dir === "up" && (
              <span className="shrink-0 text-red-500">
                🔺{product.change.pct}%
              </span>
            )}

            {product.change?.dir === "down" && (
              <span className="shrink-0 text-green-500">
                ⏷{Math.abs(Number(product.change?.pct))}%
              </span>
            )}

            {product.change?.dir === "flat" && (
              <span className="shrink-0">{product.change.pct}%</span>
            )}
          </span>

          <span className="text-gray-300">|</span>
        </span>
      </div>
    );
};

export default MarqueeCard;