import React, { Component } from 'react';

class SponsorLink extends Component {
    render() {
        return (
            <a href={this.props.to} className="w-100">
                <img
                    className="w-100"
                    src={this.props.img}
                    alt={'Christ Fellowship Conference Sponsor : ' + this.props.name} />
            </a>
        );
    }
}

export default SponsorLink;