import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { routes } from "shared";

interface GuestGuardProps {
  children: ReactElement;
}

export const GuestGuard = ({ children }: GuestGuardProps) => {
  const isAuthorized = true;

  if (!isAuthorized) {
    return <Navigate to={routes.login} />;
  }
  return children;
};
