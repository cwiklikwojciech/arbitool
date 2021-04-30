import React  from 'react'

import Bitstamp from "../WebSocket/Bitstamp.js";
import Kraken from "../WebSocket/Kraken.js";

const ShowPrice = ({handleClickBitstamp , handleClickKraken, handleClickPln , handleClickDolar , state }) => {
    return(
            <>
                <div className="btn1">
                    <div class="btn-group btn-group-justified">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={handleClickBitstamp.bind(this)} >Bitstamp</button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={handleClickKraken}>Kraken</button>
                        </div>
                    </div>
                </div>

                <div className="btn2">
                    <div class="btn-group btn-group-justified">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={handleClickPln.bind(this)}>PLN</button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" onClick={handleClickDolar.bind(this)}>USD</button>
                        </div>
                    </div>
                </div>

                <div className="bit__stamp" style={{ display: state.visibilityStateBS }}>Bitstamp <Bitstamp value={state.multiplier} /></div>
                <div className="kraken" style={{ display: state.visibilityStateKr }}>Kraken <Kraken value={state.multiplier} /></div>

            </>
    );
}
 
export default ShowPrice;