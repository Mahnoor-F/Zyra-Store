# ZYRA — The Modern E-Commerce Experience

**ZYRA** is a high-end, premium e-commerce web application designed with modern aesthetics and a focus on seamless user experience. Built using **React.js** and **Vite**, it ensures high performance, speed, and a luxury feel.

---

## ✨ Key Features

* **Premium UI/UX:** A minimalist luxury interface built with **Tailwind CSS** featuring smooth custom transitions.
* **Complete Authentication:** Fully secure User Sign-up, Login, and Profile management powered by **Clerk Auth**.
* **State Management:** Robust handling of Cart and Product data using **Redux Toolkit** for a predictable state.
* **Dynamic Collections:** Real-time search functionality and category-based filtering (Electronics, Jewelry, Clothing).
* **Persistent Cart:** Integrated with **LocalStorage** so your shopping bag stays saved even after a page refresh.
* **Seamless Checkout:** An interactive checkout flow with address handling and a "Success" confetti celebration.
* **WhatsApp Integration:** A dedicated floating WhatsApp button for instant customer support and queries.
* **Fully Responsive:** Optimized for a perfect experience across Mobile, Tablet, and Desktop screens.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Icons:** Lucide-React
* **State Management:** Redux Toolkit (@reduxjs/toolkit)
* **Authentication:** Clerk (@clerk/clerk-react)
* **API Integration:** FakeStoreAPI
* **Routing:** React Router DOM v6

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/zyra-ecommerce.git](https://github.com/your-username/zyra-ecommerce.git)
    cd zyra-ecommerce
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Set Environment Variables:**
    Create a `.env` file in the root directory and add your Clerk Key:
    ```env
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
    ```

4.  **Launch Project:**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

* `src/components`: Reusable UI elements (Navbar, Footer, ProductCard).
* `src/features`: Redux logic and Slices (cartSlice, productSlice).
* `src/pages`: Main application views (Home, Collections, Cart, Checkout).
* `src/store.js`: Global Redux store configuration.

---

## 👤 Author

* **Created by:** Mahnoor
* **GitHub:** [https://github.com/Mahnoor-F](https://github.com/Mahnoor-F)
