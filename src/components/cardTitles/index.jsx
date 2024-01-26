import { Button, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CustomizedButton from "../customizedButton/CustomizedButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CardItem({ item, placement, onHandlePrev, onHandleNext }) {
  const handleNextMain = () => {
    onHandleNext(item);
  };

  const handlePrevMain = () => {
    onHandlePrev(item);
  };

  let previous = true;
  let next = true;

  if (placement === 4) {
    next = false;
  }

  if (placement === 1) {
    previous = false;
  }

  return (
    <>
      <Paper sx={{ padding: "0.5rem" }} elevation={2}>
        <Stack gap={1} justifyContent="center">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2">{item.title}</Typography>
            <CustomizedButton color="primary" size="small">
              <EditIcon />
            </CustomizedButton>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            {previous && (
              <Button variant="outlined" onClick={handlePrevMain} size="small">
                Prev
              </Button>
            )}
            {next && (
              <Button variant="outlined" onClick={handleNextMain} size="small">
                Next
              </Button>
            )}
            {/* <CustomizedButton color="error" size="small">
            <DeleteIcon />
          </CustomizedButton> */}
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default CardItem;
