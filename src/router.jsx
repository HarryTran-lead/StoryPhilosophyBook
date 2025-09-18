// router.jsx
import { createBrowserRouter } from "react-router-dom";
import StoryBook from "./components/StoryBook";
import HomePage from "./pages/Homepage"; // ví dụ bạn có HomePage

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/storybook",
    element: <StoryBook />,
  },
]);

export default router;
