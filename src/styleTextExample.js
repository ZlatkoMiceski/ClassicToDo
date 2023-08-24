const styles = {
  styleTextExample: {
    backgroundColor: "black",
    "& fieldset": { borderRight: "none", borderColor: "white" },
    input: { color: "white" },
    "& label.Mui-focused": { color: "white", borderColor: "white" },
    "&:hover fieldset": { borderColor: "white" },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
  styleModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: 200,
    overflow: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
}

  export default styles;