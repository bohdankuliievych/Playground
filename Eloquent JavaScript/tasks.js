"USE STRICT";
/**
 * Eloquent JavaScript Excercises
 */

/**
 * CHAPTER 2
 */

// looping a triangle

// let str = "";
// for (let i = 0; i < 7; i++) {
//   str += "#";
//   console.log(str);
// }

/**
 * fizzbuzz
 */

// for (let i = 1; i <= 20; i++) {
//   let result =
//     i % 5 === 0 && i % 3 === 0
//       ? "FizzBuzz"
//       : i % 3 === 0
//       ? "Fizz"
//       : i % 5 === 0
//       ? "Buzz"
//       : i;
//   console.log(result);
// }

/**
 * chessboard
 */

// let str = "";
// for (let b = 0; b < 8; b++) {
//   for (let a = 0; a < 8; a++) {
//     if (a % 2 === 0) {
//       str = b % 2 === 0 ? str.concat(" ") : str.concat("#");
//       continue;
//     }
//     str = b % 2 === 0 ? str.concat("#") : str.concat(" ");
//   }
//   if (b < 7) {
//     str = str.concat("\n");
//   }
// }

/**
 * CHAPTER 3
 */

// minimum

// function min(a, b) {
//   return a < b ? a : b;
// }
// *****  *****
// recursion

// function isEven(number) {
//   if (number < 0) return `abc`;
//   if (number === 0) return true;
//   if (number === 1) return false;
//   return isEven(number - 2);
// }
// *****  *****
// bean counting

// function countBs(string) {
//   return countChar(string, "B");
// }

// function countChar(string, letter) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === letter) {
//       counter++;
//     }
//   }
//   return counter;
// }
// *****  *****

/**
 * CHAPTER 4
 */

// let journal = [];
// function addEntry(events, squirrel) {
//   journal.push({ events, squirrel });
// }

// addEntry(['123', 'greogre', 'gawergt'], false);
// console.log(journal);

// function reverseArray(arr) {
//   let res = [];
//   for (let item of arr) {
//     res.unshift(item);
//   }
//   return res;
// }

// function reverseArrayInPlace(arr) {
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     let old = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = old;
//   }
//   return arr;
// }

// 4.3

// function arrayToList(arr) {
//   let list = {};
//   if (arr.length === 1) {
//     list.value = arr[0];
//     list.next = null;
//     return list;
//   }
//   list.value = arr[0];
//   list.next = arrayToList(arr.slice(1));
//   return list;
// }

// function listToArray(list) {
//   let arr = [];
//   while (list.next) {
//     arr.push(list.value);
//     list = list.next;
//   }
//   arr.push(list.value);
//   return arr;
// }

// function prepend(elem, list) {
//   return { val: elem, next: list };
// }

// function nth(list, num) {
//   if (num < 0) {
//     return 'Enter positive num!';
//   }
//   if (num === 0) {
//     return list.value;
//   }
//   if (num > 0) {
//     return list.next ? nth(list.next, num - 1) : undefined;
//   }
// }

// 4.4

// function deepEqual(val1, val2) {
//   if (val1 === null || val2 === null) {
//     return false;
//   }
//   if (typeof val1 === 'object' && typeof val2 === 'object') {
//     let a = Object.keys(val1),
//       b = Object.keys(val2);
//     // Check if both objects have the same number of keys
//     if (a.length !== b.length) {
//       return false;
//     }
//     // Check each property of the objects
//     for (let key of a) {
//       if (!deepEqual(val1[key], val2[key])) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return val1 === val2;
// }

// 5

// array.reduce((res, elem) => res.concat(elem), []);

// function loop(a, test, update, body) {
//   for (let i = a; test(i); i = update(i)) {
//     body(i);
//   }
// }

// function every(array, test) {
//   let res = [];
//   for (let i of array) {
//     if (test(i) !== true) {
//       res.push('false');
//     }
//   }
//   return res.length > 0 ? false : true;
// }

// function every(array, test) {
//   if (array.some((elem) => test(elem) === false)) {
//     return false;
//   }
//   return true;
// }

// function dominantDirection(text) {
//   let codes = [];
//   for (let char of text) {
//     let code = char.codePointAt(0);
//     codes.push(code);
//   }
//   let directions = [];
//   for (let code of codes) {
//     for (let script of SCRIPTS) {
//       if (
//         script.ranges.some(([from, to]) => {
//           return code >= from && code < to;
//         })
//       ) {
//         let dirName = script.direction;
//         let known = directions.findIndex((elem) => elem.dirName === dirName);
//         if (known === -1) {
//           directions.push({ dirName, count: 1 });
//         } else {
//           directions[known].count++;
//         }
//       }
//     }
//   }
//   res = directions.reduce((a, b) => {
//     return a.count < b.count ? b : a;
//   });
//   return res.dirName;
// }

/**
 * 6
 */

// class Group {
//   constructor() {
//     this.members = [];
//   }
//   add(value) {
//     if (!this.has(value)) {
//       this.members.push(value);
//     }
//   }
//   delete(value) {
//     this.members = this.members.filter((v) => v !== value);
//   }
//   has(value) {
//     return this.members.includes(value);
//   }
//   static from(collection) {
//     let group = new Group();
//     for (let value of collection) {
//       group.add(value);
//     }
//     return group;
//   }

//   [Symbol.iterator]() {
//     return new GroupIterator(this);
//   }
// }

