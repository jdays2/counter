import "./App.css";
import { useState } from "react";
import Score from "./components/Score";
import RessetButton from "../src/components/UI/RessetButton";

const initialCounters = [
  {
    id: 1,
    value: 0,
    owner: "Home",
  },
  {
    id: 2,
    value: 0,
    owner: "Guest",
  },
];

function App() {
  const [counts, setCounters] = useState(initialCounters);

  const plusButtons = (id, plus) => {
    const updatesCounts = counts.map((el) =>
      el.id === id ? { ...el, value: el.value + plus } : el
    );

    setCounters(updatesCounts);
  };

  const ressetButton = () => {
    const ressetCounter = counts.map((el) =>
      el.value > 0 ? { ...el, value: 0 } : el
    );

    setCounters(ressetCounter);
  };

  return (
    <div className="App">
      <div className="counter__wrapper">
        {counts.map((count) => {
          return (
            <Score
              owner={count.owner}
              key={count.id}
              id={count.id}
              counter={count.value}
              onClick={plusButtons}
            />
          );
        })}
      </div>
      <RessetButton onClick={ressetButton} />
    </div>
  );
}

export default App;
