import React, { Component } from 'react';
import {
    
}                           from 'reactstrap';
import classnames           from 'classnames';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faFacebook }       from '@fortawesome/free-brands-svg-icons';
import { faTwitter }        from '@fortawesome/free-brands-svg-icons';
import { faInstagram }      from '@fortawesome/free-brands-svg-icons';
import { faLink }           from '@fortawesome/free-solid-svg-icons';
import { hasProperty }      from './utils';

/**
 * TODO : Fix the social media icon import from Font Awesome
 */


class SocialMedia extends Component {
    constructor(props) {
        super(props);

        this.fontSize = hasProperty(this.props, 'fontSize') ? this.props.fontSize : 'h1';
        this.socialIcons = {
            'facebook':     faFacebook,
            'twitter':      faTwitter,
            'instagram':    faInstagram
        }
    }

    renderSocialMediaLinks = (links) => {
        let renderedLinks = [];

        if (links) {
            for (var i = 0; i < links.length; i++) {
                const link = links[i];
                const icon = hasProperty(link, 'icon') ? link.icon :    // use icon if specified in link object
                                (
                                    link.name in this.socialIcons ?
                                        this.socialIcons[link.name] :        // if link.name is in socialIcons, use that icon
                                        faLink                          // default icon
                                );
                const classes = classnames(
                    "mx-1",
                    "text-" + link.color
                );

                renderedLinks.push(
                    <a href={link.url} target="_blank" className={classes} key={i}>
                        <FontAwesomeIcon icon={icon} />
                    </a>
                );
            }
        }

        return renderedLinks;
    }

    render() {
        const classes = classnames(
            this.props.className,
            this.fontSize
        );

        return (
            <p className={classes}>
                {this.renderSocialMediaLinks(this.props.links)}
            </p>
        );
    }
}

export default SocialMedia;