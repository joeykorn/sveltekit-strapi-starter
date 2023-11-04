import { getStrapiData } from '$lib/strapi';

export async function load() {
	return { home: getStrapiData('home-page', 'populate=*') };
}
