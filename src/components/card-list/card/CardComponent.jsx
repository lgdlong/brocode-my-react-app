import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CardComponent({ cat }) {
    return (
        <Card className="h-100 w-100">
            <div className="ratio ratio-1x1 overflow-hidden">
                <Card.Img
                    variant="top"
                    src={cat.imgPath}
                    className="w-100 h-100 object-fit-cover"
                    alt={cat.name}
                />
            </div>
            <Card.Body>
                <Card.Title>{cat.name}</Card.Title>
                <Card.Text>{cat.description}</Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    );
}
