import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import styles from "./App.module.css"
import "./root.css"
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <div className={styles.App}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
