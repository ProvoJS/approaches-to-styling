console.log("Type \"Sam\" to in the background and experience field to get his personal info.");

var inputFieldInterface = (function() {
	var _inputField = document.getElementById("user-background-input");

	return {
		getValue: function() {
			return _inputField.value;
		}
	};
})();


//form interface
(function() {
	var _form = document.getElementById("user-background-form");
	_form.addEventListener("submit", function(e) {
		e.preventDefault();
		Eve.emit("formSubmitted", inputFieldInterface.getValue());
	});
})();

// background info
(function() {
	var _bgInfo = {
		age: 24,
		isMarried: true,
		isFunny: false,
		job: "Qualtrics - Design Team",
		studying: "Spanish, Computer Science, Businsess Management",
		pastJobs: "Freelance, Audio Engineer (BYU TV)",
		status: "Student at BYU, Employee at Qualtrics, Married",
		secret: "He hasn't used shampoo for 6+ months."
	};

	_bgInfo.currentJob = _bgInfo.job;
	_bgInfo.jobs = "Steve";

	var _bgInfoContainer = document.getElementById("sams-deets");

	Eve.on("formSubmitted", function(val) {
		var value = val.trim();
		if (value.toUpperCase() === "SAM") {
			var _string = "";
			var keys = Object.keys(_bgInfo);

			keys.forEach(function(key) {
				if (_bgInfo.hasOwnProperty(key) && key.toLowerCase() !== "secret") {
					_string += key + ", ";
				}
			});

			_bgInfoContainer.textContent = _string.trim().slice(0, -1);
		} else if (typeof _bgInfo[value] !== "undefined") {
			_bgInfoContainer.textContent = _bgInfo[value];
		} else {
			_bgInfoContainer.textContent = "No Result.";
		}
	});
})();
