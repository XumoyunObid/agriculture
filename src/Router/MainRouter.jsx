import Home from "./../Pages/Home/Home";
import About from "./../Pages/About/About";
import Shop from "./../Pages/Shop/Shop";

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Shop />,
    path: "shop",
  },
];
