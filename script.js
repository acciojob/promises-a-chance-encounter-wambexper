window.promises = [];
const p1 = new Promise((res, rej)=>{
	setTimeout(res, 100, "p1");
});
const p2 = new Promise((res, rej)=>{
	setTimeout(res, 200, "p2");
});
const p3 = new Promise((res, rej)=>{
	setTimeout(res, 300, "p3");
});
const p4 = new Promise((res, rej)=>{
	setTimeout(res, 400, "p4");
});
const p5 = new Promise((res, rej)=>{
	setTimeout(res, 500, "p5");
});
promises.push(p1);
promises.push(p2);
promises.push(p3);
promises.push(p4);
promises.push(p5);

Promise.any(promises).then((data)=>{
	document.getElementById("output").innerText = data;
});

// Do not change the code above this
// add your promises to the array `promises`