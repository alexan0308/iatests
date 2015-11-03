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
 test[i][0] = "&#10003;Из следующих утверждений о языке программирования низкого уровня (ЯПНУ) истинным является...";
 
  test[i][1] = "ЯПНУ позволяет использовать все возможности конкретной ЭВМ";
  test[i][2] = "ЯПНУ позволяет создавать мобильные программы";
  test[i][3] = "ЯПНУ упрощает отладку программ";
  test[i][4] = "ЯПНУ используют для написания больших прикладных программ";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = '&#10003;В этап "Постановки задачи" при решении задачи на ЭВМ не входит:';
 test[i][1] = "анализ существующих аналогов.";
 test[i][2] = "определение формы выдачи результатов.";
 test[i][3] = "описание исходных данных.";
 test[i][4] = "определение конечных целей решения задачи.";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Алгоритм позволяет решить задачу данного класса при любых допустимых значениях исходных данных благодаря свойству";
 test[i][1] = "массовости.";
 test[i][2] = "детерминированности.";
 test[i][3] = "результативности.";
 test[i][4] = "дискретности.";
 
i++;
 
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Количество символов языка Паскаль в выражении <code>(А12+В3<=С4)</code> равно …";
 test[i][1] = "12.";
 test[i][2] = "7.";
 test[i][3] = "10.";
 test[i][4] = "18.";
 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Выражение ________ имеет смысл, и его значение равно значению выражения <code>ord('B')-ord('D')</code>.";
 test[i][1] = "<code>ord('x')-ord('z')</code>.";
 test[i][2] = "<code>#23-#21</code>.";
 test[i][3] = "<code>ord('B')-ord('d')</code>.";
 test[i][4] = "<code>'3'-'1'</code>.";
 
i++;

 test[i] = new Array(); podskaska[i] = '<code>1) read(b); 2) a:=b; 3) read(c); 4) a:=c; 5) a:=5;</code>'; testType[i] = 'radio';
 test[i][0] = 
 '&#10003;Во фрагменте программы <br> ' +
 '  <pre>' +
 '    if a>20 then begin' + '<br>' +
 '        read(b); a:=b;' + '<br>' +
 '        end;' + '<br>' +
 '    else' + '<br>' +
 '       if a<0 then begin' + '<br>' +
 '          read(c); a:=c;' + '<br>' +
 '       end' + '<br>' +
 '       else begin a:=5; end; </pre>' + '<br>' +

' количество простых операторов равно…';

 test[i][1] = "5. ";
 test[i][2] = "7.";
 test[i][3] = "8.";
 test[i][4] = "3.";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Истинным является утверждение...";
 test[i][1] = "Параметр любого вида может быть входным параметром.";
 test[i][2] = "В теле программы нельзя изменять параметры-значения.";
 test[i][3] = "Параметр-константу можно использовать как локальную переменную в теле подпрограммы.";
 test[i][4] = "Входным параметром может быть только параметр-значение или параметр-константа.";
 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Из следующих утверждений истинным является..." +
 '  <pre>' +

 '   1) Имена локальных переменных не могут совпадать с именами глобальных констант.' + '<br>' +
 '   2) Функция не может быть описана в процедуре.' + '<br>' +
 '   3) Если имя локальной переменной совпадает с именами глобальной переменной, <br> ' +
 '      то обратиться к глобальной переменной можно с помощью составного имени.' + '<br>' +
 '   4) Параметр-значение можно использовать как локальную переменную.' + '</pre>';
 
 test[i][1] = "3,4";
 test[i][2] = "1,4";
 test[i][3] = "2,3";
 test[i][4] = "2,4";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Имеется описание массивов: "

 + '  <pre>' +

 '    var' + '<br>' +
 '        a: array[1..10] of integer;' + '<br>' +
 '        b: array[-10..10] of integer;' + '<br>' +
 '        c: array[char] of integer;' + '<br>' +
 '        d: array[byte] of integer;</pre>' + '<p>' +
 '    для ввода массива описана процедура с заголовком:' + '<br>' +
 '<pre> procedure read_arr(var a:array of integer); </pre>' + '<p>' +
 '    количество массивов из перечисленных, которые нельзя ввести с помощью процедуры <code>read_arr</code>, равно...';
 
 test[i][1] = "0";
 test[i][2] = "1";
 test[i][3] = "2";
 test[i][4] = "3";

 i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Фактическим параметром процедуры с заголовком "

 + '  <pre>' +
 '    procedure p(var a:real);</pre>' + '<p>' +
 '  может быть:';
 
 test[i][1] = "элемент массива с базовым типом <code>real</code>";
 test[i][2] = "целое число";
 test[i][3] = "вещественное число";
 test[i][4] = "переменная целого типа";
 
 i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = '&#10003;Имеются описание типа и четыре описания переменной <code>s</code>:' + '<p>'
  + '  <pre>' +
