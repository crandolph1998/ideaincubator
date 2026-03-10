import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    author: z.string().default('Idea Incubator Team'),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  blog
};