// class GroupIterator {
//   constructor(group) {
//     this.group = group;
//     this.position = 0;
//   }
//   next() {
//     if (this.position >= this.group.members.length) {
//       return { done: true };
//     } else {
//       let result = { value: this.group.members[this.position], done: false };
//       this.position++;
//       return result;
//     }
//   }
// }

/**
 * 7. A robot
 */

// const roads = [
//   "Alice's House-Bob's House",
//   "Alice's House-Cabin",
//   "Alice's House-Post Office",
//   "Bob's House-Town Hall",
//   "Daria's House-Ernie's House",
//   "Daria's House-Town Hall",
//   "Ernie's House-Grete's House",
//   "Grete's House-Farm",
//   "Grete's House-Shop",
//   'Marketplace-Farm',
//   'Marketplace-Post Office',
//   'Marketplace-Shop',
//   'Marketplace-Town Hall',
//   'Shop-Town Hall',
// ];

// function buildGraph(edges) {
//   let graph = Object.create(null);
//   function addEdge(from, to) {
//     if (graph[from] == null) {
//       graph[from] = [to];
//     } else {
//       graph[from].push(to);
//     }
//   }
//   for (let [from, to] of edges.map((r) => r.split('-'))) {
//     addEdge(from, to);
//     addEdge(to, from);
//   }
//   return graph;
// }

// const roadGraph = buildGraph(roads);

// class VillageState {
//   constructor(place, parcels) {
//     this.place = place;
//     this.parcels = parcels;
//   }
//   move(destination) {
//     if (!roadGraph[this.place].includes(destination)) {
//       return this;
//     } else {
//       let parcels = this.parcels
//         .map((p) => {
//           // parcels that must be delivered
//           if (p.place != this.place) return p;
//           // parcels that robot is carrying
//           return { place: destination, address: p.address };
//         })
//         // leave parcel if its adress is here
//         .filter((p) => p.place != p.address);
//       return new VillageState(destination, parcels);
//     }
//   }
// }

// function runRobot(state, robot, memory) {
//   for (let turn = 0; ; turn++) {
//     if (state.parcels.length == 0) {
//       console.log(`Done in ${turn} turns`);
//       break;
//     }
//     let action = robot(state, memory);
//     // update villageState, memory
//     state = state.move(action.direction);
//     memory = action.memory;
//     console.log(`Moved to ${action.direction}`);
//   }
// }

// function randomPick(array) {
//   let choice = Math.floor(Math.random() * array.length);
//   return array[choice];
// }

// function randomRobot(state) {
//   return { direction: randomPick(roadGraph[state.place]) };
// }

// VillageState.random = function (parcelCount = 5) {
//   let parcels = [];
//   for (let i = 0; i < parcelCount; i++) {
//     let address = randomPick(Object.keys(roadGraph));
//     let place;
//     do {
//       place = randomPick(Object.keys(roadGraph));
//     } while (place == address);
//     parcels.push({ place, address });
//   }
//   return new VillageState('Post Office', parcels);
// };

// mail route
// const mailRoute = [
//   "Alice's House",
//   'Cabin',
//   "Alice's House",
//   "Bob's House",
//   'Town Hall',
//   "Daria's House",
//   "Ernie's House",
//   "Grete's House",
//   'Shop',
//   "Grete's House",
//   'Farm',
//   'Marketplace',
//   'Post Office',
// ];

// function routeRobot(state, memory) {
//   if (memory.length == 0) {
//     memory = mailRoute;
//   }
//   return { direction: memory[0], memory: memory.slice(1) };
// }

// pathfinding
// function findRoute(graph, from, to) {
//   let work = [{ at: from, route: [] }];
//   for (let i = 0; i < work.length; i++) {
//     let { at, route } = work[i]; // let at = from, route = [];
//     for (let place of graph[at]) {
//       // if place is 1 step away
//       if (place == to) return route.concat(place);
//       if (!work.some((w) => w.at == place)) {
//         // at == 'place' instead of 'from'
//         work.push({ at: place, route: route.concat(place) });
//       }
//     }
//   }
// }

// function goalOrientedRobot({ place, parcels }, route) {
//   if (route.length == 0) {
//     let parcel = parcels[0];
//     if (parcel.place != place) {
//       route = findRoute(roadGraph, place, parcel.place);
//     } else {
//       route = findRoute(roadGraph, place, parcel.address);
//     }
//   }
//   return { direction: route[0], memory: route.slice(1) };
// }

// 7.1

// function compareRobots(robot1, memory1, robot2, memory2) {
//   // generate 100 tasks
//   let tasks = [];
//   for (let i = 0; i < 100; i++) {
//     tasks.push(VillageState.random());
//   }
//   function averageSteps(tasks, robot, memory) {
//     let stepsCounter = [];
//     tasks.forEach((state) => {
//       for (let turn = 0; ; turn++) {
//         if (state.parcels.length == 0) {
//           stepsCounter.push(turn);
//           break;
//         }
//         let action = robot(state, memory);
//         // update villageState, memory
//         state = state.move(action.direction);
//         memory = action.memory;
//         // console.log(`Moved to ${action.direction}`);
//       }
//     });
//     return stepsCounter.reduce((a, b) => a + b) / 100;
//   }
//   console.log(averageSteps(tasks, robot1, memory1));
//   console.log(averageSteps(tasks, robot2, memory2));
// }

// 7.2
// my implementation

