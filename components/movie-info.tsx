async function getMovie(id: String) {
	await new Promise(resolve => setTimeout(resolve, 5000))
	console.log(`Fetching Movie start: ${Date.now()}`)
	const response = await fetch(`${process.env.API_URL}/${id}`)
	const json = response.json()
	console.log(`Fetching Movie end: ${Date.now()}`)
	return json
}

export default async function MovieInfo({ id }: { id: string }) {
	const movie = await getMovie(id)
	return <h3>{JSON.stringify(movie)}</h3>
}
