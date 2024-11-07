async function getVideos(id: String) {
	await new Promise(resolve => setTimeout(resolve, 3000))
	console.log(`Fetching Videos start : ${Date.now()}`)
	const response = await fetch(`${process.env.API_URL}/${id}/videos`)
	const json = response.json()
	console.log(`Fetching Videos end: ${Date.now()}`)
	return json
}

export default async function MovieVideos({ id }: { id: string }) {
	const videos = await getVideos(id)
	return <h6>${JSON.stringify(videos)}</h6>
}
