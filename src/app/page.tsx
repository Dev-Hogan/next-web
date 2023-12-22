import Link from "next/link"
import { Editor } from "novel"
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>text-next</div>
			<div>
				<Editor />
			</div>
			<Link href="/dashboard">跳转dashboard</Link>
		</main>
	)
}
