import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DogDetails from "./DogDetails";

it("works", function () {
  render(
    <MemoryRouter>
      <DogDetails />
    </MemoryRouter>
  );
});

it("should render a dog", function () {
  const { getByText } = render(
    <MemoryRouter>
      <DogDetails
        dog={{
          name: "Whiskey",
          age: 5,
          src: "whiskey",
          facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!",
          ],
        }}
      />
    </MemoryRouter>
  );

  const fact = getByText(
    /Facts : Whiskey loves eating popcorn.,Whiskey is a terrible guard dog.,/i
  );
  expect(fact).toBeInTheDocument();

  expect(<img src="whiskey.jpg" alt="whiskey"></img>).toBeInTheDocument();
});
