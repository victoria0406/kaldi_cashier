import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
import CustomerManager from "./customer/CustomerManager";
import Main from "./customer/Main";
import CashierManager from "./manager/CashierManager";

function App() {
    return (
      <>
      <Routes>
        <Route path="/customer" element={<CustomerManager />} />
        <Route path="/kaldi_manager" element = {<CashierManager/>}/>
      </Routes>
      </>
    );
  }
  
  export default App;