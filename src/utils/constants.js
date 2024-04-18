// const API_URL = 'http://localhost:4000';
const API_URL = 'https://p7backend.azurewebsites.net/';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  BOOKS: `${API_URL}/api/books`,
  BEST_RATED: `${API_URL}/api/books/bestrating`,
};

export const APP_ROUTES = {
  SIGN_UP: '/P7-Dev-Web-livres/Inscription',
  SIGN_IN: '/P7-Dev-Web-livres/Connexion',
  ADD_BOOK: '/P7-Dev-Web-livres/Ajouter',
  BOOK: '/P7-Dev-Web-livres/livre/:id',
  UPDATE_BOOK: '/P7-Dev-Web-livres/livre/modifier/:id',
};
