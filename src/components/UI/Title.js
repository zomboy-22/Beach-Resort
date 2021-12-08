import classes from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <div className={classes["section-title"]}>
      <h4>{title}</h4>
      <div></div>
    </div>
  );
};

export default Title;
