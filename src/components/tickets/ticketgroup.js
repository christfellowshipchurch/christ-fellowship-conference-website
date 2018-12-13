import React, { Component } from 'react';
import { Query } from 'react-apollo';
import classnames from 'classnames';
import {
    Container, Row, Col,
    Card, CardBody, CardHeader, CardTitle
} from 'reactstrap';

import Ticket from './ticket';

import getTickets from '../queries/gettickets';
import PreLoader from '../loaders/preloader';
import LoaderError from '../loaders/loadererror';


/**
 * tickets  | array of ticket objects
 *          | * see ticket.js for ticket properties *
 */


class TicketGroup extends Component {
    constructor(props) {
        super(props);
    }

    renderTickets = (tickets) => {
        let renderedTickets = [];

        if (tickets) {
            const mdCol = 12 / tickets.length < 4 ? Math.round(12 / tickets.length) < 4 : 4;

            for (var i = 0; i < tickets.length; i++) {
                const ticket = tickets[i];
                const id = "ticket_" + i;

                renderedTickets.push(
                    <Col xs="12" md={mdCol} key={id}>
                        <Ticket color={ticket.color} url={ticket.registration} price={ticket.ticketPrice} type={ticket.title}>
                            {ticket.htmlContent}
                        </Ticket>
                    </Col>
                );
            }
        }

        return renderedTickets;
    }

    render() {

        return (
            <Query query={getTickets} fetchPolicy="cache-and-network">
                {({ loading, error, data }) => {
                    if (loading) return <PreLoader />
                    if (error) { console.error(error); return <LoaderError />; }

                    const tickets = data.node.childContentItemsConnection.edges.map(c => c.node);

                    return (
                        <Container>
                            <Row className="py-3">
                                {this.renderTickets(tickets)}
                            </Row>
                        </Container>
                    )
                }}
            </Query>
        );
    }
}

export default TicketGroup;