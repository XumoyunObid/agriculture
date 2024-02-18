import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import { main_pages } from "./Router/MainRouter";
import SingleProducts from "./Pages/Shop/SingleProducts/SingleProducts";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={crypto.randomUUID()}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="shop/singleproduct/:id" element={<SingleProducts />} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
