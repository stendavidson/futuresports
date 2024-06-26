import styles from "./DropdownButton.module.scss"

import img from "../../../../assets/images/dropdown.png";

/**
 * This function renders a dropdown button
 * 
 * @param setHover This function sets the display style for the dropdown component.
 */
function DropdownButton({setHover}){

    // Input validation
    if(typeof(setHover) !== "function"){
        throw new TypeError("Invalid input parameter 'setHover' must be a function.");
    }

    return (
        <div className={styles.dropdownButton} onMouseEnter={() => {setHover("flex")}} onMouseLeave={() => {setHover("none")}}>
            <h3>More</h3>
            <img src={img} alt=""/>
        </div>
    );
}


export default DropdownButton;