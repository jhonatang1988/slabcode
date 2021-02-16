import { render, screen } from "@testing-library/react";
import CalendarPage from "../pages/calendar";

test("eminder Loaded and saved to ReminderStore", () => {
  const { container, getByText } = render(<CalendarPage />);
  screen.debug();
});
