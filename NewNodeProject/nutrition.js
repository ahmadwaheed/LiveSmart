var http = require("https");

var options = {
	"method": "GET",
	"hostname": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
	"port": null,
	"path": "/api/nutrition-data?ingr=oreo",
	"headers": {
		"x-rapidapi-host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
		"x-rapidapi-key": "db0ac482b7msha6f292ac5a296b8p198b2fjsn6f65ec39bc2f"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
