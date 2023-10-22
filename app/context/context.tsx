"use client";

import axios from "axios";
import { getCookie } from "cookies-next";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
interface User {
  id: Number;
  name: String;
  email: String;
  hashedPassword: String;
  hex: string;
}
interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State {
  setAuthState: Dispatch<SetStateAction<State>>;
}
export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const fetchUser = async () => {
    const jwt = getCookie("jwt");
    if (!jwt) {
      return setAuthState({
        data: null,
        error: null,
        loading: false,
      });
    }
    try {
      const response = await axios.get("/api/logInRegister/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setAuthState({
        loading: false,
        data: response.data,
        error: null,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: "HELLO THIS IS A FAKE ERROR ",
  });

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <AuthenticationContext.Provider
      value={{
        ...authState,
        setAuthState,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
