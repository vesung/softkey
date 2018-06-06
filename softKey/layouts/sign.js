(function(){

VirtualKeyboard.addLayout({
    code: 'FH-sign',
    name: 'sign',
    normal: 'qwertyuiopasdfghjklzxcvbnm123456789.000',
    shift: {
        0: '~!@#$%^&*()_+|',
        24: '{}',
        35: ':"',
        44: '<>?'
    },
    buildLayout: function(){
         var key1 = '`~!@#$%^&*',
            key2 = '()[]{}<>?',
            key3 = '|-_=+;:,',
			key4 = '《》\\/\'\"。',
            nums = '123456789',
            keysHtml=['<div class="leftkey ">'];

            // leftkey
			for( var i=0;i<key1.length ;i++){//key1
				var key = key1.split("");
				keysHtml.push(util.newKey(key[i], 'key1_'+i)); 
			}
			for( var i=0;i<key2.length ;i++){//key2
				var key = key2.split("");
				keysHtml.push(util.newKey(key[i], 'key2_'+i)); 
			}
			for( var i=0;i<key3.length ;i++){//key3
				var key = key3.split("");
				keysHtml.push(util.newKey(key[i], 'key3_'+i)); 
			}
			keysHtml.push(util.newKey('删除', 'backspace', 'ctrBtn'));
            keysHtml.push(util.newKey('返回', 'back', 'ctrBtn'));
			for( var i=0;i<key4.length ;i++){//key4
				var key = key4.split("");
				keysHtml.push(util.newKey(key[i], 'key4_'+i)); 
			}
            keysHtml.push(util.newKey('完成', 'close', 'ctrBtn'));
            keysHtml.push('</div>');

            // rightkey
            keysHtml.push('<div class="rightkey">');
            keysHtml.push(util.newKeys(nums));
            keysHtml.push(util.newKey('.', 'dot'));
            keysHtml.push(util.newKey('0'));
            keysHtml.push(util.newKey('00'));
            keysHtml.push('</div>');

            return keysHtml.join("\n");
    },
    charProcessor: function(I, l){
        switch(I){ 
            case"00": return ['00', 0]; break;
            case"dot": return '.';break;
			
			case"key1_0": return '`';break;
			case"key1_1": return '~';break;
			case"key1_2": return '!';break;
			case"key1_3": return '@';break;
			case"key1_4": return '#';break;
			case"key1_5": return '$';break;
			case"key1_6": return '%';break;
			case"key1_7": return '^';break;
			case"key1_8": return '&';break;
			case"key1_9": return '*';break;
			
			case"key2_0": return '(';break;
			case"key2_1": return ')';break;
			case"key2_2": return '[';break;
			case"key2_3": return ']';break;
			case"key2_4": return '{';break;
			case"key2_5": return '}';break;
			case"key2_6": return '<';break;
			case"key2_7": return '>';break;
			case"key2_8": return '?';break;
			
			case"key3_0": return '|';break;
			case"key3_1": return '-';break;
			case"key3_2": return '_';break;
			case"key3_3": return '=';break;
			case"key3_4": return '+';break;
			case"key3_5": return ';';break;
			case"key3_6": return ':';break;
			case"key3_7": return ',';break;

            case"key4_0": return '《';break;  
			case"key4_1": return '》';break;
			case"key4_2": return '\\';break;
			case"key4_3": return '/';break;
			case"key4_4": return '\'';break;
			case"key4_5": return '"';break;
			case"key4_6": return '。';break;
			
            default : return I;
        }
    }
});

})();

