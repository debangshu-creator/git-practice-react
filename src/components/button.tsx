import {Component_1} from "./component_1";

export const Button = (props:any) => {
  return (
    <div>
        <button>
          Count = <Component_1 count = {props.count} />
        </button>
    </div>
  )
}

