import { Button, Grid, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CardItem from "../cardTitles";
import AddCard from "../addCard";

function Card({
  data,
  onHandlePrev,
  onHandleNext,
  onHandleAdd,
  placement,
  cardTitle,
  onDeleteCard,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [editCardTitle, setEditCardTitle] = useState(false);
  const handleShowAddForm = () => {
    setIsOpen(!isOpen);
  };
  const handleEditCardTitle = () => {
    setEditCardTitle(!editCardTitle);
  };
  return (
    <>
      <Grid item sm={6} md={3} xs={12}>
        <Paper elevation={4} sx={{ padding: "0.5rem" }}>
          <Stack gap={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">{cardTitle}</Typography>
              <MoreHorizIcon />
            </Stack>
            {data.map((item) => (
              <CardItem
                onEditCardTitle={handleEditCardTitle}
                editCardTitle={editCardTitle}
                key={item.id}
                item={item}
                placement={placement}
                onHandlePrev={onHandlePrev}
                onHandleNext={onHandleNext}
                onDeleteCard={onDeleteCard}
              />
            ))}
            {isOpen && (
              <AddCard onHandleAdd={onHandleAdd} onIsOpen={handleShowAddForm} />
            )}

            {isOpen === true ? null : (
              <Button
                startIcon={<AddIcon />}
                onClick={handleShowAddForm}
                color="primary"
                disableFocusRipple
                disableRipple
              >
                Add Another Card
              </Button>
            )}
          </Stack>
        </Paper>
      </Grid>
    </>
  );
}

export default Card;
