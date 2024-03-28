import { useReducer } from "react";
// useReducer()

//state
//dispatch:[value, setValue] สำหรับ เปลี่ยนข้อมูล

//reducer:custom state logic
//initalState:{} ส้่วนใหญ่จะเป็น object

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        // copy object state แล้วเปลี่ยนค่า ตัวแปล count
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default App;
