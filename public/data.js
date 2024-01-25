// import { Grid } from "@mui/material";
// import Card from "../card/card";
// import { useState } from "react";

// function CardsList() {
//   const [boardOne, setBoardOne] = useState([]);
//   const [boardTwo, setBoardTwo] = useState([]);
//   const [boardThree, setBoardThree] = useState([]);
//   const [boardFour, setBoardFour] = useState([]);
//   console.log("loading");
//   const handleNext = (data) => {
//     let newData = [...boardOne];
//     let modifiedData = newData.filter((item) => item.id !== data.id);
//     setBoardOne(modifiedData);
//     let newprogressList = [...boardTwo];
//     newprogressList.push(data);
//     setBoardTwo(newprogressList);
//   };
//   const handlePrev = () => {
//     // const itemToPrev = progressList.pop();
//     // setProgressList(...progressList);
//     // setTodoList(...todoLists, itemToPrev);
//   };
//   const handleAdd = (data) => {
//     let newData = [...boardOne];
//     newData.push(data);
//     setBoardOne(newData);
//   };
  
//   return (
//     <Grid container spacing={1}>
//       <Card
//         cardTitle="To Do"
//         key={1}
//         data={boardOne}
//         onHandleNext={handleNext}
//         onHandlePrev={handlePrev}
//         onhandleAdd={handleAdd}
//         order={1}
//       />
//       <Card
//         cardTitle="In Progress"
//         key={2}
//         data={boardTwo}
//         onHandleNext={handleNext}
//         onHandlePrev={handlePrev}
//         onhandleAdd={handleAdd}
//         order={2}
//       />
//       <Card
//         cardTitle="Review"
//         key={3}
//         data={boardThree}
//         onHandleNext={handleNext}
//         onHandlePrev={handlePrev}
//         onhandleAdd={handleAdd}
//         order={3}
//       />
//       <Card
//         cardTitle="Done"
//         key={4}
//         data={boardFour}
//         onHandleNext={handleNext}
//         onhandleAdd={handleAdd}
//         onHandlePrev={handlePrev}
//         order={4}
//       />
//     </Grid>
//   );
// }

// export default CardsList;
