import { React, useState } from "react";
import styles from "../styles/AddTodoBlock.module.css"
import { FaPlus } from "react-icons/fa";

function AddTodoBlock(){
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState("");

    return(
        <div className={styles.container}>
            <div className={styles.emptyBox}>
                <FaPlus size={23} />
            </div>
            <div className={styles.txt}>
                {isEditing? (
                    <input type="text" value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onBlur={() => { setIsEditing(false); setInputValue("");}}
                        onKeyDown={(e) => {
                            if(e.key === "Enter"){
                                setIsEditing(false);
                                setInputValue("");
                            }
                        }}/>
                ):(
                    <span onClick={() => setIsEditing(true)}>
                        할 일을 입력하세요
                    </span>
                )}
            </div>
        </div>
    );
}

export default AddTodoBlock;