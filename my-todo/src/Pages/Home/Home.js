import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import Swal from "sweetalert2";
 
 const Container = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  height: 100vh;
  width: 100%;
`;

 const Title = styled.h1`
  color: #333;
  font-size: 36px;
  margin-bottom: 50px;
  position: relative;
  bottom: 10rem;
`;

 const ClearButton = styled.button`
  background-color: #0069d9;
  position: relative;
  bottom: 10rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 50px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #f44336;
  }
`;

const buttonStyles = {
  confirmButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 50px",
    fontSize: "18px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0069d9",
    },
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 50px",
    fontSize: "18px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0069d9",
    },
  },
};





function Home() {
  const [Latestcustomer, setLatestcustomer] = useState("");
  
useEffect(() => {
  const customers=JSON.parse(localStorage.getItem("customers")||[]);
  const recentCustomer=customers[customers.length-1];
if(recentCustomer){
  setLatestcustomer(`${recentCustomer.firstName} ${recentCustomer.lastName}`);
  
}

// console.log(Latestcustomer)
}, [])

const handleDelete=()=>{
  const customers=JSON.parse(localStorage.getItem("customers")||"[]");
 if(customers.length>0){
   Swal.fire({
     icon: "warning",
     title: "Are you sure?",
     text: "You won't be able to regress it!",
     showCancelButton: true,
     confirmButtonColor: "#f44336",
     confirmButtonText: "Yes, delete it!",
     cancelButtonText: "Cancel",
   }).then((result) => {
     if (result.isConfirmed) {
       localStorage.removeItem("customers")
       setLatestcustomer("");
       Swal.fire({
         icon: "success",
         title: "Deleted!",
         text: "Your Contact has been deleted Successfully.",
       });
     }
   });
 }else {
  Swal.fire({
   icon: "warning",
   title: "There is no data in the local storage.",
   
  }
    );
}

 }

  
  return (
    <> <Container>
    <Title>Welcome to the Taskroo{Latestcustomer && `, ${Latestcustomer}`}!</Title> 
     <ClearButton onClick={handleDelete}>Clear</ClearButton>
  </Container>
  </>
  )
}

export default Home