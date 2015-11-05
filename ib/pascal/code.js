var otvet; // здесь будем хранить правильный ответ

// Функция генерирует случайное число от min_random до max_random
 function getrandom(min_random, max_random) {
 var range = max_random - min_random + 1;
 return Math.floor(Math.random()*range) + min_random;}

 // Функция генерирует массив из l случайных чисел со значениями от min до max 
function random(min,max,l)
{var arr = [],m = [],n = 0;
  if (max - min < l-1) return;
  for (var i=0; i<=(max-min); i++)m[i] = i + min;
  for (var i=0; i<l; i++) {n = Math.floor(Math.random()*(m.length)); arr[i]=m.splice(n,1);}; 
  return arr
}


 //Проверка правильности (условная)
function proverka( i, RightItem )  {

  nameId  = 'test' + String( i );
  
	var selectedItem = '';
	for ( n=0; n<document.getElementsByName( nameId ).length; n++ ) {
		if (document.getElementsByName( nameId )[n].checked) {
				//alert("включен "+(i+1)+" radio-переключатель");
			selectedItem = selectedItem + String( n + 1 );
			}
    }
	
  if ( selectedItem == '' ) {
     alert( 'Сначала выберите правильный вариант ответа!' );
     return false;
   }
    //alert( String(RightItem).length );  alert( selectedItem.length ); 
  if ( String(RightItem).length == 2 ) { 
		if ( String(selectedItem).length != 2 ) {
			alert( 'Выберите два правильных варианта ответа!' );
			return false;
		}   
   }
  if ( String(RightItem).length != 2 ) {   
  if ( selectedItem == RightItem ) {
  
      //alert( 'правильный вариант ответа!' ); 
	document.getElementById( 'span' + String( i ) + '-'+ String( RightItem ) ).style.background = "green";		
	  
  }
  else {
		document.getElementById( 'span' + String( i ) + '-'+ String( selectedItem ) ).style.background = "red";
		document.getElementById( 'span' + String( i ) + '-'+ String( RightItem ) ).style.background = "green";		
		//alert( 'неправильный вариант ответа!' ); 
  }
  }
  else 
  {
      var a =  String(RightItem).charAt(0);  var b =  String(RightItem).charAt(1);
	  if ( parseInt( a ) > parseInt( b ) ) { String(RightItem) = String( b ) + String( a );  }
	  
      var a =  String( selectedItem ).charAt(0);  var b =  String( selectedItem ).charAt(1);
	  if ( parseInt( a ) > parseInt( b ) ) { selectedItem = String( b ) + String( a );  }	 
		
		if ( String( selectedItem ).charAt(0) == String(RightItem).charAt(0) ) {
		document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(0) ) )  ).style.background="green";}
		else {
		document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(0) ) )  ).style.background="red";
		document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( RightItem ).charAt(0) ) )  ).style.background="green";		
		}
		
		if ( String( selectedItem ).charAt(1) == String(RightItem).charAt(1) ) {
		document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(1) ) )  ).style.background="green";}
		else {
		document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(1) ) )  ).style.background="red";
		document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( RightItem ).charAt(1) ) )  ).style.background="green";		
		}
		if ( String( selectedItem ).charAt(0) == String(RightItem).charAt(1) ) {
		document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(0) ) )  ).style.background="green";}
		if ( String( selectedItem ).charAt(1) == String(RightItem).charAt(0) ) {
		document.getElementById( 'span' + String( i ) + '-'+ String( parseInt( String( selectedItem ).charAt(1) ) )  ).style.background="green";}		
  }
  
  
	if ( podskaska[i] != '') { document.getElementById( 'podskaska' + String( i ) ).innerHTML = 'Подсказка: ' + podskaska[i]; }
	document.getElementById( "button" + String( i ) ).disabled = true;
}

 	var dictionary = [];
		dictionary[0] = "academy";
		dictionary[1] = "atomic";
		dictionary[2] = "balance";
		dictionary[3] = "catalogue";
		dictionary[4] = "central";
		dictionary[5] = "document";
		dictionary[6] = "energy";
		dictionary[7] = "information";
		dictionary[8] = "organization";
		dictionary[9] = "technology";
		
		var answer,answer2,answer3,answer4;
 // Аналог функции copy
function copy(source, index, count) {
    return source.substr(index - 1, count);
}

