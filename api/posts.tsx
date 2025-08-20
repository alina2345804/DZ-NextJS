import {API} from "@/api";


export async function getPosts(): Promise<PostInterface> {
    const res = await fetch(API.posts);
    if (!res.ok) {
        throw new Error('Ошибка при получении постов');
    }
    return res.json();
}
interface PostInterface {
    userId: number;
    id: number;
    title: string;
    body: string;
}