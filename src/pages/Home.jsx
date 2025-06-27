import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import Contact from "../components/Contact.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<Contact />
	);
}; 