// Функция copy для теста
function copy_test() {
	p = 1;
	k = getrandom(0,dictionary.length-1); 
	word =  dictionary[k]; // выбираем случайное слово из словаря
	//console.log( word ); console.log( word );
	index = getrandom(1,3);  // случайный индекс
	count = getrandom(4,5);  // случайное количество копируемых символов
	answer = copy(word, index, count);
	answer2 = copy(word, index+1, count);	
	answer3 = copy(word, index, count-1);
	answer4 = copy(word, index+1, count-1);
	
	question = "Copy('" +  word + "'," + String(index) + "," + String(count) + ") = ? ";

	return question;
}

// Аналог функции pos
function pos(needle, haystack) {
    return haystack.indexOf(needle) + 1;
}

// Функция pos для теста
function pos_test() {
	p = 2;
	k = getrandom(0,dictionary.length-1);  
	word =  dictionary[k]; // выбираем случайное слово из словаря
	index = getrandom(1,3);  // случайный индекс
	count = getrandom(4,5);  // случайное количество копируемых символов
	needle = copy(word, index, count);  // копируем часть слова 
	answer = String(pos(needle, word));   // получаем ответ И переводим в строку
	answer2 = String( parseInt(answer) + 1 );	
	answer3 = String( parseInt(answer) + 2 );	
	answer4 = String( parseInt(answer) - 1 );	
	
	
	question = "Pos('" +  needle + "','" + word + "') = ? ";
	return question;
	
}

// Функция length для теста
function length_test() {
	p = 3;
	k = getrandom(0,dictionary.length-1);  
	word =  dictionary[k]; // выбираем случайное слово из словаря
	answer = String(word.length);   // получаем ответ И переводим в строку
	answer2 = String( parseInt(answer) + 1 );	
	answer3 = String( parseInt(answer) + 2 );	
	answer4 = String( parseInt(answer) - 1 );	
	question = "Lenght('" + word + "') = ? ";
	return question;
}

// Аналог функции ord
function ord( str ) {
	var ch = str.charCodeAt(0);
	if (ch>0xFF) ch-=0x350;
		return ch;
}

// Аналог функции chr
function chr( ascii ) { 
	return String.fromCharCode(ascii);
}

// Функция  AnsiLowerCase для теста
function AnsiLower_test() {
	p = 4;
	k = getrandom(0,dictionary.length-1);  
	word =  dictionary[k]; // выбираем случайное слово из словаря
	l = String(word.length); // Длина слова
	var r;
	answer = '';
	
	// Переводим 1-2 случайных символа строки в верхний регистр
	r = getrandom(1, l); // Выбираем случайный символ строки
	if (ord(word[r]) > 96 && ord(word[r]) < 123){ // Проверка на нижний регистр
	word = word.replace(word[r],chr(ord(word[r])-32)); // Переводим его в верхний регистр
	}
	
	r = getrandom(1, l); // Выбираем случайный символ строки
	if (ord(word[r]) > 96 && ord(word[r]) < 123){ // Проверка на нижний регистр
	word = word.replace(word[r],chr(ord(word[r])-32)); // Переводим его в верхний регистр
	}
	
	for (var j = 0; j < l; j++) { // Цикл 0..l
	   	if (ord(word[j]) > 64 && ord(word[j]) < 91) { // Проверка j-го на верхний регистр
			answer = answer + chr(ord(word[j]) + 32); // Переводим j-й символ в нижний регистр и записываем ответ
		}
			else {
				answer = answer + word[j];
			}
		
	}
	answer2 = answer.toUpperCase();
	question = " AnsiLowerCase('" + word + "') = ? ";
	return question;
}


// Функция  AnsiUpperCase для теста
function AnsiUpper_test() {
	p = 5;
	k = getrandom(0,dictionary.length-1);  
	word =  dictionary[k]; // выбираем случайное слово из словаря
	l = String(word.length); // Длина слова
	var r;
	answer = '';
	
	// Переводим 1-2 случайных символа строки в верхний регистр
	r = getrandom(1, l); // Выбираем случайный символ строки
	if (ord(word[r]) > 96 && ord(word[r]) < 123){ // Проверка на нижний регистр
	word = word.replace(word[r],chr(ord(word[r])-32)); // Переводим его в верхний регистр
	}
	
	r = getrandom(1, l); // Выбираем случайный символ строки
	if (ord(word[r]) > 96 && ord(word[r]) < 123){ // Проверка на нижний регистр
	word = word.replace(word[r],chr(ord(word[r])-32)); // Переводим его в верхний регистр
	}
	
	for (var j = 0; j < l; j++) { // Цикл 0..l
	   	if (ord(word[j]) > 96 && ord(word[j]) < 123) { // Проверка j-го на нижний регистр
			answer = answer + chr(ord(word[j]) + -32); // Переводим j-й символ в верхний регистр и записываем ответ
		}
			else {
				answer = answer + word[j];
			}
		
	}
	answer2 = answer.toLowerCase();
	question = " AnsiUpperCase('" + word + "') = ? ";
	return question;
}


