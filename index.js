var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

$("document").ready(function() {
	for (var i = 0; i < 100; i++) {
		var letter = letters[Math.floor(Math.random() * 26)];
		var particle = $("<div>")
			.addClass("particle")
			.css("color", "hsl(" + Math.random() * 360 + ",100%,50%)")
			.text(letter)
			.appendTo("body");
	}

	$("a, .particle").each(function(box) {
		var angle = Math.PI * Math.random() * 2;
		var x = Math.random() * $(this).parent().innerWidth();
		var y = Math.random() * $(this).parent().innerHeight();
		
		$(this).css("position", "fixed");
		$(this).css("left", x);
		$(this).css("top", y);

		var last = new Date();

		setInterval(function() {
			var speed = 0.1;
			if ($(this).hasClass("particle")) {
				speed = 0.5;
			}

			speed *= (new Date() - last);
			last = new Date();

			var dx = Math.sin(angle);
			var dy = Math.cos(angle);

			var x = Number($(this).css("left").match(/[0-9\.\-]+(?=px)/));
			var y = Number($(this).css("top").match(/[0-9\.\-]+(?=px)/));

			$(this).css("left", x + dx * speed);
			$(this).css("top", y + dy * speed);

			var width = $(this).parent().innerWidth();
			var height = $(this).parent().innerHeight();

			if ((x < 0 && dx < 0) || (x > width && dx > 0)) {
				dx = -dx;
			}
			if ((y < 0 && dy < 0) || (y > height && dy > 0)) {
				dy = -dy;
			}
			angle = Math.atan2(dx, dy);
		}.bind(this), 1 / 60);
	});
});
