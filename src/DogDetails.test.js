import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DogDetails from "./DogDetails";

it("works", function () {
  const dog = {
    name: "test",
    age: 5,
    src: "test",
    facts: [
      "test loves eating popcorn.",
      "test is a terrible guard dog.",
      "test wants to cuddle with you!",
    ],
  };
  render(
    <MemoryRouter>
      <DogDetails dog={dog} />
    </MemoryRouter>
  );
});

it("should render a dog", function () {
  const dog = {
    name: "test",
    age: 5,
    src: "test",
    facts: [
      "test loves eating popcorn.",
      "test is a terrible guard dog.",
      "test wants to cuddle with you!",
    ],
  };
  const { getByText } = render(
    <MemoryRouter>
      <DogDetails dog={dog} />
    </MemoryRouter>
  );

  const fact = getByText(
    /Facts : test loves eating popcorn.,test is a terrible guard dog.,/i
  );
  expect(fact).toBeInTheDocument();
});
