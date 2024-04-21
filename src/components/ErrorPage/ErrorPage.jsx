import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div className="text-4xl font-bold text-center mt-64">
      <h2>Opps!!</h2>
      <h4>{error.statusText || error.message}</h4>
    </div>
  );
};

export default ErrorPage;
