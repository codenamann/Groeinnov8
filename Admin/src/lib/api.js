import axios from 'axios';
const URL = import.meta.env.VITE_SERVER_URL;

export const adminSignup = async (data) => {
    const response = await axios.post(`${URL}/api/auth/register`, data);
    return response.data;
}

export const verifyOTP = async (data) => {
    const response = await axios.post(`${URL}/api/auth/verify-otp`, data);
    return response.data;
}

export const adminLogin = async (data) => {
    const response = await axios.post(`${URL}/api/auth/login`, data);
    return response.data;
}

export const sendContactMessage = async (data) => {
    const response = await axios.post(`${URL}/api/contact`, data);
    return response.data;
}

export const deleteMail = async (token, id) => {
    if(!token){
        console.error('No token provided');
        return;
    }
    try{
        const response = await axios.delete(`${URL}/api/contact/${id}`, {
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        });
        return response.data;
    }catch(err){
        console.error(err);
    }
    
}

export const deleteAllMails = async (token) => {
    if(!token){
        console.error('No token provided');
        return;
    }
    try{
        const response = await axios.delete(`${URL}/api/contact`, {
            headers:{
                'Authorization' : `Bearer ${token}`
            }
        });
        return response.data;
    }catch(err){
        console.error('Error deleting mails :', err);
    }
}

export const getSettings = async (token) => {
    if(!token){
        console.error('No token provided');
        return;
    }
    try{
        const response = await axios.get(`${URL}/api/settings`, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data.settings;
    }catch(err){
        console.error(err);
    }
}
export const onToggleNotifications = async (token, newValue) => {
    if(!token){
        console.log('No token provided');
        return;
    }
    try{
        const response = axios.patch(`${URL}/api/settings/notification-toggle`,{
            Notification: newValue
        }, {
            headers:{
                'Authorization' : `Bearer ${token}`
            }
        })
        return response;
    }catch(err){
        console.log(err);
    }
}
export const fetchEmails = async (token) => {
    if(!token){
        console.log('No token provided');
        return;
    }
    try{
        const response = await axios.get(`${URL}/api/contact`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        return response.data.emails;
    }catch(err){
        console.error(err);
    }
}