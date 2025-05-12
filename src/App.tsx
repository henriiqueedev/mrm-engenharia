import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Header, Footer } from "./components";

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
