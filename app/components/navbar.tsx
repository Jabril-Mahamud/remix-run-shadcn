import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const action = async ({ request }: ActionFunctionArgs) => {
  return null;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return null;
};

export default function Navbar() {
  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Faq",
      route: "/faq",
    },
    {
      name: "Community",
      route: "/community",
    },
    {
      name: "Blog",
      route: "/blog",
    },
  ];

  return (
      <div className="flex flex-row gap-4 justify-center underline">
        {routes.map((route) => (
          <Link to={route.route}>
            {route.name}
          </Link>
        ))}
      </div>
    
  );
}