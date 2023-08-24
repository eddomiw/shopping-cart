import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Oh no, this route does not exist!</h1>
      <h1>
        You can go back to the home page by clicking{" "}
        <Link to="/" className="text-blue-500">
          here
        </Link>
        , though!
      </h1>
    </div>
  );
};

export default ErrorPage;
