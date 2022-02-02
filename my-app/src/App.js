import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Routes,
  } from "react-router-dom";
import CustomerManager from "./customer/CustomerManager";

function App() {
    return (
      <>
      <Routes>
        <Route path="/customer" element={<CustomerManager />} />
      </Routes>
      </>
    );
  }
  
  export default App;