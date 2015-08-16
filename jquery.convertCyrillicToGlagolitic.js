﻿(function ( $ ) {
    $.extend({
		convertCyrillicToGlagolitic: function(inputString) {
			var characters = [
				["\u2c00", "Ⰰ", "А"],
				["\u2c01", "Ⰱ", "Б"],
				["\u2c02", "Ⰲ", "В"],
				["\u2c03", "Ⰳ", "Г"],
				["\u2c04", "Ⰴ", "Д"],
				["\u2c05", "Ⰵ", "Е"],
				["\u2c06", "Ⰶ", "Ж"],
				["\u2c07", "Ⰷ", "ДЗ"],
				["\u2c08", "Ⰸ", "З"],
				["\u2c09", "Ⰹ", "И"],
				["\u2c0a", "Ⰺ", "Й"],
				["\u2c0b", "Ⰻ", "ИЙ"],
				["\u2c0c", "Ⰼ", "ГЬ"],
				["\u2c0d", "Ⰽ", "К"],
				["\u2c0e", "Ⰾ", "Л"],
				["\u2c0f", "Ⰿ", "М"],
				["\u2c10", "Ⱀ", "Н"],
				["\u2c11", "Ⱁ", "О"],
				["\u2c12", "Ⱂ", "П"],
				["\u2c13", "Ⱃ", "Р"],
				["\u2c14", "Ⱄ", "С"],
				["\u2c15", "Ⱅ", "Т"],
				["\u2c16", "Ⱆ", "У"],
				["\u2c17", "Ⱇ", "Ф"],
				["\u2c18", "Ⱈ", "Х"],
				["\u2c19", "Ⱉ", "О"],
				["\u2c1b", "Ⱋ", "Щ"],
				["\u2c1c", "Ⱌ", "Ц"],
				["\u2c1d", "Ⱍ", "Ч"],
				["\u2c1e", "Ⱎ", "Ш"],
				["\u2c1f", "Ⱏ", "Ъ"],
				["\u2c20", "Ⱐ", "ь"],
				["\u2c21", "Ⱑ", "Я"],
				["\u2c23", "Ⱓ", "Ю"],
				["\u2c26", "Ⱖ", "ЙО"],
				["\u2c27", "Ⱗ", "ЙЕ"],
				["\u2c28", "Ⱘ", "О"],
				["\u2c29", "Ⱙ", "ЙО"],
				["\u2c2a", "Ⱚ", "Ф"],
				["\u2c30", "ⰰ", "а"],
				["\u2c31", "ⰱ", "б"],
				["\u2c32", "ⰲ", "в"],
				["\u2c33", "ⰳ", "г"],
				["\u2c34", "ⰴ", "д"],
				["\u2c35", "ⰵ", "е"],
				["\u2c36", "ⰶ", "ж"],
				["\u2c37", "ⰷ", "дз"],
				["\u2c38", "ⰸ", "з"],
				["\u2c39", "ⰹ", "и"],
				["\u2c3a", "ⰺ", "й"],
				["\u2c3b", "ⰻ", "ий"],
				["\u2c3c", "ⰼ", "гь"],
				["\u2c3d", "ⰽ", "к"],
				["\u2c3e", "ⰾ", "л"],
				["\u2c3f", "ⰿ", "м"],
				["\u2c40", "ⱀ", "н"],
				["\u2c41", "ⱁ", "о"],
				["\u2c42", "ⱂ", "п"],
				["\u2c43", "ⱃ", "р"],
				["\u2c44", "ⱄ", "с"],
				["\u2c45", "ⱅ", "т"],
				["\u2c46", "ⱆ", "у"],
				["\u2c47", "ⱇ", "ф"],
				["\u2c48", "ⱈ", "х"],
				["\u2c49", "ⱉ", "о"],
				["\u2c4b", "ⱋ", "щ"],
				["\u2c4c", "ⱌ", "ц"],
				["\u2c4d", "ⱍ", "ч"],
				["\u2c4e", "ⱎ", "ш"],
				["\u2c4f", "ⱏ", "ъ"],
				["\u2c50", "ⱐ", "ь"],
				["\u2c51", "ⱑ", "я"],
				["\u2c53", "ⱓ", "ю"],
				["\u2c56", "ⱖ", "йо"],
				["\u2c57", "ⱗ", "йе"],
				["\u2c58", "ⱘ", "о"],
				["\u2c59", "ⱙ", "йо"],
				["\u2c5a", "ⱚ", "ф"]
			];
				
			return inputString.replace(/[\u0410-\u044F]/g, function(symbol) {
			    for( var i = 0 ; i < characters.length ; i++ ) {
				    if (characters[i][2] === symbol) {
						return characters[i][0];
					}
				}
				
			    return symbol;
			});
		}
	});
}( jQuery ));
