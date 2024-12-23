import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import ContactPage from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import UserRegistrationForm from "./Pages/UserRegistration";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home/></Base>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/user-registration' element={<UserRegistrationForm/>} />

          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
