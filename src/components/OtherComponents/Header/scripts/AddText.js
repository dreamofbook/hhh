import textArr from "../data/data.json";

export default function addText(id) {

	let division = document.querySelector(".Minis");

	(textArr[id - 1].arr).forEach((item) => {
		let element = document.createElement("a");

		element.textContent = item.text;
		element.href = item.path;
		element.className = 'links'
		division.append(element)
	});
}