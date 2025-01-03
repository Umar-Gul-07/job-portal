import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import LoginChoice from "./Pages/LoginChoice";
import Login from "./Pages/Login";
import UserRegistrationForm from "./Pages/users/UserRegistration";
import UserChat from "./Pages/users/UserChat";
import JobDetail from "./Pages/users/JobDetail";
import JobSearch from "./Pages/users/JobSearch";
import Notifications from "./Pages/users/Notification";
import JobListings from "./Pages/users/JobListing";
import UserSettingUpdateForm from "./Pages/users/UserSettingsUpdate";



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
          <Route path='/user-chat' element={<UserChat/>} />
          <Route path='/user/job-listing' element={<JobListings/>} />
          <Route path='/user/job-search' element={<JobSearch/>} />
          <Route path='/user/job-detail' element={<JobDetail/>} />
          <Route path='/user/notification' element={<Notifications/>} />
          <Route path='/user/settings/update' element={<UserSettingUpdateForm/>} />

          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
