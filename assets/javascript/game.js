$(document).ready(function() {
	var luckyNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var flower1;
	var flower2;
	var flower3;
	var flower4;

	function newNumbers() {
		luckyNumber = Math.floor(Math.random() * 110) + 20;
		flower1 = Math.ceil(Math.random() * 12);
		flower2 = Math.ceil(Math.random() * 12);
		flower3 = Math.ceil(Math.random() * 12);
		flower4 = Math.ceil(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#luckyNumber").text(luckyNumber);
		$("#totalScore").text(totalScore);
		$("#flower1").attr("data-flowervalue", flower1);
		$("#flower2").attr("data-flowervalue", flower2);
		$("#flower3").attr("data-flowervalue", flower3);
		$("#flower4").attr("data-flowervalue", flower4);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

		//console.log(flower1, flower2, flower3, flower4);
	}

	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".flowerimg").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

	$(".flowerimg").on("click", function() {
		if (totalScore >= luckyNumber) {
			return;
		}

		var flowerValue = $(this).attr("data-flowervalue");
		flowerValue = parseInt(flowerValue);
		totalScore += flowerValue;
		$("#totalScore").text(totalScore);

		if (totalScore === luckyNumber) {
			youWin();
		} else if (totalScore > luckyNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});