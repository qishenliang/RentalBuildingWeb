import Login from "@/components/Login";
import LayoutApp from "@/components/LayoutApp";

const routes = [
  {
    path: "/",
    element: <LayoutApp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export { routes };
