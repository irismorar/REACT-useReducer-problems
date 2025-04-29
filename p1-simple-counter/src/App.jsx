import { useReducer } from "react";
import "./App.css";

const initialState = { counter: 0 };

function counterReducer(state, { type: actionType }) {
  switch (actionType) {
    case "INCREMENT_COUNTER": {
      return { counter: state.counter + 1 };
    }
    case "DECREMENT_COUNTER": {
      return { counter: state.counter - 1 };
    }
    case "RESET_COUNTER": {
      return initialState;
    }
    default:
      throw new Error(`Unknown action "${actionType}".`);
  }
}

export default function App() {
  const [newState, dispatchCounterAction] = useReducer(
    counterReducer,
    initialState
  );

  return (
    <main>
      <h1>Simple Counter</h1>
      <section>
        <div>
          <button
            onClick={() => {
              if (newState.counter >= 1) {
                dispatchCounterAction({
                  type: "DECREMENT_COUNTER",
                });
              } else {
                alert("No negative numbers allowed!");
              }
            }}
          >
            -
          </button>
          <span>{newState.counter}</span>
          <button
            onClick={() => {
              dispatchCounterAction({
                type: "INCREMENT_COUNTER",
              });
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            dispatchCounterAction({
              type: "RESET_COUNTER",
            });
          }}
        >
          ❌
        </button>
      </section>
    </main>
  );
}
