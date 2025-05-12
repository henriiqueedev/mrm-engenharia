import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components";
import AppRoutes from "./Routes/AppRoutes";

const App: React.FC = () => {
  return (

      <BrowserRouter>
          <div className="app-container">
              <Header/>
              <AppRoutes/>
          </div>

              <Footer/>
      </BrowserRouter>
)
    ;
};

          export default App;
