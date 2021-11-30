function Layout(props) {
	return (
		<>
			<MainNavigation />
			{props.children}
		</>
	);
}

export default Layout;
