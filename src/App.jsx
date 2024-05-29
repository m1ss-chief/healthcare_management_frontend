import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegisterPatient from "./components/RegisterPatient";
import CancelAppointment from "./components/CancelAppointment";
import HomePage from "./components/HomePage";
import Root from "./components/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppointmentRegistration from "./components/AppointmentRegistration";
import FirstAidAdvice from "./components/FirstAidAdvice";
import MedicineInfo from "./components/MedicineInfo";
import BookAppointment from "./components/BookAppointment";
import Appointments from "./components/Appointments";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="registration" element={<AppointmentRegistration />}/>
        {/* <Route path="appointment" element={<AppointmentRegistration />}>
          <Route path="bookappointment" element={<div>hello</div>} />
        </Route> */}
        <Route path="appointments" element={<Appointments />} />
        <Route path="bookappointment" element={<BookAppointment />} />
        <Route path="cancelappointment" element={<CancelAppointment />} />
        <Route path="firstaid" element={<FirstAidAdvice />} />
        <Route path="medicineinfo" element={<MedicineInfo />} />
      </Route>
    )
  );

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
      {/* <HomePage /> */}
    </>
  );
}

export default App;
