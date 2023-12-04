import css from "./FeedbackOptions.module.css";



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
const smiles = Object.keys(options);
    

    return (
        
        smiles.map(smile => {
            return (<button className = {css.optionButton} key={smile} type="button" name={smile} onClick={onLeaveFeedback}>{
                smile === 'good' ? "😍" : smile === 'neutral' ? " 👽" : " 🤬"}
        </button>)
        }) 
    )
}