// function yourRobot({ place, parcels }, route) {
//   if (route.length == 0) {
//     // find shortest route
//     let parcelRoutes = [];
//     parcels.forEach((parcel) => {
//       if (parcel.place != place) {
//         parcelRoutes.push(findRoute(roadGraph, place, parcel.place));
//       } else {
//         parcelRoutes.push(findRoute(roadGraph, place, parcel.address));
//       }
//     });
//     let sorted = parcelRoutes.toSorted((a, b) => a.length - b.length);
//     // pick parcel with shortest root
//     let parcel = parcels[parcelRoutes.indexOf(sorted[0])];

//     if (parcel.place != place) {
//       route = findRoute(roadGraph, place, parcel.place);
//     } else {
//       route = findRoute(roadGraph, place, parcel.address);
//     }
//   }
//   return { direction: route[0], memory: route.slice(1) };
// }

// authors

// function lazyRobot({ place, parcels }, route) {
//   if (route.length == 0) {
//     // Describe a route for every parcel
//     let routes = parcels.map((parcel) => {
//       if (parcel.place != place) {
//         return {
//           route: findRoute(roadGraph, place, parcel.place),
//           pickUp: true,
//         };
//       } else {
//         return {
//           route: findRoute(roadGraph, place, parcel.address),
//           pickUp: false,
//         };
//       }
//     });

//     // This determines the precedence a route gets when choosing.
//     // Route length counts negatively, routes that pick up a package
//     // get a small bonus.
//     function score({ route, pickUp }) {
//       return (pickUp ? 0.5 : 0) - route.length;
//     }
//     route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
//   }

//   return { direction: route[0], memory: route.slice(1) };
// }

// 7.3

// class PGroup {
//   constructor(members) {
//     this.members = members || [];
//   }

//   add(value) {
//     if (!this.has(value)) {
//       return new PGroup(this.members.concat([value]));
//     }
//     return this;
//   }

//   delete(value) {
//     if (!this.has(value)) return this;
//     return new PGroup(this.members.filter((m) => m !== value));
//   }

//   has(value) {
//     return this.members.includes(value);
//   }
//   static empty = new PGroup([]);
// }
// //or we can define it after class declaration:
// PGroup.empty = new PGroup([]);

/**
 * Chapter 11
 */

//1

// async function locateScalpel(nest) {
//   let current = nest.name;
//   for (;;) {
//     let next = await anyStorage(nest, current, 'scalpel');
//     if (next == current) return current;
//     current = next;
//   }
// }

// function locateScalpel2(nest) {
//   function loop(current) {
//     return anyStorage(nest, current, 'scalpel').then((next) => {
//       if (next == current) return current;
//       else return loop(next);
//     });
//   }
//   return loop(nest.name);
// }

//2

// function Promise_all(promises) {
//   return new Promise((resolve, reject) => {
//     let results = [];
//     let pending = promises.length;
//     for (let i = 0; i < promises.length; i++) {
//       promises[i]
//         .then((result) => {
//           results[i] = result;
//           pending--;
//           if (pending == 0) resolve(results);
//         })
//         .catch(reject);//
//     }
//     if (promises.length == 0) resolve(results);
//   });
// }

/**
 * Chapter 12
 */

// specialForms.set = (args, scope) => {
//   if (args.length != 2 || args[0].type != 'word') {
//     throw new SyntaxError('Incorrect use of set');
//   }
//   let property = args[0].name;
//   let value = evaluate(args[1], scope);
//   for (let outer = scope; outer; outer = Object.getPrototypeOf(outer)) {
//     if (Object.prototype.hasOwnProperty.call(outer, property)) {
//       outer[property] = value;
//       return value;
//     }
//   }
//   throw new ReferenceError(`Setting undefined variable ${property}`);
// };

/**
 * Chapter 14
 */

// 14.1
// //given array
// const MOUNTAINS = [
//   { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
//   { name: 'Everest', height: 8848, place: 'Nepal' },
//   { name: 'Mount Fuji', height: 3776, place: 'Japan' },
//   { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
//   { name: 'Denali', height: 6168, place: 'United States' },
//   { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
//   { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
// ];
// // define headers from 1st object
// const mountains = document.getElementById('mountains');
// const table = document.createElement(table);
// let columnProperties = [];
// for (let key in MOUNTAINS[0]) {
//   if (MOUNTAINS[0].hasOwnProperty(key)) {
//     columnProperties.push(key);
//   }
// }
// // heading
// const thead = document.createElement('tr');
// for (let i = 0; i < 3; i++) {
//   const cell = document.createElement('th');
//   const cellText = document.createTextNode(`${columnProperties[i]}`);
//   cell.appendChild(cellText);
//   thead.appendChild(cell);
// }
// table.appendChild(thead);
// // table body from array
// MOUNTAINS.forEach((mountain) => {
//   const row = document.createElement('tr');
//   const cell1 = document.createElement('td');
//   const cell1Text = document.createTextNode(`${mountain[columnProperties[0]]}`);
//   cell1.appendChild(cell1Text);
//   row.appendChild(cell1);
//   const cell2 = document.createElement('td');
//   const cell2Text = document.createTextNode(`${mountain[columnProperties[1]]}`);
//   cell2.appendChild(cell2Text);
//   row.appendChild(cell2);
//   const cell3 = document.createElement('td');
//   const cell3Text = document.createTextNode(`${mountain[columnProperties[2]]}`);
//   cell3.appendChild(cell3Text);
//   row.appendChild(cell3);
//   table.appendChild(row);
// });
// // append table to mountains element
// mountains.appendChild(table);
// // align right numbers
// let nodeList = document.querySelectorAll('td');
// nodeList.forEach((node) => {
//   if (node.innerHTML == Number(node.innerHTML)) {
//     node.style.textAlign = 'right';
//   }
// });

