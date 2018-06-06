(function(){

VirtualKeyboard.addLayout({
    code: 'NUM-nums',
    name: 'nums',
    normal: 'qwertyuiopasdfghjklzxcvbnm123456789.000',
    shift: {
        0: '~!@#$%^&*()_+|',
        24: '{}',
        35: ':"',
        44: '<>?'
    },
    buildLayout: function(){
        var nums = '123456789',
            keysHtml=['<div class="leftkey ">'];

            keysHtml.push(util.newKeys(nums));
            keysHtml.push(util.newKey('.', 'dot'));
            keysHtml.push(util.newKey('0'));
            keysHtml.push(util.newKey('00'));
            keysHtml.push('</div>');

            keysHtml.push('<div class="rightkey">');
            keysHtml.push(util.newKey("删除", "backspace", "ctrBtn"));
            keysHtml.push(util.newKey("完成", "close", "ctrBtn"));
            keysHtml.push('</div>');

            return keysHtml.join("\n").replace(/(<\w+)/g, "$1 unselectable='on' ");
    },
    charProcessor: function(I, l){
        switch(I){
            case"00": return ['00', 0]; break;
            case"dot": return '.';break;
            default : return I;
        }
    }
});


})();

