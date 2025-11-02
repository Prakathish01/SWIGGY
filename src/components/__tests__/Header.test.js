import { Header } from "../Header";
import appStore from "../../utils/appStore";
import { fireEvent, render ,screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

it("should contain the cart",()=>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );
  const cartButton = screen.getByText(/Cart/);
  expect(cartButton).toBeInTheDocument();
});
it("should change from loggin button to  logout button",()=>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{name:"Logout"});
  expect(logoutButton).toBeInTheDocument();
});