'type t_date=record d: 1..31; m:  1..12; y: 0..9999 end;' + '<br>' +
'var s:record' + '<br>' +
'           name: string[20];' + '<br>' +
'           bd: t_date;' + '<br>' +
'           exam: array[1..4] of 2..5;' + '<br>' +
'       end;' + '<br>' +
'var s:record' + '<br>' +
'           name, s: string[20];' + '<br>' +
'           d: t_date;' + '<br>' +
'           exam: array[1..4] of 2..5;' + '<br>' +
'       end;' + '<br>' +
'var s:record' + '<br>' +
'           m: string[20];' + '<br>' +
'           d: t_date;' + '<br>' +
'           y: array[1..4] of 2..5;' + '<br>' +
'       end;' + '<br>' +
'var s:record' + '<br>' +
'           name: string[20];' + '<br>' +
'           bd: t_date;' + '<br>' +
'           t_date: array[1..4] of t_date;' + '<br>' +
'       end;</pre>' + '<p>' +
'Количество правильных описаний переменной s равно...';

 test[i][1] = "4";
 test[i][2] = "1";
 test[i][3] = "2";
 test[i][4] = "3";

 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'checkbox';
 test[i][0] = "&#10003;В операторе присваивания" +  '  <pre>' +
'    a:= 140/7 - sqr(round(14/6));' + '</pre><p>' +
'типом переменной a могут быть типы (укажите два варианта ответа):';
 test[i][1] = "real.";
 test[i][2] = "extended.";
 test[i][3] = "integer.";
 test[i][4] = "byte.";
i++;

 test[i] = new Array(); podskaska[i]='Дык аргумент pr - integer - целый! 5. - тип real или extended'; testType[i] = 'radio';
 test[i][0] = "&#10003;Вызов процедуры с заголовком <p><pre>  procedure pr(a: integer);</pre> <p>может иметь вид...";
 test[i][1] = "<code>pr(45 div 7);</code>";
 test[i][2] = "<code>pr(5.);</code>";
 test[i][3] = "<code>pr(45/5);</code>";
 test[i][4] = "<code>pr(sqrt(36));</code>";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Имеется описание: <code>var b: byte; i: integer;</code>	Все переменные инициализированы числом 4. Фактическим параметром процедуры с заголовком <code>procedure pr(const a: integer);</code> может быть:";
 test[i][1] = "все приведенные варианты";
 test[i][2] = "переменная <code>b</code>";
 test[i][3] = "выражение <code>i div b</code>";
 test[i][4] = "переменная <code>i</code>";
 test[i][5] = "число <code>25</code>";
 
 
i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = '&#10003;? Имеется описание:' +  '  <pre>' +
' var s1: array[1..10] of char;' + '<br>' +
'     s2: string[10];' + '<br>' +
'     s3: string;' + '<br>' +
'     s4: array[1..256] of char;' + '<br>' +
'     ch: char;' + '</pre><p>' +
'Все переменные инициализированы. <p>' +
'Из следующих выражений недопустимыми являются… <p>' +  '  <pre>' +

' 1)	s1 &lt;&gt; ch' + '<br>' +
' 2)	s1 + s2' + '<br>' +
' 3)	s3 &gt; s1' + '<br>' +
' 4)	s2 &lt; ch' + '<br>' +
' 5)	s4 + ch' + '<br>' +
' 6)	s2 = s4' + '</pre>';

 test[i][1] = "5, 6";
 test[i][2] = "1, 5";
 test[i][3] = "4, 6";
 test[i][4] = "2, 4";
 test[i][5] = "3, 6";
 
 //______________________________ Количество байт _____________________________________ 
 i++;
 
 test[i] = new Array(); podskaska[i]= '6 байт под real * 10 + 4 байт под longint * 15 + 1 байт под Boolean * 50 = 170';
 testType[i] = 'radio';
 test[i][0] = "&#10003;Имеется описание:" +  '  <pre>' +
' var a: array [1..10] of real;' + '<br>' +
'     b: array [1..15] of longint;' + '<br>' +
'     c: array [1..50] of Boolean;' + '</pre><p>' +
'Общий объем памяти, выделенной всем описанным массивам, равен ________ байт.';

 test[i][1] = "170.";
 test[i][2] = "140.";
 test[i][3] = "150.";
 test[i][4] = "75.";
 
  //______________________________ Количество байт _____________________________________ 
 i++;
 test[i] = new Array(); podskaska[i]='Строковая переменная занимает в памяти на 1 байт больше, чем указанная в описании длина. Дело в том, что один (нулевой) байт содержит значение текущей длины строки. '; testType[i] = 'radio';
 test[i][0] = "&#10003;Имеется описание:"
 + '  <pre>' +
 '    var s1: string[5]; s2: string[15]; s3: string[10];' + '</pre><p>' +
 '    Переменные инициализированы:' + '<br><pre>' +
 '    s1:=\'Students\'; s2:=\'study\'; s3:=\'English\';'+ '</pre>' + '<p>' +

