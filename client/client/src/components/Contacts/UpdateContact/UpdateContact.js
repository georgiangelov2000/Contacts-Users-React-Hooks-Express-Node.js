import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import axios from "axios";


const UpdateContact = () => {
    let history = useHistory();
    const { _id } = useParams();

    return (
        <div>
            hello
        </div>
    )
}

export default UpdateContact
