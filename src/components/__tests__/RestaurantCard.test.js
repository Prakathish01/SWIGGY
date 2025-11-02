import { RestaurantCard } from "../RestaurantCard";
import {render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MOCK_DATA } from "../mocks/ResCardMock";


it("should check the Restaurant Card is exist or not",()=>{
  render(<RestaurantCard resData={MOCK_DATA}/>);
  const ResCard = screen.getByText("A2B - Adyar Ananda Bhavan");
  expect(ResCard).toBeInTheDocument();
})