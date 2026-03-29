import { Route, Routes } from "react-router-dom";
import CreateEnterprise from "./pages/Enterprise/CreateEnterprise";
import Dashboard from "./pages/Enterprise/Dashboard";
import EnterpriseLayout from "./pages/Enterprise/EnterpriseLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Employees from "./pages/Enterprise/Employees";

function App() {
  return (
    <div>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="createEnterprise" element={<CreateEnterprise />} />
        <Route path="enterprise" element={<EnterpriseLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
