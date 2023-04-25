import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const UserInp = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MainDiv = styled.div`
  margin: 0 auto;
  max-width: 600px;
  width: 90%;
  margin-top: 4rem;
  margin-bottom: 8rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 35px;

  font-family:"Helvetica" ,sans-serif;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;
const Btn = styled.button`
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: purple;
  }
`;

const Display = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`;

const MistakeMessage = styled.div`
  color: #f44336;
  font-size: 14px;
  margin-bottom: 10px;
`;

function Contact() {
  const [info, setinfo] = useState({});
  const [mistakes, setMistakes] = useState({});
  const navi = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setinfo({
      ...info,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    var validateError = {};
    const naamvalidation = /^[a-zA-Z]*$/;
    const televalidation = /^\d{10}$/;
    const emailvalidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!info.firstName) {
      validateError.firstName = "First name is required";
    } else if (!naamvalidation.test(info.firstName)) {
      validateError.firstName = "First name is invalid";
    }

    if (!info.lastName) {
      validateError.lastName = "Last name is required";
    } else if (!naamvalidation.test(info.lastName)) {
      validateError.lastName = "Last name is invalid";
    }
    if (!info.email) {
      validateError.email = "Email is required";
    } else if (!emailvalidation.test(info.email)) {
      validateError.email = "Email is invalid";
    }
    if (!info.number) {
      validateError.number = "Number is required";
    } else if (!televalidation.test(info.number)) {
      validateError.number = "Number is invalid";
    }
    if (Object.keys(validateError).length) {
      setMistakes(validateError);
      return;
    }

    setMistakes({});
    Swal.fire({
      title: "Success!",
      text: `Congrats ${info.firstName} your form submitted successfully`,
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => {
      navi("/");
    });

    const customers = JSON.parse(localStorage.getItem("customers") || "[]");
    customers.push(info);
    localStorage.setItem("customers", JSON.stringify(customers));
  };
  return (
    <MainDiv>
      <Heading>Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        <Display htmlFor="firstName">First Name</Display>
        <UserInp
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          onChange={handlechange}
        />
        {mistakes.firstName && <MistakeMessage>{mistakes.firstName}</MistakeMessage>}

        <Display htmlFor="lastName">Last Name</Display>
        <UserInp
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          onChange={handlechange}
        />
        {mistakes.lastName && <MistakeMessage>{mistakes.lastName}</MistakeMessage>}

        <Display htmlFor="email">Email</Display>
        <UserInp
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          onChange={handlechange}
        />
        {mistakes.email && <MistakeMessage>{mistakes.email}</MistakeMessage>}

        <Display htmlFor="number">Number</Display>
        <UserInp
          id="number"
          type="number"
          name="number"
          placeholder="Enter your Mobile Number"
          onChange={handlechange}
        />
        {mistakes.number && <MistakeMessage>{mistakes.number}</MistakeMessage>}

        <Btn type="submit" onSubmit={handleSubmit}>
          Submit
        </Btn>
      </form>
    </MainDiv>
  );
}

export default Contact;
