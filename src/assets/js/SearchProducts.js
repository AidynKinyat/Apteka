import React from 'react';

const SearchProducts = () => {
    return (
        <div>
            <input placeholder="What would you like to find? &#128269;"
                   id="search2"
                   type="search"
                   style={{marginTop: "20px", fontSize: "1.4em", borderRadius:"10px",width: "350px",height: "50px"}} />
        </div>
    );
};

export default SearchProducts;