import CostsFilter from "./CostsFilter"
import './Costs.css'
import Card from "../ui/Card";
import { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

export default function Costs(props) {
    const [selectedYear, setSelectedYear] = useState("2022");

    const yearChangeHandler = (inputYear) => {
        setSelectedYear(inputYear)
    };

    const filteredCosts = props.costs.filter(cost => {return cost.date.getFullYear().toString() === selectedYear});

    return (
      <div>
        <Card className="costs">
          <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
          <CostsDiagram costs={filteredCosts}/>
          <CostList costs={filteredCosts}/>
        </Card>
      </div>
    )
};
