import { useEffect, useState } from "react";
import { Pet } from "../models/Pet";
import { getPets } from "../services/petService";
import { Col, Row } from "react-bootstrap";
import { PetCard } from "./PetCard";

export function PetList() {
    const [pets, setPets] = useState<Pet[]>([]);

    useEffect(() => {
        getPets().then((pets) => setPets(pets));
    }, []);

    return (
        <div className="PetList container mt-5">
            <Row className="gy-4">
                {pets.map((pet) => (
                    <Col lg={4} key={pet.id}>
                        <PetCard pet={pet} />
                    </Col>
                ))}
            </Row>
            <div className="mt-7" style={{marginTop:"20px"}}>
      <p style={{ fontSize: '10px'}} className="text-center text-gray-400">
        © 2025 Enchantress. All rights reserved by Arsh Chaudhary. | Terms of
        Service | Privacy Policy
      </p>
    </div>
        </div>
    );
}