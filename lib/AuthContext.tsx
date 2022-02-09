import { createContext, useState, useEffect, useContext } from "react";
import { User } from "@firebase/auth-types";

import firebase, { auth } from "@/lib/firebase";

type AuthContextType = {
  currentUser: User | null;
  login?: () => Promise<void>;
  logout?: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({ currentUser: null });

export const useAuth = () => {
  return useContext(AuthContext);
};

type Props = {
  children?: JSX.Element;
};

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {isLoading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
