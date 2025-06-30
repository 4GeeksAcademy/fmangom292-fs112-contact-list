import avatar from "../assets/img/avatar.jpg"
import { useNavigate } from "react-router-dom";
import React from "react";

export const Contact = (props) => {
    const navigate = useNavigate();
    
    function handleEdit() {
        console.log("Edit contact:", props.contact);
    }

    function handleDelete(id) {
        console.log("Delete contact:", props.contact);
        fetch(`https://playground.4geeks.com/contact/agendas/fmangom292/contacts/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if (!response.ok) {
                navigate("/");
            }
            console.log("Contact deleted:", id);
        })
    }

    
    return <div className="container border border-1 border-dark p-3">
        <div className="row">
            <div className="col-sm-2 col-md-2 col-xs-12">
                <img className="avatar" src={avatar} alt="" />
            </div>
            <div className="d-flex flex-column col-sm-6 col-md-6 col-xs-12 contact-info">
                <h3>{props.contact.name}</h3>
                <p>📍: {props.contact.address} </p>
                <p>📞: {props.contact.phone} </p>
                <p>📧: {props.contact.email} </p>
            </div>
            <div className="d-flex col-sm-4 col-md-4 col-xs-12 justify-content-end ">
                <div className="d-flex g-2">
                    <a href="#" className="m-3 contact-action-icon" onClick={handleEdit}>🖍️</a>
                    <a
                        href="#"
                        className="m-3 contact-action-icon"
                        onClick={() => handleDelete(props.contact.id)}
                    >🗑️</a>
                </div>
            </div>
        </div>
    </div>

};

export default Contact;