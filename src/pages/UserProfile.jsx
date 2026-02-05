import { useUser, UserProfile, useClerk } from "@clerk/clerk-react";
import { ArrowLeft, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(() => navigate('/'));
  };
  

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 animate-fadeIn">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-12 text-[10px] font-black uppercase tracking-[0.3em] cursor-pointer"
      >
        <ArrowLeft size={16} /> Back to Store
      </button>

      {/* Header Section */}
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="relative mb-6">
            <img 
              src={user?.imageUrl} 
              className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover" 
              alt="profile" 
            />
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full"></div>
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tighter italic">Account Settings</h1>
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
          Manage your profile and security for {user?.firstName}
        </p>
        
        {/* Logout Button */}
        <button
          onClick={handleSignOut}
          className="mt-6 flex items-center gap-2 px-6 py-3 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer shadow-sm hover:shadow-lg active:scale-95"
        >
          <LogOut size={14} />
          Sign Out
        </button>
      </div>

      {/* Clerk User Profile Management */}
      <div className="w-full flex justify-center pb-20">
        <UserProfile 
          routing="hash"
          appearance={{
            elements: {
              rootBox: "w-full flex justify-center",
              card: "shadow-none border border-gray-100 rounded-[2.5rem] w-full max-w-[900px]",
              navbar: "md:flex hidden",
              pageScrollBox: "p-4 md:p-8",
              headerTitle: "text-black font-black uppercase tracking-tight",
              headerSubtitle: "text-gray-400 text-xs font-medium",
            }
          }} 
        />
      </div>
    </div>
  );
};

export default Profile;