// Функция Insert для теста
function Insert_test() {
	p = 6;
	var s, s1, s2, index;
	k = getrandom(0,dictionary.length-1);  
	word =  dictionary[k]; // выбираем случайное слово из словаря
	
	l = String(word.length); // Длина слова
	s = word[getrandom(1,l-1)]+word[getrandom(1,l-1)]+word[getrandom(1,l-1)]; // Три случайных символа из слова
	index = getrandom(1,l-1); // Случайное число

	s1 = word.substring(0, index); // Кусок слова до Index
	s2 = word.substring(index, l); // Кусок слова после Index
	answer = (s1 + s + s2); // Вставляем подстроку
	answer2 = answer+'a';	
	answer3 = answer+'b';
	answer4 = 'c'+ answer;
	
	question = " Insert('" + s + "'" + ",'" +  word + "'," + index + ") = ? ";
	return question;
}

// Функция  Delete для теста
function  Delete_test() {
	p = 7;
	var s1, s2, index, count;
	k = getrandom(0,dictionary.length-1);  
	word =  dictionary[k]; // выбираем случайное слово из словаря
	
	l = String(word.length); // Длина слова
	index = getrandom(2,l-1); // Случайное число 1..l
	count = getrandom(2, l-index); // Случайное число l..l-index


	s1 = word.substring(0, index); // Кусок слова до Index
	s2 = word.substring(index+count, l); // Кусок слова от l-Index до конца слова
	
	answer = (s1 + s2); // Записываем ответ 
	answer2 = answer+'a';	
	answer3 = answer+'b';
	answer4 = 'c'+ answer;	
	question = " Delete('" + word + "'," + String( index+1) + "," + count + ") = ? ";
	return question;
}


