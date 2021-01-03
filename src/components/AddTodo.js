import React from 'react';
import { string, func } from 'prop-types';
import { TextField, Button, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddTodo(props) {
  const { input, setInput, handleAddTodo } = props;

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            value={input}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="primary"
            variant="outlined"
            startIcon={<AddCircleIcon />}
            onClick={handleAddTodo}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

AddTodo.propTypes = {
  input: string.isRequired,
  setInput: func.isRequired,
  handleAddTodo: func.isRequired
};

export default AddTodo;
