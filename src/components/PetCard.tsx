import { Card } from "react-bootstrap";
import { Pet } from "../models/Pet";
import '../components/css/petcard.css';
import { Link } from "react-router-dom";

interface PetCardProps {
    pet: Pet;
}

export function PetCard(props: PetCardProps) {
    return (
        <Card className="shadow-lg rounded-4 mb-4 border-1" style={{ backgroundColor: 'black', color: 'white'}}>
            <Card.Img
                variant="top"
                src={props.pet.image.startsWith("https") ? props.pet.image : `/img/${props.pet.image}`}
                alt={props.pet.name}
                className="rounded-top-4"
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title className="text-center fw-bold" style={{ color: '#927440' }}>{props.pet.name} ({props.pet.breed})</Card.Title>
                <Card.Text id="t" className="text text-center">
                    {props.pet.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
                <Link to={`/adoptions/${props.pet.id}`} className="btn btn-primary me-2" style={{ backgroundColor: '#927440', border: 'none' }}>
                    Adopt Me
                </Link>
                <Link to={`/details/${props.pet.id}`} className="btn btn-secondary" style={{ backgroundColor: '#666', border: 'none' }}>
                    Details
                </Link>
            </Card.Footer>
        </Card>
    );
}