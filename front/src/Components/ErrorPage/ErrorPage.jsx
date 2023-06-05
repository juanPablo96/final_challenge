import { Link, useRouteError } from "react-router-dom";
import "./errorPage.css";
import Button from "react-bootstrap/esm/Button";
import errorImg from "../../assets/errorImg.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="errorPage">
      <h1>Ups!</h1>
      <h4>Error 404</h4>
      <img className="imgErrorPage" src={errorImg} alt="figurita rota" />
      <p>La página no ha sido encontrada</p>
      <p>
        <Link to={"/"}>
          <Button variant="primary">Ir al inicio</Button>
        </Link>
      </p>
    </div>
  );
}
