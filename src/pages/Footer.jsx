import { Facebook, Instagram, X, Youtube, ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'New Arrivals', path: '/' },
      { name: 'Best Sellers', path: '/collections' },
      { name: 'Menswear', path: '/collections' },
      { name: 'Accessories', path: '/collections' },
    ],
    support: [
      { name: 'Order Tracking', path: '/profile' },
      { name: 'Shipping Policy', path: '/' },
      { name: 'Return & Exchange', path: '/' },
      { name: 'FAQs', path: '/' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Contact Us', path: '/contact' }, 
      { name: 'Terms of Service', path: '/' },
      { name: 'Privacy Policy', path: '/' },
    ]
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center mb-8">
              <div className="bg-white text-black w-10 h-10 flex items-center justify-center font-bold text-xl">Z</div>
              <span className="ml-3 text-2xl font-bold tracking-[0.4em]">YRA</span>
            </Link>
            <p className="text-gray-400 text-sm font-medium max-w-sm leading-relaxed mb-8">
              Redefining the modern wardrobe with a focus on sustainable luxury and timeless aesthetics. Created by Mahnoor.
            </p>
            <div className="flex gap-5">
              {[Instagram, Facebook, X, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Join the Inner Circle</h3>
            <form className="relative max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL" 
                className="w-full bg-transparent border-b border-gray-800 py-4 text-xs font-bold outline-none focus:border-white transition-colors tracking-widest"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest cursor-pointer">
                Subscribe <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-gray-900 pt-16">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Collections</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map(link => (
                <li key={link.name}><Link to={link.path} className="text-gray-500 hover:text-white text-xs font-bold uppercase transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map(link => (
                <li key={link.name}><Link to={link.path} className="text-gray-500 hover:text-white text-xs font-bold uppercase transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.name}><Link to={link.path} className="text-gray-500 hover:text-white text-xs font-bold uppercase transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Contact</h4>
            <Link to="/contact" className="flex items-start gap-3 text-gray-500 hover:text-white transition-colors cursor-pointer">
              <Mail size={16} />
              <span className="text-xs font-bold uppercase break-all block w-full">zyraofficail@gmail.com</span>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 gap-6">
          <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
            © {currentYear} ZYRA STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-3 opacity-20 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" alt="Visa" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-5 opacity-20 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" alt="Mastercard" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;