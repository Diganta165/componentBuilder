function componentBuilder(props) {
	const fragment = new DocumentFragment();
	props?.forEach((element) => fragment.append(this.elementBuilder(element)));
	return fragment;
}
function eventsHandler(events, element) {
	for (let event in events) element.addEventListener(event, events[event]);
}
function elementBuilder({ name, attrs, events, child }) {
	const element = document.createElement(name);
	if (attrs) for (let attr in attrs) element.setAttribute(attr, attrs[attr]);
	events && this.eventsHandler(events, element);
	if (typeof child !== "object") {
		element.innerHTML = child;
		return element;
	}
	const childElement = Array.isArray(child)
		? this.componentBuilder(child)
		: this.elementBuilder(child);
	element.append(childElement);
	return element;
}




// function componentBuilder(props) {
// 	const fragment = new DocumentFragment();
// 	props?.forEach((element) => fragment.append(this.elementBuilder(element)));
// 	return fragment;
// }
// function eventsHandler(events, element) {
// 	for (let event in events) element.addEventListener(event, events[event]);
// }
// function elementBuilder({ name, attrs, events, child }) {
// 	const element = document.createElement(name);
// 	if (attrs) for (let attr in attrs) element.setAttribute(attr, attrs[attr]);
// 	events && this.eventsHandler(events, element);
// 	if (typeof child !== "object") {
// 		element.innerHTML = child;
// 		return element;
// 	}
// 	const childElement = Array.isArray(child)
// 		? this.componentBuilder(child)
// 		: this.elementBuilder(child);
// 	element.append(childElement);
// 	return element;
// }
// const Data = [{
// 	name: "div",
// 	attrs: {
// 		class: "diganta"
// 	}, 
// 	child: Array(3).fill(Math.random()).map((item) => (
// 		{ 
// 			name: "p", 
// 			attrs: { 
// 				class: "lel sdadasd"
// 			},
// 			events: { click: () => console.log("hi") },
// 			child:item
// 		}))
// }]

// document.body.append(componentBuilder(Data));
