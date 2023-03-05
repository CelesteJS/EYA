import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import { UsersForm } from './pages/Form';
import { MyTable } from "./pages/Formulario";
import { UsersList } from './pages/List';



function App(): JSX.Element {
  return (
    <div>
      <img src="eya.jpeg" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersForm />} />
          <Route path="/solicitudes" element={<MyTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
