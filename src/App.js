import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adduser from './components/Adduser';
import EditUser from './components/EditUser';
import UserList from './features/users/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/adduser' element={<Adduser />} />
        <Route path='/edituser/:id' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
