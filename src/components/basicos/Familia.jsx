import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
  return (
    <div>
        <FamiliaMembro nome="Pedro" {...props} />
        <FamiliaMembro nome="Ana" {...props}  />
        <FamiliaMembro nome="Letícia" {...props} />
    </div>
  );
};

export default Familia;
