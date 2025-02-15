import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "../models/Pet";
import { getPetById } from "../services/petService";
import { Card, Col, Row } from "react-bootstrap";

export function PetDetails() {
    const { id } = useParams();
    const [pet, setPet] = useState<Pet | null>(null);

    useEffect(() => {
        if (id !== undefined) {
            getPetById(Number(id)).then((pet) => { setPet(pet); });
        }
    }, [id]);

    return (
        <div className="PetDetails container mt-5">
            {pet && (
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Card className="shadow-lg border-0 rounded-4" style={{ backgroundColor: 'black', color: 'white' }}>
                            <Card.Body>
                                <Row>
                                    <Col lg={5} className="d-flex justify-content-center">
                                        <img
                                            src={`/img/${pet.image}`}
                                            alt={pet.name}
                                            className="rounded-4 shadow"
                                            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                    </Col>
                                    <Col lg={7} style={{marginTop: '20px'}}>
                                        <Card.Title className="fw-bold fs-3" style={{ color: '#927440' }}>{pet.name}</Card.Title>
                                        <Card.Text className="text" style={{ color: '#fff' }}>
                                            <strong>Breed:</strong> {pet.breed}
                                        </Card.Text>
                                        <Card.Text className="text" style={{ color: '#fff' }}>
                                            <strong>Gender:</strong> {pet.isBoy ? 'Boy' : 'Girl'}
                                        </Card.Text>
                                        <Card.Text className="mt-3" style={{ color: '#fff' }}>
                                            {pet.description}
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <div className="mt-7" style={{marginTop:"20px"}}>
      <p style={{ fontSize: '10px'}} className="text-center text-gray-400">
        © 2025 Enchantress. All rights reserved by Arsh Chaudhary. | Terms of
        Service | Privacy Policy
      </p>
    </div>
                </Row>
                
            )}
        </div>
    );
}