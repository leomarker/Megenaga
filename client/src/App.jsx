import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "/scenes/homepage";
import LoginPage from "/scenes/loginpage";
import ProfilePage from "/scenes/profilepage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/profile/:userId" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
