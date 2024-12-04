export type Categories = 'science' | 'test'

export type Post = {
    title: string,
    slug: string,
    description: string,
    date: string,
    categories: Categories[],
    published: boolean
}