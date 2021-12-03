import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/anton.jpg"
					alt="Antons image"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I&apos;m Anton</h1>
			<p>Blog about my jorney i web development</p>
		</section>
	);
}
export default Hero;
