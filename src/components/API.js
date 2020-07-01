import axios from 'axios';

export default axios.create({
    baseURL: 'https://spacelaunchnow.me/api/3.3.0/launch',
	headers: { 'Content-Type': 'application/json' }
});