import React, { useState }  from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Content from '@christfellowshipchurch/flat-ui-web/lib/Content';

// import { buttonClick } from './utils'

const RenderButtonWithChecks = ({callsToAction, buttonColor, title, openLinksInNewTab}) => {
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    
    return (
        <Container className="px-0 py-2">
            <Row className='my-2'>
                <Col 
                    className={classnames(
                    '4',
                    'd-flex',
                    'flex-column'
                    )}
                    style={{fontSize: 12}}
                >
                    <div className='d-flex align-items-center mb-3'>
                        <FontAwesomeIcon
                            icon={checkOne ? faCheckSquare : faSquare}
                            onClick={() => setCheckOne(!checkOne)}
                            size='2x'
                            color='#525252'
                        />
                        <h6 className='mb-0 pl-1 font-weight-light'>
                            I have read and agree to the
                            <a href='https://www.sdrock.com/terms-of-use/'> Terms & Conditions</a>
                        </h6>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                        <FontAwesomeIcon
                            icon={checkTwo ? faCheckSquare : faSquare}
                            onClick={() => setCheckTwo(!checkTwo)}
                            size='2x'
                            color='#525252'
                        />
                        <h6 className='mb-0 pl-1 font-weight-light'>I have read and agree to the book purchase recommendation</h6>
                    </div>
                </Col>
            </Row>
            {callsToAction.map((n, i) => {
                const styles = {
                    backgroundColor: buttonColor,
                    borderColor: buttonColor
                }
                return (
                    <Row className="my-2" key={i}>
                        <Col size="12">
                            <Button
                            style={styles}
                            disabled={!checkOne || !checkTwo}
                            >
                                {n.call}
                            </Button>
                        </Col>
                    </Row>
                )
            })}
        </Container>
    );
  }

RenderButtonWithChecks.propTypes = {
    callsToAction: PropTypes.array,
    buttonColor: PropTypes.string,
    title: PropTypes.string,
    openLinksInNewTab: PropTypes.bool
}

RenderButtonWithChecks.defaultProps = {
    callsToAction: [{
        call: 'checkbox**DOWNLOAD NOW',
        action: '/#'
    }],
    buttonColor:'',
    title:'',
    openLinksInNewTab: false
}

export default RenderButtonWithChecks