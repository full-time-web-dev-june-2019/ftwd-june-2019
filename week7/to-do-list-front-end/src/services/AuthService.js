import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password) => {
    return this.service.post('/signup', {username:username, password:password})
    .then(response => response.data)
  }

  login = (username, password) =>{
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  currentUser = () =>{
    return this.service.get('/getcurrentuser')
    .then(response => response.data)
  }


  logout = () =>{
    return this.service.post('/logout', {})
    .then(response => response.data)
  }


}

export default AuthService;