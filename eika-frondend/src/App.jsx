import AddItem from "./pages/AddItem";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ShoppingList from "./pages/ShoppingList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/style.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/shopping-list" element={<ShoppingList />}></Route>
          <Route path="/add-item" element={<AddItem />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
