window.onload = function() {
	var gelt = 120;
	var nari = 140;
	var echo = 1.04;

    function calculaFullBuff(){
    	var luk = $("input[name='luk']").val();
    	var wAtt = $("input[name='weaponAtt']").val();
    	var wAttGelt = parseInt(wAtt) + gelt;

    	var result = Math.round((luk*5*wAttGelt/100)*3.9*echo);
    	$("input[name='fullBuffedGelt']").val(result);

    	var wAttNari = parseInt(wAtt) + nari;

    	result = Math.round((luk*5*wAttNari/100)*3.9*echo);
    	$("input[name='fullBuffedNari']").val(result);
    }

    $("input[name='luk']").keyup(calculaFullBuff);
    $("input[name='weaponAtt']").keyup(calculaFullBuff);
}