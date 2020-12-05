import axios from 'axios'

const qs = new URLSearchParams(window.location.search)

const instance = axios.create({
	//baseURL: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://capsettle.127.0.0.1.xip.io:8888/api/v1.0/' : 'https://sandbox.capitual.io/api/v1.0/',
	baseURL: 'https://sandbox.capitual.io/api/v1.0/',
	timeout: 15000,
	headers: {'Authorization': 'Bearer ' + qs.get('_')}
})

export default instance