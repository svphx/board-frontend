import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "shared";

import { LoginPage, RegisterPage, NotFoundPage } from "./ui";
import { AuthGuard, GuestGuard } from "./guards";

const router = createBrowserRouter([
  {
    errorElement: <NotFoundPage />,
    children: [
      {
        path: routes.login,
        element: (
          <AuthGuard>
            <LoginPage />
          </AuthGuard>
        ),
      },
      {
        path: routes.register,
        element: (
          <AuthGuard>
            <RegisterPage />
          </AuthGuard>
        ),
      },
      {
        path: routes.root,
        element: (
          <GuestGuard>
            <div>root page</div>
          </GuestGuard>
        ),
      },
    ],
  },
]);

export const Router: FC = () => {
  return <RouterProvider router={router} />;
};
