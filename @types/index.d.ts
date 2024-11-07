declare global {
	declare namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_API_URL: string
		}
	}

	interface SearchParams {
		searchParams: { [key: string]: any }
	}

	interface Params {
		params: { [key: string]: any }
	}
}

export {}