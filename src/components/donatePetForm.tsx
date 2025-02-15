import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function DonatePetForm() {
    const [formValues, setFormValues] = useState({
        name: "",
        animalType: "",
        age: "",
        breed: "",
        gender: "",
        description: "",
        image: ""
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Add the new pet to the database
        const response = await fetch("http://localhost:3001/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        });

        if (response.ok) {
            alert("Pet donated successfully!");
            navigate("/petList"); // Redirect to the pet list page
        } else {
            alert("Failed to donate pet. Please try again.");
        }
    };

    return (
        <div className="DonatePetForm container mt-5">
            <Row className="justify-content-center">
                <Col lg={8} className="p-4 shadow rounded" style={{ backgroundColor: 'black', color: 'white' }}>
                    <h2 className="text-center mb-4" style={{ color: '#927440' }}>Donate a Pet</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name" className="mb-3">
                            <Form.Label>Pet Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: '#f8f9fa' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="animalType" className="mb-3">
                            <Form.Label>Animal Type</Form.Label>
                            <Form.Control
                                type="text"
                                name="animalType"
                                value={formValues.animalType}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: '#f8f9fa' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="age" className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="text"
                                name="age"
                                value={formValues.age}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: '#f8f9fa' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="breed" className="mb-3">
                            <Form.Label>Breed</Form.Label>
                            <Form.Control
                                type="text"
                                name="breed"
                                value={formValues.breed}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: '#f8f9fa' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="gender" className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                type="text"
                                name="gender"
                                value={formValues.gender}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: '#f8f9fa' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="description" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={formValues.description}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: '#f8f9fa' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="image" className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                value={formValues.image}
                                onChange={handleChange}
                                required
                                style={{ backgroundColor: '#f8f9fa' }}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-30" style={{ backgroundColor: '#927440', border: 'none'}}>
                            Donate Pet
                        </Button>
                    </Form>
                </Col>
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