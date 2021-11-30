import PostHeader from "../PostHeader";
import classes from "./PostContent.module.css";

const DUMMY_POST = {
	slug: "getting-started-3",
	title: "Title",
	image: "getting-started-next-js.png",
	date: "2022-02-10",
	content: "# This is a first post",
};

function PostContent() {
	const imagePath = `/images/post/${DUMMY_POST.slug}/ ${DUMMY_POST.image}`;

	return (
		<article>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			content
		</article>
	);
}

export default PostContent;
