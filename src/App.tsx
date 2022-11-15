import SearchBar from './cmponents/SearchBar/SearchBar';
import Loading from './cmponents/SearchBar/Loading';
import React from 'react';
import { useState, useEffect } from 'react';

type ApiProps = {
    country: string;
    domains: string[];
    web_pages: string[];
    alpha_two_code: string;
    name: string;
    'state-province': null;
};

function App() {
    const [universities, setUniversities] = useState<string[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch(
                'http://universities.hipolabs.com/search?country=United+States',
                {
                    method: 'GET',
                }
            );
            const jsonData: ApiProps[] = await data.json();
            const filteredJsonData: string[] = jsonData
                .map((obj) => obj.name)
                .filter((e) => e.length < 70)
                .sort();
            setUniversities(filteredJsonData);
        };

        api();
    }, []);

    return (
        <>
            {universities.length > 0 ? (
                <SearchBar searchItems={universities} />
            ) : (
                <Loading />
            )}
        </>
    );
}

export default App;
