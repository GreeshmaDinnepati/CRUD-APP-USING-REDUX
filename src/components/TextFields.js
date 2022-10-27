import React from "react";
import {useNavigate} from 'react-router-dom';

const TextFields = ({label,inputProps,onChange,value}) => { 
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate('/')
    }

    return(
        <form>
            <label >{label}</label><br />
            <input {...inputProps} onChange={onChange} value={value} />
        </form>
    );
};

export default TextFields
Footer
