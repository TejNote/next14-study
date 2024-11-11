import { API_URL } from '../app/constants'
import style from '../components/movie-videos.module.css'

async function getVideos(id: String) {
	// await new Promise(resolve => setTimeout(resolve, 3000))
	console.log(`Fetching Videos start : ${Date.now()}`)
	const response = await fetch(`${API_URL}/${id}/videos`)
	const json = response.json()
	console.log(`Fetching Videos end: ${Date.now()}`)
	return json
}

export default async function MovieVideos({ id }: { id: string }) {
	const videos = await getVideos(id)
	return (
		<div className={style.container}>
			{videos.map(video => {
				return (
					<iframe
						key={video.key}
						src={`https://youtube.com/embed/${video.key}`}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
						dgyroscope; picture-in-picture'
						allowFullScreen={true}
						title={video.name}
					/>
				)
			})}
		</div>
	)
}
