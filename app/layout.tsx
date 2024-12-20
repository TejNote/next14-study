import '../styles/global.css'
import { Metadata } from 'next'
import Navigation from '../components/navigation'

export const metadata: Metadata = {
	title: {
		template: '%s | Next Movies',
		default: 'Next Movies',
	},
	description: 'Next Movies',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ko'>
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
