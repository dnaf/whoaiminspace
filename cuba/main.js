var bpm = 125;
var offset = -0.05;

var bgm = $("#bgm").get(0);

var last = -1000;

var events = [
	[0, "m1"],
	[8, "m2"],
	[15, "bighit"],
	[16, "m1"],
	[24, "m3"],
	[32, "m1"],
	[40, "m2"],
	[46.5, "bighit", 0.5, "#ff7fff", "#ff00ff"],
	[47, "bighit", 2, "#ffffff"],
	[48, "m1"],
	[56, "m4"],
	[64, "j1"],

	[120, "f1"],

	[152, "f1"],

	[143, "bighit"],

	[175, "bighit"],

	[207, "bighit"],

	[324, "m1"],
	[332, "m2"],
	[340, "m1"],
	[348, "m2"],
	[356, "m1"],
	[364, "m2"],
	[372, "m1"],
	[380, "m2"],
];

var implications = {
	"m1": [
		[1, "melody", 2],
		[1.5, "melody", 4],
		[2, "melody", 5],
		[3.5, "melody", 2],
		[4.25, "melody", 2],
		[4.5, "melody", 4],
		[5, "melody", 5],
		[5.5, "melody", 2, "SPACE"],
		[6, "melody", 3],
		[6.75, "melody", 1]
	],
	"m2": [
		[1, "melody", 2],
		[1.5, "melody", 4],
		[2, "melody", 5],
		[3.5, "melody", 2],
		[4.25, "melody", 2],
		[4.5, "melody", 4],
		[5, "melody", 5],
		[5.5, "melody", 2, "CU"],
		[5.75, "melody", 3, "CUBA"],
	],
	"m3": [
		[-0.5, "melody", 3],
		[-0.25, "melody", 4],
		[0, "melody", 5],
		[1, "melody", 4],
		[2, "melody", 3],
		[3, "melody", 2],
		[4, "melody", 1],
		[5, "melody", 2],
		[6, "melody", 4],
		[7, "melody", 3],
		[7.75, "melody", 2]
	],
	"m4": [
		[-0.5, "melody", 1],
		[-0.25, "melody", 2],
		[0, "melody", 3],
		[0.5, "melody", 1],
		[0.75, "melody", 3],
		[1.25, "melody", 4],
		[1.75, "melody", 5],
		[2.25, "melody", 5],
		[2.5, "melody", 4],
		[2.75, "melody", 3],
		[3, "melody", 5],
		[3.25, "melody", 4],
		[3.5, "melody", 2],
		[3.75, "melody", 1],

		[4.5, "melody", 3],
		[5.25, "melody", 4],
		[6, "melody", 5],
		[6.75, "melody", 1],
		[6.8, "melody", 2],
		[6.85, "melody", 3],
		[6.9, "melody", 4],
		[6.95, "melody", 5],
		[7, "melody", 1],
		[7, "melody", 3],
		[7, "melody", 5],
		[7.25, "melody", 1],
		[7.25, "melody", 3],
		[7.25, "melody", 5],
	],
	"j1": [
		[0, "melody", 3],
		[0.75, "melody", 4],
		[1, "melody", 3],
		[1.5, "melody", 4],
		[1.75, "melody", 3],
		[2.5, "melody", 2],
		[3, "melody", 1],
		[3.5, "melody", 3],
		[4, "melody", 5],
		[4.75, "melody", 3],
		[5.5, "melody", 2],
		[6.5, "melody", 1],
		[7, "melody", 4],
		[7.5, "melody", 3],
		[8, "melody", 2],
		[9.5, "melody", 3],
		[9.75, "melody", 2],
		[10, "melody", 1],
		[11.5, "melody", 4],
		[11.75, "melody", 3],
		[12, "melody", 1],
		[14.5, "melody", 1],
		[14.75, "melody", 2],
		[15, "melody", 3],
		[15.25, "melody", 4],
		[15.5, "melody", 1],
		[15.75, "melody", 2],
		[16, "melody", 3],
		[17, "melody", 4],
		[17.25, "melody", 5],
		[17.75, "melody", 2],
		[19, "melody", 4],
		[19.25, "melody", 5],
		[19.75, "melody", 1],
		[21, "melody", 4],
		[21.25, "melody", 5],
		[21.75, "melody", 1],
		
		[23, "melody", 1],
		[23, "melody", 2],

		[23.5, "melody", 2],
		[23.5, "melody", 3],

		[24, "melody", 3],
		[24, "melody", 4],

		[25.5, "melody", 2],
		[25.5, "melody", 3],

		[26, "melody", 3],
		[26, "melody", 4],
		
		[26.5, "melody", 1],
		[26.5, "melody", 4],

		[26.75, "melody", 3],
		[26.75, "melody", 4],

		[27.25, "melody", 3],
		[27.25, "melody", 5],

		[27.75, "melody", 4],
		[27.75, "melody", 5]
	],
	"c1": [
		[0, "bighit", 1.75, "#ffaaff"],
		[1.75, "bighit", 2, "#ff0000"],
		[4, "bighit", 2, "#aaaaff"],
		[6, "bighit", 1, "#ffffaa", "#444400"],
		[7, "bighit", 1, "#ffffff"],
		[8, "bighit", 2, "#aaaa00"],
		[10, "bighit", 1, "#ff00000"],
		[11, "bighit", 1, "#ffaaaaa"],
		[12, "bighit", 2, "#ff00ff"]
	],
	"f1": [
		[0, "bighit", 1],
		[1, "bighit", 1],
		[2, "bighit", 1],
		[3, "bighit", 1],
		[4, "bighit", 1],
		[5, "bighit", 1],
		[6, "bighit", 1],
		[7, "bighit", 0.75],
		[7.75, "bighit"]
	]
};

