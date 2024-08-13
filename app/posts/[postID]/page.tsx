import { getPost } from "@/app/api/getPost";
import { getPosts } from "../../api/getPosts";
import PostCart from "../../ui/PostCart";
import { IPost } from "@/app/interfaces/interfaces";

interface IParams {
    postID: string
}

interface Props {
    params: IParams
    searchParams: {}
}

export default async function Blog({ params }: Props) {
    const post = await getPost(params.postID)
    let content: JSX.Element

    if (Object.keys(post).length > 0) {
        const postNotEmpty: IPost = post as IPost
        content = <>
            < h2 className="text-2xl" > {postNotEmpty.title}</h2 >
            <div className="">{postNotEmpty.body}</div>
        </>
    } else {
        content = <>
            <h2 className="text-2xl">Такого поста немає</h2>
        </>
    }

    return <main className="main-common gap-5">
        <a href="/" className="self-start">{`< На головну`}</a>
        <div className="flex gap-10 flex-col max-w-full">
            {content}
        </div>
    </main>

}
