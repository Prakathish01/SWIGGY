import { useRouteError } from "react-router";

export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops</h1>
      <h3>Something wrong has happened</h3>
    </div>
  );
};
