import { getPosts } from "./api/getPosts";
import PostCart from "./ui/PostCart";
import Pag from "./ui/Pag";

const postsOnPage = 10

interface Props {
    params: {}
    searchParams: { page: string }
}

export default async function Home({ searchParams }: Props) {
    const numOfPosts = (await getPosts()).length // як я зрозумів, немає способу отримати кількість на пряму
    console.log(numOfPosts)
    const page: number = (
        searchParams.page &&
        +searchParams.page &&
        +searchParams.page > 0
    ) ? +searchParams.page : 1

    const posts = await getPosts((page - 1) * postsOnPage, postsOnPage)

    return (
        <main className="main-common justify-between">
            <div className="flex gap-10 flex-col max-w-full">
                {posts.length > 0 ?
                    posts.map((post) => <PostCart post={post} />)
                    :
                    <h2 className="text-2xl">Немає постів</h2>
                }
            </div>
            {
                (numOfPosts / +postsOnPage! > 1) ? <Pag page={page} numOfPages={numOfPosts / +postsOnPage!} /> : <></>
            }

        </main>
    );
}
