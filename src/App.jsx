// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StoryBook from "./components/StoryBook";
import HomePage from "@pages/HomePage/mainLayout"; // Layout cha
import Home from "@pages/HomePage/Home";
import About from "@pages/HomePage/About";
import Chapters from "@pages/HomePage/Chapters";
import Quiz from "@pages/HomePage/Quiz/quizLayout";
import Resources from "@pages/HomePage/Resources";
// import Faqs from "@pages/HomePage/Faqs";
import endPoint from "@routes/routes";

const router = createBrowserRouter([
  {
    path: endPoint.HOMEPAGE,
    element: <HomePage />, // layout cha
    children: [
      { index: true, element: <Home /> }, // trang chủ
      { path: endPoint.ABOUT, element: <About /> },
      { path: endPoint.CHAPTERS, element: <Chapters /> },
      { path: endPoint.QUIZ, element: <Quiz /> },
      { path: endPoint.RESOURCES, element: <Resources /> },
      // { path: "faqs", element: <Faqs /> },
    ],
  },
  {
    path: "/storybook",
    element: <StoryBook />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
