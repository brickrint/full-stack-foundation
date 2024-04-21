import { Link, useLocation } from '@remix-run/react'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { invariantResponse } from '#app/utils/misc.tsx'

export function loader() {
	invariantResponse(false, 'Not found', { status: 404 })
}

export default function NotFound() {
	return <ErrorBoundary />
}

export function ErrorBoundary() {
	const location = useLocation()

	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: () => (
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-3">
							<h1>We can't find this page:</h1>
							<pre className="text-body-lg whitespace-pre-wrap break-all">
								{location.pathname}
							</pre>
						</div>
						<Link to="/" className="text-body-md underline">
							Back to home
						</Link>
					</div>
				),
			}}
		/>
	)
}
