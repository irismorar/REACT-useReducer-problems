import "./App.css";
import { useReducer } from "react";

const initialState = {
  A: {
    name: "A",
    isActive: false,
  },
  B: {
    name: "B",
    isActive: false,
  },
  C: {
    name: "C",
    isActive: false,
  },
  D: {
    name: "D",
    isActive: false,
  },
  E: {
    name: "E",
    isActive: false,
  },
  F: {
    name: "F",
    isActive: false,
  },
  G: {
    name: "G",
    isActive: false,
  },
};

function toggleButtonsReducer(state, { type: actionType, payload }) {
  const { id } = payload;

  switch (actionType) {
    case "TOGGLE_BUTTON": {
      const isCurrentlyActive = state[id].isActive;
      const activeCount = Object.values(state).filter(
        (btn) => btn.isActive
      ).length;

      if (isCurrentlyActive) {
        return {
          ...state,
          [id]: {
            ...state[id],
            isActive: false,
          },
        };
      }

      if (activeCount < 3) {
        return {
          ...state,
          [id]: {
            ...state[id],
            isActive: true,
          },
        };
      }

      return state;
    }
    default:
      throw new Error(`Unknown action ${actionType}.`);
  }
}

export default function App() {
  const [currentState, dispatchButtonAction] = useReducer(
    toggleButtonsReducer,
    initialState
  );

  return (
    <main>
      <h1>TOGGLE BUTTONS</h1>
      <section>
        <button
          data-isactive={currentState.A.isActive}
          onClick={() => {
            dispatchButtonAction({
              type: "TOGGLE_BUTTON",
              payload: { id: "A" },
            });
          }}
        >
          A
        </button>
        <button
          data-isactive={currentState.B.isActive}
          onClick={() => {
            dispatchButtonAction({
              type: "TOGGLE_BUTTON",
              payload: { id: "B" },
            });
          }}
        >
          B
        </button>
        <button
          data-isactive={currentState.C.isActive}
          onClick={() => {
            dispatchButtonAction({
              type: "TOGGLE_BUTTON",
              payload: { id: "C" },
            });
          }}
        >
          C
        </button>
        <button
          data-isactive={currentState.D.isActive}
          onClick={() => {
            dispatchButtonAction({
              type: "TOGGLE_BUTTON",
              payload: { id: "D" },
            });
          }}
        >
          D
        </button>
        <button
          data-isactive={currentState.E.isActive}
          onClick={() => {
            dispatchButtonAction({
              type: "TOGGLE_BUTTON",
              payload: { id: "E" },
            });
          }}
        >
          E
        </button>
        <button
          data-isactive={currentState.F.isActive}
          onClick={() => {
            dispatchButtonAction({
              type: "TOGGLE_BUTTON",
              payload: { id: "F" },
            });
          }}
        >
          F
        </button>
        <button
          data-isactive={currentState.G.isActive}
          onClick={() => {
            dispatchButtonAction({
              type: "TOGGLE_BUTTON",
              payload: { id: "G" },
            });
          }}
        >
          G
        </button>
      </section>
    </main>
  );
}
