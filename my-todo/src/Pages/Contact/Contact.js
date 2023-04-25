import React,{useState} from 'react'
import styled from 'styled-components';
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

  font-family: "Poppins", sans-serif;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;
const Btn = styled.button`
  background-color: #0069d9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #f44336;
  }
`;

const Display = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`;


function Contact() {
  const [info, setinfo] = useState({})
  
  const handlechange=(e)=>{
   const {name,value}=e.target;
    setinfo({
    ...info,
    [name]:value
   })
  }
  const handleSubmit=(e)=>{
e.preventDefault();
const customers = JSON.parse(localStorage.getItem("customers") || "[]");
customers.push(info);
    localStorage.setItem("customers", JSON.stringify(customers));

  }
  return (
     <MainDiv>
    <Heading>Contact Us</Heading>
    <form onSubmit={handleSubmit}>
      <Display htmlFor="firstName">First Name</Display>
      <UserInp
        id="firstName"
        type="text"
        name='firstName'
        placeholder='Enter your first name'
        onChange={handlechange}
      />
     

      <Display htmlFor="lastName">Last Name</Display>
      <UserInp
        id="lastName"
        type="text"
        placeholder='Enter your last name'
        name='lastName'
        onChange={handlechange}
      />
     

      <Display htmlFor="email">Email</Display>
      <UserInp
        id="email"
        type="email"
        name='email'
        placeholder='Enter your email address'
        onChange={handlechange}
      />
      <Display htmlFor="number">Number</Display>
      <UserInp
        id="number"
        type="number"
        name='number'
        placeholder='Enter your Mobile Number'
        onChange={handlechange}
      />
    

      <Btn type="submit" onSubmit={handleSubmit}>Submit</Btn>
    </form>
  </MainDiv>
  )
}

export default Contact