import axios from 'axios';

const getHeadsData = () => axios.get('http://localhost:3004/heads');

const getTorsosData = () => axios.get('http://localhost:3004/torsos');

const getLegsData = () => axios.get('http://localhost:3004/legs');

export default { getHeadsData, getLegsData, getTorsosData };
