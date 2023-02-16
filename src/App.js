import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

function App() {
  const token = localStorage.getItem("token");
  const profileUrl = token ? "profile" : "";
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path={`/${profileUrl}`} element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
