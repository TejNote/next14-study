import { Metadata } from 'next'
import Link from 'next/link'
import Movie from '../../components/movie'
import style from '../(home)/home.module.css'

interface IMovieProps {
	id: string
	title: string
	poster_path: string
	overview: string
	release_date: string
	vote_average: number
	genre_ids: number[]
}

export const metadata: Metadata = {
	title: 'Home',
}

async function getMovies() {
	// await new Promise(resolve => setTimeout(resolve, 5000))
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
	const json = await response.json()
	return json
}

export default async function Page() {
	const movies = await getMovies()
	return (
		<div className={style.container}>
			{movies.map((movie: IMovieProps) => {
				return (
					<Movie
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster_path={movie.poster_path}
					/>
				)
			})}
		</div>
	)
}
