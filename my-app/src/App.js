import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
import CustomerManager from "./customer/CustomerManager";
import Main from "./customer/Main";

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