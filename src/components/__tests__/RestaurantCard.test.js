import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it(" should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");
  expect(name).toBeInTheDocument();
});

//HW
// it("should render RestaurantCard Component with promoted label",()=>{
//   render(withPromotedLabel)
// })
