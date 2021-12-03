import PostContent from "../../components/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";
function SinglePostPage(props) {
	const { post } = props;

	return (
		<>
			<Head>
				<title>{props.post.title}</title>
				<meta name="description" content={props.post.excerpt} />
			</Head>
			<PostContent post={post} />
		</>
	);
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	//predefine all slugs
	const postFilenames = getPostsFiles();

	const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}

export default SinglePostPage;
