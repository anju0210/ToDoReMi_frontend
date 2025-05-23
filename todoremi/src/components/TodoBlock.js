import React from "react";
import styles from '../styles/TodoBlock.module.css'
import { FaPlay } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

function TodoBlock(props){
    return(
        <div className={styles.container}>
            <img src="/image/ex.jpg"/>
            <div className={styles.txt}>
                <span className={styles.todoTitle}>{props.todo}</span>
                <span className={styles.song}>{props.singer} - {props.song}</span>
            </div>
            <div className={styles.playBtn}>
                <FaPlay size={18}/>
            </div>
            <div className={styles.completeBtn}>
                <FaCheck size={18}/>
            </div>
        </div>
    );
}

export default TodoBlock;