' Общее количество байтов, выделенных переменным <code>s1</code>, <code>s2</code>, и <code>s3</code>, равно...';
 
 test[i][1] = "<code>33</code>";
 test[i][2] = "<code>23</code>";
 test[i][3] = "<code>20</code>";
 test[i][4] = "<code>30</code>";

//______________________________ Файлы _____________________________________ 
i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Файловая переменная <code>f</code> типа text связана с файлом '<code>t.text</code>', и файл открыт для дозаписи в конце файла. После дозаписи в файл его можно переименовать, заменив имя '<code>t.txt</code>' на '<code>new_t.txt</code>', вызвав процедуру ...";
 test[i][1] = "<code>ReName(f, 'new_t.txt')</code> после закрытия <code>f</code>.";
 test[i][2] = "<code>ReName('t.txt', 'new_t.txt')</code> после закрытия <code>f</code>.";
 test[i][3] = "<code>ReName('t.txt', 'new_t.txt)</code> до закрытия <code>f</code>.";
 test[i][4] = "<code>ReName(f, 'new_t.txt')</code> до закрытия <code>f</code>.";
 
//______________________________ Файлы _____________________________________  
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Обозначим через <code>f</code> файловую переменную типа <code>text</code>. Истинным является утверждение ...";
 test[i][1] = "Функция <code>SeekEoLn(f)</code> возвращает значение истина, если указатель файла достиг конца строки.";
 test[i][2] = "Вызывать процедуру <code>reset(f)</code> можно неоднократно, не закрывая файл процедурой <code>close(f)</code>. ";
 test[i][3] = "Отсутствие процедуры <code>close(f)</code> при обработке открытого для чтения файла является ошибкой.";
 test[i][4] = "При открытии несуществующего текстового файла процедурой <code>append</code> он создается и открывается для записи.";

//______________________________ Файлы _____________________________________ 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Ложным является утверждение ...";
 test[i][1] = "Файл прямого доступа позволяет обратиться к записи по её номеру.";
 test[i][2] = "Записи файла прямого доступа должны иметь одинаковые размеры.";
 test[i][3] = "Файл последовательного доступа позволяет чередовать чтение и запись";
 test[i][4] = "Записи файла последовательного доступа могут иметь разные размеры.";
 
 //______________________________ Файлы _____________________________________ 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;В результате выполнения следующей программы при условии, что на диске d свободно 4кб, будет выведено…" +  '  <pre>' +
' type t_matr=array[1..40, 1..40] of real;' + '<br>' +
' var i,j,r: word; fw: file; a: t_matr;' + '<br>' +
' begin' + '<br>' +
'   assign(fw, \'d:\\f\'); rewrite(fw, 40*sizeof(real));' + '<br>' +
'   for i:=1 to 40 do' + '<br>' +
'     for j:=1 to 40 do' + '<br>' +
'       a[i,j]:=i+j;' + '<br>' +
'   blockwrite(fw, a, 40, r);' + '<br>' +
'   close(fw);' + '<br>' +
'   write(r);' + '<br>' +
' end.' + '</pre>';

 test[i][1] = "40.";
 test[i][2] = "50.";
 test[i][3] = "30.";
 test[i][4] = "20.";

//______________________________ Записи _____________________________________  

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Истинным  утверждением является...";
 test[i][1] = "Типы полей записей могут быть любыми";
 test[i][2] = "Поля записей не могут записями";
 test[i][3] = "Поля записей не могут быть массивами";
 test[i][4] = "Поля записи должны иметь разные типы";

//______________________________ Записи _____________________________________  
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Ложным утверждением является";
 test[i][1] = "Над записями как едиными целыми определены операции сравнения на равенство (=) и неравенство (<>)";
 test[i][2] = "Имя поля может совпадать с именем функции";
 test[i][3] = "Для совместимости записей по присваиванию требуется тождественность типов";
 test[i][4] = "Имя поля может совпадать с именем записи";

 
