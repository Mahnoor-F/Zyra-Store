import { Mail, MessageCircle, Send, ExternalLink } from 'lucide-react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent to Zyra Official!");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 animate-fadeIn">
      
      <div className="text-center mb-28">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic mb-4 leading-[0.8]">
          Get In <span className="text-gray-100/80">Touch</span>
        </h1>
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.5em] mt-6">
          Premium Support for the Modern Aesthetic
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT SIDE: LUXURY INFO CARDS */}
        <div className="lg:col-span-5 space-y-8">
  
        {/* Email Glass/Mirror Card */}
        <div className="group relative bg-white/40 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-white/60 shadow-2xl shadow-gray-200/40 overflow-hidden transition-all duration-500 hover:-translate-y-2">
          {/* Background Decorative Icon */}
          <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
            <Mail size={180} />
          </div>

          <h3 className="text-[10px] font-black uppercase tracking-widest text-teal-700 mb-6 flex items-center gap-2">
            <span className="w-8 h-1px bg-teal-700"></span> Digital Mail
          </h3>
          
          <div className="relative z-10">
            <p className="text-[10px] text-gray-500 font-black uppercase mb-2">Send us an inquiry at</p>
            
            <a 
              href="mailto:zyraofficail@gmail.com" 
              className="text-xl sm:text-2xl md:text-3xl font-black  hover:text-teal-600 transition-colors block wrap-break-words leading-tight"
            >
              zyraofficail@gmail.com
            </a>
          </div>
        </div>

        {/* WhatsApp Mirror Card (Dark Glass) */}
        <a 
          href="https://wa.me/923298025408" 
          target="_blank" 
          rel="noreferrer"
          className="group relative block bg-black/90 backdrop-blur-2xl p-6 md:p-8 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
        >
          {/* Background Decorative Icon */}
          <div className="absolute -top-6 -right-6 text-white opacity-[0.05] group-hover:opacity-[0.15] transition-opacity pointer-events-none">
            <MessageCircle size={180} />
          </div>

          <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
            <span className="w-8 h-1px bg-emerald-400"></span> Instant Response
          </h3>

          <div className="relative z-10">
            <p className="text-[10px] text-gray-400 font-black uppercase mb-2">WhatsApp Official</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-2xl sm:text-3xl font-black text-white">
                0329 8025408
              </p>
              <div className="bg-emerald-500 p-3 rounded-full text-white transform group-hover:rotate-45 transition-transform duration-500 shrink-0">
                <ExternalLink size={20} />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/5">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.2em]">Online Now</span>
            </div>
          </div>
        </a>
      </div>

        {/* RIGHT SIDE: MODERN FORM */}
        <div className="lg:col-span-7 bg-[#fafafa] p-10 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-inner">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Name Input */}
              <div className="relative group">
                <input 
                  type="text" 
                  required 
                  className="peer w-full bg-transparent border-b-2 border-gray-200 py-4 outline-none focus:border-black transition-all font-medium text-slate-700 text-sm" 
                  placeholder=" " 
                />
                <label className="absolute left-0 top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all 
                  peer-placeholder-shown:text-xs 
                  peer-placeholder-shown:top-4 
                  peer-focus:-top-4 
                  peer-focus:text-[10px] 
                  peer-focus:text-black
                  peer-not-placeholder-shown:-top-4 
                  peer-not-placeholder-shown:text-[10px] 
                  peer-not-placeholder-shown:text-black pointer-events-none">
                  Your Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input 
                  type="email" 
                  required 
                  className="peer w-full bg-transparent border-b-2 border-gray-200 py-4 outline-none focus:border-black transition-all font-medium text-slate-700 text-sm " 
                  placeholder=" " 
                />
                <label className="absolute left-0 top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all 
                  peer-placeholder-shown:text-xs 
                  peer-placeholder-shown:top-4 
                  peer-focus:-top-4 
                  peer-focus:text-[10px] 
                  peer-focus:text-black
                  peer-not-placeholder-shown:-top-4 
                  peer-not-placeholder-shown:text-[10px] 
                  peer-not-placeholder-shown:text-black pointer-events-none">
                  Email Address
                </label>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative group">
              <textarea 
                required 
                rows="4" 
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-4 outline-none focus:border-black transition-all font-medium text-slate-700 text-sm resize-none" 
                placeholder=" "
              ></textarea>
              <label className="absolute left-0 top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all 
                peer-placeholder-shown:text-xs 
                peer-placeholder-shown:top-4 
                peer-focus:-top-4 
                peer-focus:text-[10px] 
                peer-focus:text-black
                peer-not-placeholder-shown:-top-4 
                peer-not-placeholder-shown:text-[10px] 
                peer-not-placeholder-shown:text-black pointer-events-none">
                Your Message
              </label>
            </div>

            <button type="submit" className="w-full bg-black text-white py-6 rounded-2xl font-bold text-[11px] uppercase tracking-[0.4em] hover:bg-teal-700 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center justify-center gap-4 cursor-pointer active:scale-95 group">
              Send Message 
              <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;