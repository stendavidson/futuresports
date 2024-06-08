import { useState } from "react";

import styles from "./withFormHandler.module.scss"


/**
 * This Higher Order Component displays the form submission message when the form
 * has been successfully submitted. It also provides form validation methods.
 * 
 * @param WrappedComponent The component being wrapped by this HOC.
 */
const withSubmissionHandler = (WrappedComponent) => {

    // The new wrapped component will pass props to the child.
    return (props) => {

        const [displayMessage, setDisplayMessage] = useState(false);

        /**
         * This function validates the user input and displays errors depending on the
         * type of input.
         * 
         * @param {HTMLElement} element this the form input element.
         */
        function checkValidity(element){

            // Regex patterns
            const fullNamePattern =/^[a-zA-Z ]+$/;
            const namePattern = /^[a-zA-Z]+$/;
            const phonePattern = /^(02|03|04|07|08)[0-9]{8}$/;
            const emailPattern = /^(?!\.)(?=.{1,64}@)(?!.*\.\.)(?!.*\.@)(?!.*@\.)(?!.*\.$)[0-9a-zA-Z+-_.]+@(?=.{1,253}$)[0-9a-zA-Z+-_.]+$/;

            let valid = true;
            
            // The default validity message is empty - valid
            element.setCustomValidity("");
            
            // The form inputs are validates on the basis of their names.
            if(element.name.includes("fullname")){
                valid = fullNamePattern.test(element.value);
    
                if(!valid){
                    element.setCustomValidity("Invalid name, only alphabetical input and spaces");
                }
            }else if(element.name.includes("name")){
                valid = namePattern.test(element.value);
    
                if(!valid){
                    element.setCustomValidity("Invalid name, only alphabetical input, no spaces");
                }
            }else if(element.name === "phone"){
                valid = phonePattern.test(element.value);
                
                if(!valid){
                    element.setCustomValidity("Invalid phone number, must be an Australian number");
                }
            }else if(element.name === "email"){
                valid = emailPattern.test(element.value);
    
                if(!valid){
                    element.setCustomValidity("Invalid email address");
                }
            }else if((element.type === "textarea" || element.type === "text") && element.value === "" && element.style.display !== "none"){

                valid = false;

                if(!valid){
                    element.setCustomValidity("Input required");
                }
            }

            console.log(element.type);
            console.log(element.name);
            
            // The invalid input field is outlined in red and a message is displayed.
            element.style.borderColor = (valid ? "black" : "red");
            element.reportValidity();
        }
        
        const newProps = {
            displayMessage : displayMessage,
            setDisplayMessage : setDisplayMessage,
            checkValidity : checkValidity,
            ...props
        }

        return (
            <div className={styles.formContainer}>
                <WrappedComponent {...newProps}/>
                <h1 style={{display : (displayMessage ? "block" : "none")}}>Thank you for submitting this form we will get back to you as soon as possible</h1>  
            </div>
        );

    }
}

export default withSubmissionHandler;