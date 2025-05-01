import { createContext, useContext, useEffect, useState } from "react";
import { supabase, InsertUsers } from "../index";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session === null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);

          // Insertar usuario db
          insertUsers(session?.user.user_metadata, session?.user.id);
          console.log(event);
          console.log(session);
        }
      }
    );

    return () => {
      authListener.subscription;
    };
  }, []);

  const insertUsers = async (dataProvider, idAuthSupabase) => {
    const params = {
      nombres: dataProvider.name,
      foto: dataProvider.picture,
      idauth_supabase: idAuthSupabase,
    };

    await InsertUsers(params);
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
