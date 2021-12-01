import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;
		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid Input" });
			return;
		}

		//Store it in a database
		const newMessage = {
			email,
			name,
			message,
		};
		console.log(newMessage);

		let client;

		try {
			client = await MongoClient.connect("URLMONGO");
		} catch (e) {
			res.status(500).json({ message: "Something went wrong" });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection("messages").insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (e) {
			client.close();
			res.status(500).json({ message: "Something went wrong" });
			return;
		}
		client.close();

		res
			.status(201)
			.json({ message: "Successfully stored message!", message: newMessage });
	}
}

export default handler;
