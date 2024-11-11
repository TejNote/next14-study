declare global {
	declare namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_API_URL: string
		}
	}

	interface SearchParams {
		searchParams: { [id: string]: any }
	}

	interface Params {
		params: { [id: string]: any }
	}
}

export {}