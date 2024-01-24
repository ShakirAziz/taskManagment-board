import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function Card() {
  const [isAdd, setIsAdd] = useState(false);
  const [isAddItem, setIsAddItem] = useState([
    { id: 1, title: "This is a new card" },
  ]);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    setIsAdd(!isAdd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { id: Date.now(), title };
    setIsAddItem((isAddItem) => [...isAddItem, newCard]);
  };

  return (
    <Grid container spacing={1}>
      <Grid item md={3}>
        <Paper elevation={4} sx={{ padding: "0.5rem" }}>
          <Stack gap={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">To DO</Typography>
              <MoreHorizIcon />
            </Stack>

            {/* this is title add section */}
            {isAddItem.map((item) => (
              <Paper key={item.id} sx={{ padding: "0.5rem" }} elevation={2}>
                <Typography variant="body2">{item.title}</Typography>
              </Paper>
            ))}
            {isAdd && (
              <>
                <Paper sx={{ padding: "0.5rem" }} elevation={2}>
                  <Stack
                    gap={0.5}
                    component="form"
                    sx={{
                      "& > :not(style)": { width: "100%" },
                      outline: "none",
                    }}
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <Button variant="outlined">Add</Button>
                  </Stack>
                </Paper>
              </>
            )}
            {isAdd === true ? null : (
              <Button startIcon={<AddIcon />} disableRipple onClick={handleAdd}>
                Add Another Card
              </Button>
            )}
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Card;
