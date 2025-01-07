const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
  isAuthenticated: false,  // Ajout de isAuthenticated pour un contrôle clair de l'état
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Gestion des requêtes de connexion, inscription et récupération du profil
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'GET_PROFILE_REQUEST':
      return { ...state, loading: true, error: null };

    // Réussite de la récupération du profil utilisateur
    case 'GET_PROFILE_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        user: action.payload, 
        isAuthenticated: true,  // L'utilisateur est authentifié après la récupération du profil
      };

    // Réussite de la connexion et de l'inscription
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        jwt: action.payload,  // Enregistrer le jwt dans l'état
        user: action.payload.user,  // Supposons que l'objet payload contienne 'user' et 'jwt'
        isAuthenticated: true,  // L'utilisateur est maintenant authentifié
      };

    // Échec de la connexion ou de l'inscription
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return { 
        ...state, 
        loading: false, 
        error: action.payload || 'Something went wrong',  // Assure-toi que tu renvoies un message d'erreur approprié
      };

    default:
      return state;
  }
};
