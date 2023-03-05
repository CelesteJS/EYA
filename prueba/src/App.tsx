import './App.css'
import { UsersForm } from './pages/Form'
import { UsersList } from './pages/List';

function App() {
  return (
    <div>
      <img src="eya.jpeg" />
      <UsersForm></UsersForm>
      <br />
      <UsersList></UsersList>
    </div>

    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">User Form</Link>
    //         </li>
    //         <li>
    //           <Link to="/solicitudes">User List</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Routes>
    //       <Route path="/solicitudes">
    //         <UsersForm />
    //       </Route>
    //       <Route path="/">
    //         <UsersList />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
}




//   return (
//     <div className="App">


//       <UsersForm></UsersForm>
//       <UsersList></UsersList>
//     </div>
//   )
// }

export default App
