import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeItem } from '../features/cartSlice';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, SignInButton } from "@clerk/clerk-react";

const Cart = () => {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSignedIn } = useAuth(); 

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 5;
  const total = subtotal + tax + shipping;


  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[75vh] px-4 animate-fadeIn">
        <div className="bg-gray-50 p-10 rounded-full mb-6 border border-dashed border-gray-200">
          <ShoppingBag size={80} className="text-gray-300" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Bag is Empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-sm">
          "The joy of dressing is an art." Start creating your masterpiece today.
        </p>
        <Link 
          to="/" 
          className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-95 flex items-center gap-2"
        >
          START SHOPPING <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 animate-fadeIn">
      
      <div className="flex items-end gap-4 mb-10">
        <h1 className="text-5xl font-black text-gray-900 tracking-tighter">CART</h1>
        <span className="text-gray-400 text-xl font-medium mb-1">({totalQuantity} Items)</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-8">
          {items.map((item) => (
            <div key={item.id} className="group flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 pb-8 gap-6 transition-all hover:border-gray-300">
              <div className="flex items-start gap-6 w-full">
                <div className="bg-white p-3 rounded-2xl h-32 w-32 flex items-center justify-center shrink-0 border border-gray-50 group-hover:shadow-lg transition-shadow">
                   <img src={item.image} alt={item.title} className="h-28 w-28 object-contain" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.title}</h3>
                  <p className="text-xs font-bold text-teal-500 uppercase tracking-widest">{item.category}</p>
                  <p className="text-gray-900 font-black text-xl pt-2">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-10">
                <div className="flex items-center bg-gray-50 rounded-2xl p-1 border border-gray-100">
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="p-2 hover:bg-white hover:shadow-sm rounded-xl text-gray-500 hover:text-rose-500 cursor-pointer transition-all active:scale-90"><Minus size={18} /></button>
                  <span className="font-black text-gray-900 px-4 min-w-10 text-center">{item.quantity}</span>
                  <button onClick={() => dispatch(addToCart(item))} className="p-2 hover:bg-white hover:shadow-sm rounded-xl text-gray-500 hover:text-emerald-500 cursor-pointer transition-all active:scale-90"><Plus size={18} /></button>
                </div>
                <button onClick={() => dispatch(removeItem(item.id))} className="p-3 bg-gray-50 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-2xl cursor-pointer transition-all active:scale-90 shadow-sm hover:shadow"><Trash2 size={22} /></button>
              </div>
            </div>
          ))}
        </div>

        {/* --- RIGHT SIDE SUMMARY --- */}
        <div className="lg:col-span-5">
          <div className="bg-[#fcfcfc] p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 sticky top-24">
            
            <h2 className="text-2xl font-black mb-8 text-gray-900 tracking-tight uppercase">Order Details</h2>
            <div className="space-y-5 text-gray-500 font-medium">
               <div className="flex justify-between items-center"><span>Subtotal</span><span className="text-gray-900 font-bold">${subtotal.toFixed(2)}</span></div>
               <div className="flex justify-between items-center"><span>Tax Cost (10%)</span><span className="text-gray-900 font-bold">${tax.toFixed(2)}</span></div>
               <div className="flex justify-between items-center pb-4">
                 <span>Shipping Fee</span>
                 <span className={shipping === 0 ? "text-emerald-500 font-black" : "text-gray-900 font-bold"}>
                   {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                 </span>
               </div>
            </div>

            {/* Promo Code Input */}
            <div className="mt-6 space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Promotional Code</label>
              <div className="flex flex-wrap gap-2">
                <div className="relative flex-1 group">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input type="text" placeholder="Enter code here..." className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black transition-all text-sm" />
                </div>
                <button className="bg-black text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-teal-800 transition-all active:scale-95 cursor-pointer shadow-sm w-full md:w-auto">Apply</button>
              </div>
            </div>

            <div className="h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent my-8"></div>

            <div className="flex justify-between items-center mb-10">
              <span className="text-gray-400 font-bold uppercase tracking-tighter">Total Amount</span>
              <span className="text-3xl font-black text-gray-900 tracking-tighter">${total.toFixed(2)}</span>
            </div>

            {/* --- SMART CHECKOUT BUTTON --- */}
            {isSignedIn ? (
              <button 
                onClick={() => navigate('/checkout')}
                className="group w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-teal-600 cursor-pointer transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <span className="tracking-wide">CHECKOUT&nbsp;&nbsp;NOW</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <SignInButton mode="modal" forceRedirectUrl="/checkout"
                fallbackRedirectUrl="/checkout"
                signUpForceRedirectUrl="/checkout"
                signUpFallbackRedirectUrl="/checkout">
                <button className="group w-full bg-teal-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-black cursor-pointer transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3">
                  <span className="tracking-wide">LOGIN&nbsp;&nbsp;TO&nbsp;&nbsp;ORDER</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </SignInButton>
            )}
            
            <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <ShieldCheck size={16} className="text-emerald-500" />
              Secure Payment Guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;