//________________________ В результате выполнения программы... _____________________  
i++;
 
  test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;В результате выполнения следующей программы будет выведено... " + '<pre>' +
 'type t_arr=array[1..10] of byte; ' + '<br>' +
 'const b: t_arr=(2,5,3,3,8,8,2,9,5,2); ' + '<br>' +
 'function f(a:t_arr; x:byte; i:byte):boolean; ' + '<br>' +
 ' begin '+ '<br>' +
 '  while (i<=10) and (a[i]<>x) do i:=i+1;'+ '<br>' +
 '  f:=i<=10; '+ '<br>' +
 ' end; ' + '<br>' +
 ' function g(a:t_arr; var i:byte):boolean; ' + '<br>' +
 ' begin ' + '<br>' +
 '  i:=2; '+ '<br>' +
 '   while (i<=10) and f(a,a[i-1],i) do i:=i+1; '+ '<br>' +
 '   g:=i<=10; '+ '<br>' +
 'end; ' + '<br>' +
 'var k: byte; '+ '<br>' +
 'begin '+ '<br>' +
 ' if g(b,k) then write(b[k-1]) else write(b[k]) ' + '<br>' +
 'end. </pre>';
 
 test[i][1] = "<code>3</code>";
 test[i][2] = "<code>0</code>";
 test[i][3] = "<code>1</code>";
 test[i][4] = "<code>2</code>";
 
//________________________ В результате выполнения программы... _____________________  
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003; В результате выполнения следующей программы будет выведено..." 
 +  ' <pre> function f(n: word): word; <br> ' +
 '  var m:word;' + '<br>' +
 '   begin' + '<br>' +
 '    m:= 0;' + '<br>' +
 '    while n>0 do' + '<br>' +
 '     begin' + '<br>' +
 '       m:= m*10 + n mod 10; n:= n div 10' + '<br>' +
 '     end;' + '<br>' +
 '    f:= m;' + '<br>' +
 ' end;' + '<br>' +
 ' var n:word;' + '<br>' +
 ' begin' + '<br>' +
 '   n:= 1234;' + '<br>' +
 '   write(f(n)+n)' + '<br>' +
 ' end.' + '</pre>' + '<p> Введите ответ в поле:';
 
 test[i][1] = "<code>5555</code>";
 test[i][2] = "<code>4444</code>";
 test[i][3] = "<code>3333</code>";
 test[i][4] = "<code>2222</code>";

//________________________ В результате выполнения программы... _____________________  
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;В результате выполнения следующей программы:" +  '  <pre>' +
' var n,k: word;' + '<br>' +
' begin' + '<br>' +
'    n:=1895;' + '<br>' +
'    k:=0;' + '<br>' +
'    repeat' + '<br>' +
'      k:=10*k+n mod 10;' + '<br>' +
'      n:=n div 10;' + '<br>' +
'    until n<>0;' + '<br>' +
' write(k);' + '<br>' +
' end.' + '</pre><p>' +
'будет выведено…';

 test[i][1] = "<code>5</code>.";
 test[i][2] = "<code>6</code>.";
 test[i][3] = "<code>7</code>.";
 test[i][4] = "<code>8</code>.";
 
//________________________ В результате выполнения программы... _____________________ 
 
i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;При выполнении следующего фрагмента программы:" +  '  <pre>' +
' n:=5;' + '<br>' +
' s:=0;' + '<br>' +
' i:=0;' + '<br>' +
' repeat' + '<br>' +
'     i:=i+1;' + '<br>' +
'     s:=s+round(sqrt(i));' + '<br>' +
' until (i>n) and (s>=n);' + '</pre><p>' +

'количество итераций цикла <code>repeat</code> равно…';

 test[i][1] = "<code>6</code>.";
 test[i][2] = "<code>7</code>.";
 test[i][3] = "<code>8</code>.";
 test[i][4] = "<code>9</code>.";

 //________________________ В результате выполнения программы... _____________________  
i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;В результате выполнения следующей программы будет выведено…" +  '  <pre>' +
' var a: array[1..4,1..4] of byte;' + '<br>' +
'    i,j,s:byte;' + '<br>' +
' begin' + '<br>' +
'    for i:=1 to 4 do' + '<br>' +
'      for j:=1 to 4 do' + '<br>' +
'        a[i,j]:=i+2*j;' + '<br>' +
'    for i:=1 to 4 do' + '<br>' +
'      a[3,i]:=a[i,2];' + '<br>' +
'    s:=0;' + '<br>' +
'    for i:=1 to 4 do' + '<br>' +
'      s:=s+a[3,i];' + '<br>' +
'    write(s);' + '<br>' +
' end.' + '</pre>';

 test[i][1] = "<code>25</code>.";
 test[i][2] = "<code>5</code>.";
 test[i][3] = "<code>20</code>.";
 test[i][4] = "<code>15</code>.";

  //________________________ В результате выполнения программы... _____________________  
 i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Целочисленная переменная n инициализированна числом 237. После выполнения фрагмента программы "
