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

    // USER

    const [
      currentUser,
      setCurrentUser,
    ] = useState(null);

    // AUTH

    const [
      isAuthenticated,
      setIsAuthenticated,
    ] = useState(false);

    // ANSWERS

    const [
      userAnswers,
      setUserAnswers,
    ] = useState({});

    // RESULTS

    const [
      matchedSchemes,
      setMatchedSchemes,
    ] = useState([]);

    // SAVED

    const [
      savedSchemes,
      setSavedSchemes,
    ] = useState([]);

    // ======================
    // LOAD FROM LOCAL STORAGE
    // ======================

    useEffect(() => {

      // USER

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

      // ANSWERS

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

      // SAVED

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

    // ======================
    // LOGIN
    // ======================

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

    // ======================
    // SIGNUP
    // ======================

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

    // ======================
    // LOGOUT
    // ======================

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

    // ======================
    // RESULTS
    // ======================

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

    // ======================
    // SAVE SCHEME
    // ======================

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