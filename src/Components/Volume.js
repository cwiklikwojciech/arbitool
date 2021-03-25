import React, { useState, useEffect } from 'react';

import ShowVolume from './ShowVolume';


const Volume = () => {

    const [bitstamp, setBitstamp]  = useState({one : 0 , five : 0 , fivetenn:0, thirty : 0});
    const [kraken, setKraken]  = useState({one : 0 , five : 0 , fivetenn:0, thirty : 0 });
    

    function showVolume(e) {
        fetch("https://wojciechcwikliknodeapi.herokuapp.com/bitstampApi")
        .then(res => res.json())
        .then(res => { 
            setBitstamp({ one : res[e] ,  five : res[e + 1],  fivetenn : res[e + 2], thirty : res[e + 3]  });
        })

        fetch("https://wojciechcwikliknodeapi.herokuapp.com/krakenApi")
        .then(res => res.json())
        .then(res => { 
            setKraken({ one : res[e] , five : res[e+1] , fivetenn : res[e + 2] ,  thirty : res[e + 3] });
        })
    }
    
    return (
        <>
            <ShowVolume 
                showVolume={showVolume} 
                bitstamp={bitstamp} kraken={kraken}
            />
        </>


    )

}

export default Volume;