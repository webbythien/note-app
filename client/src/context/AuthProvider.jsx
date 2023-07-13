import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((currentUser) => {
      if (currentUser?.uid) {
        setUser(currentUser);
        if (currentUser.accessToken !== localStorage.getItem("accessToken")) {
          localStorage.setItem("accessToken", currentUser.accessToken);
          window.location.reload();
        }
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setUser({});
      localStorage.clear();
      navigate("/login");
    });

    return () => {
      unsubcribed();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {isLoading ? <CircularProgress /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