+'<pre>'+'case n div 17 of' +'<br>'+
'  1..3, '+'<br>'+
'  16:a:=2;'+'<br>'+
'  7..10:a:=2*a;'+'<br>'+
'  13..15,'+'<br>'+
'  4:a:=4' +'<br>'+
'  else a:=3' +'<br>'+
'end;' +'</pre>'+'<p>'+
'значение переменной а будет равно...';
 
 test[i][1] = "<code>4</code>";
 test[i][2] = "<code>3</code>";
 test[i][3] = "<code>20</code>";
 test[i][4] = "<code>2</code>";

   //________________________ В результате выполнения программы... _____________________  
 i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = " &#10003;Описана функция: "
+'<pre>'+'function f(s:string;i,j:byte):boolean;' +'<br>'+
'  var t:byte; '+'<br>'+
'  begin'+'<br>'+
'  while i&lt;j do'+'<br>'+
'   if s[i]&gt;\' \' then {Между апострофами один пробел}'+'<br>'+
'    if s[j]&gt;\' \' then {Между апострофами один пробел}' +'<br>'+
'     if s[i]=s[j] then begin inc(i); dec(j) end' +'<br>'+
'    else begin t:=i; i:=j; j:=t end'+'<br>'+
'   else dec(j)'+'<br>'+
'  else inc(i);'+'<br>'+
'  f:=s[i]=s[j]'+'<br>'+
'end; '+'</pre><p>'+ 
'В результе выполнения программы'+
'<pre>'+
'const s: string=\'kit na more romantik\'; ' +'<br>'+
'begin if f(s,1,length(s)) then writeln(\'Yes\') else writeln(\'No\'); ' +'<br>'+
'end.' + '</pre>'+'<p>'+
'будет выведено...';

 test[i][1] = "<code>Yes</code>";
 test[i][2] = "<code>No</code>";
 test[i][3] = "<code>kit</code>";
 test[i][4] = "<code>more</code>";

 //________________________ В результате выполнения программы... _____________________  
 
 i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = 
 '&#10003;Даны описания: <br> ' +
 '  <pre>' +
 '    const n=15;' + '<br>' +
 '    type t_arr=array[1..n] of integer;' + '<br>' +
 '    const a: t_arr=(1,2,7,14,14,14,16,17,17,101,103,103,113,125,170);' + '<br>' +
 '    var i:byte;' + '<br>' +
 '    function f1(a: t_arr; x: integer; var i: byte): boolean;' + '<br>' +
 '      begin i:=1;' + '<br>' +
 '        while(i&lt=n) and (a[i]&lt=x) do inc(i);' + '<br>' +
 '        if i &gt; 1 then dec(i);' + '<br>' +
 '          f1:=(a[i]=x);' + '<br>' +
 '      end;' + '<br>' +
 '    function f2(a: t_arr; x: integer; var i: byte): boolean;' + '<br>' +
 '      begin i:=n;' + '<br>' +
 '       while(i&gt;0) and (a[i]&gt;=x) do dec(i);' + '<br>' +
 '       if i &lt; n then inc(i);' + '<br>' +
 '       f2:=a[i]=x;' + '<br>' +
 '      end;' + '<br>' +
 '    function f3(a: t_arr; x: integer; var i: byte): boolean;' + '<br>' +
 '      begin i:=n;' + '<br>' +
 '       while(i&gt0) and (a[i]<>x) do dec(i);' + '<br>' +
 '       f3:=i&gt0;' + '<br>' +
 '      end;' + '</pre>' + '<p>' +

 ' В результате выполнения функции <code>f3(a, 15, i)</code> значение <code>i</code> будет равно…';

 test[i][1] = "<code>0</code>.";
 test[i][2] = "<code>1</code>.";
 test[i][3] = "<code>2</code>.";
 test[i][4] = "<code>3</code>.";
 
 //________________________ В результате выполнения программы... _____________________  
 
 i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;В результате выполнения следующей программы при условии, что <code>sizeof(word)=2</code>, будет выведено ..."
 + '  <pre>' +
 '    const n=116;' + '<br>' +
 '    type t_arr=array[1..1000] of real;' + '<br>' +
 '    var i, r, a: word; fw: file of word; fr: file; b: t_arr;' + '<br>' +
 '    begin' + '<br>' +
 "      assign(fw,'f'); rewrite(fw);" + '<br>' +
 '      for i:=1 to n do' + '<br>' +
 '        begin' + '<br>' +
 '          a:=i; write(fw,a);' + '<br>' +
 '        end;' + '<br>' +
 '      close(fw);' + '<br>' +
 "      assign(fr,'f'); reset(fr, 10*sizeof(real));" + '<br>' +
 '      blockread(fr, b, 10, r);' + '<br>' +
 '      close(fr);' + '<br>' +
 '      write(r);' + '<br>' +
 '    end;' + '</pre>' + '<p>' +

