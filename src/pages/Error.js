import { Link } from "react-router-dom";
import Banner from "../components/UI/Banner";
import Hero from "../components/UI/Hero";

const Error = () => {
  return (
    <Hero hero="defaultHero">
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
