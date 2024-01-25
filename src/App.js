import { Box } from "@mui/material";
import "./App.css";

import CardsList from "./components/cardsList/cardslist";

function App() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        padding: "1rem 0.5rem",
      }}
    >
      <CardsList  />
    </Box>
  );
}

export default App;
