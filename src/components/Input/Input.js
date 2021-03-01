import React, {useState, useCallback, useRef, useEffect }  from 'react'
import {TextField} from "@material-ui/core"
import { AUTHORS } from "../../utils/constants";

export default function Input({onAddMessage}) {
    const [value, setValue] = useState('');
    const textField = useRef(null)
    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    },[] );

    const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onAddMessage(value);
    setValue('')
    }, [onAddMessage,value])


    useEffect(() => {
       if (textField.current) {
           textField.current.focus();
       }
    }, []);


    return (
        <form
            className='form-item'
            onSubmit={handleSubmit}>
            <TextField
                inputRef={textField}
                id="outlined-basic"
                className='text' type="text"
                value={value}
                onChange={handleChange}/>

            <input type="submit"/>
        </form>
    )
}