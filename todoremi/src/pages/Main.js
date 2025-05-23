import React from "react";
import TodoBlock from "../components/TodoBlock";
import styles from "../styles/Main.module.css"
import AddTodoBlock from "../components/AddTodoBlock";

function Main(){
    return(
        <div className={styles.container}>
            <div className={styles.todoBlocks}>
                <TodoBlock todo={"수행평가 준비"} singer={"빅뱅"} song={"뱅뱅뱅"}/>
                <AddTodoBlock />
            </div>
        </div>
    );
}

export default Main;