//14.2

// function byTagName(node, tagName) {
//   let result = [];
//   Array.from(node.childNodes).forEach((node) => {
//     if (Array.from(node.childNodes).lenth != 0) {
//       result.push(byTagName(node, tagName));
//     }
//     if ((node.nodeType == document.ELEMENT_NODE)) {
//       if (node.nodeName.toLowerCase() == tagName) {
//         result.push(node);
//       }
//     }
//   });
//   return result.flat(Infinity);
// }

// 14.3
/**
 * cat animation
 */

// let cat = document.querySelector('#cat');
// let hat = document.querySelector('#hat');

// let angle = 0;
// let lastTime = null;
// function animate(time) {
//   if (lastTime != null) angle += (time - lastTime) * 0.001;
//   lastTime = time;
//   cat.style.top = Math.sin(angle) * 40 + 40 + 'px';
//   cat.style.left = Math.cos(angle) * 200 + 230 + 'px';

/**
 * opposite
 */

//   hat.style.top = Math.sin(angle + Math.PI) * 40 + 40 + 'px';
//   hat.style.left = Math.cos(angle + Math.PI) * 200 + 230 + 'px';

//   requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);

/**
 * Chapter 15
 */

// 15.1 balloon

// let balloon = document.querySelector("p");
// let current;

// if (balloon.hasAttribute("style")) current = Number(balloon.style.fontSize);
// else current = 16;

// function update(event) {
//   if (event.key == "ArrowUp") {
//     event.preventDefault();
//     current = current * 1.1;
//     if (current > 40) {
//       balloon.replaceChild(document.createTextNode("💥"), balloon.firstChild);
//       document.removeEventListener("keydown", update);
//     } else balloon.style.fontSize = current + "px";
//   } else if (event.key == "ArrowDown") {
//     event.preventDefault();
//     current = current * 0.9;
//     balloon.style.fontSize = current + "px";
//   }
// }

// document.addEventListener("keydown", update);

// /**
//  * mouse trail
//  */

// let dots = [];

// for (let i = 0; i < 12; i++) {
//   let node = document.createElement("div");
//   node.className = "trail";
//   document.body.appendChild(node);
//   dots.push(node);
// }

// let currentDot = 0;

// window.addEventListener("mousemove", (event) => {
//   let dot = dots[currentDot];
//   dot.style.left = event.pageX - 3 + "px";
//   dot.style.top = event.pageY - 3 + "px";
//   currentDot = (currentDot + 1) % dots.length;
// });

/**
 * tabs
 */

// function asTabs(node) {
//   /**
//    * array of tabs, each tab is {div,button}
//    */
//   let tabs = Array.from(node.children).map((node) => {
//     let button = document.createElement("button");
//     button.textContent = node.getAttribute("data-tabname");
//     let tab = { node, button };
//     button.addEventListener("click", () => selectTab(tab));
//     return tab;
//   });

//   /**
//    * create tablist div with buttons and append it
//    */

//   let tabList = document.createElement("div");
//   for (let { button } of tabs) tabList.appendChild(button);
//   node.insertBefore(tabList, node.firstChild);

//   function selectTab(selectedTab) {
//     for (let tab of tabs) {
//       let selected = tab == selectedTab;
//       tab.node.style.display = selected ? "" : "none";
//       tab.button.style.color = selected ? "red" : "";
//     }
//   }
//   selectTab(tabs[0]);
// }

/**
 * My compiler EGG to JS
 */

// function convertExpression(program) {
//   let match, expr;
//   if ((match = /^"([^"]*)"|^\d+\b/.exec(program))) expr = match[0];
//   else if ((match = /^[^\s(),#"]+/.exec(program))) expr = `_${match[0]}`;
//   else throw new SyntaxError("Unexpected syntax: " + program);
//   return convertApply(expr, program.slice(match[0].length));
// }

// function convertApply(expr, program) {
//   if (program[0] != "(") return { expr: expr, rest: program };
//   program = program.slice(1);
//   let op = expr;
//   let args = [];
//   while (program[0] != ")") {
//     let { expr, rest } = convertExpression(program);
//     args.push(expr);
//     program = rest;
//     if (program[0] == ",") {
//       program = program.slice(1);
//     } else if (program[0] != ")") {
//       throw new SyntaxError("Expected ',' or ')'");
//     }
//   }
//   expr = op.slice(1) in sForms ? sForms[op.slice(1)](args) : `${op}(${args})`;
//   return convertApply(expr, program.slice(1));
// }
// /**
//  * special forms, params
//  */

// const sForms = Object.create(null);

// const params = ["_true=true", "_false=false"];

// sForms.define = (args) => {
//   if (args.length != 2 || args[0][0] != "_") {
//     throw new SyntaxError("Incorrect use of define");
//   } else {
//     if (!(params.includes(args[0]) || /^_(true|false)\b/.test(args[0])))
//       params.push(args[0]);
//     return `(()=>{return ${args.join("=")};})()`;
//   }
// };

// sForms.do = (args) =>
//   `(()=>{${args.slice(0, -1).join(";")};return ${args[args.length - 1]};})()`;

