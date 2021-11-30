import PostsGrid from "../PostGrid";
import classes from "./AllPosts.module.css";
function AllPosts(props) {
	return (
		<section className={classes.posts}>
			<h1>All posts</h1>
			<PostsGrid posts={props.posts} />
		</section>
	);
}

export default AllPosts;
