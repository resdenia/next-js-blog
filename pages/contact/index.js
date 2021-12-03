import ContactForm from "../../components/contact/ContactForm";
import Head from "next/head";

function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact me</title>
				<meta name="description" content="Blog about myself" />
			</Head>
			<ContactForm />
		</>
	);
}

export default ContactPage;
