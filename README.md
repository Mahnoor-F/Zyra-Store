# ZYRA — The Modern E-Commerce Experience

**ZYRA** ek high-end, premium e-commerce web application hai jo modern aesthetics aur seamless user experience ko dhyan mein rakh kar banaya gaya hai. Yeh project React.js aur Vite ke saath build kiya gaya hai, jo speed aur performance provide karta hai.

---

## ✨ Features

* **Premium UI/UX:** Tailwind CSS aur Framer-motion style animations ke saath ek luxury interface.
* **Complete Authentication:** Clerk Auth ka use karte hue Secure User Sign-up, Login, aur Profile management.
* **State Management:** Redux Toolkit ke zariye Cart aur Product data ko global level par handle kiya gaya hai.
* **Dynamic Collections:** Products ko category-wise filter karne aur real-time search karne ki facility.
* **Persistent Cart:** `localStorage` integration taake user ka cart refresh karne par bhi save rahe.
* **Seamless Checkout:** Ek interactive checkout process jisme address handling aur "Order Success" confetti effect shamil hai.
* **WhatsApp Support:** Customer queries ke liye fixed WhatsApp floating button integration.
* **Responsive Design:** Desktop se lekar mobile tak, har screen size ke liye fully optimized.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Icons:** Lucide-React
* **State Management:** Redux Toolkit
* **Authentication:** Clerk (@clerk/clerk-react)
* **API Integration:** FakeStoreAPI
* **Routing:** React Router DOM (v6)

---

## 🚀 Getting Started

Is project ko apne local system par chalane ke liye niche diye gaye steps follow karein:

1.  **Repository Clone Karein:**
    ```bash
    git clone [https://github.com/your-username/zyra-ecommerce.git](https://github.com/your-username/zyra-ecommerce.git)
    cd zyra-ecommerce
    ```

2.  **Dependencies Install Karein:**
    ```bash
    npm install
    ```

3.  **Environment Variables Set Karein:**
    Ek `.env` file banayein aur usmein apni Clerk Publishable Key add karein:
    ```env
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
    ```

4.  **Project Start Karein:**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

```text
src/
├── components/      # Reusable UI (Navbar, Footer, ProductCard, etc.)
├── features/        # Redux Slices (cartSlice, productSlice)
├── pages/           # Application Screens (Home, Cart, Checkout, Profile)
├── store.js         # Redux Store Configuration
└── main.jsx         # App Entry Point & Providers