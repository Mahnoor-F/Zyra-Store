import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { ShoppingBag, ArrowLeft, Star, ShieldCheck, Truck, Trash2 } from "lucide-react";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { items: allProducts, loading } = useSelector((state) => state.products);

  const product = allProducts.find((item) => item.id === parseInt(id));
  
  const relatedProducts = allProducts
    .filter((item) => item.category === product?.category && item.id !== product?.id)
    .slice(0, 4);

  const cartItems = useSelector((state) => state.cart.items);
  const isItemInCart = cartItems.find((item) => item.id === parseInt(id));

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center animate-pulse font-black text-gray-300 tracking-widest uppercase">
        Loading Experience...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center font-black text-gray-400 uppercase tracking-widest">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fadeIn">
      <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-black transition mb-10 font-bold uppercase text-xs tracking-widest">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Product Image */}
        <div className="bg-gray-50 rounded-[3rem] p-12 flex items-center justify-center border border-gray-100 group">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-125 object-contain transition-transform duration-700 group-hover:scale-110" 
          />
        </div>

        {/* Right: Product Info */}
        <div className="space-y-8">
          <div>
            <p className="text-teal-500 font-black uppercase tracking-[0.3em] text-sm mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-11 text-gray-900 mb-4">{product.title}</h1>
            <div className="flex items-center gap-4 text-sm font-bold">
              <div className="flex items-center bg-black text-white px-3 py-1 rounded-full gap-1">
                <Star size={14} fill="currentColor" /> {product.rating?.rate}
              </div>
              <span className="text-gray-400">{product.rating?.count} Verified Reviews</span>
            </div>
          </div>

          <p className="text-4xl font-black text-gray-900">${product.price.toFixed(2)}</p>
          
          <p className="text-gray-500 leading-relaxed text-lg border-l-4 border-gray-100 pl-6 italic">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            {isItemInCart ? (
              <button 
                onClick={() => dispatch(removeFromCart(product.id))}
                className="flex-1 bg-rose-100 text-rose-600 py-5 rounded-2xl font-black text-lg hover:bg-rose-600 hover:text-white transition-all shadow-xl shadow-rose-200 active:scale-95 cursor-pointer flex items-center justify-center gap-3 border-rose-100"
              >
                <Trash2 size={22} /> REMOVE&nbsp;&nbsp;FROM&nbsp;&nbsp;BAG
              </button>
            ) : (
              <button 
                onClick={() => dispatch(addToCart(product))}
                className="flex-1 bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-teal-800 transition-all shadow-xl shadow-black/20 active:scale-95 cursor-pointer flex items-center justify-center gap-3"
              >
                <ShoppingBag size={22} /> ADD&nbsp;&nbsp;TO&nbsp;&nbsp;BAG
              </button>
            )}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 pt-10 pb-6 border-t border-gray-100">
            <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
              <Truck size={20} className="text-black" />
              <span>Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
              <ShieldCheck size={20} className="text-black" />
              <span>2 Year Global Warranty</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-16">
        <div className="flex items-center justify-between flex-wrap space-x-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-wider uppercase border-b-6 border-teal-600 rounded">You May Also Like</h2>
          </div>
          <Link to="/" className="text-sm font-bold text-gray-400 hover:text-black transition underline underline-offset-8 mt-6 md:mt-0">
            View Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;