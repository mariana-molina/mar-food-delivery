import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import myConfiguredSanityClient from './sanityClient';

export const client = createClient({
	projectId: 'cbjg8383',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(myConfiguredSanityClient);
export const urlFor = source => builder.image(source);

export default client;
