import { json, type DataFunctionArgs } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { floatingToolbarClassName } from '#app/components/floating-toolbar.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { Input } from '#app/components/ui/input.tsx'
import { Label } from '#app/components/ui/label.tsx'
import { Textarea } from '#app/components/ui/textarea.tsx'
import { db } from '#app/utils/db.server.ts'
import { invariantResponse } from '#app/utils/misc.tsx'

export async function loader({ params }: DataFunctionArgs) {
	const note = db.note.findFirst({
		where: {
			id: {
				equals: params.noteId,
			},
		},
	})

	invariantResponse(note, 'Note not found', { status: 404 })

	return json({
		note: { title: note.title, content: note.content },
	})
}

export default function NoteEdit() {
	const data = useLoaderData<typeof loader>()

	return (
		<Form method="post" className="flex flex-col gap-4 p-5">
			<fieldset>
				<Label htmlFor="title">Title</Label>
				<Input
					id="title"
					name="title"
					type="text"
					defaultValue={data.note.title}
				/>
			</fieldset>

			<fieldset>
				<Label htmlFor="content">Content</Label>
				<Textarea
					id="content"
					name="content"
					defaultValue={data.note.content}
				/>
			</fieldset>

			<div className={floatingToolbarClassName}>
				<Button type="submit">Submit</Button>
				<Button type="reset">Reset</Button>
			</div>
		</Form>
	)
}
