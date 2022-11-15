import React from 'react';
import { useState } from 'react';

type PropData = {
    searchItems: string[];
};
const SearchBar = ({ searchItems }: PropData) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [showMore, setShowMore] = useState<boolean>(false);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const input: string = event.target.value;
        setSearchValue(input);
    };
    const filteredItems: string[] = searchItems.filter((item) =>
        item.includes(searchValue)
    );
    return (
        <>
            <div>
                <input type='text' value={searchValue} onChange={handleInputChange} />
                {searchValue.length > 0 && (
                    <button onClick={() => setSearchValue('')}>Clear</button>
                )}
                <div>
                    <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'show less' : 'show more'}
                    </button>
                </div>
                <h1>
                    {showMore
                        ? filteredItems.map((value, index) => {
                              return <div key={index}>{value}</div>;
                          })
                        : ((filteredItems.length = 13),
                          filteredItems.map((value, index) => {
                              return <div key={index}>{value}</div>;
                          }))}
                </h1>
            </div>
        </>
    );
};

export default SearchBar;
