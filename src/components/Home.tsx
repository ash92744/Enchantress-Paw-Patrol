import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    return (
        <Container className="mt-5 text-center">
            <Row className="mb-5">
                <Col>
                    <h1 className="fw-bold" style={{ color: 'black' }}>Welcome to Enchantress-PawPatrol</h1>
                    <p className="lead" style={{ color: '#927440' }}>
                    Saving one animal won’t change the world, but it will change the world for that one animal.
                    </p>
                    <p className="lead" style={{ color: 'black' }}>
                    Whether you're looking to give a loving home to a furry friend or help other pets find their forever families, our app makes adoption and donation easy. Connect with us, browse adorable pet profiles, and take the first step toward changing a life —yours and theirs!
                    </p>
                </Col>
            </Row>
            <Row className="gy-4">
                <Col lg={6}>
                    <div className="p-5 shadow rounded" style={{ backgroundColor: 'black', color: 'white' }}>
                        <h2 style={{ color: '#927440' }}>Adopt a Pet</h2>
                        <p>Find your perfect pet companion.</p>
                        <Button
                            variant="primary"
                            onClick={() => navigate("/petlist")}
                            style={{ backgroundColor: '#927440', border: 'none' }}
                        >
                            Browse Pets
                        </Button>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="p-5 shadow rounded" style={{ backgroundColor: 'black', color: 'white' }}>
                        <h2 style={{ color: '#927440' }}>Donate a Pet</h2>
                        <p>Help a pet find a new home.</p>
                        <Button
                            variant="primary"
                            onClick={() => navigate("/donatePetForm")}
                            style={{ backgroundColor: '#927440', border: 'none' }}
                        >
                            Donate Now
                        </Button>
                    </div>
                </Col>
            </Row>
            <div className="mt-7" style={{marginTop:"20px"}}>
      <p style={{ fontSize: '10px'}} className="text-center text-gray-400">
        © 2025 Enchantress. All rights reserved by Arsh Chaudhary. | Terms of
        Service | Privacy Policy
      </p>
    </div>
        </Container>
        
    );
}