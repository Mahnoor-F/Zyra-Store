import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cartSlice';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isItemInCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="group bg-white border border-gray-100 p-5 rounded-4xl shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col justify-between h-full hover:-translate-y-2">
      
      {/* Image Section */}
      <Link to={`/product/${product.id}`}>
      <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-6 mb-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-48 mx-auto object-contain transition-transform duration-500 group-hover:scale-110" 
        />
        {isItemInCart && (
           <div className="absolute top-2 right-2 bg-emerald-500 text-white p-1 rounded-full shadow-lg animate-bounce">
             <ShoppingBag size={14} />
           </div>
        )}
      </div>
      </Link>

      {/* Content Section */}
      <div className="space-y-2">
        <p className="text-[10px] font-black text-teal-500 uppercase tracking-[0.2em]">{product.category}</p>
        <h2 className="font-bold text-gray-900 truncate text-lg group-hover:text-teal-600 transition-colors">
          {product.title}
        </h2>
        <p className="text-2xl font-black text-gray-900">${product.price.toFixed(2)}</p>
      </div>
      
      {/* Action Button */}
      <div className="mt-6">
        {isItemInCart ? (
          <button 
            onClick={() => dispatch(removeFromCart(product.id))}
            className="w-full cursor-pointer flex items-center justify-center gap-2 bg-rose-50 text-rose-600 py-3 rounded-xl hover:bg-rose-600 hover:text-white transition-all duration-300 font-bold active:scale-95 border border-rose-100 shadow-sm"
           >
            <Trash2 size={18} /> Remove Item
          </button>
        ) : (
          <button 
            onClick={() => dispatch(addToCart(product))}
            className="w-full cursor-pointer flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-teal-800 transition-all duration-300 font-bold active:scale-95 shadow-lg shadow-black/10"
          >
            <ShoppingBag size={18} /> Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;