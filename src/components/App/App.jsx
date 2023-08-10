import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Page404 from "../Page404/Page404.jsx";
import  imageWordsAboutDesign from "../../images/movie-card-photo.jpg";
import  imageFilmAlmanac  from "../../images/movie-card-photo1.jpg";
import  imageInPursuitBanksy from "../../images/movie-card-photo2.jpg";
import  imageBasquiat from "../../images/movie-card-photo3.jpg";
import  imageRunningIsFreedom from "../../images/movie-card-photo4.jpg";
import  imageBooksellers from "../../images/movie-card-photo5.jpg";
import  imageWhenIThink  from "../../images/movie-card-photo6.jpg";
import  imageGimmeDanger from "../../images/movie-card-photo7.jpg";
import  imageJanice from "../../images/movie-card-photo8.jpg";
import  imageGatherBeforeJump from "../../images/movie-card-photo9.jpg";
import  imagePJHarvey from "../../images/movie-card-photo10.jpg";
import  imageOnTheWaves from "../../images/movie-card-photo11.jpg";
import "./App.css";


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const user = {
    name: "Виталий",
    mail: "examle@example.ru",
    id: "HiWv9gBCDJOT6TCXyyFHQe4E4TIetKkf"
  };

  const dataMyMovies = [
    {
      image: imageWordsAboutDesign,
      nameRU: "33 слова о дизайне",
      duration: 107,
      owner: "HiWv9gBCDJOT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },
    {
      image: imageFilmAlmanac,
      nameRU: "Киноальманах «100 лет дизайна»",
      duration: 63,
      owner: "HiWv9gBCDJOT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },    
    {
      image: imageInPursuitBanksy,
      nameRU: "В погоне за Бенкси",
      duration: 102,
      owner: "HiWv9gBCDJOT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },
  ]

  const dataMovies = [
    {
      image: imageWordsAboutDesign,
      nameRU: "33 слова о дизайне",
      duration: 107,
      owner: "HiWv9gBCD6OT6TCXyyFHQe4E4TIetKkf",
      likes: ["HiWv9gBCDJOT6TCXyyFHQe4E4TIetKkf"],
    },
    {
      image: imageFilmAlmanac,
      nameRU: "Киноальманах «100 лет дизайна»",
      duration: 63,
      owner: "HiWv9gBCD6OT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },    
    {
      image: imageInPursuitBanksy,
      nameRU: "В погоне за Бенкси",
      duration: 102,
      owner: "HiWv9gBCD4OT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },
    {
      image: imageBasquiat,
      nameRU: "Баския: Взрыв реальности",
      duration: 81,
      owner: "HiWv9gBCD3OT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },    
    {      
      image: imageRunningIsFreedom,
      nameRU: "Бег это свобода",
      duration: 104,
      owner: "HiWv9gBCD3OT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },
    {
      image: imageBooksellers,
      nameRU: "Книготорговцы",
      duration: 97,
      owner: "HiWv9gBC44OT6TCXyyFHQe4E4TIetKkf",
      likes: ["HiWv9gBCDJOT6TCXyyFHQe4E4TIetKkf"],
    },
    {
      image: imageWhenIThink,
      nameRU: "Когда я думаю о Германии ночью",
      duration: 116,
      owner: "HiWv9gBC55OT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },
    {
      image: imageGimmeDanger,
      nameRU: "Gimme Danger: История Игги и The Stooge...",
      duration: 119,
      owner: "HiWv9gBC5OT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },
    {
      image: imageJanice,
      nameRU: "Дженис: Маленькая девочка грустит",
      duration: 102,
      owner: "HiWv9gB5JOT6TCXyyFHQe4E4TIetKkf",
      likes: ["HiWv9gBCDJOT6TCXyyFHQe4E4TIetKkf"],
    },
    {
      image: imageGatherBeforeJump,
      nameRU: "Соберись перед прыжком",
      duration: 70,
      owner: "HiWv9g4DJOT6TCXyyFHQe4E4TIetKkf",
      likes: ["HiWv9gBCDJOT6TCXyyFHQe4E4TIetKkf"],
    },
    {
      image: imagePJHarvey,
      nameRU: "Пи Джей Харви: A dog called money",
      duration: 64,
      owner: "HiWv9CDJOT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },
    {
      image: imageOnTheWaves,
      nameRU: "По волнам: Искусство звука в кино",
      duration: 67,
      owner: "HiW4gBCDJOT6TCXyyFHQe4E4TIetKkf",
      likes: [],
    },
  ]

  return (
    <div className="root">
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />}></Route>
          <Route path="/movies" element={<Movies dataMovies={dataMovies} user={user} loggedIn={loggedIn} />}></Route>
          <Route path="/saved-movies" element={<SavedMovies dataMovies={dataMyMovies} user={user} loggedIn={loggedIn} />}></Route>
          <Route path="/profile" element={<Profile loggedIn={loggedIn} user={user} />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
