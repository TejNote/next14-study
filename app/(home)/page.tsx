import { Metadata } from 'next'
import Link from 'next/link'
import Movie from '../../components/movie'
import style from '../(home)/home.module.css'
import { API_URL } from '../constants'

export const metadata: Metadata = {
	title: 'Home',
}

async function getMovies() {
	// await new Promise(resolve => setTimeout(resolve, 5000))
	const response = await fetch(API_URL)
	const json = await response.json()
	return json
}

export default async function Page() {
	const movies = await getMovies()
	return (
		<div className={style.container}>
			{movies.map(movie => {
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
