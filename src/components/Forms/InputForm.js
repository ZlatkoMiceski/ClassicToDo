import { Button, TextField } from "@mui/material";
import classes from "./InputForm.module.css";
import { useState } from "react";

import styles from "../../styleTextExample";

function InputForm(props) {
  const [newTodo, setNewTodo] = useState("");

  const textHandler = (event) => {
    setNewTodo(event.target.value)
  }

  const onSub = () => {
    props.addNew(newTodo);
    setNewTodo("");
  }

  return (
    <div className={classes.alajn}>
      <TextField
        onChange={textHandler}
        onKeyDown={e => e.key === 'Enter' ? onSub() : ''}
        value={newTodo}
        sx={styles.styleTextExample}
        InputLabelProps={{
            style: { color: 'white' },
          }}
        id="outlined-basic"
        fullWidth
        label="Enter new ToDo"
        variant="outlined"
      />
      <Button onClick={onSub} sx={{ backgroundColor: "#07ba37", ":hover": {bgcolor: "#1c8a2a"}}} variant="contained">Submit</Button>
    </div>
  );
}

export default InputForm;