// sForms.if = (args) => {
//   if (args.length != 3) {
//     throw new SyntaxError("Wrong number of args to if");
//   }
//   return `(()=>{return ${args[0]}!==false?${args[1]}:${args[2]};})()`;
// };

// sForms.while = (args) => {
//   if (args.length != 2) {
//     throw new SyntaxError("Wrong number of args to while");
//   }
//   return `(()=>{while(${args[0]}){${args[1]}}return false;})()`;
// };

// sForms.fun = (args) =>
//   `(${args.slice(0, -1)})=>{return ${args[args.length - 1]};}`;

// sForms.print = (value) => `(()=>{console.log(${value});return ${value};})()`;

// for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
//   sForms[op] = ([a, b]) => `(()=>{return ${a} ${op} ${b};})()`;
// }
// // --- *** ---

// function compile(program) {
//   let { expr, rest } = convertExpression(program.replace(/\s/g, ""));
//   if (rest.length > 0) {
//     throw new SyntaxError("Unexpected text after program");
//   }
//   let body = `try {return ${expr};} catch(error) {
//     if(error instanceof ReferenceError && error.message[0] == "_") {
//       error.message = error.message.slice(1);
//       throw error;
//     } else {
//       throw error;
//     }
//   }`;
//   return Function(...params, body);
// }

// function run(program) {
//   return compile(program)();
// }

// run('do(define(x, 110),if(>(x, 15),print("large"),print("small")))');

/**
 * END OF ELOQUENT JAVASCRIPT
 */

// *** Some tasks from javascript.info ***

// *** logical operators ***
// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }

// *** Objects ***
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);
// *****
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// *****
// let ladder = {
//   step: 0,

//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     console.log(this.step);
//     return this;
//   },
// };
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// *****
// function Calculator() {
//   this.read = function () {
//     let a = +prompt('value', 0);
//     this.a = a;
//     let b = +prompt('value', 0);
//     this.b = b;
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// *****
// *** class Calculator
// class Calculator {
//   constructor() {
//     this.read = () => {
//       this.x = +prompt('enter a number', 0);
//       this.y = +prompt('enter a number', 0);
//     };
//     this.sum = () => this.x + this.y;
//     this.mul = () => this.x * this.y;
//   }
// }
// *****
// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     newValue = +prompt('Val:', 0);
//     this.value += newValue;
//   };
// }
// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values
// *****
// *** Numbers ***
// *****
// function readNumber() {
//   let num;

//   do {
//     num = prompt('Enter a numer', 0);
//   } while (!isFinite(num));
//   if (num === '' || num === null) {
//     alert('null');
//     return null;
//   }
//   alert(num);
//   return num;
// }
// *****
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }
// *****
// function randomInteger(min, max) {
//   let result;
//   do {
//     result = (min - 1 + Math.random() * (max + 1 - min)).toFixed(0);
//   } while (result < min || result > max);
//   return result;
// }
// another method:
// function randomInteger(min, max) {
//   // here rand is from min to (max+1)
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
// *****
// *** Strings ***
// *****
// function ucFirst(str) {

//   if(!str) return str;

//   let cap = str[0].toUpperCase();
//   let remain = str.slice(1);
//   return `${cap}${remain}`;
// }
// *****
// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//   if (lowerStr.includes('viagra') || str.includes('xxx')) {
//     return true;
//   }
//   return false;
// }
// *****
// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + '...';
//   }
//   return str;
// }
// *****
// let mstr = 'gogotohome';
// console.log(truncate(mstr, 6));
//
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// let val = '$340';
// console.log(extractCurrencyValue(val));
// *****
// *** Some array exercise ***
// *****
// let styles = ['Jazz', 'Blues'];
// console.log(styles);
// styles.push('Rock-n-Roll');
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
// console.log(styles);
// console.log(styles.shift());
// styles.unshift('Rap', 'Reggae');
// console.log(styles);
// *****
// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt('A number please?', 0);

//     // should we cancel?
//     if (value === '' || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert(sumInput());
// *****
// *** A maximal subarray ***
// function getMaxSubSum(arr) {
//   let maxSum = arr[0];
//   let currentSum = 0;

//   for (let i of arr) {
//     if (currentSum < 0) {
//       currentSum = 0;
//       return;otherPart
//     }
//     currentSum += i;
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// *****
// *** Arrays ***
// *** long way
// function camelize(str) {
//   let arrayFromString = str.split('-');
//   let uncapitlizedPart = arrayFromString[0];
//   let otherPart = arrayFromString.slice(1);
//   let capitalizedArray = otherPart.map((word) => {
//     let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
//     return capitalized;
//   });
//   let resArray = [];
//   resArray.push(uncapitlizedPart);
//   let result = resArray.concat(capitalizedArray);
//   let resStr = result.join('');
//   return resStr;
// }
// *** short way
// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join('');
// }
// *****
// *** Filter range
// function filterRange(arr, a, b) {
//   let resArr = [];
//   for (let val of arr) {
//     if (val >= a && val <= b) {
//       resArr.push(val);
//     }
//   }
//   return resArr;
// }
// *** better solution
// function filterRange(arr, a, b) {
//   return arr.filter((item) => a <= item && item <= b);
// }
// *****
// *** modifies original array
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
// *****
// *** sort in decreasing order
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// *****
// *** Copy and sort array
// function copySorted(arr) {
//   return arr.slice().sort();
// }
// *****
// *** Create an extendable calculator
// function Calculator() {
//   this.methods = {
//     '-': (a, b) => a - b,
//     '+': (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }
// *** We return (this.methods[op](a, b)) because we want to call the function stored in the property "op" of the this.methods object and pass in the values of "a" and "b" as arguments. This will return the result of the calculation.
// *****
// *** Map to names
// conditions
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };
// let users = [john, pete, mary];
//*** bad code
// let names = [];
// users.forEach((obj) => {
//   names.push(obj.name);
// });
// *** good code
// let names = users.map(item => item.name);
// *****
// *** map to objects
// let usersMapped = users.map((item) => {
//   fullName = `${item.name} ${item.surname}`;
//   id = item.id;
//   return { fullName, id };
// });
// *** or
// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));
// *****
// function sortByAge(users) {
//   return users.sort(function (a, b) {
//     return a.age - b.age;
//   });
// }
// *****
// *** Shuffle an array
// *** "Algorithm P (Shuffling)"
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