console.log("%s explicit events", events.length);

for (var i = 0; i < events.length; i++) {
	var event = events[i];
	var implication = implications[events[i][1]]

	if (implication) {
		for (var j = 0; j < implication.length; j++) {
			var newEvent = implication[j].slice(0); // clone array
			newEvent[0] += event[0];
			events.push(newEvent);
		}
	}
}

events.sort(function(a, b) {
	return a[0] - b[0];
});

console.log("%s total events", events.length);

eventFunctions = {
	"melody": function(beat, args) {
		var text = [
			"",
			"CUBA",
			"WHOA",
			"CU",
			"IM",
			"IN"
		];
		document.title = args[2] || text[args[1]];

		var bar = $("<div>")
			.addClass("melodybar")
			.appendTo($("#barcontainer"));
		
		bar.css("top", (1 - args[1] / 5) * 80 + 20 + "%");


		bar.fadeOut(300, function() {
			$(this).remove();
		});
	},
	"bighit": function(beat, args) {
		var length = ((args[1] || 3) * (60 / bpm) - 0.1) * 1000 / (bgm.playbackRate != 0 ? bgm.playbackRate : 100000000000);
		$("body").css("background-color", args[2] || "#fff0ff")
			.animate({"background-color": args[3] || "#000000"}, length);
	}
};

var lastEventIndex = -1;

function mainLoop() {
	if (bgm.paused) {
		bgm.controls = true;
		$("*").css("visibility", "hidden")
		$("#bgm").css("visibility", "visible");
	} else {
		bgm.controls = false;
		$("*").css("visibility", "visible")
		$("#bgm").css("visibility", "hidden");
	}
	var time = bgm.currentTime - offset;
	var beat = time * (bpm / 60);

	if (beat < last) {
		last = 0;
		lastEventIndex = -1;
	}

	for (var i = lastEventIndex + 1; i < events.length; i++) {
		if (events[i][0] > beat) {
			break;
		}
		lastEventIndex = i;
		
		if (eventFunctions[events[i][1]]) {
			eventFunctions[events[i][1]](beat, events[i].slice(1));
		}
	}

	if (Math.floor(last) !== Math.floor(beat)) {
		$("#cubagif").toggleClass("a");
	}

	last = beat;
}

setInterval(mainLoop, 10);
