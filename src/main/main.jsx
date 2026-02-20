import { createRoot } from "react-dom/client";
import App from "../App/App.jsx";

function Main() {
  return <App />;
}

createRoot(document.getElementById("root")).render(<Main />);