' ответ равен: (введите ответ в поле)';

 test[i][1] = "<code>2</code>";
 test[i][2] = "<code>3</code>";
 test[i][3] = "<code>0</code>";
 test[i][4] = "<code>1</code>";
 
  //________________________ Коды символов _______________________  
 i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'checkbox';
 test[i][0] = "&#10003;Имеется описание: " +
 "<pre>Type t_season=(winter, spring, summer, autumn); <br>"+
 "   var s1, s2 : t_season;<br>   f:boolean;<br>   i:integer;</pre> <p>Операторами без ошибок будут  (укажите два варианта ответа):"
 
 test[i][1] = "<code>i:=ord(succ(winter)>=pred(summer));</code>";
 test[i][2] = "<code>f:=t_season(ord(winter)+ord(summer))=pred(summer);</code>";
 test[i][3] = "<code>i:=ord('winter')+ord('summer');</code>";
 test[i][4] = "<code>f:=ord(succ('winter')=pred('summer'));</code>";
 
 
  //________________________ Коды символов _______________________  
  i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003; Латинская буква <code>'А'</code> в таблице <code>ASCII</code> меет код <code>65</code>. Значение выражения <code>chr(pred(3)+66)</code> равно значению выражения... ";

 test[i][1] = "<code>chr(ord('d')+ord('V')-ord('v'))</code>"; 
 test[i][2] = "<code>chr(#65+3)</code>";
 test[i][3] = "<code>succ('c')</code>";
 test[i][4] = "<code>pred('e')</code>";


i++;

  //________________________ Коды символов _______________________  

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003; Выражение имеет смысл и является истинным ";
 test[i][1] = "<code>'1'>#3</code>"; 
 test[i][2] = "<code>'0'=chr(0)</code>";
 test[i][3] = "<code>ord(8)>ord('9')</code>";
 test[i][4] = "<code>#7='7'</code>"; 
 
 
   //________________________ Массивы _______________________ 
   
 i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003; Из следующих описаний:"
 + '  <pre>' +
 '    const MAX=20;' + '<br>' +
 '    type W1=array[-10..10, 100..200] of (0,1,2,3,4,5);' + '<br>' +
 '         W2=array[(x,y,z), 1..MAX-10] of real;' + '<br>' +
 '         W3=array[1..10][1..5] of byte;' + '<br>' +
 '         W4=array[byte, boolean] of char;' + '<br>' +
"         W5=array['a'..'z'] of array['A'..'Z'] of shortint;" + '<br>' +
'</pre>' + '<p>' +

' неправильно описаны типы ...'+ '<p>' +
 '(Имена неправильно описанных типов перечислить по порядку'+ '<br>' +
 'следования без запятых и пробелов, например, <code>W2W3W5.</code>) <p> "Введите ответ"';
 test[i][1] = "<code>W1W3</code>"; 
 test[i][2] = "<code>W2W3</code>";
 test[i][3] = "<code>W1W2W4</code>";
 test[i][4] = "<code>W1W5</code>";
 test[i][5] = "<code>W2W3W4</code>";
 test[i][6] = "<code>W1W3W5</code>";
   
   //________________________ Множеста _______________________  
 
 i++;  
 
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] =
 '&#10003; Имеется описание: <br> ' +
 '  <pre>' +
 '    var a: set of \'a\'..\'z\'; ' + '<br>' +
 '        b: set of -10..10;' + '<br>'+
 '        c: set of 0..300;' + '<br>' +
 '        d: set of boolean; </pre>' + '<p>' +

