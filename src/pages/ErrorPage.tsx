import { ErrorResponse, useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse | Error;
  const message = isRouteErrorResponse(error) ? error.statusText  : error.message;
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{ message }</i>
      </p>
    </div>
  );
}