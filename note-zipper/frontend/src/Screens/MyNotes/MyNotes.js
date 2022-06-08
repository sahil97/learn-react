import React from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../Components/MainScreen';
import notes from '../../data/notes';


const MyNotes = () => {

    const deleteHandler = (id) => {

    }

  return (
    <MainScreen title="Welcome back">
        <Link to="createnote">
            <Button style={{marginLeft: 10, marginBottom: 6}} size="lg">
                Create New Note
            </Button>
        </Link>
        {
            notes.map(note => (

                <Accordion>
                <Card style={{margin: 10}}>
                    <Card.Header style={{display: "flex"}}>
                        <span
                        style={{
                            color: "black",
                            textDecoration: "none",
                            flex: 1,
                            cursor: "pointer",
                            alignSelf: "center",
                            fontSize: 18
                        }}
                        >
                            <Accordion.Header 
                            as={Card.Text}
                            bg="link"
                            eventKey="0">
                                {note.title}
                            </Accordion.Header>
                            
                        </span>
                        <div>
                            <Button href={`/note/${note._id}`}>Edit</Button>
                            <Button 
                            variant='danger' 
                            className="mx-2"
                            onClick={() => deleteHandler(note._id)}>Deelte</Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Accordion.Body>
                            <h4>
                                <Badge bg="success">
                                    Category - {note.category}
                                </Badge>
                            </h4>
                            <blockquote className="blockquote mb-0">
                            <p>
                                {note.content}
                            </p>
                            <footer className="blockquote-footer">
                                created on date.
                            </footer>
                            </blockquote>
                        </Accordion.Body>
                    </Card.Body>
                </Card>
                </Accordion>
                
            ))
        }
    </MainScreen>
  )
}

export default MyNotes;