' Правильно описаны переменные …';
 test[i][1] = "<code>a, d</code>";
 test[i][2] = "<code>a, b, c, d</code>";
 test[i][3] = "<code>a, c</code>";
 test[i][4] = "<code>c, d</code>";
 
   //________________________ Множеста _______________________  
 i++;
 
 test[i] = new Array(); podskaska[i]='Паскалю не нравится <code>s3:=s1;</code> <code>s6:=s3;</code> <code> s1:=s3;</code>'; testType[i] = 'radio';
 test[i][0] = "&#10003;Имеется описание:"
 + '  <pre>' +
 '    var s1: set of 1..9;' + '<br>' +
 '        s2: set of char;' + '<br>' +
 '        s3: set of \'0\'..\'9\';' + '<br>' +
 '        s4: set of (Sun, Mon, Tue, Web, Thu, Fri, Sat);' + '<br>' +
 '        s5: set of Mon..Fri;' + '<br>' +
 '        s6: set of 0..99;' + '</pre><p>' +
 ' Допустимым фрагментом программы является ...';
 
 test[i][1] = "<code>s1:=s6; s2:=s3; s5:=s4;</code>";
 test[i][2] = "<code>s6:=s1; s2:=s3; s6:=s3;</code>";
 test[i][3] = "<code>s6:=s1; s1:=s3; s4:=s5;</code>";
 test[i][4] = "<code>s3:=s2; s2:=s3; s3:=s1;</code>"; 
 
    //________________________ Множеста _______________________  
 i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "???Имеется описание:"
 + '  <pre>' +
 '    var s1: set of 1..32;' + '<br>' +
 '        s2: set of \'a\'..\'e\';' + '<br>' +
 '        s3: set of 200..204;' + '<br>' +
 '        s4: 0..31;' + '<br>' +
 '        s5: set of (Sun, Mon, Tue, Web, Thu);' + '</pre>' + '<p>' +

 ' Количество переменных (из перечисленных), которые могут принимать не более 32 различных значений, равно ...';
 
 test[i][1] = "5";
 test[i][2] = "2";
 test[i][3] = "4";
 test[i][4] = "1";
 
    //________________________ Указатели _______________________   
 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Описан фрагмент программы:"
 + '  <pre>' +
 '    type t_arr1=array[1..2] of real;' + '<br>' +
 '         t_arr2=array[1..2] of ^real;' + '<br>' +
 '    var a: t_arr1;' + '<br>' +
 '        pa: ^t_arr1;' + '<br>' +
 '        b: t_arr2;' + '<br>' +
 '        pb: ^t_arr2;' + '<br>' +
 '    begin' + '<br>' +
 '      a[1]:=3; a[2]:=7;' + '<br>' +
 '      pa:=@a; pb:=@b;' + '</pre>' + '<p>' +

' Из перечисленных операторов недопустимым далее в программе будет...';
 
 test[i][1] = "pa:=pb";
 test[i][2] = "pa^[1]:=b[2]^";
 test[i][3] = "b[1]^:=a[2]";
 test[i][4] = "pb^[1]:=@a[1]"; 
 
 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = '? Решите схему<p><img src = "images/блок-схема 1.jpg"> </img>';
 test[i][1] = "?";
 test[i][2] = "?";
 test[i][3] = "?";
 test[i][4] = "?";
 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = '? Решите схему<p><img src = "images/блок-схема 2.jpg"> </img>';
 test[i][1] = "?";
 test[i][2] = "?";
 test[i][3] = "?";
 test[i][4] = "?";
 
 i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = '? Решите схему<p><img src = "images/блок-схема 3.jpg"> </img>';
 test[i][1] = "?";
 test[i][2] = "?";
 test[i][3] = "?";
 test[i][4] = "?";
 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = '? Решите схему<p><img src = "images/блок-схема 4.jpg"> </img>';
 test[i][1] = "?";
 test[i][2] = "?";
 test[i][3] = "?";
 test[i][4] = "?";
 
 i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = '? Решите схему<p><img src = "images/блок-схема 5.jpg"> </img>';
 test[i][1] = "?";
 test[i][2] = "?";
 test[i][3] = "?";
 test[i][4] = "?";
 
i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'checkbox';
 test[i][0] = "???Переменные <code>a</code> и <code>b</code> имеют логический тип. " +
 "Выражения, эквивалентные выражению <code>(a < b) = a</code>, но не содержащие знаков операций отношения,на языке Паскаль могут быть записаны как (укажите два варианта ответа):"
 test[i][1] = "<code>not (a and b)</code>";
 test[i][2] = "<code>not a or not b</code>";
 test[i][3] = "<code>not (a or b)</code>";
 test[i][4] = "<code>not a and not b</code>";


i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "&#10003;Из следующих описаний заголовков подпрограмм:"
 + '  <pre>' +
 '    procedure p1(var a:array of integer);' + '<br>' +
 '    procedure p2(var a:array[1..10] of integer);' + '<br>' +
 '    function f1(a, b: real; var c:real);' + '<br>' +
 '    function f2:string;' + '<br>' + '</pre>' + '<p>' +

' правильными являются:';

 test[i][1] = "p1, f2";
 test[i][2] = "p2, f2";
 test[i][3] = "p2, f1";
 test[i][4] = "p1, f1";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "???Ложным является утверждение:";
 test[i][1] = "Вызов функции не является оператором";
 test[i][2] = "Вызов функции является оператором";
 test[i][3] = "Функция не может изменить значения своих параметров";
 test[i][4] = "Решение задачи, которую реализует функция, всегда можено описать процедурой ";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "???Имеется описание:"
 + '  <pre>' +
 '    type t_pi=^integer;' + '<br>' +
 '    var p1, p2: ^integer;' + '<br>' +
 '       q1, q2: t_pi;' + '<br>' +
 '       t: boolean;' + '<br>' +
 '       n: integer;' + '</pre><p>' +

 ' Недопустимым далее в программе будет использование выражения';
 
 test[i][1] = "<code>q1 - q2</code>";
 test[i][2] = "<code>q1 = p2</code>";
 test[i][3] = "<code>q1 > q2</code>";
 test[i][4] = "<code>p1 = nil</code>";

 
