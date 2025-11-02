import { ContactUs } from "../ContactUs";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("button in contactUs page present or not",()=>{
  render(<ContactUs/>);

  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBeGreaterThan(0);

})
test("Checking the count of input box",()=>{
  render(<ContactUs/>);

  const input = screen.getAllByRole("textbox");
  expect(input.length).toBeGreaterThan(0);

})
test("Checking the count of input box",()=>{
  render(<ContactUs/>);

  const input = screen.getAllByRole("textbox");
  expect(input.length).toBe(2);

})