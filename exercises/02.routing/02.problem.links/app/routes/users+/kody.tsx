import { Link } from '@remix-run/react'

export default function KodyProfileRoute() {
	return (
		<div className="container mb-48 mt-36 border-4 border-green-500">
			<h1 className="text-h1">Kody</h1>
			{/* 🐨 add a Link to "notes" here */}
			<Link to="notes">Notes</Link>
		</div>
	)
}
