import classes from "./Services.module.css";
import Title from "./UI/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const DUMMY_SERVICES_DATA = [
  {
    icon: <FaCocktail />,
    title: "free cocktails",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    icon: <FaHiking />,
    title: "endless hicking",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    icon: <FaShuttleVan />,
    title: "free shuttle",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    icon: <FaBeer />,
    title: "strongest drink",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

const Services = () => {
  const allServices = DUMMY_SERVICES_DATA.map((service, index) => {
    return (
      <article key={index} className={classes.service}>
        <span>{service.icon}</span>
        <h6>{service.title}</h6>
        <p>{service.info}</p>
      </article>
    );
  });

  return (
    <section className={classes.services}>
      <Title title="services" />
      <div className={classes["services-center"]}>{allServices}</div>
    </section>
  );
};

export default Services;
