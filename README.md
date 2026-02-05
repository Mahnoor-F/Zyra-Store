ZYRA — The Modern E-Commerce Experience
ZYRA is a high-end, premium e-commerce web application designed with modern aesthetics and a focus on seamless user experience. The project is built using React.js and Vite for high performance and speed.

✨ Features
Premium UI/UX: A luxury interface built with Tailwind CSS featuring smooth custom animations and a minimalist aesthetic.

Complete Authentication: Secure User Sign-up, Login, and Profile management powered by Clerk Auth.

State Management: Global handling of Cart and Product data using Redux Toolkit for a predictable state container.

Dynamic Collections: Real-time search functionality and category-based product filtering for easy navigation.

Persistent Cart: Integrated with localStorage to ensure the user's shopping bag remains saved even after a page refresh.

Seamless Checkout: An interactive checkout process including address forms and an "Order Success" confetti effect.

WhatsApp Support: A fixed WhatsApp floating button for direct and instant customer support.

Responsive Design: Fully optimized for all screen sizes, ensuring a perfect look on desktops, tablets, and mobile devices.

🛠️ Tech Stack
Frontend Library: React.js (Vite)

Styling: Tailwind CSS

Icons: Lucide-React

State Management: Redux Toolkit

Authentication: Clerk (@clerk/clerk-react)

API Integration: FakeStoreAPI

Routing: React Router DOM (v6)

🚀 Getting Started
Follow these steps to run the project on your local system:

Clone the Repository:
Bash
git clone https://github.com/your-username/zyra-ecommerce.git
cd zyra-ecommerce


Install Dependencies:
Bash
npm install
Set Environment Variables: Create a .env file in the root directory and add your Clerk Publishable Key:

Code snippet
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here


Start the Project:
Bash
npm run dev


📂 Project Structure
Plaintext
src/
├── components/      # Reusable UI (Navbar, Footer, ProductCard, etc.)
├── features/        # Redux Slices (cartSlice, productSlice)
├── pages/           # Application Screens (Home, Cart, Checkout, Profile)
├── store.js         # Redux Store Configuration
└── main.jsx         # App Entry Point & Providers


👤 Author
Created by: Mahnoor
