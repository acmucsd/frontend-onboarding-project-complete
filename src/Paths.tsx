import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import App from "./App"

const Paths = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</BrowserRouter>
)

export default Paths