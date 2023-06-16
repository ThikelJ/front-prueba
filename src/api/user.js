import api from './config';
export function loginUser(payload) {
    return api.post('/login', payload);
}
export function registerUser(payload) {
    return api.post('/register', payload);
}
export function getProfile() {
    return api.get('/profile');
}