//     // swap elements array[i] and array[j]
//     // we use "destructuring assignment" syntax to achieve that
//     // same can be written as:
//     // let t = array[i]; array[i] = array[j]; array[j] = t
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
// *****
// *** bad
// function getAverageAge(users) {
//   let resArr = [];
//   users.forEach((element) => {
//     resArr.push(element.age);
//   });
//   return resArr.reduce((a, b) => a + b, 0) / users.length;
// }
// *** good
// function getAverageAge(users) {
//   return users.reduce(((prev, user) => prev + user.age, 0 / users.length));
// }
// *****
// *** Filter unique array members
// *** For small arrays only!
// function unique(array) {
//   let newArr = [];
//   for (let val of array) {
//     if (!newArr.includes(val)) {
//       newArr.push(val);
//     }
//   }
//   return newArr;
// }
// *****
// *** Keyed object from array
// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// }
// *****
// *** Map and Set
// *****
// function unique(arr) {
//   let set = new Set(arr);
//   let resArr = Array.from(set);
//   return resArr;
// }
// *****
// *** Filter anagrams
// *** Set variant - returns first words
// function aclean(arr) {
//   let set = new Set();
//   let resArray = [];

//   for (string of arr) {
//     let a = string.toLowerCase().split('').sort().join('');

//     if (!set.has(a)) {
//       set.add(a);
//       resArray.push(string);
//     }
//     continue;
//   }
//   return resArray;
// }
// *** Map variant - returns last words
// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }
// *** try it
// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
// console.log(aclean(arr));
// *****
// *** Sum the properties
// function sumSalaries(salaries) {
//   let sum = 0;
//   let arr = Object.values(salaries);
//   for (let val of arr) {
//     sum += val;
//   }
//   return sum;
// }
// *****
// function count(obj) {
//   return Object.keys(obj).length;
// }
// *****
// let user = {
//   name: 'John',
//   years: 30,
// };
// let { name, years: age, isAdmin = false } = user;
// *****
// *** the maximal salary
// function topSalary(salaries) {
//   let topSalary = 0;
//   let topName = null;

//   Object.entries(salaries).forEach((pair) => {
//     let [name, salary] = pair;
//     if (salary > topSalary) {
//       topSalary = salary;
//       topName = name;
//     }
//   });
//   return topName;
// }
// *****
// *** Date
// in browser!
// const myDate = new Date('2012-02-20T03:12');
// alert(myDate);
// *****
// function getWeekDay(date) {
//   let result =
//     date.getDay() === 0
//       ? 'SU'
//       : date.getDay() === 1
//       ? 'MO'
//       : date.getDay() === 2
//       ? 'TU'
//       : date.getDay() === 3
//       ? 'WE'
//       : date.getDay() === 4
//       ? 'TH'
//       : date.getDay() === 5
//       ? 'FR'
//       : 'SA';
//   return result;
// }
// *** much better solution
// function getWeekDay(date) {
//   let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//   return days[date.getDay()];
// }
// *****
// *** european function
// function getLocalDay(date) {
//   let result = date.getDay();
//   return result === 0 ? 7 : result;
// }
// *****
// function getDateAgo(date, days) {
//   let tSD = days * 24 * 3600 * 1000;
//   let resDate = new Date(date.getTime() - tSD);
//   return resDate.getDate();
// }
// *** another method
// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }
// *****
// function getLastDayOfMonth(year, month) {
//   // when we pass 0, then it means “one day before 1st day of the month”
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }
// *****
// function getSecondsToday() {
//   let date = new Date();
//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }
// *****
// function getSecondsToTomorrow() {
//   let now = new Date();

//   // tomorrow date
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//   let diff = tomorrow - now; // difference in ms
//   return Math.round(diff / 1000); // convert to seconds
// }
// or
// function getSecondsToTomorrow() {
//   let date = new Date();
//   return (
//     24 * 3600 -
//     (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())
//   );
// }
// *****
// function formatDate(date) {
//   let now = new Date();
//   let diff = now - date;

//   // make our date this format: DD.MM.YY HH:mm
//   function fulldate(date) {
//     let [day, month, year, hours, minutes] = [
//       date.getDate(),
//       date.getMonth(),
//       date.getFullYear(),
//       date.getHours(),
//       date.getMinutes(),
//     ];

//     if (day < 10) {
//       day = '0' + day;
//     }

//     if (month < 10) {
//       month = `0${month}`;
//     }

//     if (hours < 10) {
//       hours = `0${hours}`;
//     }

