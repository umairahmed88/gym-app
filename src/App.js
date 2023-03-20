import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import ExerciseDatail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Box width='400px' sx={{ width: { x1: "1480px" } }} m='auto'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exercise/:id' element={<ExerciseDatail />} />
			</Routes>
			<Footer />
		</Box>
	);
};

export default App;
