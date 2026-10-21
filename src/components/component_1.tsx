import {counterContext} from "../context/context";
import {useContext} from "react";
export const Component_1 = () => {
  const count = useContext(counterContext); 
  return (
    <div>
        {count}
    </div>
  )
}