import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { routes } from "shared";

interface AuthGuardProps {
  children: ReactElement;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthorized = false;

  if (isAuthorized) {
    return <Navigate to={routes.root} />;
  }
  return children;
};
