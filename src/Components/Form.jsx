import React from "react";
import { useState } from "react";
import styles from "../Styles/form.module.css";

const Form = () => {
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  function handleSubmit(event) {
    event.preventDefault();
    if (inputName.length < 5 || !validEmail.test(inputEmail)) {
      setError(true);
      setSubmit(false);
      return;
    }
    setError(false);
    setSubmit(true);
  }

  function handleOnChangeName(event) {
    setName(event.target.value);
  }

  function handleOnChangeEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <div className={` text-center card container ${styles.card}`}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            onChange={handleOnChangeName}
            value={inputName}
            placeholder="name"
            className={`form-control ${styles.inputSpacing}`}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            onChange={handleOnChangeEmail}
            value={inputEmail}
            placeholder="email"
            className={`form-control ${styles.inputSpacing}`}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
      {error ? <p>Please check your information again</p> : undefined}
      {!error && submit ? (
        <p>{`Thank you ${inputName} We will contact you as soon as possible via email`}</p>
      ) : undefined}
    </div>
  );
};

export default Form;
