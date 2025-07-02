import avatar from "../assets/img/avatar.jpg"
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { func } from "prop-types";
import { useLocation } from "react-router-dom";


export const CreateContact = (props) => {
    const location = useLocation();
    const apiUrl = "https://playground.4geeks.com/contact/agendas/"    
    const user = "fmangom292"

    const navigate = useNavigate();

    const editContact = location.state ? location.state.contact : false;
    
    console.log(editContact);
    
    const [name, setName] = useState(editContact ? editContact.name : "");
    const [email, setEmail] = useState(editContact ? editContact.email : "");
    const [phone, setPhone] = useState(editContact ? editContact.phone : "");
    const [address, setAddress] = useState(editContact ? editContact.address : "");

    function handleChange(event) {
        const { id, value } = event.target;
        switch (id) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "address":
                setAddress(value);
                break;
            default:
                break;
        }
        //console.log(`Field ${id} changed to: ${value}`);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let url = apiUrl + user + "/contacts";
        const newContact = {
            name: name,
            email: email,
            phone: phone,
            address: address
        };
        const method = editContact.id ? "PUT" : "POST";
        if( editContact.id ) {
            url += `/${editContact.id}`;
        }
        fetch(url , { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(newContact) })
            .then(response => {
                if (!response.ok) { 
                    throw new Error("Network response was not ok");
                }else {
                    navigate("/");
                }
                return response.json();
            })
    }

    return <div className="container border border-1 border-dark p-3">
        <div className="row">
            <div className="col-12 text-center">
                <h1>Add a new contact</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={handleChange} defaultValue={name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email address" onChange={handleChange}  defaultValue={email}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter phone number" onChange={handleChange}  defaultValue={phone}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter address" onChange={handleChange}  defaultValue={address}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" >{editContact ? "Edit Contact" : "Add new contact"}</button>
                    <br />
                    <NavLink to={"/"}>or get back to contacts</NavLink>
                </form>
            </div>
        </div>
    </div>
};

export default CreateContact;