import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  
`;
const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const TaskWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  top: 10rem;
  
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media screen and (min-width: 768px) {
    width: 70%;
  margin-top: 100px;
  
  
  }
`;


const TodoItems = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 1rem;
  align-items: center;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
const TodoInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3rem;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    
  }
`;

const ALLTodo = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;




const InputTask = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;

  @media screen and (min-width: 480px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const Btn = styled.button`
  border-radius: 4px;
  padding: 8px;
  color: #fff;
  border: none;
  background-color: green;

  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: purple;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

function Task() {
  const [task, setTask] = useState([]);
  const [nayaTask, setNayaTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const handleChange = (e) => {
    setNayaTask(e.target.value)
  };

  const handleAddTask = () => {
    if (nayaTask !== "") {
      const newId = uuidv4();
      setTask([...task, 
        { id: newId, text: nayaTask, completed: false }
      ]);
      setNayaTask("");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please add a New task in the input!",
      });
    }
  };
  const handledeleteTodo = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to regress it!",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonColor: "#f44336",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTask((task) => task.filter((el) => el.id !== id));
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your task has been deleted Successfully.",
        });
      }
    });
  };
  const handleEditTodochange = (e) => {
    setEditingTask((el) => ({ ...el, text: e.target.value }));
  };

  const handleEditTask = (el) => {
    setEditingTask(el);
  };


  const handleSubmit = () => {
    setTask((task) =>
      task.map((el) => (el.id === editingTask.id ? editingTask : el))
    );
    setEditingTask(null);
    Swal.fire({
      icon: "success",
      title: "Changes saved!",
      text: "Your changes have been saved.",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <MainDiv>
      <TaskWrapper>
        <Title>Taskroo</Title>
        <TodoInputDiv>
          <InputTask
            type="text"
            value={nayaTask}
            onChange={handleChange}
            placeholder="Enter a new task"
          />
          <Btn onClick={handleAddTask}>Add Task</Btn>
        </TodoInputDiv>
        {task.length === 0 ? (
          <p>Add a task to begin!</p>
        ) : (
          <ALLTodo>
            {task.map((el) => (
              <TodoItems key={el.id}>
                {editingTask && editingTask.id === el.id ? (
                  <>
                    <InputTask
                      type="text"
                      value={editingTask.text}
                      onChange={handleEditTodochange}
                    />
                    <Btn onClick={handleSubmit}>Save</Btn>
                  </>
                ) : (
                  <>
                    {el.text}

                    <Btn onClick={() => handleEditTask(el)}>
                      Edit
                    </Btn>
                    <Btn onClick={() => handledeleteTodo(el.id)}>Delete</Btn>
                  </>
                )}
              </TodoItems>
            ))}
          </ALLTodo>
        )}
      </TaskWrapper>
    </MainDiv>
  );
}

export default Task;
