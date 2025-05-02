import { useReducer } from "react";
import "./App.css";

const initialState = {
  A: {
    name: "left",
    isActive: true,
  },
  B: {
    name: "center",
    isActive: false,
  },
  C: {
    name: "right",
    isActive: false,
  },
};

function toggleReducer(state, { type: actionType, payload }) {
  const { id } = payload;
  switch (actionType) {
    case "TOGGLE_BUTTON_ON": {
      const newState = {};

      for (const key in state) {
        newState[key] = {
          ...state[key],
          isActive: id === key,
        };
      }

      return newState;
    }
    default:
      return state;
  }
}

export default function App() {
  const [{ A, B, C }, dispatchButtonAction] = useReducer(
    toggleReducer,
    initialState
  );

  return (
    <main>
      <h1>Toggle Buttons</h1>
      <section>
        <div>
          <button
            data-isactive={A.isActive}
            onClick={() => {
              dispatchButtonAction({
                type: "TOGGLE_BUTTON_ON",
                payload: { id: "A" },
              });
            }}
          >
            {A.name}
          </button>
          <button
            data-isactive={B.isActive}
            onClick={() => {
              dispatchButtonAction({
                type: "TOGGLE_BUTTON_ON",
                payload: { id: "B" },
              });
            }}
          >
            {B.name}
          </button>
          <button
            data-isactive={C.isActive}
            onClick={() => {
              dispatchButtonAction({
                type: "TOGGLE_BUTTON_ON",
                payload: { id: "C" },
              });
            }}
          >
            {C.name}
          </button>
        </div>
      </section>
    </main>
  );
}