function  bs_test() {
	p = 8;
	
	
	question = 'Решите блок-схему';
	
	var a = getrandom(-10,12);		
	var b = getrandom(-10,12);
		

	
            var example = document.getElementById("example"),
                ctx     = example.getContext('2d');
            example.width  = 640;
            example.height = 560;
			
			// СТРЕЛКА a->b
			ctx.beginPath();
			ctx.moveTo(450, 40); //начало
			ctx.lineTo(450,	60); //конец 
			ctx.lineTo(445,	55); // конец -5
			ctx.moveTo(450, 60); // конец
			ctx.lineTo(455,	55); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// А=... 
            ctx.strokeRect(400, 10, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a:= '+a, 427, 13);
			

			// B=... 
			ctx.strokeRect(400, 60, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('b:= '+b, 427, 63);
			
			// СТРЕЛКА 1 условие
			ctx.beginPath();
			ctx.moveTo(450, 90);
			ctx.lineTo(450,	110);
			ctx.lineTo(445,	105); 
			ctx.moveTo(450, 110);
			ctx.lineTo(455,	105);
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// начало 1 условия
			ctx.beginPath();
			ctx.moveTo(450, 110); // начало
			ctx.lineTo(500,	135); // правый край +50 +25
			ctx.lineTo(450,	160); // низ +0 +50
			ctx.lineTo(400, 135); // левый край -50 +25
			ctx.lineTo(450,	110); // в начало
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// A>B ? 
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a>b', 435, 123);
			
			// +
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('+', 380, 110);
			
			// -
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('-', 500, 110);
			
			// стрелка true
			ctx.beginPath();
			ctx.moveTo(400, 135); //начало
			ctx.lineTo(350,	135);
			ctx.lineTo(350,	185); //конец 
			ctx.lineTo(345,	180); // конец -5
			ctx.moveTo(350, 185); // конец
			ctx.lineTo(355,	180); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// b:=a-b
			ctx.strokeRect(300, 185, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('b:= a-b', 317, 190);
			
			//стрелка false
			ctx.beginPath();
			ctx.moveTo(500, 135); //начало
			ctx.lineTo(550,	135);
			ctx.lineTo(550,	185); //конец 
			ctx.lineTo(545,	180); // конец -5
			ctx.moveTo(550, 185); // конец
			ctx.lineTo(555,	180); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
       
			// b:=a+b
			ctx.strokeRect(500, 185, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('b:= a+b', 517, 190);
			
			// Стрелка на новое условие
			ctx.beginPath();
			ctx.moveTo(550, 215); //начало
			ctx.lineTo(550,	265);
			ctx.lineTo(450,	265); // право - середина
			ctx.moveTo(350, 215);
			ctx.lineTo(350,	265);
			ctx.lineTo(450,	265); // лево - середина
			ctx.lineTo(450,	300); //конец 
			ctx.lineTo(445,	295); // конец -5
			ctx.moveTo(450, 300); // конец
			ctx.lineTo(455,	295); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			// конец 1 блока уловия
			
			
			
			
			// начало 2 условия (1-e+190)
			ctx.beginPath();
			ctx.moveTo(450, 300); // начало
			ctx.lineTo(500,	325); // правый край +50 +25
			ctx.lineTo(450,	350); // низ +0 +50
			ctx.lineTo(400, 325); // левый край -50 +25
			ctx.lineTo(450,	300); // в начало
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// A>B ? 
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a>b', 435, 313);
			
			// +
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('+', 380, 300);
			
			// -
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('-', 500, 300);
			
			// стрелка true
			ctx.beginPath();
			ctx.moveTo(400, 325); //начало
			ctx.lineTo(350,	325);
			ctx.lineTo(350,	375); //конец 
			ctx.lineTo(345,	370); // конец -5
			ctx.moveTo(350, 375); // конец
			ctx.lineTo(355,	370); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			
			// a:=b-a
			ctx.strokeRect(300, 375, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a:= b-a', 317, 380);
			
			//стрелка false
			ctx.beginPath();
			ctx.moveTo(500, 325); //начало
			ctx.lineTo(550,	325);
			ctx.lineTo(550,	375); //конец 
			ctx.lineTo(545,	370); // конец -5
			ctx.moveTo(550, 375); // конец
			ctx.lineTo(555,	370); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
       
			// a:=a+b
			ctx.strokeRect(500, 375, 100, 30);
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('a:= a+b', 517, 380);
			
			// Стрелка на новое условие
			ctx.beginPath();
			ctx.moveTo(550, 405); //начало
			ctx.lineTo(550,	455);
			ctx.lineTo(450,	455); // право - середина
			ctx.moveTo(350, 405);
			ctx.lineTo(350,	455);
			ctx.lineTo(450,	455); // лево - середина
			ctx.lineTo(450,	490); //конец 
			ctx.lineTo(445,	485); // конец -5
			ctx.moveTo(450, 490); // конец
			ctx.lineTo(455,	485); // конец +5 -5
			ctx.lineWidth = 2;
			ctx.stroke();
			// конец 2 блока уловия
			
			// вывод
			ctx.beginPath();
			ctx.moveTo(450, 490); 
			ctx.lineTo(500,	490); 
			ctx.lineTo(490,	520);
			ctx.lineTo(390, 520); 
			ctx.lineTo(400,	490);
			ctx.lineTo(450, 490);			
			ctx.lineWidth = 2;
			ctx.font = 'italic 20px none';
			ctx.textBaseline = 'top';
			ctx.fillText ('write a+b', 398, 493);
			ctx.stroke();
	
	if (a>b) {
		b=a-b;
	}
		else b=a+b;
	if (a>b) {
		a=b-a;
	}
		else a=a+b;

	answer = String(a + b); // Записываем ответ 
	
	answer2 = String( parseInt(answer) + 1 );	
	answer3 = String( parseInt(answer) + 2 );	
	answer4 = String( parseInt(answer) - 1 );
		return question;
}




// Функция результат работы программы для теста
function resultProgram_test() {
	p = 9;

    var n = 1800 + getrandom( 12, 99 ), k = 0;
	
	question = "В результате выполнения следующей программы:" +  ' <br><br>  <pre>' +
' var n,k: word;' + '<br>' +
' begin' + '<br>' +
'    n:=' + String( n ) + ';' + '<br>' +
'    k:=0;' + '<br>' +
'    repeat' + '<br>' +
'      k:=10*k+n mod 10;' + '<br>' +
'      n:=n div 10;' + '<br>' +
'    until n<>0;' + '<br>' +
' write(k);' + '<br>' +
' end.' + '</pre><p><br>' +
'будет выведено… <br>';


    k = ( 10 * k + n ) % 10; 
    n = Math.floor( n / 10 ); 


    while ( n == 0 ) {
      k = ( 10 * k+n ) % 10; 
      n = Math.floor( n / 10 );
    }
	
	answer = String( k );
	answer2 = String( parseInt(answer) + 1 );	
	answer3 = String( parseInt(answer) + 2 );	
	answer4 = String( parseInt(answer) - 1 );
	return question;

	}





var i = 0;

var  test = new Array(); var podskaska = new Array(); var testType = new Array(); 
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;В содержание специфики программы не входит:";
 test[i][1] = "описание класса выходных данных.";
 test[i][2] = "формулировка задачи.";
 test[i][3] = "описание алгоритма решения задачи.";
 test[i][4] = "описание формы представления результатов.";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Жизненный цикл программного продукта заканчивается :";
 test[i][1] = "снятием программного продукта с продажи, отказом от сопровождения.";
 test[i][2] = "Завершением тестирования и отладки.";
 test[i][3] = "сопровождением программного продукта.";
 test[i][4] = "вводом программы в действие.";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Автором языка Паскаль является...";
 test[i][1] = "Никлаус Вирт.";
 test[i][2] = "Д.Ритчи.";
 test[i][3] = "Блез Паскаль.";
 test[i][4] = "Дж.Бэкус.";
 test[i][5] = "Т.Куртц.";
 
i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;В программе на языке Паскаль обязательным является...";
 test[i][1] = "раздел операторов"; 
 test[i][2] = "заголовок"; 
 test[i][3] = "подключение модулей";
 test[i][4] = "раздел описаний";

 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;К языкам 3-го поколения относится язык...";
 test[i][1] = "С++";
 test[i][2] = "Пролог";
 test[i][3] = "Ассемблер";
 test[i][4] = "Паскаль";

i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = copy_test();
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;

i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = pos_test();
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;

i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = length_test();
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;

 i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = AnsiLower_test();
 test[i][1] = answer;
 test[i][2] =  answer2;

 i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = AnsiUpper_test();
 test[i][1] = answer;
 test[i][2] =  answer2; 
 
 i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = Insert_test();
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 
 i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = Delete_test();
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 
   i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = resultProgram_test();
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;
 
 
  i++;
  
   document.write( ' <canvas id="example" width="0" height="0">Обновите браузер</canvas> ' );
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = bs_test();
 test[i][1] = answer;
 test[i][2] =  answer2;
 test[i][3] =  answer3;
 test[i][4] =  answer4;



 
 
 
var sssr = "<p>";
for ( var i = 0; i < test.length; i++ ) {

 		sssr = sssr + '<b>' + String( i + 1 ) + '. ' + test[i][0] + '</b><p>';
		var arr = random( 1, test[i].length - 1, test[i].length - 1 );
		var rightItem = ''; 
		
	 for ( var j = 1; j < test[i].length; j++ ) {
		
		sssr = sssr + '<p style = "margin-left: 24px;"><input id="test' + String( i ) + 
			'" name="test' + String( i ) + '" type="' + testType[i] + '" value="value' + 
			String( j ) +'">' +  '<span id = "span' + String( i ) + '-'+ String( j ) + '">' + String( test[i][ arr[j-1] ] ) + '</span>' + '<p/>';
			
			if ( arr[j-1] == 1 ) { rightItem = String(rightItem) + String(j); }
			if ( testType[i] == 'checkbox' ) { if ( arr[j-1] == 2 ) { rightItem = String(rightItem) + String(j); } }  
	 
	 
	 }
sssr = sssr + '<span id = "podskaska' + String(i) + '"></span><p>\n';	 
sssr = sssr + '<input type = "button" id = "button' + String(i) + '" onclick="proverka(' + String(i) + ', ' 
	+ rightItem + ');" value = "Проверить"> </input> <br> <br>';
 
}
 
document.getElementById( 'vopros' ).innerHTML = sssr;
