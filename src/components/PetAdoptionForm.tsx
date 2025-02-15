import { useEffect, useState } from "react";
import { Pet } from "../models/Pet";
import { getPetById } from "../services/petService";
import { useParams } from "react-router-dom";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { AdoptionForm } from "../models/AdoptionForm";
import { postAdoption } from "../services/adoptionService";

export function PetAdoptionForm() {
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [pet, setPet] = useState<Pet | null>(null);
    const [formValues, setFormValues] = useState<AdoptionForm>({
        firstName: '',
        middleName: '',
        lastName: '',
        hasFencedYard: false,
        hasChildren: false,
        hasOtherPets: false,
        phoneNumber: '',
        email: '',
        aboutSelf: ''
    });

    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            getPetById(Number(id)).then((pet) => { setPet(pet); });
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setFormValues(prev => ({
                ...prev,
                [name]: (e.target as HTMLInputElement).checked
            }));
        } else {
            setFormValues(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        postAdoption(formValues);
        setFormSubmitted(true);
    }

    return (
        <div className="PetAdoptionForm container mt-5">
            <Row className="justify-content-center">
                <Col lg={8} className="p-4 shadow rounded" style={{ backgroundColor: 'black', color: 'white' }}>
                    {formSubmitted ? (
                        <Alert variant="success" className="text-center">
                            One of our team members will get back to you as soon as possible. Thanks!
                        </Alert>
                    ) : (
                        <Form onSubmit={onSubmit}>
                            <h2 className="text-center mb-4" style={{ color: "#927440" }}>Adopt {pet?.name}</h2>
                            <Form.Group controlId="firstName" className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={formValues.firstName}
                                    onChange={handleChange}
                                    required
                                    style={{ backgroundColor: '#f8f9fa' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="middleName" className="mb-3">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="middleName"
                                    value={formValues.middleName}
                                    onChange={handleChange}
                                    style={{ backgroundColor: '#f8f9fa' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="lastName" className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={formValues.lastName}
                                    onChange={handleChange}
                                    required
                                    style={{ backgroundColor: '#f8f9fa' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="phoneNumber" className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phoneNumber"
                                    value={formValues.phoneNumber}
                                    onChange={handleChange}
                                    style={{ backgroundColor: '#f8f9fa' }}
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="email" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    pattern="\S+@\S+\.\S+"
                                    style={{ backgroundColor: '#f8f9fa' }}
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="aboutSelf" className="mb-4">
                                <Form.Label>About Yourself</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="aboutSelf"
                                    value={formValues.aboutSelf}
                                    onChange={handleChange}
                                    style={{ backgroundColor: '#f8f9fa' }}
                                />
                            </Form.Group>

                            {pet?.animalType === 'dog' && (
                                <Form.Check
                                    type="checkbox"
                                    id="hasFencedYard"
                                    label="Do you have a fenced yard?"
                                    name="hasFencedYard"
                                    checked={formValues.hasFencedYard}
                                    onChange={handleChange}
                                    className="mb-3"
                                />
                            )}

                            <Form.Check
                                type="checkbox"
                                id="hasChildren"
                                label="Do you have children?"
                                name="hasChildren"
                                checked={formValues.hasChildren}
                                onChange={handleChange}
                                className="mb-3"
                            />

                            <Form.Check
                                type="checkbox"
                                id="hasOtherPets"
                                label="Do you have other pets?"
                                name="hasOtherPets"
                                checked={formValues.hasOtherPets}
                                onChange={handleChange}
                                className="mb-3"
                            />

                            <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#927440',color:"#fff", border: 'none' }}>
                                Submit
                            </Button>
                        </Form>
                    )}
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