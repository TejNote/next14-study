import { Suspense } from 'react'
import MovieInfo, { getMovie } from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'

export async function generateMetadata({ params: { id } }: Params) {
	const movie = await getMovie(id)
	return {
		title: movie.title,
	}
}

export default async function MovieDetail({ params: { id } }: Params) {
	return (
		<div>
			<Suspense>
				<MovieInfo id={id} />
			</Suspense>
			<Suspense>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	)
}
