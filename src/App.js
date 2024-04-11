import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import OTP from "./components/OTP";
import Success from "./components/Success";
// import Disclaimer from "./components/Disclaimer";

function App() {

  const token = sessionStorage.getItem("token");
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />} element={ <Main token={token} /> }>
        <Route path="login" element={<Login />} />
        <Route path="otp" element={<OTP />} />
        <Route path="success" element={<Success />} />
        {/* <Route path="disclaimer" element={<Disclaimer />} /> */}
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
