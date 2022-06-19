window.onload = function(){
	alert("Welcome To My Simple Javascript Calculator!");
	let person = prompt("Please Enter Your Name", "");
	if(person != null)
	{
		alert("Welcome, " + person + "!");
		document.getElementById("bbb").innerHTML = "Click on the Start Button to Calculate!";
		document.getElementById("aaa").innerHTML = "Welcome, " + person + "!";
	}
}

function start(){
	while(true)
	{
		var number1 = prompt("Enter the First Number", "");
		var num1 = parseFloat(number1, 10);
		if(isNaN(num1))
		{
			alert("Invalid Entry! Please Enter a Number.");
		}
		else
		{
			break;
		}
	}

	while(true)
	{
		var number2 = prompt("Enter the Second Number", "");
		var num2 = parseFloat(number2, 10);
		if(isNaN(num2))
		{
			alert("Invalid Entry! Please Enter a Number.");
		}
		else
		{
			break;
		}
	}

	function sum2Numbers(num1, num2){
		sumNumbers = num1 + num2
		alert("The sum of your two numbers is: " + sumNumbers);
		return sumNumbers
	}

	var result = sum2Numbers(num1, num2);
	if(result > 10)
	{
		alert("That is a big number!");
	}
	else
	{
		alert("That is a small number!");
	}

	while(true)
	{
		var ask = prompt("Would you like to add two numbers again? (Enter yes or no)", "");
		if(ask == "yes")
		{
			while(true)
			{
				var number11 = prompt("Enter the First Number", "");
				var num11 = parseFloat(number11, 10);
				if(isNaN(num11))
				{
					alert("Invalid Entry! Please Enter a Number.");
				}
				else
				{
					break;
				}
			}

			while(true)
			{
				var number22 = prompt("Enter the Second Number", "");
				var num22 = parseFloat(number22, 10);
				if(isNaN(num22))
				{
					alert("Invalid Entry! Please Enter a Number.");
				}
				else
				{
					break;
				}
			}

			var resultother = sum2Numbers(num11, num22);
			if(resultother > 10)
			{
				alert("That is a big number!");
			}
			else
			{
				alert("That is a small number!");
			}
		}
		else if(ask == "no")
		{
			break;
		}
		else 
		{
			break;
		}
	}
	alert("Thank you for using My Simple JavaScript Calculator!");
}