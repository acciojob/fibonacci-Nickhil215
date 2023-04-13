function fibonacci(num) {
	let num1=0;
	let num2=1;
	var sum;
    let i;
	for(i=2;i<num;i++){
    
		sum=num1+num2;
		
		num1=num2;
		num2=sum;
	}
	return num2;
// your code here
}

module.exports = fibonacci;
