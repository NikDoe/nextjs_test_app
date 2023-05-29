export default async function getAllPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) throw new Error("Не удалось загрузить посты");

    return response.json();
}