import {jwtDecode} from 'jwt-decode';
export const getToken=()=>{
    const token=localStorage.getItem('token')||sessionStorage.getItem('token');
    if(!token) return null;
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        return null;
    }
    return token;
}