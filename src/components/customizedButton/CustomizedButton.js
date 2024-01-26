import React from "react";
import Button from "@mui/material/Button";

const CustomizedButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      disableRipple
      variant="text"
      sx={{
        border: "none",
        outline: "none",

        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomizedButton;
