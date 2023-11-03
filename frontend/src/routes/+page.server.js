import { PRIVATE_STRAPI_URL } from '$env/static/private';

export async function load() {
	const fetchHome = async () => {
		const url = `${PRIVATE_STRAPI_URL}/api/home-page?populate=*`;
		const response = await fetch(url);
		const data = await response.json();

		return data.data.attributes;
	};

	return { home: fetchHome() };
}
