import classes from "./Banner.module.css";

const Banner = ({ children, title, subtitle }) => {
  return (
    <div className={classes.banner}>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
