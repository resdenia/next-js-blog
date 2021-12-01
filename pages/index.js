import Hero from "../components/home-page/hero";
import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
	const { posts } = props;

	return (
		<>
			<Head>
				<title>Antons blog</title>
				<meta name="description" content="Blog about myself" />
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 100,
	};
}

export default HomePage;
