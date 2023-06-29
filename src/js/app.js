import Helpdesk from "./Helpdesk";

document.addEventListener("DOMContentLoaded", () => {
	const mainTaskMansger = new Helpdesk(".helpdesk", 'tickets__container');

	mainTaskMansger.init();
});
