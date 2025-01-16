// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({availableIngredients, addToBurger}) => {
    return(
    <ul>
        {availableIngredients.map((newItem) => (
            <li key={newItem.name} style={{backgroundColor: newItem.color}}>
                <p>{newItem.name}</p>
                <button onClick={() => addToBurger(newItem)}><span className="material-symbols-outlined">add</span></button>
            </li>
        ))}
    </ul>
    )
};
  
  export default IngredientList;
  