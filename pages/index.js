import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS =[
	{
		slug:"getting-started",
		title:"Title",
		image:'getting-started-next-js.png',
		excerpt:"description",
		date:"2022-02-10"
	},
	{
		slug:"getting-started-2",
		title:"Title",
		image:'getting-started-next-js.png',
		excerpt:"description",
		date:"2022-02-10"
	},
	{
		slug:"getting-started-3",
		title:"Title",
		image:'getting-started-next-js.png',
		excerpt:"description",
		date:"2022-02-10"
	}
];



function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={} />
		</>
	);
}

export default HomePage;
