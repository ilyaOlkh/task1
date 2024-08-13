import { IPost } from "../interfaces/interfaces"

export async function getPosts(start: number = 0, limit?: number): Promise<IPost[]> {
    try {
        const params = new URLSearchParams({
            _start: start.toString(),
            ...(limit !== undefined && { _limit: limit.toString() }),
        });

        let res: IPost[] = []
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${params}`);
        res = await response.json();
        return res;
    } catch {
        console.log('щось пішло не так')
        return []
    }
}