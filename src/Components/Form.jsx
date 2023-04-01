import React from "react";
import { useState } from "react";

const Form = () => {
    const [inputName, setName] = useState("")
    const [inputEmail, setEmail] = useState("")
    const [error, setError] = useState(false)
    let isSubmit = false

    function handleSubmit(event){
        event.preventDefault();
        isSubmit = true
        if(inputName.trim().length > 0 || inputName.trim()[0] === " " || inputName.trim().length <= 5) {
            setError(true)
            console.log("if", error, isSubmit)
            console.log(inputName.length)
            return;
        }
        setError(false)
        console.log("else", error, isSubmit)
        console.log(inputName.length)
    }

    function handleOnChangeName(event){
        setName(event.target.value)
    }

    function handleOnChangeEmail(event){
        setEmail(event.target.value)
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text"  onChange={handleOnChangeName} value={inputName}/>
        <label>Email:</label>
        <input type="email" onChange={handleOnChangeEmail} value={inputEmail}/>
        <button type="submit">Send</button>
        {error && isSubmit && <p>Please check your information again</p>}
        {!error && isSubmit && <p>{`Thank you ${inputName} We will contact you as soon as ossible via email`}</p>}
      </form>
    </div>
  );
};

export default Form;