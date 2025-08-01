import { Route, Routes } from "react-router";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import ResetPass from "./Pages/ResetPass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset-password" element={<ResetPass />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
