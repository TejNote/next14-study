import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Home',
}

async function getMovies() {
	await new Promise(resolve => setTimeout(resolve, 5000))
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
	const json = await response.json()
	return json
}

export default async function Page() {
	const movies = await getMovies()
	return (
		<div>
			{movies.map(movie => {
				return (
					<li key={movie.id}>
						<Link href={`/movies/${movie.id}`}>{movie.title}</Link>
					</li>
				)
			})}
		</div>
	)
}