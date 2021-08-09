import Helmet from "react-helmet";

const Seo = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title ? "Pemilihan Umum Raya - " + title : "Pemilihan Umum Raya"}
      </title>
    </Helmet>
  );
};

export default Seo;
