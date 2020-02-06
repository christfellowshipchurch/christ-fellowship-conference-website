import React from 'react'

const MapImg = require('./full-venue.png')

const Map = () => <div className="container">
    <div className="row">
        <div className="col p-3">
            <img
                className="w-100"
                src={require('./full-venue.png')}
                alt="Christ Fellowship Conference Map"
            />
        </div>
    </div>
</div>;

Map.defaultProps = {
};

Map.propTypes = {
};

export default Map;
