import { StateSchema, MessagesValue, StateGraph, START, END } from "@langchain/langgraph";

type JUDGEMENT = {
    winner: "solution_1" | "solution_2";
    solution_1_score: number;
    solution_2_score: number;
}

type AIBATTLESTATE = {
    messages: typeof MessagesValue;
    solution_1: string;
    solution_2: string;
    judgement: JUDGEMENT;
} // state ek node se dusre node pe jayegi toh uske pass ye yeh rahega like update hota jayega
// MessageValue -> jitne bhi message aap transfer karoge ek node se dusre node pe
// state -> generally data transfer from one node to another with the help of state
// State is a shared container that stores and updates data as it moves between different nodes in a LangGraph workflow.

const state:AIBATTLESTATE = {
   messages: MessagesValue,
   solution_1: "",
   solution_2: "",
   judgement: {
     winner: "solution_1",
     solution_1_score: 0,
     solution_2_score: 0
   }
}