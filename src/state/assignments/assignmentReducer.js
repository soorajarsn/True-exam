import img2 from "../../components/images/img1.jpg";
import img1 from "../../components/images/1.jpeg";
import user2 from "../../components/images/user2.jpg";
import indexImg from "../../components/images/Index.jpg";
import { UPDATE_ASSIGNMENT_SUCCESS } from "./assignmentConst";
let templateInstructions = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.",
];
export const initialAssignments = {
  templateAssignments: [
    {
      assignmentId: "assignment1",
      title: "Assignment Lorem Ipsum",
      image: img1,
      instructions: templateInstructions,
      submissions: [
        { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK832212", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK812322", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK843222", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      ],
    },
    {
      assignmentId: "assignment2",
      title: "Ipsum Dolor sit",
      image: img2,
      instructions: templateInstructions,
      submissions: [
        { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK832212", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK812322", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK843222", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      ],
    },
    {
      assignmentId: "assignment3",
      title: "Tempor Dolore Magna",
      image: user2,
      instructions: templateInstructions,
      submissions: [
        { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK832212", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK812322", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK843222", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      ],
    },
    {
      assignmentId: "assignment4",
      title: "Consectetur Adipisicing",
      image: indexImg,
      instructions: templateInstructions,
      submissions: [
        { userId: "UTK812932", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK832212", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK812322", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
        { userId: "UTK843222", userName: "Sooraj Shukla", score: "Not yet Scored", image: img1 },
      ],
    },
  ],
};

export const assignmentReducer = (state = initialAssignments,action) => {
    switch(action.type){
        case UPDATE_ASSIGNMENT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}