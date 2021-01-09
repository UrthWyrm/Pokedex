import { useEffect, useState } from 'react';
import Poke from '../api/Poke';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hello');
        try {
            const response = await Poke.get('', {
            params: {
                series: 'Base',
                term: searchTerm,
            }
        });
        setResults(response.data.cards);
    } catch (err) {
        setErrorMessage('Try that again');
    }
    };


    // searchApi('pokemon')
    useEffect(() => {
        searchApi('pokemon')
    }, []);

    return [searchApi, results, errorMessage];
};