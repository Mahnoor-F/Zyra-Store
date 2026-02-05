import { ShieldCheck, Leaf, Globe, ArrowRight } from "lucide-react";
import studio from "../assets/studio.png";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-fadeIn ">
      
      {/* --- Hero Section --- */}
      <div className="text-center mb-30 space-y-8">
        <div className="inline-block">
          <p className="text-teal-600 font-bold uppercase text-[10px] mb-4">Established 2026</p>
          <h1 className="text-5xl md:text-7xl font-medium text-gray-900 italic mb-6 leading-22">
            Redefining the <br />
            <span className="font-black italic">Art of Living.</span>
          </h1>
          <div className="h-2 w-1/2 bg-teal-600 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* --- The Story Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
        <div className="lg:col-span-6 relative group">
          <div className="aspect-4/5 bg-gray-50 rounded-[4rem] overflow-hidden relative border border-gray-100 shadow-2xl">
            
            {/* Real Image Implementation */}
            <img 
              src={studio}
              alt="ZYRA Studio Aesthetic"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Luxury Overlay */}
            <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-all duration-700"></div>
            
            {/* Subtle Branding */}
            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
              <p className="text-white font-black tracking-[0.3em] text-[10px] uppercase italic">
                The Archive Studio
              </p>
            </div>
          </div>
          
          {/* Floating Luxury Badge */}
          <div className="absolute -bottom-10 -right-6 bg-black p-10 rounded-[2.5rem] shadow-2xl hidden md:block border border-gray-800 z-20">
            <p className="text-4xl font-black text-white italic">100%</p>
            <p className="text-[9px] font-bold text-teal-500 uppercase tracking-[0.3em] mt-2 text-center">Handpicked Quality</p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-12 lg:pl-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-15">
              The ZYRA Vision <br/> 
              <span className="text-teal-600 italic">by Mahnoor</span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-2xl text-gray-400 leading-relaxed font-bold italic border-l-4 border-teal-600 pl-8">
              "At ZYRA, we believe that luxury isn't about the price tag—it's about the soul of the product and the experience it brings."
            </p>
            
            <p className="text-sm text-gray-600 leading-loose font-medium max-w-lg">
              Founded by <span className="text-black font-black underline underline-offset-8 decoration-teal-600 cursor-pointer uppercase tracking-widest">Mahnoor</span>, our mission is to bridge the gap between high-fashion aesthetics and minimalist everyday wear. Every single item in our archive undergoes a rigorous selection process, ensuring that only the finest craftsmanship reaches your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* --- Values Grid (Mirror/Glass Cards) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Value 1 */}
        <div className="group p-14 bg-white border border-gray-100 rounded-[3.5rem] hover:bg-black transition-all duration-700 shadow-xl shadow-gray-100 hover:shadow-black/20">
          <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-teal-600 transition-colors">
            <ShieldCheck size={32} className="text-teal-600 group-hover:text-white transition-colors" />
          </div>
          <h4 className="font-black text-black mb-6 uppercase text-xs tracking-[0.3em] group-hover:text-white">Purity of Quality</h4>
          <p className="text-[11px] text-gray-400 leading-loose group-hover:text-gray-300 font-medium transition-colors">
            We source only the most resilient and premium materials from across the globe, ensuring longevity in every stitch.
          </p>
        </div>

        {/* Value 2 */}
        <div className="group p-14 bg-black rounded-[3.5rem] transition-all duration-700 shadow-2xl">
          <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-teal-600 transition-colors">
            <Leaf size={32} className="text-teal-500 transition-colors" />
          </div>
          <h4 className="font-black text-white mb-6 uppercase text-xs tracking-[0.3em]">Eco-Conscious Ethics</h4>
          <p className="text-[11px] text-gray-500 leading-loose font-medium">
            Sustainability is at our core. From plastic-free packaging to ethical labor, ZYRA cares for the planet and its people.
          </p>
        </div>

        {/* Value 3 */}
        <div className="group p-14 bg-white border border-gray-100 rounded-[3.5rem] hover:bg-black transition-all duration-700 shadow-xl shadow-gray-100 hover:shadow-black/20">
          <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-teal-600 transition-colors">
            <Globe size={32} className="text-teal-600 group-hover:text-white transition-colors" />
          </div>
          <h4 className="font-black text-black mb-6 uppercase text-xs tracking-[0.3em] group-hover:text-white">Global Standard</h4>
          <p className="text-[11px] text-gray-400 leading-loose group-hover:text-gray-300 font-medium transition-colors">
            Providing a 24/7 concierge level of service to our clients worldwide, because you deserve the absolute best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;