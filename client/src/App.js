import react, { useEffect } from "react"
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom"
import { BlankLayout, FullLayout, Error } from "./layout"
import AuthService from "./services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, addUser } from "./app/slices/AuthSlice"
const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUSer = useSelector(selectUser)
  useEffect(() => {
    AuthService.validateToken()
      .then((response) => {
        dispatch(addUser(response?.data?.data))
      })
      .catch((err) => {
        if (err.response.staus = 420)
          sessionStorage.clear()
        navigate("/login")
      })

  }, [])
  const token = sessionStorage.getItem("access");
  return loggedUSer._id || token ? children : <Navigate to="/login" />;
}
function App() {
  return (
    <Routes>
      <Route path="/*" element={<BlankLayout />} />
      <Route path="/secured/*" element={
        <ProtectedRoutes>
          <FullLayout />
        </ProtectedRoutes>
      } />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
