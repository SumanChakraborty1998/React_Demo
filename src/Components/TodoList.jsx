
import React from "react";
import styles from "./TodoList.module.css";

function TodoList(props){
    // console.log(props)

    const {datalist, updateData, handleDelete, handleToggle} = {...props}
    // console.log(datalist)

    return(
        <>
        {datalist.map((item)=>

                <div className={styles.list_component}>
                    <div style={{textDecoration: item.status && "line-through"}}>{item.title}</div>
                    <div></div>
                    <div style={{display: "flex", flexDirection:"row", gap:"10%"}}>
                        <button onClick={()=>handleDelete(item.id)}>X</button>
                        <button onClick={()=>handleToggle(item.id)}>{item.status?
                                                                    (<img className={styles.toggle_image} src="https://image.flaticon.com/icons/png/128/640/640120.png"/>)
                                                                    :
                                                                    (<img className={styles.toggle_image} src="https://image.flaticon.com/icons/png/128/1932/1932860.png"/>)}</button>
                    </div>
                </div>
                // {/* {item.id}--{item.status?"TRUE":"FALSE"}--{item.title} */}
 

        )}
        </>
 
       
    )


}

export {TodoList}