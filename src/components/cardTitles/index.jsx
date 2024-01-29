import { Button, Paper, Stack, Typography } from "@mui/material";

import CustomizedButton from "../customizedButton/CustomizedButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CardItem({
  item,
  placement,
  onHandlePrev,
  onHandleNext,
  onEditCardTitle,
  editCardTitle,
}) {
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
            {editCardTitle ? (
              <CustomizedButton color="error" size="small">
                <DeleteIcon />
              </CustomizedButton>
            ) : (
              <CustomizedButton
                color="primary"
                size="small"
                onClick={onEditCardTitle}
              >
                <EditIcon />
              </CustomizedButton>
            )}
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            {editCardTitle ? (
              <Button
                variant="outlined"
                size="small"
                color="error"
                onClick={(e) => onEditCardTitle(false)}
              >
                cancle
              </Button>
            ) : (
              <>
                {previous && (
                  <Button
                    variant="outlined"
                    onClick={handlePrevMain}
                    size="small"
                  >
                    Prev
                  </Button>
                )}
                {next && (
                  <Button
                    variant="outlined"
                    onClick={handleNextMain}
                    size="small"
                  >
                    Next
                  </Button>
                )}
              </>
            )}
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default CardItem;
