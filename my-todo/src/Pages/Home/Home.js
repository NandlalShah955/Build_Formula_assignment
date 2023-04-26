import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import Swal from "sweetalert2";
 
 const MainDiv = styled.div`
  height: 100vh;
  border-radius: 9px;
  font-family:"Helvetica" ,sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

 const Heading = styled.h1`
  position: relative;
  font-size: 36px;
  bottom: 10rem;
  margin-bottom: 50px;
  color: #333;
`;

 const ClearButton = styled.button`
  background-color: red;
  position: relative;
  bottom: 10rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 50px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: purple;
  }
`;

function Home() {
  const [Latestcustomer, setLatestcustomer] = useState("");
  
useEffect(() => {
  const customers=JSON.parse(localStorage.getItem("customers")||"[]");
  const recentCustomer=customers[customers.length-1];
if(recentCustomer){
  setLatestcustomer(`${recentCustomer.firstName} ${recentCustomer.lastName}`);
  
}
// console.log(recentCustomer)
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
     }else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
       icon: "success",
       title: "Don't worry! Your data is safe.",
        
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
    <> <MainDiv>

    <Heading>Welcome to the Taskroo{ Latestcustomer && `, ${Latestcustomer}`}</Heading>  
     <ClearButton onClick={handleDelete}>Clear</ClearButton>
  </MainDiv>
  </>
  )
}

export default Home