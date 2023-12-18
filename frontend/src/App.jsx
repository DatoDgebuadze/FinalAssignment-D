import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroceriesApp from "./GroceriesApp";
import LoginForm from "./LoginForm";
import NotFound from "./NotFound"
import NotAuthorized from "./NotAuthorized";
import PrivateRoutes from "./utilities/PrivateRouter";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/main" element={<GroceriesApp />} />
          </Route>
          <Route path="/" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
