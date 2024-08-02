import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
