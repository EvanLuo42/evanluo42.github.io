import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const profile = defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/profile' }),
    schema: z.object({
        name: z.string(),
        initials: z.string(),
        title: z.string(),
        affiliation: z.string(),
        email: z.string(),
        researchInterests: z.array(z.string()),
        social: z.object({
            scholar: z.string(),
            github: z.string(),
            orcid: z.string(),
            linkedin: z.string(),
        }),
    }),
});

const publications = defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/publications' }),
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()),
        venue: z.string(),
        year: z.number(),
        tags: z.array(z.string()),
        links: z.object({
            paper: z.string().optional(),
            code: z.string().optional(),
            arxiv: z.string().optional(),
        }).default({}),
        selected: z.boolean().default(false),
    }),
});

const preprints = defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/preprints' }),
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()),
        year: z.number(),
        tags: z.array(z.string()),
        links: z.object({
            paper: z.string().optional(),
            code: z.string().optional(),
            arxiv: z.string().optional(),
        }).default({}),
        status: z.enum(['preprint', 'manuscript', 'under review', 'in preparation']).default('preprint'),
    }),
});

const experiences = defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/experiences' }),
    schema: z.object({
        role: z.string(),
        org: z.string(),
        dept: z.string(),
        period: z.string(),
        current: z.boolean().default(false),
        order: z.number(),
    }),
});

const education = defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/education' }),
    schema: z.object({
        degree: z.string(),
        school: z.string(),
        period: z.string(),
        order: z.number(),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/projects' }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        links: z.object({
            github: z.string().optional(),
            demo: z.string().optional(),
            docs: z.string().optional(),
            paper: z.string().optional(),
        }).default({}),
        stars: z.string().optional(),
        status: z.string(),
        order: z.number(),
    }),
});

const news = defineCollection({
    loader: glob({ pattern: '*.md', base: 'src/content/news' }),
    schema: z.object({
        date: z.coerce.date(),
    }),
});

export const collections = { profile, publications, preprints, experiences, education, projects, news };
