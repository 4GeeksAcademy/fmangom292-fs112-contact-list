import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import Contact from "../components/Contact.jsx";
import { useEffect, useState } from "react";


export const Home = () => {
	const apiUrl = "https://playground.4geeks.com/contact/"
	const user = "fmangom292"
	const { store, dispatch } = useGlobalReducer()
	const [agenda, setAgenda] = useState()

	function getAgenda(user) {
		fetch(apiUrl + "agendas/" + user, { method: "GET" })
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					fetch(apiUrl + "agendas/" + user, { method: "POST" })
						.then((response) => {
							if (response.ok) {
								return response.json();
								getAgenda(user);
							} else {
								throw new Error("Error creating agenda");
							}
						})
				}
			})
			.then((data) => {
				console.log(data);
				setAgenda(data.contacts);
			})
	}


	useEffect(() => {
		getAgenda(user);
	}, [])

	return (
		<>
			<div className="container border border-1 border-dark p-3">
				<p>Agenda de {user}</p>
			</div>
			<div className="container">
				<div className="row">
					{agenda && agenda.map((contact, index) => (
						<Contact key={index} contact={contact} />
					))}
				</div>
			</div>
		</>
	);
}; 