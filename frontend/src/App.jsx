import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroceriesApp from "./GroceriesApp";
import LoginForm from "./LoginForm";
import NotFound from "./NotFound";
import NotAuthorized from "./NotAuthorized";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/main" element={<GroceriesApp />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
