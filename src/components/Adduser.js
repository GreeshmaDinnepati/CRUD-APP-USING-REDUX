import React, { useState } from "react";
import Button from "./Button";
import TextFields from "./TextFields";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from "../features/users/userSlice";
import {v4 as uuidv4} from 'uuid'

const Adduser = () => {
    const dispatch = useDispatch();
    const [value ,setValue] = useState({uname : '',email : ''});
    const navigate = useNavigate();

    const handleAdd = () => {
        dispatch(addUser({
            id: uuidv4(),
            name : value.uname,
            email : value.email
        }))
        navigate('/')
    }

    return(
        <div>
            <TextFields 
            label= 'name'
            value={value.name}
            onChange={(e)=> setValue({...value, uname : e.target.value})}
            inputProps = {{type: 'text', placeholder : 'Enter Name'}}
            />
            <br />
            <TextFields 
            label= 'email'
            value={value.email}
            onChange={(e)=> setValue({...value, email : e.target.value})}
            inputProps = {{type: 'email', placeholder : 'Enter Email'}}
            />
            <br />
            <Button onClick={handleAdd}> Add</Button>
        </div>
    );
};

export default Adduser