//     if (minutes < 10) {
//       minutes = `0${minutes}`;
//     }

//     return `${day}.${month + 1}.${year} ${hours}:${minutes}`;
//   }
//   let result =
//     diff < 1000
//       ? 'right now'
//       : diff < 60000
//       ? `${diff / 1000} sec. ago`
//       : diff < 3600000
//       ? `${diff / 60000} min. ago`
//       : fulldate(date);
//   return result;
// }

// or

// function formatDate(date) {
//   let diff = new Date() - date; // the difference in milliseconds

//   if (diff < 1000) {
//     // less than 1 second
//     return 'right now';
//   }

//   let sec = Math.floor(diff / 1000); // convert diff to seconds

//   if (sec < 60) {
//     return sec + ' sec. ago';
//   }

//   let min = Math.floor(diff / 60000); // convert diff to minutes
//   if (min < 60) {
//     return min + ' min. ago';
//   }

//   // format the date
//   // add leading zeroes to single-digit day/month/hours/minutes
//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes(),
//   ].map((component) => component.slice(-2)); // take last 2 digits of every component

//   // join the components into date
//   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }

// or

// function formatDate(date) {
//   let dayOfMonth = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   let hour = date.getHours();
//   let minutes = date.getMinutes();
//   let diffMs = new Date() - date;
//   let diffSec = Math.round(diffMs / 1000);
//   let diffMin = diffSec / 60;
//   let diffHour = diffMin / 60;

//   // formatting
//   year = year.toString().slice(-2);
//   month = month < 10 ? '0' + month : month;
//   dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//   hour = hour < 10 ? '0' + hour : hour;
//   minutes = minutes < 10 ? '0' + minutes : minutes;

//   if (diffSec < 1) {
//     return 'right now';
//   } else if (diffMin < 1) {
//     return `${diffSec} sec. ago`;
//   } else if (diffHour < 1) {
//     return `${diffMin} min. ago`;
//   } else {
//     return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
//   }
// }
// *****
// *** JSON ***
// let user = {
//   name: 'John Smith',
//   age: 35,
// };
// let stringified = JSON.stringify(user);
// let restoredUser = JSON.parse(stringified);
// *****
// *** exclude circular refs ***
// let room = {
//   number: 23,
// };

// let meetup = {
//   title: 'Conference',
//   occupiedBy: [{ name: 'John' }, { name: 'Alice' }],
//   place: room,
// };

// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     /* your code */
//     return key != '' && value == meetup ? undefined : value;
//   })
// );
// ***** recursion
// function sumTo(n) {
//   if (n == 1) {
//     return n;
//   } else return n + sumTo(n - 1);
// }
// *****
// function factorial(n) {
//   if (n == 1) {
//     return n;
//   } else return n * factorial(n - 1);
// }
// *****
// fibonacci numbers
// function fib(n) {
//   // fib sequence: 0,1,1,2,3,5,8...
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     // we are shifting through sequence
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// *****
// function printList(list) {
// loop solution

// let tmp = list;
// while (tmp) {
//   console.log(tmp.value);
//   tmp = tmp.next;
// }
// recursive solution

//   console.log(list.value); // output the current item
//   if (list.next) {
//     printList(list.next); // do the same for the rest of the list
//   }
// }
// *****
// reversal linked list consoling
// function printRev(list) {
//   // loop
//   if (list.next) {
//     printRev(list.next);
//   }
//   console.log(list.value);
// }
// *****
// *** closures
// sum(a)(b)=a+b;
// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// *****
// filter through function
// filter functions for arr.filter

// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// }

// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   };
// }
// *****
// function makeArmy() {
//   let shooters = [];
//   for (let i = 0; i < 10; i++) {
//     let shooter = function () {
//       // create a shooter function,
//       alert(i); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//   }
//   // ...and return the array of shooters
//   return shooters;
// }
// *****
// *** function object
// *count in closure
// function makeCounter() {
//   let count = 0;
//   function counter() {
//     return count++;
//   }
//   counter.set = (val) => (count = val);
//   counter.decrease = () => count--;
//   return counter;
// }
// *count as property
// function makeCounter() {
//   counter.count = 0;
//   function counter() {
//     return counter.count++;
//   }
//   counter.set = (val) => (counter.count = val);
//   counter.decrease = () => counter.count--;
//   return counter;
// }
// *****
// *** Write function sum that would work like this:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// function sum(a) {
//   let currentSum = a;
//   // f adds b to a and returs itself for further calls
//   function f(b) {
//     currentSum += b;
//     return f;
//   }
//   // conversion rule for f (it`s a function - so it is object)
//   f.toString = function () {
//     return currentSum;
//   };
//   // sum returns f for further calls
//   return f;
// }
// *****
// *** setTimeout/setInterval ***
// printNumbers = function (from, to) {
//   let current = from;
//   let timerId = setInterval(function () {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// };
// or
// printNumbers = function (from, to) {
//   let current = from;
//   let timerId = setTimeout(function run() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(run, 1000);
//     }
//     current++;
//   }, 1000);
// };
// *****
// *** Decorators, forwarding, call/apply ***
// *** Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.Every call is saved as an array of arguments. ***
// we have this function
// function work(a, b) {
//   alert(a + b); // work is an arbitrary function or method
// }
// // decorator function
// function spy(func) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }
// *****
// *** Create a decorator delay(f, ms) that delays each call of f by ms milliseconds. ***
// function f(x) {
//   alert(x);
// }

