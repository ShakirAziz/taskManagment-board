import { Grid } from "@mui/material";
import { useState } from "react";
import Card from "../card/card";

function CardsList() {
  const initialData = [[], [], [], []];
  const [order, setOrder] = useState(initialData.map(() => []));

  const handleAddCard = (index, newItem) => {
    setOrder((prevOrder) => {
      const updatedOrder = [...prevOrder];
      updatedOrder[index].push(newItem);
      return updatedOrder;
    });
  };

  const moveCard = (fromIndex, toIndex) => {
    setOrder((prevOrder) => {
      const updatedOrder = [...prevOrder];
      if (prevOrder[fromIndex].length > 0) {
        const movedItem = prevOrder[fromIndex][prevOrder[fromIndex].length - 1];
        updatedOrder[fromIndex] = prevOrder[fromIndex].filter(
          (item) => item !== movedItem
        );
        updatedOrder[toIndex].push(movedItem);
      }
      return updatedOrder;
    });
  };

  const handleMoveNext = (index) => {
    if (index < order.length - 1) {
      moveCard(index, index + 1);
    }
  };

  const handleMovePrevious = (index) => {
    if (index > 0) {
      moveCard(index, index - 1);
    }
  };

  const handleDeleteCard = (data) => {
    setOrder((prevOrder) => {
      const updatedOrder = prevOrder.map((item) =>
        item.filter((i) => i.id !== data.id)
      );
      return updatedOrder;
    });
  };

  return (
    <Grid container spacing={1}>
      {[1, 2, 3, 4].map((index) => (
        <Card
          cardTitle={
            index === 1
              ? "To Do"
              : index === 2
              ? "In Progress"
              : index === 3
              ? "Review"
              : "Done"
          }
          key={index}
          placement={index}
          onHandleAdd={(newItem) => handleAddCard(index - 1, newItem)}
          onHandlePrev={() => handleMovePrevious(index - 1)}
          onHandleNext={() => handleMoveNext(index - 1)}
          data={order[index - 1]}
          onDeleteCard={handleDeleteCard}
        />
      ))}
    </Grid>
  );
}

export default CardsList;
