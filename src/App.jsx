import { Route, Routes } from "react-router";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import ResetPass from "./Pages/ResetPass";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import { AppContext } from "./Context/AppContext";
import PassRecovery from "./Pages/PassRecovery";

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/reset-password" element={<ResetPass />}></Route>
              <Route path="/password-recovery" element={<PassRecovery />}></Route>
              <Route path="*" element={<Home />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AppContext>
    </>
  );
}

export default App;
