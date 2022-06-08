import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../Components/MainScreen';
const axios = require('axios');

const MyNotes = () => {

    const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {

    }
    
    const fetchNotes = async() => {
        const {data} = await axios
        .get('/api/notes');

        setNotes(data);
    }

    useEffect(() => {
        fetchNotes();
    }, [])

  return (
    <MainScreen title="Welcome back">
        <Link to="createnote">
            <Button style={{marginLeft: 10, marginBottom: 6}} size="lg">
                Create New Note
            </Button>
        </Link>
        {
            notes.map((note, index) => (

                <Accordion key={index}>
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
                            eventkey="0">
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