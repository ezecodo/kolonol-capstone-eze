import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { HighlightProvider } from "../components/HighlightProvider";
import Layout from "../components/Layout";

//checks if the Home page correctly renders the four expected buttons

test("renders all four buttons", () => {
  render(
    <HighlightProvider>
      <Home />
    </HighlightProvider>
  );

  expect(
    screen.getByRole("button", { name: /Latin Restaurants/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Latin Music/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Tandem/i })).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Embajadas/i })
  ).toBeInTheDocument();
});

//This test checks if the component is rendered correctly and if the page title is displayed as expected.

describe("Layout component", () => {
  test("renders Layout component with given title", () => {
    const testTitle = "Test Title";

    render(
      <HighlightProvider>
        <Layout visibleTitle={testTitle}>
          <p>Test content</p>
        </Layout>
      </HighlightProvider>
    );

    // Check if the page title is rendered correctly
    expect(screen.getByText(testTitle)).toBeInTheDocument();

    // Check if the test content is rendered
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});

test("renders Layout with correct user name and language toggle", () => {
  // Set a user name in localStorage
  const storedUserName = "John Doe";
  localStorage.setItem("userName", storedUserName);

  render(
    <HighlightProvider>
      <Layout visibleTitle="Test Page Title">
        <div>Test Content</div>
      </Layout>
    </HighlightProvider>
  );

  // Check if the user name is rendered
  expect(screen.getByText(storedUserName)).toBeInTheDocument();

  // Check if the language toggle button is rendered and functional
  const toggleButton = screen.getByRole("button", { name: /ES/i });
  expect(toggleButton).toBeInTheDocument();
});
