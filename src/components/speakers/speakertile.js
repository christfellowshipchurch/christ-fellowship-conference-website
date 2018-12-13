import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { condense }         from '../utils';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faAngleDown }      from '@fortawesome/free-solid-svg-icons';


/**
 * speaker  | object
 *          | * see speakertilecontent.js for speaker properties *
 * target   | string
 */

class SpeakerTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const speaker = this.props.speaker;
        const speakerLink = '/speakers/' + condense(speaker.title);

        return (
            <Link to={speakerLink}>
                <div className="border-0 bg-white text-center text-light">
                    <img className="tile-img" src={speaker.img} />
                    <h4 className="font-weight-light">{speaker.title}</h4>
                    <h4 className="bounce">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </h4>
                </div>
            </Link>
        );
    }
}

export default SpeakerTile;