import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navbar from "./routes/navbar/navbar.component";

const Shop = () => {
  return <h1>Welcome to the Shop!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
