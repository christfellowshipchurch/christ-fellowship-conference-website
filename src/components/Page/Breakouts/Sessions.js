import React from 'react'
import { Query, useQuery } from 'react-apollo'
import { get, kebabCase } from 'lodash'
import classnames from 'classnames'

import { Loader } from '@christfellowshipchurch/flat-ui-web'

import Logo from '../../../images/logo_orange.png'
import { GET_SESSION_BY_CATEGORY } from './queries'

const Sessions = ({
    category
}) => {
    const { loading, error, data } = useQuery(
        GET_SESSION_BY_CATEGORY,
        {
            variables: { category },
            fetchPolicy: "cache-and-network"
        }
    )

    console.log({ category })
    if (loading || error) return (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
            <Loader />
        </div>
    )

    const breakoutCategory = get(data, 'getBreakoutSessionsByCategory[0].parent.value', '')

    console.log({ data })

    return (
        <div className="container-fluid">
            <div className="row">
                <div
                    className={classnames(
                        "col",
                        "py-5",
                        "px-md-5",
                        "bg-primary",
                        "text-light",
                        "text-left"
                    )}
                >
                    <div className="container">
                        <div
                            className="row align-items-end"
                            style={{ minHeight: "25vh" }}
                        >
                            <div
                                className={classnames(
                                    "col",
                                    "d-flex",
                                    "flex-column",
                                    "align-items-start",
                                    "flex-md-row",
                                    "align-items-md-center",
                                )}
                            >
                                <img
                                    src={Logo}
                                    alt="Christ Fellowship Church Conference Logo"
                                />
                                <div className="m-3">
                                    <h1 className="m-0 font-weight-bolder text-uppercase">
                                        {breakoutCategory}
                                    </h1>
                                    <h6>
                                        <small>
                                            breakouts
                                        </small>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="container">
                        {get(data, 'getBreakoutSessionsByCategory', []).map((n, i) => (
                            <div
                                className="row my-5"
                                key={i}
                            >
                                <div
                                    className={classnames(
                                        "col-12",
                                        "col-md-4",
                                        "text-left",
                                        "my-3"
                                    )}
                                >
                                    <h3 className="text-lowercase">
                                        {get(n, 'title', '')}
                                    </h3>

                                    {get(n, 'tag', '') !== '' &&
                                        <span
                                            className={classnames(
                                                "badge",
                                                "badge-pill",
                                                "badge-warning",
                                                "text-white",
                                                "text-uppercase",
                                                "text-monospace"
                                            )}
                                        >
                                            {get(n, 'tag', '')}
                                        </span>
                                    }
                                </div>
                                <div className="col text-left my-3">
                                    <p>
                                        {get(n, 'description', '')}
                                    </p>
                                    <hr></hr>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Sessions.propTypes = {

}

Sessions.defaultProps = {

}

export default Sessions