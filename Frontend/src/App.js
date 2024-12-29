import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import LoginChoice from "./Pages/LoginChoice";
import Login from "./Pages/Login";
import UserRegistrationForm from "./Pages/users/UserRegistration";
// import UserChat from "./Pages/users/UserChat";



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
          <Route path='/login-choice' element={<LoginChoice/>} />
          <Route path='/login' element={<Login />} />

          {/* User Routes */}
          <Route path='/user-registration' element={<UserRegistrationForm/>} />
          {/*<Route path='/user-chat' element={<UserChat/>} />*/}

          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
