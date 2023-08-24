import { useEffect, useState } from "react";
import classes from "./App.module.css";
import Card from "./components/UI/Card";
import Task from "./components/Tasks/Task";
import InputForm from "./components/Forms/InputForm";
import { Button } from "@mui/material";

import styles from "./styleTextExample";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function App() {
  const [todoData, setTodoData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  const getDataAsync = async() => {
    const response = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    const theData = await response.json();
    setTodoData(theData);
  };

  useEffect(() => {
    getDataAsync();
  }, []);

  const addNew = (todoName) => {

    todoName && setTodoData(prevState => [...prevState, {id: Math.floor(Math.random()*10000), name: todoName, completed: false}])
  }

  // //cases: deleteTD, updateTD, toggleTD
  // const datata = useUpdate(caseot, idito, datatab) //<----- Wrap this in a function, so you can pass that function to the components
  // //this should automatically update the state
  // //Try it like this:
  // const thefunc = (caseot, idito, datatab) => {
  //   const datata = useUpdate(caseot, idito, datatab)
  // }
  
  const updateToDoGeneral = (updateCase, taskId, updateData) => {
    setTodoData(prevState => {
      const updaedElement = prevState.find(el => el.id === taskId);
      const ind = prevState.map(e => e.id).indexOf(updaedElement.id);
      if (updateCase === "updateTD") {
        return [...prevState.slice(0, ind), {...updaedElement, name: updateData}, ...prevState.slice(ind+1,prevState.length)];
      } else if (updateCase === "toggleTD") {
        return [...prevState.slice(0, ind), {...updaedElement, completed: !updaedElement.completed}, ...prevState.slice(ind+1,prevState.length)];
      } else if (updateCase === "deleteTD") {
        return [...prevState.slice(0, ind), ...prevState.slice(ind + 1, prevState.length)];
      }
    })
  }


  return (
    <div className={classes.App}>
      <h2>To Do</h2>
      <Card classNamee={classes.test}>
        <InputForm addNew={addNew}/>
        {todoData.map((item) => {
          return <Task key={item.id} task={item} update={updateToDoGeneral} delete={updateToDoGeneral} toggleCompleted={updateToDoGeneral}/>
        })}
      </Card>
      <Button sx={{backgroundColor: "black", ":hover": {bgcolor: "#1c8a2a"}}} onClick={handleOpen} variant="contained">Show Completed ToDoes</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.styleModal}>
          <h3>Completed ToDoes</h3>
          {todoData.filter(e => e.completed).map(el => {
            return <Typography key={el.id} id="modal-modal-title" variant="h6" component="h2">
            {el.name}
          </Typography>
          })}
          
        </Box>
      </Modal>
      
    </div>
  );
}

export default App;
