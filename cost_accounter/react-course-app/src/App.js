import Costs from "./components/costs/Costs";
import NewCost from "./components/new_cost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [ 
  {
    id: "c1",
    date: new Date(2021, 6, 21),
    name: 'Телевизор',
    amount: 999.99
  },
  {
    id: "c2",
    date: new Date(2022, 11, 21),
    name: 'MacBook',
    amount: 599.99
  },
  {
    id: "c3",
    date: new Date(2025, 6, 21),
    name: 'IPhone',
    amount: 1999.99
  }      
];


function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
      setCosts((prevCosts) => {
          return [cost, ...prevCosts]
      })
  }

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
