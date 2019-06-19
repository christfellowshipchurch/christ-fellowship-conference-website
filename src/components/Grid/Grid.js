import React from 'react'
import classnames from 'classnames'
import {
    Query
} from 'react-apollo'
import {
    lowerCase
} from 'lodash'
import {
    Content, Loader, Media
} from '@christfellowshipchurch/flat-ui-web'
import { Container, Row, Col } from 'reactstrap'
import {
    pattern, patternLeft, patternRight
} from '../../styles/grid.module.css'

import {
    mapEdgesToNodes, renderButtons
} from '../../utils'

import getGroupContentItems from '../../queries/getGroupContentItems'
import GridLayout from './GridLayout'

// body is a react component
const Grid = ({ id, title, htmlContent, coverImage, backgroundColor, reversePatternSide = false }) => {
    const img = coverImage ? coverImage.sources[0].uri : null
    
    

    return (
        <Query query={getGroupContentItems(id)} fetchPolicy="cache-and-network">
            {({ loading, error, data: groupContent }) => {

                if (loading) return (
                    <GridLayout title={title} body={htmlContent} backgroundImg={img} backgroundColor={backgroundColor}>
                        <Loader />
                    </GridLayout>
                )
                if (error) return (
                    <GridLayout title={title} body={htmlContent} backgroundImg={img} backgroundColor={backgroundColor}>
                        <h1>There was an error loading this content. Please try again later.</h1>
                    </GridLayout>
                )

                const groupItems = mapEdgesToNodes(groupContent.node.childContentItemsConnection)

                return (
                    <GridLayout
                        title={title}
                        body={htmlContent}
                        backgroundImg={img}
                        backgroundColor={backgroundColor}
                        backgroundImgReverse={reversePatternSide} >
                        {groupItems.map(groupItem => {
                            const props = {
                                imageUrl: groupItem.coverImage ? groupItem.coverImage.sources[0].uri : null,
                                imageAlt: groupItem.imageAlt,
                                videoUrl: groupItem.videos && groupItem.videos[0].sources.length
                                    ? groupItem.videos[0].sources[0].uri
                                    : null
                            }

                            console.log(groupItem.imageRatio)

                            return groupItem.gridImageLink
                                ? (
                                    <a href={groupItem.gridImageLink}>
                                        <Media {...props} ratio="1by1" />
                                    </a>
                                )
                                : (
                                    <div className="text-dark">
                                        <Media {...props} ratio={groupItem.imageRatio} />
                                        <Content layout='default'>
                                            <Content.Body>
                                                {groupItem.htmlContent}
                                            </Content.Body>

                                            {renderButtons(groupItem.callsToAction, groupItem.buttonColor)}
                                        </Content>
                                    </div>
                                )
                        })}
                    </GridLayout>
                )
            }}
        </Query>
    )
}

export default Grid;