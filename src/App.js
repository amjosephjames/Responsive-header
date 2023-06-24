import React from "react";
import Homescreen from "../src/components/homescreen";
import Signup from "../src/components/signup";
import Signin from "../src/components/signin";
import Resetpassword from "../src/components/resetpassword";
import Forgotpassword from "../src/components/forgotpassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    // <div>
    //   <Homescreen />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
