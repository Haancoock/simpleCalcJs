var numbers = document.querySelectorAll('.number'),
	operations = document.querySelectorAll('.operation'),
	decimalBtn = document.getElementById('decimal'),
	clearBtns = document.querySelectorAll('.clear-btn'),
	resultBtn = document.getElementById('result'),
	display = document.getElementById('display'),
	MemoryCurrentNumner = 0,
	MemoryNewNumber = false,
	MemoryPendingOperation = '';


for(var i = 0; i < numbers.length; i++){
	var number = numbers[i];
	number.addEventListener('click', function(e){
		numberPress(e.target.textContent);
	});
}


for(var i = 0; i < clearBtns.length; i++){
	var clearBtn = clearBtns[i];
	clearBtn.addEventListener('click', function(e){
		clear(e.srcElement.id);
	});
}

for(var i = 0; i < operations.length; i++){
	var operationBtn = operations[i];
	operationBtn.addEventListener('click', function(e){
		operation(e.target.textContent);
	});
}

decimalBtn.addEventListener('click', decimal);
resultBtn.addEventListener('click', result);




function numberPress(num){
	if (MemoryNewNumber) {
		display.value = num;
		MemoryNewNumber = false;
	}else{
		if(display.value === '0'){
			display.value = num;
		}else{
			display.value += num;
		};
	};
	
};

function operation(oper){
	localMemoryOperation = display.value;

	if (MemoryNewNumber && MemoryPendingOperation !== '=') {
		display.value = MemoryCurrentNumner;
	}else{
		MemoryNewNumber = true;
		if (MemoryPendingOperation === '+') {
			MemoryCurrentNumner += parseFloat(localMemoryOperation);
		}else if (MemoryPendingOperation === '-') {
			MemoryCurrentNumner -= parseFloat(localMemoryOperation);
		}else if (MemoryPendingOperation === '*') {
			MemoryCurrentNumner *= parseFloat(localMemoryOperation);
		}else if (MemoryPendingOperation === '/') {
			MemoryCurrentNumner /= parseFloat(localMemoryOperation);
		}else{
			MemoryCurrentNumner = parseFloat(localMemoryOperation);
		};
		display.value = MemoryCurrentNumner;
		MemoryPendingOperation = oper;
	}

	console.log('клик по операции ' + oper + '!');
}

function decimal(arg){
	console.log('клик по точке');
}

function clear(id){
	console.log('клик по ' + id + ' !');
}

function result(arg){
	console.log('клик по кнопке равно');
}
