import { Button, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function CardItem({ item, placement, onHandlePrev, onHandleNext }) {
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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {previous && (
            <Button disableRipple onClick={onHandlePrev}>
              <ArrowBackIosNewIcon />
            </Button>
          )}
          <Typography variant="body2">{item.title}</Typography>
          {next && (
            <Button onClick={onHandleNext}>
              <ArrowForwardIosIcon />
            </Button>
          )}
        </Stack>
      </Paper>
    </>
  );
}

export default CardItem;
