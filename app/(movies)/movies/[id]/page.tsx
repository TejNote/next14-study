import { Suspense } from 'react'
import MovieInfo from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'

export default async function MovieDetail({ params: { id } }: Params) {
	return (
		<div>
			<Suspense fallback={<h1> 1 Loading movie info</h1>}>
				<MovieInfo id={id} />
			</Suspense>
			<Suspense fallback={<h1> 2 Loading movie videos</h1>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	)
}
