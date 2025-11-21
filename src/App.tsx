import axios from "axios";

function App() {
	const downloadRepo = async () => {
		try {
			const res = await axios.post(
				"http://localhost:3000/api/v1/repos/download",
				{
					owner: "DurgeshChouksey",
					repo: "ApiVerseBackend",
					branch: "main",
				},
				{
					withCredentials: true,
				}
			);
			console.log(res.data)
		} catch (error: any) {
			console.log(error);
		}
	};

	return (
		<div>
			<button onClick={downloadRepo}>downloadRepo</button>
		</div>
	);
}

export default App;
