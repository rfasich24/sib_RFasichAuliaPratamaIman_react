import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Users from "./pages/UsersList";

test("Render halaman Users dengan benar", async () => {
  render(
    <Router>
      <Users />
    </Router>
  );

  // mencari tombol tertentu
  // pastikan button memiliki role="button"
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Back to Home");

  //   menunggu proses fetch user dari API
  // dalam waktu 5 detik
  // kemudian mencari text sebuah nama dari API
  const user = await waitFor(
    () => {
      return screen.findByText("Leanne Graham");
    },
    { timeout: 5000 }
  );
  expect(user).toBeInTheDocument();
});
