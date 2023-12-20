import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async () => {
	const URL = "https://advent.sveltesociety.dev/data/2023/day-one.json"
	
	try {
		const response = await fetch(URL);
		const data = await response.json();

		return {
			payload: data
		}
	} catch (err) {
		console.error("Internal server error");
		error(500, "Internal server error");
	}
}
