import { useReducer } from "react";
import "./App.css";

const initialState = { isActive: false };

function toggleButtonReducer(state, { type: actionType }) {
  switch (actionType) {
    case "TOGGLE_BUTTON": {
      return {
        ...state,
        isActive: !state.isActive,
      };
    }
    default:
      throw new Error(`Unknown action "${actionType}".`);
  }
}

export default function App() {
  const [newState, dispatchButtonAction] = useReducer(
    toggleButtonReducer,
    initialState
  );

  return (
    <main>
      <h1>Toggle button</h1>
      <section>
        <button
          onClick={() => {
            dispatchButtonAction({
              type: "TOGGLE_BUTTON",
            });
          }}
          data-isactive={newState.isActive}
        >
          TOGGLE ME
        </button>
        <div>
          The button is:{" "}
          {newState.isActive === true ? <span>ON</span> : <span>OFF</span>}{" "}
        </div>
      </section>
    </main>
  );
}
