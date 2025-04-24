import AddText from "./AddText.js";
import RemoveText from "./RemoveText.js";

export default function changePosition(classname, id, active){

	let element = document.querySelector("." + classname);
	let division = document.querySelector(".Minis");
	let positionEl = element.getBoundingClientRect();

	RemoveText(id);
	AddText(id);

	let textEl = document.querySelectorAll(".Minis a");

	let maxW = 0;

	textEl.forEach(el => {
		maxW = (el.getBoundingClientRect().width < maxW)? maxW : el.getBoundingClientRect().width;
	})

	division.style.width = `${maxW * 1.4 + 70}px`;
	division.style.height = `${20 * (textEl.length + 2) * 1.6}px`;
	let positionDiv = division.getBoundingClientRect();

	let leftPos = ((positionEl.left + (positionEl.width / 2)) - (positionDiv.width / 2));

	division.style.left = `${leftPos}px`;
	console.log(positionDiv);
}