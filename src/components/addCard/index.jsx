import { Button, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";

function AddCard({ onHandleAdd, onIsOpen }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { id: Date.now(), title };
    onHandleAdd(newCard);
    onIsOpen(false);
    setTitle("");
  };

  const handleCancel = () => {
    onIsOpen(false);
  };

  return (
    <Paper sx={{ padding: "0.5rem" }} elevation={2}>
      <Stack
        gap={1}
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
          outline: "none",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          id="myTitle"
          label="Title"
          variant="outlined"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            size="small"
            type="submit"
            color="primary"
            variant="contained"
          >
            Add
          </Button>
          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default AddCard;
