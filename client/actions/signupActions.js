import promise from 'redux-promise-middleware'
import axios from 'axios'

export function userSignupRequest(userData){
	 	return {
	 		type: 'USER_SIGNUP',
	 		payload: axios.post('http://localhost:3000/api/signup', userData)
	 	} 
}