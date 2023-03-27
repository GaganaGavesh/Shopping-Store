import { Route, Routes } from "react-router-dom";

import Layout from "./containers/layout/Layout";
import Products from "./containers/Products";
import ProductItem from "./containers/ProductItem";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/productItem" element={<ProductItem />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
