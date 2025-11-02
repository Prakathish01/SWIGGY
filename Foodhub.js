import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; //react-router-dom
import { Error } from "./src/components/Error";
import { ContactUs } from "./src/components/ContactUs";
import { RestaurantMenu } from "./src/components/RestaurantMenu";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart.js";

const Foodhub = () => {
  return (
    <Provider store={appStore}>
      <div className="foodhub">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const Grocery = lazy(() => import("./src/components/Grocery.js"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Foodhub />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery page is loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
