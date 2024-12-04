export type Categories = 'science' | 'art' 

export type Post = {
    title: string,
    slug: string,
    description: string,
    date: string,
    categories: Categories[],
    published: boolean
}