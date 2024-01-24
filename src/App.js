import { Box } from "@mui/material";
import "./App.css";
import Test from "./components/test";

function App() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        padding: "1rem 0.5rem",
      }}
    >
      <Test />
    </Box>
  );
}

export default App;
