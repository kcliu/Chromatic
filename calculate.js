var displayField = [];
var scales = [
	'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'	
];

$(document).ready(function() {
    $("button").bind('tap', function() {
        buttonPressed()
    })
})

function buttonPressed() {
    var buttonText = event.target.innerText
		
	if (buttonText === "remove") {
		remove();
	} else if (buttonText === "Calculate") {
		calculate();
	} else {
		display(buttonText);
	}
	//console.log(buttonText);
}
function calculate_stub() {
	getResult(5);
	getResult(-7);
	getResult(3);
	getResult(9);
	getResult(10);
	getResult(11);
}
function calculate() {
	var value = getValue();
	console.log(value);
	clear();
	for (var i = 1;i < value.length; i++) {
		for (var j = 0;j < i;j++) {
			getResult(value[i]-value[j]);
		}
	}
}
function getResult(value) {
	if (value < 0) {  //always be positive
		value += 12;
	}
	console.log(value);
	if (value === 5 || value === 7) {
		//p++
		var tmp = eval($('#p').val());
		tmp += 1;
		$('#p').val(tmp);
	} else if(value === 4 || value === 8) {
		//m++
		var tmp = eval($('#m').val());
		tmp += 1;
		$('#m').val(tmp);
	} else if(value === 3 || value === 9) {
		//n++
		var tmp = eval($('#n').val());
		tmp += 1;
		$('#n').val(tmp);
	} else if(value === 2 || value === 10) {
		//s++
		var tmp = eval($('#s').val());
		tmp += 1;
		$('#s').val(tmp);
	} else if(value === 1 || value === 11) {
		//d++
		var tmp = eval($('#d').val());
		tmp += 1;
		$('#d').val(tmp);
	} else if(value === 6) {
		//t++
		var tmp = eval($('#t').val());
		tmp += 1;
		$('#t').val(tmp);
	}
}

function getValue() {
	var value = [];
    console.log(displayField);
	cnt = displayField.length;
	for (var i = 0;i < cnt;i++) {
		value.push(scales.indexOf(displayField.shift()));
		//console.log(displayField.shift());
	}
	//console.log(value)
	return value;
}

function display(buttonText) {
	displayField.push(buttonText);
    $('#display').val(displayField);
}

function remove() {
	displayField.pop();
    $('#display').val(displayField);
}

function clear() {
	//reset
	$('#p').val('0');
	$('#m').val('0');
	$('#n').val('0');
	$('#s').val('0');
	$('#d').val('0');
	$('#t').val('0');
}
