VirtualKeyboard.addLayoutList({
    code: 'ZH-CN',
    name: 'CN',
    normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,。/',
    requires: ['../extensions/util.js', 'd/CN.js', 'chinese-pynsimpl.js']
}, {
    code: 'EN-US',
    name: 'US',
    normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./',
    requires: ['../extensions/util.js', 'us.js']
}, {
    code: 'NUM-nums',
    name: 'nums',
    normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./',
    requires: ['../extensions/util.js', 'nums.js']
},{
    code: 'FH-sign',
    name: 'sign',
    normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./',
    requires: ['../extensions/util.js', 'sign.js']
});

VirtualKeyboard.triggerReady();