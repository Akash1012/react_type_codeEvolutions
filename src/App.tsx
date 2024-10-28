import { useState } from "react";
import "./App.css";
import Events from "./components/Events/Events";
import Heading from "./components/Heading/Heading";
import Oscar from "./components/Oscar/Oscar";
import Status from "./components/Status/Status";

function App() {
  const [inputData, setInputData] = useState<string>("");
  const personName = {
    first: "Bruce",
    last: "Wayne",
    abc: [
      {
        data: {
          name: "akash",
        },
      },
    ],
  };

  const nameList = [
    {
      first: "Bruce 100",
      last: "Wayne",
    },
    {
      first: "Bruce 200",
      last: "Wayne",
    },
    {
      first: "Bruce 300",
      last: "Wayne",
    },
  ];

  const handleClick = (event: React.MouseEvent, id: number) => {
    console.log("Button clicked", event, id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setInputData(value);

    console.log("Input changed", value);
  };
  return (
    <div className="root">
      <h1>Type Script</h1>
      {/* <Greet name="Akash" messageCount={500} isLoggedIn={true} /> */}
      {/* <Person name={personName} nameList={nameList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Placeholder text</Heading>
      </Oscar> */}

      <Events
        handleClick={handleClick}
        value={inputData}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
