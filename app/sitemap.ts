import { MetadataRoute } from 'next';
import { getTrendingMovies } from '@/app/lib/api';

const BASE_URL = 'https://your-production-domain.com'; // Replace with your actual domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get movie routes
  const movies = await getTrendingMovies();
  const movieRoutes = movies.map((movie) => ({
    url: `${BASE_URL}/movies/${movie.id}`,
    lastModified: new Date(),
  }));

  // Get static routes
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/favorites`,
      lastModified: new Date(),
    },
  ];

  return [...staticRoutes, ...movieRoutes];
}
