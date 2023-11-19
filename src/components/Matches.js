import React from 'react';
import { Container, Row, Col, Card, Badge, ListGroup } from 'react-bootstrap';
import SignupStatusBar from './MatchSignupStatusBar';

const currentTeam = 'Sterrenwijk Zondag 6'

// Sample data for upcoming matches and signed-up players
const upcomingMatches = [
    {
        id: 1,
        date: '2023-11-20',
        homeMatch: true,
        opponent: 'Rentable FC 1',
        playersJoining: ['Sybren', 'Max', 'Mans', 'Bram', 'Igor'],
        playersNotJoining: ['Thijs', 'Teeuwen', 'Koen', 'Puck', 'Sam'],
        playersPending: ['Jony', 'Ivo']

    },
    {
        id: 2,
        date: '2023-11-27',
        homeMatch: false,
        opponent: 'Rivierwijkers Zondag 5',
        playersJoining: ['Sybren', 'Max', 'Mans', 'Milty', 'Koen'],
        playersNotJoining: ['Thijs', 'Teeuwen', 'Koen', 'Puck', 'Sam'],
        playersPending: ['Jony', 'Ivo']

    },
    {
        id: 3,
        date: '2023-12-05',
        homeMatch: true,
        opponent: 'Nieuwegein Zondag 2',
        playersJoining: ['Sybren', 'Max', 'Mans', 'Bram', 'John', 'Timo'],
        playersNotJoining: ['Thijs', 'Teeuwen', 'Koen', 'Puck', 'Sam'],
        playersPending: ['Jony', 'Ivo']

    },
];

export default function () {
    return (
        <Container fluid>
            <h1 className="mt-4 mb-4">Upcoming Matches</h1>
            {upcomingMatches.map((match) => (
                <Row className="mb-4">
                    <Col key={match.id}>
                        <Card className='text-center'>
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="d-inline-block">{match.opponent}</h2>&nbsp;&nbsp;
                                    <Badge
                                        className="rounded-pill align-top"
                                        bg={match.homeMatch ? 'blue' : 'danger'}>
                                        {match.homeMatch ? 'HOME' : 'AWAY'}
                                    </Badge>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"><h3>{match.date}</h3></Card.Subtitle>
                                <Row>
                                    <Col key={match.id}>
                                        <SignupStatusBar
                                            joining={match.playersJoining.length}
                                            notJoining={match.playersNotJoining.length}
                                            pending={match.playersPending.length}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col key={1} md={4}>
                                        <Card.Subtitle className="mt-3 mb-2"><Badge bg={'dark-green'}>Joining</Badge></Card.Subtitle>
                                        <ListGroup variant="flush">
                                            {match.playersJoining.map((player, index) => (
                                                <ListGroup.Item key={index}>{player}</ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Col>
                                    <Col key={2} md={4}>
                                        <Card.Subtitle className="mt-3 mb-2"><Badge bg={'grey'}>Not joining</Badge></Card.Subtitle>
                                        <ListGroup variant="flush">
                                            {match.playersNotJoining.map((player, index) => (
                                                <ListGroup.Item key={index}>{player}</ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Col>
                                    <Col key={3} md={4}>
                                        <Card.Subtitle className="mt-3 mb-2"><Badge bg={'warning'}>Not responded</Badge></Card.Subtitle>
                                        <ListGroup variant="flush">
                                            {match.playersPending.map((player, index) => (
                                                <ListGroup.Item key={index}>{player}</ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}