i++;
 
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "???Имеется описание: type t_arr=array[1..10] of real; Заголовок процедуры, которая инициализирует массив а и не использует глобальные переменные, может являться...";
 test[i][1] = "procedure read_array(var a:t_arr).";
 test[i][2] = "procedure read_array(var a:array[1..10] of real)";
 test[i][3] = "procedure read_array(var a:t_arr)";
 test[i][4] = "procedure read_array(a:t_arr)";

i++;


 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = 
 '???Имеется описание: <br> ' +
 '  <pre>' +
 '    type t_arr=array[1..10] of real;' + '<br>' +
 '        read(b); a:=b;' + '<br>' +
 '        Var a: t_arr;' + '<br>' +
 '    b,c:array[1..10] of real;' + '<br>' +
 '       d:=t_arr;' + '<br>' +
 '          e:array[1..10] of real; +</pre>' + '<p>' +

' Не содержит ошибки фрагмент программы...';

 test[i][1] = "b:=e,c:=b ";
 test[i][2] = "a:=b,b:=c";
 test[i][3] = "d:=e,a:=d";
 test[i][4] = "d:=a,b:=c";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "???Целочисленная переменная n инициализированна числом 237.Правльно описан оператор-переключатель...";
 
 test[i][1] = "case n mod 7 of 1..3,5;a:=1;b:=3; 6:a:=2 else a:=3 end;";
 test[i][2] = "case n mod 7 of 1..3,5;a:=1; 6:a:=2 else a:=3 ;";
 test[i][3] = "case n mod 7 of 1..3,5;a:=1;  else a:=3; 6:a:=2; end;";
 test[i][4] = "case n mod 7 of 1..3,5;a:=1; 6:a:=2 else a:=3 end";



 
i++; 
 
 

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "???Имеется описание:"
 + '  <pre>' +
 '    var s1: set of \'a\'..\'z\';' + '<br>' +
 '        s2,s3: set of char;' + '<br>' +
 '        s4: set of \'0\'..\'9\';' + '<br>' +
 '        s5: set of \'A\'..\'Z\';' + '<br>' +

 ' После выполнения фрагмента программы' + '<br>' +
 
 '        s1:=[\'a\'..\'d\',\'0\'];' + '<br>' +
 "        s2:=['0','6','0'];" + '<br>' +
 "        s4:=set of '0'..'9';" + '<br>' +
 "        s5:=set of 'A'..'Z';</pre>" + '<br>';
 
 test[i][1] = "s6:=s1; s2:=s3; s6:=s3";
 test[i][2] = "s6:=s1; s1:=s3; s4:=s5";
 test[i][3] = "s1:=s6; s2:=s3; s5:=s4";
 test[i][4] = "s3:=s2; s2:=s3; s3:=s1";
 

 i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "???Определению <code>{<буква>}(<цифра>|<разделитель>)</code> не удовлетворяет конструкция... "
 test[i][1] = "<code>ABCD2,</code>";
 test[i][2] = "<code>3</code>";
 test[i][3] = "<code>AbS\}</code>";
 test[i][4] = "<code>A3</code>";

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "???Целочисленный массив из 5 элементов инициализирован последовательностью 3, 1, 4, 5, 2. При сортировке этого массива по возрастанию пузырьком количество обменов значениями его элементов равно..."
 test[i][1] = "5";
 test[i][2] = "6";
 test[i][3] = "3";
 test[i][4] = "4";
 

i++;

 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio';
 test[i][0] = "???Количество синтаксических ошибок в операторе <code>if (a>b and b>c) then max:=a; else a:=b; </code> равно ";
 test[i][1] = "2";
 test[i][2] = "1";
 test[i][3] = "3";
 test[i][4] = "4";



i++;
 test[i] = new Array(); podskaska[i]=''; testType[i] = 'radio'; 
 test[i][0] = "???Разрабатывается алгоритм для определения, пройдет ли кирпич с рёбрами x,y,z в прямоугольное окно со сторонами a,b. Причём рёбра кирпича должны быть параллельны или перпендикулярны сторонам окна. Колличество подзадач (из перечисленных ниже), которые должны быть выделенны на первом этапе решения этой задачи, равно...";
 
 test[i][1] = "ответ1";
 test[i][2] = "ответ2";
 test[i][3] = "ответ3";
 test[i][4] = "ответ4";
 test[i][5] = "ответ5";
 
 i++;

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
