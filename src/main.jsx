import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import  Root  from './components/Root'
import Women from './pages/Women.jsx'
import Men from './pages/Men.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import  About  from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import ProductProvider from './context/ProductContext.jsx'
import CartContextProvider from './context/CartContext.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import MenuContextProvider from './context/MenuContext.jsx'
import Cart from './components/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Order from './pages/Order.jsx'
import Login from './pages/Login.jsx'


const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
     {
      path: '/',
      element: <App />
     },
     {
      path: '/home',
      element: <Home />
     },
     {
      path: '/shop',
      element: <Shop />
     },
     {
      path: '/women',
      element: <Women />
     },
     {
      path: '/men',
      element: <Men />
     },
     {
      path: '/product/:id',
      element: <ProductDetails /> 
     },
     {
      path: '/about',
      element: <About />
     },
    {
      path: '/contact',
      element: <ContactUs />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/placeOrder',
      element: <PlaceOrder />
    },
    {
      path: '/order',
      element: <Order />
    },
    {
      path: '/login',
      element: <Login />
    }
    ],
  },
]);

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <CartContextProvider>
        <ProductProvider>
        <MenuContextProvider>
          <RouterProvider router={router} /> 
       </MenuContextProvider>
       </ProductProvider> 
       </CartContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
