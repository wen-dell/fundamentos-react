import { cloneElement } from "react";

const Familia = (props) => {
  return <div>{props.children.map((child, i) => cloneElement(child, { ...props, key: i }))}</div>;
};

export default Familia;
