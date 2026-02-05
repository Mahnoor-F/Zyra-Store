import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cartSlice';
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import confetti from 'canvas-confetti';
import { ShieldCheck, CreditCard, Truck, CheckCircle2, ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const dispatch = useDispatch();
  const [orderStep, setOrderStep] = useState('shipping'); 

  const [formData, setFormData] = useState({
    email: user?.primaryEmailAddress?.emailAddress || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    address: '', city: '', zip: '', phone: ''
  });


  useEffect(() => {
    if (isLoaded && user) {
      setFormData(prev => ({
        ...prev,
        email: user.primaryEmailAddress?.emailAddress || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
      }));
    }
  }, [user, isLoaded]);


  useEffect(() => {
    if (orderStep === 'success') {

     window.scrollTo({ top: 0, behavior: 'smooth' });
      // Luxury Gold aur Teal mix confetti
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Do sides se confetti girega
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  }, [orderStep]);


  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + (subtotal * 0.1) + (subtotal > 100 ? 0 : 5);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderStep('success');
    dispatch(clearCart());
  };

  if (orderStep === 'success') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 animate-fadeIn">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle2 size={50} />
        </div>
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">Order Confirmed!</h1>
        <p className="text-gray-500 max-w-md mb-10 font-medium">
          Thank you, {formData.firstName}! Your style is on its way. We've sent a confirmation to {formData.email}.
        </p>
        <button 
          onClick={() => navigate('/collections')}
          className="bg-black text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-teal-700 transition-all shadow-xl cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <>
    <SignedOut>
        <RedirectToSignIn redirectUrl="/checkout" />
      </SignedOut>
    <SignedIn>
    <div className="max-w-7xl mx-auto px-6 py-16 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left: Checkout Form */}
        <div className="lg:col-span-7">
          <button onClick={() => navigate('/cart')} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-10 text-xs font-black uppercase tracking-widest cursor-pointer">
            <ArrowLeft size={16} /> Back to Bag
          </button>

          <form onSubmit={handlePlaceOrder}>
            <section className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Shipping Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-black outline-none transition-all font-medium" />
                <input required name="lastName" value={formData.lastName} placeholder="Last Name" onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-black outline-none transition-all font-medium" />
                <input required name="email" value={formData.email} type="email" placeholder="Email Address" onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl md:col-span-2 focus:border-black outline-none transition-all font-medium" />
                <input required name="address" placeholder="Shipping Address" onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl md:col-span-2 focus:border-black outline-none transition-all font-medium" />
                <input required name="city" placeholder="City" onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-black outline-none transition-all font-medium" />
                <input required name="zip" placeholder="Postal Code" onChange={handleInputChange} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-black outline-none transition-all font-medium" />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Payment Method
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-6 border-2 border-black rounded-2xl cursor-pointer bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 border-4 border-black rounded-full" />
                    <div>
                      <p className="font-black text-xs uppercase tracking-widest">Cash on Delivery</p>
                      <p className="text-[10px] text-gray-500 uppercase mt-1">Pay when your package arrives</p>
                    </div>
                  </div>
                  <Truck size={24} />
                </label>

                <div className="p-6 border border-gray-200 rounded-2xl bg-gray-50/50 opacity-50 grayscale flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className="w-5 h-5 border-2 border-gray-200 rounded-full" />
                     <p className="font-black text-xs uppercase tracking-widest">Credit Card (Coming Soon)</p>
                   </div>
                   <CreditCard size={24} />
                </div>
              </div>
            </section>

            <button type="submit" className="w-full bg-black text-white py-6 rounded-2xl font-black text-sm cursor-pointer uppercase tracking-[0.3em] px-3 hover:bg-teal-700 transition-all shadow-2xl active:scale-[0.98]">
               Complete Purchase • ${total.toFixed(2)}
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] sticky top-32 border border-gray-200">
            <h3 className="font-black uppercase text-xs tracking-widest mb-8 text-gray-400">Review Items</h3>
            <div className="max-h-100 overflow-y-auto pr-2 space-y-6 mb-8 custom-scrollbar">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-20 bg-white rounded-xl shrink-0 p-2 border border-gray-100">
                    <img src={item.image} className="w-full h-full object-contain" alt="" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase leading-tight">{item.title}</p>
                    <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase">Qty: {item.quantity}</p>
                    <p className="text-xs font-black mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 pt-6 border-t border-gray-200">
               <div className="flex justify-between text-[10px] font-black uppercase text-gray-400"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
               <div className="flex justify-between text-[10px] font-black uppercase text-gray-400"><span>Shipping</span><span>{subtotal > 100 ? "FREE" : "$5.00"}</span></div>
               <div className="flex justify-between text-xl font-black uppercase pt-4 border-t border-gray-200"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-widest bg-white py-3 rounded-full border border-gray-100">
              <ShieldCheck size={14} className="text-teal-600" />
              Encrypted & Secure Transaction
            </div>
          </div>
        </div>
      </div>
    </div>
    </SignedIn>
    </>
  );
};

export default Checkout;