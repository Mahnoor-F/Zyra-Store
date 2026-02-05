import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);
  
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);


  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  // Filter logic
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(item => item.category === activeCategory);

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-[80vh] space-y-4">
      <div className="w-12 h-12 border-4 border-gray-100 border-t-teal-600 rounded-full animate-spin"></div>
      <p className="font-black text-gray-400 tracking-widest animate-pulse uppercase text-xs">Loading ZYRA Collection...</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fadeIn">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-6">
        <div className="inline-block relative">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase italic">
            New Arrivals
          </h1>
          
          {/* Animated Teal Border */}
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-100 mt-4 mb-6">
            <div 
              className="absolute h-full w-1/2 bg-teal-600 rounded-full"
              style={{
                animation: 'moveBorder 3s linear infinite'
              }}
            ></div>
          </div>
        </div>
        
        <p className="text-gray-400 font-medium max-w-md mx-auto text-sm tracking-wide leading-relaxed">
          Curated pieces for the modern aesthetic.
        </p>

        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes moveBorder {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
        `}} />
      </div>

      {/* --- Category Filter Bar --- */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer border
              ${activeCategory === category 
                ? "bg-black text-white border-black shadow-xl shadow-black/20 scale-105" 
                : "bg-white text-gray-400 border-gray-100 hover:border-black hover:text-black"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      
      {/* No Products Found (Safety Check) */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest">
          No items found in this category.
        </div>
      )}

      <div className="mt-20 py-10 border-t border-gray-100 text-center">
        <p className="text-xs font-bold text-gray-300 tracking-[0.5em] uppercase">End of Collection</p>
      </div>
    </div>
  );
}