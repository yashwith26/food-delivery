import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (9)");

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  expect(screen.getByText("Cart- (0)")).toBeInTheDocument();

  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart- (1)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart- (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(11);

  fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  expect(screen.getByText("Your Cart is empty")).toBeInTheDocument();
});
