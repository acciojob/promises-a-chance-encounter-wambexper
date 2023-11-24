window.promises = [];

let divElement=document.getElementById("output");

let prom1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("1st");
	},1000);
});
let prom2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("2nd");
	},2000);
});
let prom3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("3rd");
	},3000);
});
let prom4=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("4th");
	},4000);
});
let prom5=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("5th");
	},5000);
});
// Do not change the code above this
// add your promises to the array `promises`
promises=[prom1,prom2,prom3,prom4,prom5];
let proms=Promise.any(promises);
proms.then((data)=>{
	divElement.innerText=data;
	// console.log(data);
});