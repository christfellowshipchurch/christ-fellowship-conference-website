import React from 'react'
import classnames from 'classnames'
import { useQuery } from 'react-apollo'
import {
    has, kebabCase
} from 'lodash'

import { GET_BREAKOUT_CATEGORIES } from './queries'
import Logo from '../../../images/logo_orange.png'
import RegisterBanner from './RegisterBanner'

const CategoryTitle = ({ title }) => (
    <a
        href={`/breakouts/${kebabCase(title)}`}
        className={classnames(
            "card",
            "border-0",
            "w-100",
            "h-100",
        )}
    >
        <div
            className="card-header"
            style={{ background: 'rgb(9, 214, 181)' }}
        ></div>

        <div
            className={classnames(
                "card-body",
                "text-dark",
                "text-left",
                "p-4"
            )}
        >
            <h3
                className={classnames(
                    "font-weight-bolder",
                    "text-uppercase"
                )}
            >
                {title}
            </h3>
        </div>

        <div
            className={classnames(
                "card-footer",
                "border-0",
                "bg-white",
                "text-right",
                "p-4"
            )}
        >
            <img
                src={Logo}
                alt="Christ Fellowship Church Conference Logo"
                style={{ height: 40, width: 40 }}
            />
        </div>
    </a>
)

const Categories = () => {
    const { data } = useQuery(GET_BREAKOUT_CATEGORIES)

    return (
        <div
            style={{ background: 'rgb(24, 0, 255)' }}
        >
            <div
                className={classnames(
                    "container-fluid",
                    "py-5",
                    "text-light"
                )}
            >
                <div className="row">
                    <div className="col">
                        <h1>BREAKOUTS</h1>
                        <p>
                            Check out our list of ministry-specific breakouts designed just for you.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="container">
                            {has(data, 'getBreakoutCategories') &&
                                <div className="row">
                                    {data.getBreakoutCategories.values.map((n, i) => (
                                        <div className="col-12 col-lg-4 my-3">
                                            <CategoryTitle
                                                title={n.value}
                                                key={i}
                                            />
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <RegisterBanner />
        </div>
    )
}

Categories.propTypes = {

}

Categories.defaultProps = {

}

export default Categories