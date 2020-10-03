import img2 from "./images/img1.jpg";
import img1 from "./images/1.jpeg";
import user2 from "./images/user2.jpg";
import indexImg from "./images/Index.jpg";
const templateInstructions = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
];
const templateAssignments = [
  {
    assignmentId: "assignment1",
    title: "Assignment Lorem Ipsum",
    image: img1,
    instructions: templateInstructions,
    submissions: [
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
    ],
  },
  {
    assignmentId: "assignment2",
    title: "Ipsum Dolor sit",
    image: img2,
    instructions: templateInstructions,
    submissions: [
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
    ],
  },
  {
    assignmentId: "assignment3",
    title: "Tempor Dolore Magna",
    image: user2,
    instructions: templateInstructions,
    submissions: [
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
    ],
  },
  {
    assignmentId: "assignment4",
    title: "Consectetur Adipisicing",
    image: indexImg,
    instructions: templateInstructions,
    submissions: [
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
    ],
  },
];

export const getLocalAssignments = () => {
  const assignments = localStorage.getItem("assignments");
  return JSON.parse(assignments);
};

export default templateAssignments;
