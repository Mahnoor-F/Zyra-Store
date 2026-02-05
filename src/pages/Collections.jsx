import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProducts } from "../features/productSlice";
import ProductCard from "../components/ProductCard";
import { SlidersHorizontal, X, Filter, ChevronRight } from "lucide-react";

const Collections = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  
  const { items: products, loading } = useSelector((state) => state.products);
  
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts());
  }, [dispatch, products.length]);

  const searchQuery = location.state?.search?.toLowerCase() || "";

  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  const filteredProducts = products.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (loading) return (
    <div className="h-screen flex items-center justify-center font-bold text-gray-400 animate-pulse tracking-[0.5em]">
      ZYRA IS LOADING...
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fadeIn relative">
      
      {/* --- Mobile: Sticky Filter Bar --- */}
      <div className="md:hidden sticky top-20 z-40 bg-white/80 backdrop-blur-md py-4 mb-8 border-b border-gray-100">
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center justify-between px-6 w-full bg-black text-white py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all"
        >
          <div className="flex items-center gap-2">
            <Filter size={14} /> Filter Collection
          </div>
          <span className="bg-white/20 px-2 py-0.5 rounded text-[8px]">{activeCategory}</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* --- STICKY SIDEBAR (Desktop & Mobile Drawer) --- */}
        <aside className={`
          fixed inset-0 z-50 transition-all duration-500 md:sticky md:top-28 md:z-0 md:block
          ${isDrawerOpen ? "visible" : "invisible md:visible"}
        `}>
          {/* Mobile Overlay */}
          <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-500
              ${isDrawerOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Sidebar Content Box */}
          <div className={`
            absolute left-0 top-0 h-full w-80 bg-white shadow-2xl transition-transform duration-500 md:relative md:translate-x-0 md:w-64 md:bg-gray-50/50 md:border md:border-gray-100 md:rounded-[2.5rem] md:p-8 md:shadow-none
            ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
          `}>
            {/* Mobile Header for Sidebar */}
            <div className="flex items-center justify-between p-8 md:hidden border-b border-gray-50 mb-6">
              <span className="font-bold uppercase tracking-widest text-xs text-black">Refine Selection</span>
              <button onClick={() => setIsDrawerOpen(false)} className="p-2 bg-black text-white rounded-full">
                <X size={16} />
              </button>
            </div>

            {/* Desktop Sidebar Title */}
            <div className="hidden md:flex items-center gap-3 mb-10 text-gray-900 font-bold uppercase text-[10px] tracking-[0.3em]">
               <SlidersHorizontal size={16} /> <span>Filter Archive</span>
            </div>

            {/* Categories List */}
            <div className="px-8 md:px-0 space-y-2">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-6 block ml-1">Categories</h3>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setIsDrawerOpen(false);
                    if(searchQuery) navigate('/collections', { state: { search: "" } });
                  }}
                  className={`group w-full flex items-center justify-between py-4 px-5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer mb-4
                    ${activeCategory === cat 
                      ? "bg-black text-white shadow-lg translate-x-2" 
                      : "text-gray-400 hover:bg-white hover:text-black hover:shadow-sm"}`}
                >
                  {cat}
                  <ChevronRight size={14} className={`${activeCategory === cat ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-all`} />
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* --- MAIN PRODUCT GRID --- */}
        <main className="flex-1">
          {/* Header Section */}
          <header className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-gray-100 pb-10">
            <div>
              {searchQuery ? (
                <p className="text-[10px] text-teal-600 font-bold uppercase tracking-[0.4em] mb-2 animate-bounce">
                  Results for: "{searchQuery}"
                </p>
              ) : (
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] mb-2">ZYRA / Official Archive</p>
              )}
              <h2 className="text-4xl md:text-5xl font-bold uppercase italic text-gray-900 leading-none">
                {searchQuery ? "Found Items" : activeCategory}
              </h2>
            </div>
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                {filteredProducts.length} Items Found
            </div>
          </header>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 transition-all">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            ) : (
              <div className="col-span-full py-32 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
                <p className="text-gray-400 font-bold uppercase tracking-[0.3em] mb-4">No matching products found</p>
                <button 
                  onClick={() => navigate('/collections', { state: { search: "" } })}
                  className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-teal-700 transition-colors cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Collections;