import React, { useState } from 'react';
import { Container, Button, 
    Card, CardBody, CardTitle, CardSubtitle, CardText, 
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import data from '../data.json';

const LatestJobs = props => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ modalData, setModalData ] = useState({});
    const toggleModal = job => {
        setModalData({...job});
        setModalIsOpen(!modalIsOpen);
    };

    const jobs = [];
    for (const key in data) {
        jobs.push(data[key])
    }

    return (
        <Container>
            <h1 className="display-4 pl-2">Latest Jobs</h1>
            <Modal isOpen={modalIsOpen} toggle={() => toggleModal({})} backdrop >
                <ModalHeader>{modalData.title}</ModalHeader>
                <ModalBody style={{color: "dark-gray"}}>
                    In {modalData.city}, {modalData.state}
                    <br/>
                    Compensation: ${modalData.compensation}
                    <br/>
                    Employer: {modalData.company}
                </ModalBody>
                <ModalBody>
                    {modalData.description}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => toggleModal({})}>Close</Button>
                    <Button color="primary" onClick={() => {}} >One-Click Apply</Button>
                </ModalFooter>
            </Modal>
            {jobs.map(job => {
                return (
                    <Card key={`${job.title} ${job.city} ${job.state}`}>
                        <CardBody>
                            <CardTitle style={{fontSize: "20px", fontWeight: "bold"}}>{job.title}</CardTitle>
                            <CardSubtitle>In {job.city}, {job.state}</CardSubtitle>
                            <CardSubtitle>${job.compensation}</CardSubtitle>
                            <br/>
                            <CardText>{job.description}</CardText>
                            <Button color="primary" onClick={() => toggleModal(job)}>More Info</Button>
                        </CardBody>
                    </Card>
                )
            })}
        </Container>
    )
}

export default LatestJobs;