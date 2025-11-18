## Project Overview

GreenNest focuses on providing a calm, nature-inspired UI for plant enthusiasts.  
Key highlights:

- Indoor plant products loaded from a local `plants.json` file.
- Secure authentication using Firebase (Login, Signup, Google Sign-In, Forgot Password).
- Protected route for plant details and profile-related pages.
- Consultation booking form on the plant details page.
- Responsive and minimal layout using Tailwind CSS and DaisyUI.
- Smooth navigation with React Router (SPA, no full-page reload).

---

## Main Features

- Responsive layout with Navbar and Footer visible on all routes.
- Hero section with slider (Swiper or Framer Motion) featuring plant banners and care slogans.
- Top Rated Indoor Plants section – cards loaded from JSON with image, name, price, rating, and details button.
- Plant Care Tips section – static content about watering, sunlight, and fertilizing.
- “Meet Our Green Experts” – 3–4 experts with image, name, and specialization.
- extra section such as “Eco Decor Ideas” or “Plant of the Week”.
- Plant Details page (Protected Route):
  - Large plant image, description, price, rating, stock, care level, provider.
  - “Book Consultation” form (name, email) with success toast on submit.
- Authentication:
  - Login with email/password and Google Sign-In.
  - Signup with name, email, photo URL, password.
  - Password validation: at least one uppercase, one lowercase, minimum length 6.
  - Forgot Password – sends password reset email via Firebase.
- My Profile page:
  - Shows user name, email, photo.
  - “Update Profile” button using Firebase `updateProfile()` to change displayName and photoURL.
- Toast-based success and error messages (no default browser alerts).
- Single Page Application behavior with React Router.

---

## Main Technologies

- React  
- React Router 
- Tailwind CSS  
- DaisyUI  
- Firebase Authentication  
- Swiper / Framer Motion  
- React Icons  

---

## Dependencies

The project mainly uses the following dependencies:

- react  
- react-router
- firebase  
- tailwindcss  
- daisyui  
- swiper
- react-hot-toast  
- react-icons  


---

