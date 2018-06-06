(function(){


VirtualKeyboard.addLayout({
    code: 'ZH-CN',
    name: 'CN',
    normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,。/',
    shift: {
        0: '~！·#￥%…—*（）—+|',
        24: '{}',
        35: '："',
        44: '《》？'
    },
    buildLayout: function(){
        var key1 = 'qwertyuiop',
            key2 = 'asdfghjkl',
            key3 = 'zxcvbnm',
            nums = '123456789',
            keysHtml=['<div class="leftkey ">'];

            keysHtml.push(util.newKeys(key1));
            keysHtml.push(util.newKeys(key2));
            keysHtml.push(util.newKey('大写', 'swich_upperCase', 'ctrBtn'));
            keysHtml.push(util.newKeys(key3));
            keysHtml.push(util.newKey('删除', 'backspace', 'ctrBtn'));
            keysHtml.push(util.newKey('符号', 'swich_sign', 'ctrBtn'));
            keysHtml.push(util.newKey('<div class="ab"><span class="akey">中</span><span class="bkey">/英</span></div>', 'swich_EN-US', 'ctrBtn'));
            keysHtml.push(util.newKey('空格', 'space', 'ctrBtn'));
            keysHtml.push(util.newKey('完成', 'close', 'ctrBtn'));
            // leftkey end
            keysHtml.push('</div>');

            keysHtml.push('<div class="rightkey">');
            keysHtml.push(util.newKeys(nums));
            keysHtml.push(util.newKey('.', 'dot'));
            keysHtml.push(util.newKey('0'));
            keysHtml.push(util.newKey('00'));
            keysHtml.push('</div>');

            return keysHtml.join("\n");
    },
    'cbk': new function() {
        var i = this;
        i.activate = function() {
            VirtualKeyboard.Langs.CN.INPArr = VirtualKeyboard.Langs.CN.inparr;
        };
        i.charProcessor = VirtualKeyboard.Langs.CN.processChar
    }
});


})();