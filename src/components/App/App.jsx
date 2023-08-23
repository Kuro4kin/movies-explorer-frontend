import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import Main from "../Main/Main.jsx";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Page404 from "../Page404/Page404.jsx";
import { checkUser, getMyMovies } from "../../utils/MainApi.js";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userMovies, setUserMovies] = useState([]);
  const [errCode, setErrCode] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkUser()
      .then(() =>{
         setLoggedIn(true);
         navigate(location.pathname, {replace:true})
        })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([checkUser(), getMyMovies()])
        .then(([userInfo, myMoviesInfo]) => {
          setCurrentUser(userInfo);
          setUserMovies(myMoviesInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleSaveMovie(data) {
    setUserMovies([data, ...userMovies]);
  }

  function handleRemoveSavedMovie(movieId) {
    setUserMovies(userMovies.filter((i) => i._id !== movieId));
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleUnlogin() {
    localStorage.removeItem("keyWordValue");
    localStorage.removeItem("renderMovies");
    localStorage.removeItem("stateButtonAdd");
    localStorage.removeItem("filterMovies");
    localStorage.removeItem("onlyShortFilms");
    setLoggedIn(false);
    navigate("/");
  }

  function handleUpdateUserInfo(data) {
    setCurrentUser(data);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />}></Route>
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={(props) => (
                    <Movies
                      loggedIn={loggedIn}
                      userMovies={userMovies}
                      handleSaveMovie={handleSaveMovie}
                      handleRemoveSavedMovie={handleRemoveSavedMovie}
                    />
                  )}
                />
              }></Route>
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={(props) => <SavedMovies dataMovies={userMovies} loggedIn={loggedIn} handleRemoveSavedMovie={handleRemoveSavedMovie}/>}
                />
              }></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={(props) => (
                    <Profile
                      loggedIn={loggedIn}
                      handleUnlogin={handleUnlogin}
                      handleUpdateUserInfo={handleUpdateUserInfo}
                      errCode={errCode}
                    />
                  )}
                />
              }></Route>
            <Route path="/signin" element={<Login handleLogin={handleLogin} />}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route path="/*" element={<Page404 />}></Route>
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
