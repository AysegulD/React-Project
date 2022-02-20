import axios from "axios";
import React,{FC,useEffect} from "react";
import{Todos} from './todos';
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'TODOS',
      },
    },
  };
const Todo:FC =() =>{
    const [todos,setTodos] = React.useState<Todos[]>([]);
    const labels = todos.map(t => t.id);
    let numbers: number[] = todos.map(t => t.title.length);
    const data = {
        labels,
        datasets: [
          {
            label: 'Amount of letters',
            data: numbers,
            backgroundColor: 'rgba(159,154,192)',
          }
        ],
      };
    
    useEffect(() => {
        getTodos();   
    },[])  
function getTodos(){
    axios.get<Todos[]>("https://jsonplaceholder.typicode.com/todos?_page=0&_limit=30")
        .then(response =>{
        setTodos(response.data)
    })
    
}
return(
    <div>
        <Bar options={options} data={data} />      
    </div>
)
}

export default Todo;