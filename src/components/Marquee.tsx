import { IProduct } from '@/type/Product';
import MarqueeCard from './MarqueeCard';
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const MarqueePage = async() => {
    let productData:IProduct[]=[]
    try{
        const res = await fetch(
          "https://api.api-store.workers.dev/api/bazardor/products",
          {
            next: { revalidate: 3600 },
          },
        );
        if(!res.ok){
            console.log("API Status:", res.status);
            throw new Error("Failed to fetch categories");
        }
        productData = await res.json();
        console.log(productData);
       
    }
    catch(error){
        console.error("Error fetching categories:", error);
    }
    return (
      <div className="flex gap-3 ">
        <MarqueeText direction="right" duration={10} py-1>
          {productData.map((product) => (
            <MarqueeCard key={product.id} product={product} />
          ))}
        </MarqueeText>
      </div>
    );
};

export default MarqueePage;