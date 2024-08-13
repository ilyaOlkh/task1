import { IPost } from "../interfaces/interfaces"

export async function getPost(postID: string): Promise<IPost | {}> {
    try {
        let res: IPost | {} = {}
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
        res = await response.json();
        return res;
    } catch {
        console.log('щось пішло не так')
        return {}
    }
}