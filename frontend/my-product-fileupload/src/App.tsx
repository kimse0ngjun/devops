import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductWrite from "./component/ProductWrite";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/write" element={<ProductWrite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
