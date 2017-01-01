
// var exec = require('child_process').exec;
var querystring = require('querystring')

function start(response, postData) {
	console.log("Request handler 'start' was called.");
	var body ='<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
		'<br>'+
		'<p>// 请在文本框中输入内容，点击submit提交查看</p>'+
    '<input type="submit" value="Submit text"/>'+
    '</form>'
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(body);
	response.end()
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('You sent the text:' + querystring.parse(postData).text);
	response.end()
}

exports.start = start;
exports.upload = upload
