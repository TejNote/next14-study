'use client'

import Link from 'next/link'
import style from '../components/movie.module.css'
import { useRouter } from 'next/navigation'

interface IMovieProps {
	title: string
	id: string
	poster_path: string
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
	const router = useRouter()
	const handleClick = () => {
		router.push(`/movies/${id}`)
	}
	return (
		<div key={id} className={style.movie}>
			<img src={poster_path} alt={title} onClick={handleClick} />
			<Link href={`/movies/${id}`}>{title}</Link>
		</div>
	)
}
