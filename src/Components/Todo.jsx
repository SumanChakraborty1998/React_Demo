
import React from "react";
import { TodoList } from "./TodoList";
import {v4 as uuid} from "uuid";
import styles from "./Todo.module.css";

function Todo(){

    const [query, setQuery] = React.useState("");
    const [datalist, setDatalist] = React.useState([]);



    const handleChange=(e)=>{
        setQuery(e.target.value);
    }



    const updateData=(new_datalist)=>setDatalist(new_datalist);     //Function to update our whole datalist of Todo



    const handleAdd=(e)=>{

        e.preventDefault();
        const my_data = {
            title: query,
            status: false,
            id:uuid()
        }
        const new_datalist = [...datalist, my_data];
        updateData(new_datalist)

    }


    const errorMessage=(e)=>{
        alert("Please Enter Something")
        e.preventDefault();
    }



    const handleDelete=(id)=>{

        const new_datalist=datalist.filter((item)=>{
            return item.id != id
        })
        updateData(new_datalist);

    }

    const handleToggle=(id)=>{

        const new_datalist=datalist.map((item)=>{
            return item.id === id? {...item, status: !item.status}: {...item}
        })
        updateData(new_datalist); 

    }


    return(
        <div>
            <h2 style={{color:"black", textShadow:"2px 2px magenta"}}>My Todo List</h2>
            <h4 style={{color:"Blue"}}>Developed & maintained by 
                <span style={{color:"red", marginLeft: "1%"}}>Suman Chakraborty</span>
            </h4>

            <form >
                <div><input type="text" value={query} onChange={(e)=>handleChange(e)}/></div>

                <div><button onClick={query.length > 1? (e)=>handleAdd(e) : (e)=>errorMessage(e)}>+</button></div>
            </form>

            <TodoList
                datalist={datalist} 
                updateData={updateData}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />
        </div>
    )

}

export {Todo}