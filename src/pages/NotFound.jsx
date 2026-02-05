import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center animate-fadeIn">
      <div className="absolute opacity-[0.03] font-black text-[20vw] select-none pointer-events-none">
        404
      </div>

      <div className="relative z-10">
        <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-100 shadow-inner">
          <Search size={40} className="text-gray-300" />
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-4">
          LOST?
        </h1>
        
        <p className="text-gray-500 max-w-md mx-auto mb-10 font-medium leading-relaxed">
          "Style is a way to say who you are without having to speak." 
          Unfortunately, this page doesn't say much. It seems you've taken a wrong turn.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="group bg-black text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-teal-700 transition-all shadow-xl flex items-center gap-2"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <Link 
            to="/collections" 
            className="border-2 border-gray-200 text-gray-900 px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:border-black transition-all"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;