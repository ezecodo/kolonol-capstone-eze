import Home from "../pages";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Home />);
  const element = screen.getByRole("heading", {
    name: /🔱/,
  });
  expect(element).toBeInTheDocument();
});

// Bloque 'describe' para agrupar las pruebas del componente Home
describe("Home", () => {
  // Renderizar el componente antes de cada prueba
  beforeEach(() => {
    render(<Home />);
  });

  // Pruebas individuales
  test("renders visible title", () => {
    const visibleTitle = screen.getByText(/Bienvenidos a Colonia/i);
    expect(visibleTitle).toBeInTheDocument();
  });

  test("renders navigation buttons with correct text", () => {
    const latinRestaurantsButton = screen.getByText(/Latin Restaurants/i);
    expect(latinRestaurantsButton).toBeInTheDocument();

    const latinMusicButton = screen.getByText(/Latin Music/i);
    expect(latinMusicButton).toBeInTheDocument();

    // Agrega pruebas para los demás botones
  });

  test("renders navigation links with correct href", () => {
    const latinRestaurantsLink = screen.getByRole("link", {
      name: /Latin Restaurants/i,
    });
    expect(latinRestaurantsLink).toHaveAttribute("href", "/restaurants");

    const latinMusicLink = screen.getByRole("link", {
      name: /Latin Music/i,
    });
    expect(latinMusicLink).toHaveAttribute("href", "/night-life");

    // Agrega pruebas para los demás enlaces
  });
});
