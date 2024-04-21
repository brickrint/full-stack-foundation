import { Link, NavLink, Outlet } from '@remix-run/react'
import { cn } from '#app/utils/misc.tsx'

export default function NotesRoute() {
	// console.log(`cn(isActive ? 'bg-accent' : null, 'p-2')`, cn('p-2'))
	return (
		<div className="flex h-full justify-between pb-12 border-8 border-blue-500">
			<h1 className="text-h1 flex-grow">Notes</h1>
			{/* 🐨 add two links here.
				One to go back to the parent *path* (💰 not parent "route" that's why you need to use the relative="path" prop)
				and the other to go to the some-note-id route
			*/}
			<Link to="../" relative="path">
				Kody
			</Link>
			<NavLink
				className={({ isActive }) => cn(isActive ? 'bg-accent' : null, 'p-2')}
				to="some-note-id"
			>
				Some Note
			</NavLink>
			{/* 💰 feel free to restructure things however you like to make them look nice */}
			<Outlet />
		</div>
	)
}
