import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Authentication from './pages/Authentication/Authentication';
import Message from './pages/message/message';
// import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { GetProfileAction } from './Redux/Auth/auth.action';


function App() {
  // const { auth } = useSelector(store => store);  // récupère l'état de l'authentification
  // const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");  // récupère le JWT du localStorage
  // console.log(jwt);

  // Lorsque le JWT change ou que dispatch change, on lance l'action GetProfileAction
  // useEffect(() => {
  //   if (jwt) { // vérifier si jwt existe
  //     dispatch(GetProfileAction(jwt));  // on récupère le profil de l'utilisateur
  //   }
  // }, [jwt, dispatch]);  // dépendances : jwt et dispatch

  // Si auth.user existe, afficher la page d'accueil, sinon afficher la page de connexion
  return (
    <Routes>
      <Route 
        path="/*" 
        element={jwt ? <HomePage /> : <Authentication />} 
      />

      <Route path="/messages" element={<Message />} />
    </Routes>
  );
  
}

export default App;