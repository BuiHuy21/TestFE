import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

function App() {
  const token = localStorage.getItem("token");
  // const profileUrl = token ? "profile" : "";
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/profile"
          element={token ? <Profile /> : <NotFound />}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
