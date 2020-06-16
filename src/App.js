import React, { useState } from "react";
import { Filter } from "./components/Filter";
import { Numbers } from "./components/Numbers";

export const App = () => {
  const [word, setWord] = useState("");
  const [persons] = useState([
    { name: "Jordy Hamwijk", number: "+123-456-789" },
    { name: "Jeffrey Spaan", number: "+123-456-729" },
    { name: "Henk Spaan", number: "+123-456-543" },
  ]);
  const [filterDisplay, setFilterDisplay] = useState([]);

  const handleChange = (e) => {
    setWord(e);
    let oldList = persons.map((person) => {
      return { name: person.name.toLowerCase(), number: person.number };
    });

    if (word !== "") {
      let newList = [];

      newList = oldList.filter((person) =>
        person.name.includes(word.toLowerCase())
      );

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(persons);
    }
  };

  return (
    <div>
      <Filter value={word} handleChange={(e) => handleChange(e.target.value)} />
      <Numbers persons={word.length < 1 ? persons : filterDisplay} />
    </div>
  );
};

export default App;
