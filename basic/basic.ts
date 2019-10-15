var array :number[] =[1,2,3,4,5,6,7,8,9,10];

for(let i of array){
	for (let j of array){
		document.getElementById("result").innerHTML += ` ${i} X ${j} = ${i*j}<br>` ;
	}
	document.getElementById("result").innerHTML+= '<hr>';
}