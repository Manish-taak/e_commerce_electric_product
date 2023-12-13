import './App.css';
import Footer from './componets/common/footer';
import Header from './componets/common/header';
import Index from './componets/pages/index.js';
import Products from './componets/pages/products.js';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import TopDeals from './componets/pages/topdeals.js';
import Cart from './componets/pages/cart.js';
import Helpcenter from './componets/helpcenter/help.js';
import Getintuch from './componets/getintuch.js';
import { useEffect } from 'react';
import Addtocart from './componets/cartpages/addtocart.js';
import Checktout from './componets/pages/checktout.js';
function App() {

  useEffect(() => {
    // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
      // IE Fallback
      function (callback) { window.setTimeout(callback, 1000 / 60) };
    var elementsToShow = document.querySelectorAll('.show-on-scroll');
    function loop() {
      Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        }
      });
      scroll(loop);
    }
    loop();
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
      var rect = el?.getBoundingClientRect();
      return (
        rect?.top >= 0 &&
        rect?.left >= 0 &&
        rect?.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect?.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Index />} path='/' ></Route>
          <Route element={<Products />} path='/products' ></Route>
          <Route element={<TopDeals />} path='/topDeals' ></Route>
          <Route element={<Helpcenter />} path='/helpcenter' ></Route>
          <Route element={<Getintuch />} path='/getintuch' ></Route>
          <Route element={<Cart />} path='/cart' ></Route>
          <Route element={<Addtocart />} path='/addtocart' ></Route>
          <Route element={<Checktout />} path='/checkout' ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
