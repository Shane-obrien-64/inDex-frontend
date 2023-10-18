import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__divider">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">
          We couldn't find the page you were looking for.
        </p>
      </div>

      <p className="not-found__text">
        Try entering a Pokemon name, or PokeDex number
      </p>
    </div>
  );
};

export default NotFound;
