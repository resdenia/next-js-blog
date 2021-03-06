import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

function AllPostsPage(props) {
	const { posts } = props;
	return (
		<>
			<Head>
				<title>All Post</title>
				<meta name="description" content="Blog about myself" />
			</Head>
			<AllPosts posts={posts} />
		</>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
	};
}

export default AllPostsPage;