// function delay(f, ms) {
//   return function () {
//     // arrow function here so context is taken from wrapper
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }
// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000('test'); // shows "test" after 1000ms
// f1500('test'); // shows "test" after 1500ms
// *****
// function debounce(func, ms) {
//   let timerId;
//   return function () {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => func.apply(this, args), ms);
//   };
// }
// *****
// function throttle(func, ms) {
//   let isThrottled = false,
//     savedArgs,
//     savedThis;
//   // this is returned:
//   function wrapper() {
//     if (isThrottled) {
//       // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }
//     // it happens at first run
//     isThrottled = true;

//     func.apply(this, arguments); // (1)
//     // and then we throttle it:
//     setTimeout(function () {
//       isThrottled = false; // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }
//   return wrapper;
// }
// *****
// *** prototypes, inheritance
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };
// *****
// Function.prototype.defer = function (ms) {
//   let f = this;
//   function wrapper(...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   }
//   return wrapper;
// };
// *****
// let dictionary = Object.create(null);
// // your code to add dictionary.toString method
// Object.defineProperty(dictionary, 'toString', {
//   value: function () {
//     let arr = Object.keys(this);
//     return arr.toString();
//   },
// });
// *****
// *** classes
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }
//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();
// *****
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit('White Rabbit'); // Error: this is not defined
// console.log(rabbit.name);
// *****
// class ExtendedClock extends Clock {
//   constructor({ template }, precision = 1000) {
//     super({ template });
//     this.precision = precision;
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }
// or
// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision = 1000 } = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// };
// *****
// *** mixin example
// let eventMixin = {
//   /**
//    * Subscribe to event, usage:
//    *  menu.on('select', function(item) { ... }
//   */
//   on(eventName, handler) {
//     if (!this._eventHandlers) this._eventHandlers = {};
//     if (!this._eventHandlers[eventName]) {
//       this._eventHandlers[eventName] = [];
//     }
//     this._eventHandlers[eventName].push(handler);
//   },

//   /**
//    * Cancel the subscription, usage:
//    *  menu.off('select', handler)
//    */
//   off(eventName, handler) {
//     let handlers = this._eventHandlers?.[eventName];
//     if (!handlers) return;
//     for (let i = 0; i < handlers.length; i++) {
//       if (handlers[i] === handler) {
//         handlers.splice(i--, 1);
//       }
//     }
//   },

//   /**
//    * Generate an event with the given name and data
//    *  this.trigger('select', data1, data2);
//    */
//   trigger(eventName, ...args) {
//     if (!this._eventHandlers?.[eventName]) {
//       return; // no handlers for that event name
//     }

//     // call the handlers
//     this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
//   }
// };
// *****
// Create a class FormatError that inherits from the built-in SyntaxError class.

// It should support message, name and stack properties.

// class FormatError extends SyntaxError {
//   constructor(message) {
//     this.name = this.constructor.name;
//     super(message);
//   }
// }
// *****
// function delay(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(() => resolve(), ms);
//   });
// }
// *****
// function go() {
//   showCircle(150, 150, 100).then((div) => {
//     div.classList.add('message-ball');
//     div.append('Hello, world!');
//   });
// }
// function showCircle(cx, cy, radius) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);
//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';

//       div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler);
//         resolve(div);
//       });
//     }, 0);
//   });
// }
// *****

// *****
// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));
//   document.head.append(script);
// }

// const loadScriptPromise = myPromisify(loadScript);

// // promisify for 2 arguments callback function
// const myPromisify = (f) => {
//   // f - accepts function as argument
//   // for possibility of calling
//   return (...args) => {
//     // this arrow f returns promise
//     return new Promise((resolve, reject) => {
//       // resolve or reject is decided by original loadScript implementation - it will call callback we should define
//       function customCallback(err, ...res) {
//         if (err) {
//           reject(err);
//         } else resolve(res.length === 1 ? res[0] : res);
//       }
//       args.push(customCallback);
//       f.call(this, ...args);
//     });
//   };
// };
// *****
// *** async/await ***
// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {

//     return response.json();
//   }
//   throw new Error(response.status);
// }
// *****
// *** my solution ***
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }

// // Ask for a user name until github returns a valid user
// async function demoGithubUser() {
//   let name, user;
//   do {
//     try {
//       name = prompt('Enter a name?', 'iliakan');
//       user = await loadJson(`https://api.github.com/users/${name}`);
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert('No such user, please reenter.');
//       } else {
//         throw err;
//       }
//     }
//   } while (!user);

//   alert(`Full name: ${user.name}.`);
//   return user;
// }

// demoGithubUser();
// *** 2nd variant ***
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }

// // Ask for a user name until github returns a valid user
// async function demoGithubUser() {
//   let user;
//   while (true) {
//     let name = prompt('Enter a name?', 'iliakan');

//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break; // no error, exit loop
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         // loop continues after the alert
//         alert('No such user, please reenter.');
//       } else {
//         // unknown error, rethrow
//         throw err;
//       }
//     }
//   }

//   alert(`Full name: ${user.name}.`);
//   return user;
// }

// demoGithubUser();
// *****
// function* pseudoRandom(seed) {
//   let previous = seed;
//   while (previous) {
//     previous = (previous * 16807) % 2147483647;
//     yield previous;
//   }
// }
// *****
// *** eval ***
// function calculator() {
//   const exp = prompt('Enter an expression');
//   return eval(exp);
// }

