import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link to="/storybook">📖 Xem StoryBook</Link>
    </div>
  );
}
