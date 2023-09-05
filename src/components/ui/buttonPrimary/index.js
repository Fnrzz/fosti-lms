import Styles from "./style.module.css";
const ButtonPrimary = (props) => {
  const { children, link } = props;
  return (
    <a className={`py-2 px-3 ${Styles["btn-custom"]}`} href={link}>
      {children}
    </a>
  );
};

export default ButtonPrimary;
