import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import schemes from "../data/schemes.json";

import {
  matchSchemes,
} from "../data/match";

const AppContext =
  createContext();

export const AppProvider =
  ({ children }) => {

    const [
      currentUser,
      setCurrentUser,
    ] = useState(null);


    const [
      isAuthenticated,
      setIsAuthenticated,
    ] = useState(false);

    const [
      userAnswers,
      setUserAnswers,
    ] = useState({});


    const [
      matchedSchemes,
      setMatchedSchemes,
    ] = useState([]);

    const [
      savedSchemes,
      setSavedSchemes,
    ] = useState([]);

    useEffect(() => {


      const storedUser =
        localStorage.getItem(
          "eligifyUser"
        );

      if (storedUser) {

        const parsedUser =
          JSON.parse(
            storedUser
          );

        setCurrentUser(
          parsedUser
        );

        setIsAuthenticated(
          true
        );
      }


      const storedAnswers =
        localStorage.getItem(
          "eligifyAnswers"
        );

      if (
        storedAnswers
      ) {

        setUserAnswers(
          JSON.parse(
            storedAnswers
          )
        );
      }


      const storedSaved =
        localStorage.getItem(
          "savedSchemes"
        );

      if (
        storedSaved
      ) {

        setSavedSchemes(
          JSON.parse(
            storedSaved
          )
        );
      }

    }, []);


    const login =
      (userData) => {

        setCurrentUser(
          userData
        );

        setIsAuthenticated(
          true
        );

        localStorage.setItem(
          "eligifyUser",
          JSON.stringify(
            userData
          )
        );
      };


    const signup =
      (userData) => {

        setCurrentUser(
          userData
        );

        setIsAuthenticated(
          true
        );

        localStorage.setItem(
          "eligifyUser",
          JSON.stringify(
            userData
          )
        );
      };


    const logout =
      () => {

        setCurrentUser(
          null
        );

        setIsAuthenticated(
          false
        );

        localStorage.removeItem(
          "eligifyUser"
        );
      };


    const generateResults =
      () => {

        const results =
          matchSchemes(
            schemes,
            userAnswers
          );

        setMatchedSchemes(
          results
        );
      };

 const toggleSaveScheme = (scheme) => {

  const alreadySaved =
    savedSchemes.some(
      (item) =>
        item.id === scheme.id
    );

  let updatedSchemes = [];

  if (alreadySaved) {

    updatedSchemes =
      savedSchemes.filter(
        (item) =>
          item.id !== scheme.id
      );

  } else {

    updatedSchemes = [
      ...savedSchemes,
      scheme,
    ];
  }

  setSavedSchemes(
    updatedSchemes
  );

  localStorage.setItem(
    "savedSchemes",
    JSON.stringify(
      updatedSchemes
    )
  );
};
    return (

      <AppContext.Provider
        value={{

          currentUser,
          isAuthenticated,

          login,
          signup,
          logout,

          userAnswers,
          setUserAnswers,

          matchedSchemes,
          generateResults,

          savedSchemes,
          toggleSaveScheme,
        }}
      >

        {children}

      </AppContext.Provider>
    );
  };

export const useAppContext =
  () =>
    useContext(
      AppContext
    );

export default AppContext;