import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useQuery } from 'react-apollo'
import {
    has
} from 'lodash'

const RegisterBanner = ({
    title,
    description,
    registrationLink,
    registrationTitle
}) => (
        <div
            className={classnames(
                "container-fluid",
                "py-5",
                "text-light"
            )}
            style={{ background: "rgb(9, 214, 181)" }}
        >
            <div className="row pt-5">
                <div className="col">
                    <h1
                        className={classnames(
                            "text-uppercase",
                            "font-weight-bold"
                        )}
                    >
                        {title}
                    </h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p>{description}</p>
                </div>
            </div>

            <div className="row pb-5">
                <div className="col">
                    <a
                        href={registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classnames(
                            "btn",
                            "btn-dark",
                            "text-uppercase"
                        )}
                    >
                        {registrationTitle}
                    </a>
                </div>
            </div>
        </div>
    )

RegisterBanner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    registrationLink: PropTypes.string,
}

RegisterBanner.defaultProps = {
    title: 'Ready to register?',
    description: "Registration includes 2 full days of speaker sessions, your choice of breakouts, complimentary lunches, and admission to the after party.",
    registrationLink: "https://cftoday.brushfire.com/church-conference/451932",
    registrationTitle: "Register now",
}

export default RegisterBanner