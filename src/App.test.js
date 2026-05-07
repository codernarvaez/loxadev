import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "app/store";
import App from "./App";

test("renderiza la aplicación", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(
    screen.getByText(/Te ofrecemos Soluciones/i)
  ).toBeInTheDocument();
});
