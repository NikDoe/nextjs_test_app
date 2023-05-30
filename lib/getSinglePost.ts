export default async function getSinglePost(id: string): Promise<Post | undefined> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!response.ok) return undefined;

    return response.json();
}
