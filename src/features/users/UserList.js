import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import { deleteUser } from './userSlice';

const UserList =() => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();

  const handleAdduser = () => {
    navigate('/adduser')
  }

  const handleEdit = (id) => {
    navigate(`/edituser/${id}`)
  }
  const handleDelete = (id) => {
    dispatch(deleteUser({id}))
  }
 
  return(
    <div>
        <Button onClick={handleAdduser}>Add user</Button>
        {users.length ? 
            users.map((item)=>{
                return(
                <div key={item.id} className='userList'>
                    <h2>{item.name}</h2>
                    <h3>{item.email}</h3>
                    <button className='button' onClick={(e)=> handleEdit(item.id)}> edit </button>
                    <button className='button' onClick={(e)=> handleDelete(item.id)}> delete </button>
                </div>
                )
            })
        
    : <p>no users</p> }
    </div>
);
};

export default UserList
