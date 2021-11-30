import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
	{
		slug: "getting-started",
		title: "Title",
		image: "getting-started-next-js.png",
		excerpt: "description",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-2",
		title: "Title",
		image: "getting-started-next-js.png",
		excerpt: "description",
		date: "2022-02-10",
	},
	{
		slug: "getting-started-3",
		title: "Title",
		image: "getting-started-next-js.png",
		excerpt: "description",
		date: "2022-02-10",
	},
];

function AllPostsPage(props) {
	return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
