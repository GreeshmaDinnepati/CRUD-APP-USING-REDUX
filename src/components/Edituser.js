import React, { useState } from "react";
import Button from "./Button";
import TextFields from "./TextFields";
import {useNavigate,useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../features/users/userSlice";

const EditUser = () => {
    const params =useParams();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const matchedUser = users.filter(user=> user.id === params.id);
    const {name,email} = matchedUser[0]
    const [value ,setValue] = useState(
        {
            uname : name,
            email : email
        });
    const navigate = useNavigate();

    const handleUpdate = () => {
        dispatch(editUser({
            id: params.id,
            name : value.uname,
            email : value.email
        }))
        navigate('/')
    }

    return(
        <div>
            <TextFields 
            label= 'name'
            value={value.uname}
            onChange={(e)=> setValue({...value, uname : e.target.value})}
            inputProps = {{type: 'text', placeholder : 'Edit Name'}}
            />
            <br />
            <TextFields 
            label= 'email'
            value={value.email}
            onChange={(e)=> setValue({...value, email : e.target.value})}
            inputProps = {{type: 'email', placeholder : 'Edit Email'}}
            />
            <br />
            <Button onClick={handleUpdate}> Update </Button>
        </div>
    );
};

export default EditUser
