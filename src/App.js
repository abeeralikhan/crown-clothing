import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Cart = () => {
  return <h1>Welcome to the Cart!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
