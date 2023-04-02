function generateRandomNumber() {
	return Math.round(Math.random() * 20);
}

function generateStory() {
	const num1 = generateRandomNumber();
	const num2 = generateRandomNumber();
	const num3 = generateRandomNumber();

	let biggestNum;
	if (num1 >= num2 && num1 >= num3) {
		biggestNum = num1;
	} else if (num2 >= num1 && num2 >= num3) {
		biggestNum = num2;
	} else {
		biggestNum = num3;
	}

	const nthLetter = String.fromCharCode(96 + num1);

	const totalMins = num2 * num3;
	const hours = Math.floor(totalMins / 60);
	const minutes = totalMins % 60;
	const timeStr = `${hours} hr ${minutes} min`;

	const story = `The biggest number among the three generated numbers is ${biggestNum}. The ${num1}th letter in the English alphabet is ${nthLetter}. The result of multiplying ${num2} and ${num3} is ${totalMins} mins or ${timeStr} in hours and minutes.`;

	document.getElementById("story").innerHTML = story;
}

document.getElementById("generate-btn").addEventListener("click", generateStory);
