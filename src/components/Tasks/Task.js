import Card from "../UI/Card";
import classes from "./Task.module.css";

import styleTextExample from "../../styleTextExample";

import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function Task(props) {
  const { id: taskId, name, completed } = props.task;
  const [isEditing, setIsEditing] = useState(false);
  const [updateTask, setUpdateTask] = useState(name);
  
  const editTaskHandler = () => {
    setIsEditing(true);
  };

  const updateHandler = (event) => {
    setUpdateTask(event.target.value);
  }

  const onUpdateHandler = () => {
    props.update("updateTD",taskId, updateTask);
    setIsEditing(false);
  }


  const renderTask = isEditing ? (
    <Card classNamee={classes.weird}>
      <TextField onChange={updateHandler} fullWidth value={updateTask} sx={styleTextExample} />
      <Button sx={{ backgroundColor: "black", ":hover": {bgcolor: "#1c8a2a"}}} onClick={onUpdateHandler} variant="contained">Update</Button>
    </Card>
  ) : (
    <Card classNamee={classes.weird}>
      <div onClick={() => props.toggleCompleted("toggleTD", taskId)} className={classes.innerDivs}>
        {completed ? <p><s>{name}</s></p> : <p>{name}</p>}
        {completed && <p className={classes.space}><CheckCircleOutlineIcon /></p>}
      </div>
      <div className={classes.innerDivs}>
        <IconButton onClick={editTaskHandler}>
          <EditIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton onClick={() => props.delete("deleteTD", taskId)}>
          <DeleteIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </Card>
  );
  return renderTask;
}

export default Task;
