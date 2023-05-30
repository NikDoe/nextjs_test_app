export default async function getSinglePost(id: string): Promise<Post> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!response.ok) throw new Error("Не удалось загрузить статью");

    return response.json();
}
