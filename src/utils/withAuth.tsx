import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const withAuth =
  (Component: React.ComponentType<any>) => (props: any) => {
    const jwtToken = localStorage.getItem("JWtToken");
    const navigate = useNavigate();

    useEffect(() => {
      if (!jwtToken) {
        navigate("/login");
      }
    }, [jwtToken, navigate]);

    return <Component {...props} />;
  };
