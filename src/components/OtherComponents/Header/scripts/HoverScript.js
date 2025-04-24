import ChangePosition from "./ChangePosition.js";

export default function HoverScript (id, className, active, setActive) {

	let element = document.querySelector("." + className);
	let division = document.querySelector(".Minis");
	ChangePosition(className, id, active);
	setActive(id);

	element.style.color = '#ff9ae1';
	division.style.pointerEvents = 'all';
	division.style.opacity = 1;
	division.style.scale = 1;
}