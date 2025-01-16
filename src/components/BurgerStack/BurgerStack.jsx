// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({stack, removeFromBurger}) => {
    return(
    <ul>
        {stack.map((item) => (
            <li key={item.name}>
                <p>{item.name}</p>
                <button onClick={() => removeFromBurger(item)}>Remove</button>
            </li>
        ))}
    </ul>
    );
  };
  
  export default BurgerStack;
  