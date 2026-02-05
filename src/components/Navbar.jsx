import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, ArrowRight, User, Settings } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.body.style.overflow = (isOpen || isSearchOpen) ? 'hidden' : 'unset';
  }, [isOpen, isSearchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/collections', { state: { search: query } });
      setIsSearchOpen(false);
      setQuery("");
    }
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-110 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex justify-between items-center">
            
            {/* --- LOGO WITH ANIMATED BORDER --- */}
            <Link to="/" className="group relative py-2">
              <div className="flex items-center">
                <div className="bg-black text-white w-9 h-9 flex items-center justify-center font-bold text-lg transition-transform duration-500 group-hover:bg-teal-600">Z</div>
                <span className="ml-2 text-xl font-bold tracking-[0.3em] text-gray-900">YRA</span>
              </div>
              {/* Bottom Border Animation */}
              <span className="absolute bottom-0 left-0 w-9.5 rounded-full h-1 bg-teal-600 transition-all duration-700 group-hover:w-full"></span>
            </Link>

            {/* --- DESKTOP NAV WITH SLIDING BORDERS --- */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-all relative py-2 group
                    ${isActive(link.path) ? 'text-black' : 'text-gray-400 hover:text-black'}`}
                >
                  {link.name}

                  <span className={`absolute bottom-0 left-0 h-1 rounded-full bg-black transition-all duration-700 
                    ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                  />
                </Link>
              ))}
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-2 md:space-x-5">
              <button onClick={() => setIsSearchOpen(true)} className="p-2 text-gray-400 hover:text-black transition-transform hover:scale-110 cursor-pointer">
                <Search size={22} />
              </button>

              {/* Clerk Section */}
              <div className="hidden md:block">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="p-2 text-gray-400 hover:text-black transition-transform hover:scale-110 cursor-pointer">
                      <User size={22} />
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div onClick={() => navigate('/profile')} className="ml-2 border-2 border-transparent hover:border-black rounded-full p-0.5 transition-all cursor-pointer">
                    <div className="pointer-events-none flex items-center justify-center">
                      <UserButton/>
                    </div>
                  </div>
                </SignedIn>
              </div>

              {/* --- ANIMATED CART ICON --- */}
              <Link to="/cart" className="relative p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                <ShoppingBag size={20} className={totalQuantity > 0 ? 'text-black' : 'text-gray-400'} />
                {totalQuantity > 0 && (
                  <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-teal-600 text-[8px] font-bold text-white shadow-lg animate-bounce">
                    {totalQuantity}
                  </span>
                )}
              </Link>

              {/* Mobile Toggle */}
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-black transition-transform active:scale-75">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- PREMIUM SEARCH OVERLAY --- */}
      <div className={`fixed inset-0 z-500 bg-white transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] 
        ${isSearchOpen 
          ? "translate-y-0 opacity-100 pointer-events-auto" 
          : "-translate-y-full opacity-0 pointer-events-none"
        }`}>
        
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col relative">
          <div className="flex justify-end py-10 relative z-510">
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation(); 
                setIsSearchOpen(false);
              }}
              className="group p-4 bg-gray-50 rounded-full hover:bg-black transition-all duration-500 cursor-pointer"
            >
              <X size={24} className="text-black group-hover:text-white transition-colors" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center -mt-20 px-4">
            <p className="text-[10px] font-black text-teal-600 uppercase tracking-[0.5em] mb-6 text-center">
              What are you looking for?
            </p>
            
            <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl relative">
              <input 
                autoFocus={isSearchOpen}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search..."
                className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-2xl md:text-4xl font-black uppercase focus:border-black outline-none transition-all duration-500 placeholder:text-gray-100"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black transition-colors cursor-pointer">
                <Search size={32} />
              </button>
            </form>

            <div className="flex flex-wrap gap-8 mt-10 justify-center">
              <span className="text-[10px] font-black text-gray-300 uppercase">Popular:</span>
              {['Shirts', 'Jewelry', 'Tech'].map(item => (
                <button 
                  key={item} 
                  type="button"
                  onClick={() => setQuery(item)}
                  className="text-[10px] font-black uppercase tracking-widest hover:text-teal-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile Sidebar Overlay --- */}
      <div 
        className={`fixed inset-0 z-120 bg-black/60 backdrop-blur-md transition-all duration-500 md:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* --- Mobile Side Drawer --- */}
      <aside className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white z-130 shadow-2xl transition-transform duration-500 md:hidden flex flex-col
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-8 pt-10 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-black tracking-widest uppercase">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-50 rounded-full"><X size={20} /></button>
        </div>

        <div className="flex-1 px-8 py-10 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between py-4 text-xl font-black uppercase tracking-tighter border-b border-gray-50
                ${isActive(link.path) ? 'text-teal-600 border-teal-600' : 'text-gray-900'}`}
            >
              {link.name}
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>

        {/* --- CLERK MOBILE LOGIN/LOGOUT --- */}
        <div className="p-8 bg-gray-50">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center justify-center gap-3 w-full bg-black text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 transition-all cursor-pointer">
                Login / Register
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div 
              onClick={() => {
                navigate('/profile');
                setIsOpen(false);
              }}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-black transition-all group active:scale-95"
            >
              <div className="flex items-center gap-3">
                <div className="pointer-events-none">
                  <UserButton />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">My Account</span>
              </div>
              <ArrowRight size={16} className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </div>
          </SignedIn>
        </div>
      </aside>
    </>
  );
};

export default Navbar;