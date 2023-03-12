$(document).ready(function() {
	    $("#tabscontent div").hide(); // Скрываем содержание
	    $("#tabs li:first").attr("id","current"); // Активируем первую закладку
	    $("#tabscontent div:first").fadeIn(); // Выводим содержание
	    $('#tabs a').click(function(e) {
	        e.preventDefault();
	        $("#tabscontent div").hide(); //Скрыть все сожержание
	        $("#tabs li").attr("id",""); //Сброс ID
	        $(this).parent().attr("id","current"); // Активируем закладку
	        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
	    });
})();