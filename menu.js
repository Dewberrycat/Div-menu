var state = {
		".div1": "none",
		".div2": "none",
		".div3": "none"
	};

	function check(cl) {
		if (state[cl] == "none") {
		$(".menu").css("display", "none");
		for (var key in state) state[key] = "none";
		$(cl).css("display", "block");
		state[cl] = "block";
		}
		else {
			$(".menu").css("display", "none");
			for (var key in state) state[key] = "none";
			state[cl] = "none";
		}
	}