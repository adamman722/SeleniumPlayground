import React, { useEffect, useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function Email() {
  const name = useRef("unknown name");
  const message = useRef("unknown age");
  const Email = useRef("unknown age");
  const [messages, setMessages] = useState([]);
  const [mutatedMessages, setMutatedMessages] = useState([]);

  const StyledButton = styled(Button)(({ theme }) => ({
    border: "none",
    color: "white",
    backgroundColor: theme.palette.brand.orange,
    "&:hover": {
      border: "none",
      backgroundColor: theme.palette.brand.orange,
      opacity: "75%"
    }
  }));

  function formSubmitHandler(e) {
    e.preventDefault();
    const personSubmission = {
      name: name.current.value,
      email: Email.current.value,
      message: message.current.value
    };
    setMessages((prev) => [...prev, personSubmission]);
    Email.current.value = "";
    message.current.value = "";
    name.current.value = "";
  }
  useEffect(() => {
    const htmlMessgaes = messages.map((message) => {
      return (
        <article key={message.email} className="message-container">
          <h2 className="name-of-user">{message.name}</h2>
          <h3 className="email-of-user">{message.email}</h3>
          <p className="user-message">{message.message}</p>
        </article>
      );
    });
    setMutatedMessages((prev) => [...prev, ...htmlMessgaes]);
  }, [messages]);
  return (
    <form onSubmit={formSubmitHandler}>
      <fieldset>
        <legend>Email</legend>
        <label htmlFor="name">Name:</label>
        <input ref={name} type="name" required></input>
        <br />
        <label htmlFor="age">Email:</label>
        <input ref={Email} type="text" required></input>
        <br />
        <label htmlFor="age">Message:</label>
        <textarea
          ref={message}
          name="age"
          id=""
          cols="20"
          rows="1"
          required
        ></textarea>
        <br />
        <StyledButton type="submit" className="standard-submit">
          Submit!
        </StyledButton>
      </fieldset>
      <section className="message-display">{mutatedMessages}</section>
    </form>
  );
}

export default Email;
