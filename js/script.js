array = [
	"img\\citrus.png",
	"img\\grapes.png",
	"img\\kiwi.png",
	"img\\coconut.png",
	"img\\pear.png",
	"img\\strawberry.png"
]

answer = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

defolt = "img\\slot-machine.png"

images = document.querySelectorAll("img");
images.forEach(function(userItem) {
	userItem.src = defolt;
});

name = prompt('Enter your name: ', 'Player');
document.getElementById('name').textContent = name;

function IfWinner(term)
{
	if(term == 0)
		var index = 0;
	else if(term == 1)
		var index = 3;
	else if(term == 2)
		var index = 6;
	if( answer[index] == answer[index + 1] && answer[index] == answer[index + 2] && answer[index + 1] == answer[index + 2])
		return true;
	else
		return false;
}

const button = document.querySelector('#button');
button.addEventListener('click',function()
{
	if(document.getElementById('button').textContent == "Generate")
	{
		for(var ind = 0; ind < answer.length; ind++)
		{answer[ind] = ind;}

		for(var i = 0; i < answer.length; i++)
		{
			var column = (i + 3) % 3;
			answer[i] = array[Math.floor(Math.random() * array.length)];
			while(true)
			{
				if( answer[column] == answer[column + 3] || answer[column] == answer[column + 6] || answer[column + 3] == answer[column + 6] )
					answer[i] = array[Math.floor(Math.random() * array.length)];
				else break;
			}
		}
		var index = 0;
		images.forEach(function(userItem) {
			userItem.src = answer[index];
			index++;
		});

		var raund = Number(document.getElementById('pRaund').textContent);
		raund++;
		document.getElementById('pRaund').textContent = raund;

		for(var i = 0; i < (images.length / 3); i++)
		{
			if(IfWinner(i))
			{
				document.getElementById('button').textContent = "WINNER";
				return;
			}
		}
		if(raund == 3)
		{
			document.getElementById('button').textContent = "LOOSER";
			return;
		}	
	}
	else
	{
		document.getElementById('button').textContent = "Generate";
		document.getElementById('pRaund').textContent = 0;
		images.forEach(function(userItem) {
			userItem.src = defolt;
		});
	}
});