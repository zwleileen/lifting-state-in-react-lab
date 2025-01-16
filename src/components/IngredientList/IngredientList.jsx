// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({availableIngredients, addToBurger}) => {
    return(
    <ul>
        {availableIngredients.map((newItem) => (
            <li key={newItem.name} style={{backgroundColor: newItem.color}}>
                <p>{newItem.name}</p>
                <button onClick={() => addToBurger(newItem)}>Add</button>
            </li>
        ))}
    </ul>
    )
};
  
  export default IngredientList;
  