var util = window.util || (function(){

var that = {};

that.newKeys = function(keyarray) {
    var keysHtml = [];
    for(var i=0; i<keyarray.length; i++){
        keysHtml.push(that.newKey(keyarray.charAt(i)));
    }
    return keysHtml.join('\n');
}

that.newKey = function(keyName, keyId, className) {
    var keysHtml = [];
    var keyId = keyId || keyName;
    var className = className || '';
    keysHtml.push('<div unselectable="on" id="kb_b'+keyId+'" class="kbButton '+className+'">');
    // keysHtml.push('<div unselectable="on" id="kb_b0" class="kbButton ">');
    keysHtml.push('<a unselectable="on" href="#">');
    if(/<(“[^”]*”|’[^’]*’|[^’”>])*>/.test(keyName)){// html代码
        keysHtml.push(keyName);
    }else{
        keysHtml.push('<span unselectable="on" class="charNormal">'+keyName+'</span>');
    }
    keysHtml.push('</a>');
    keysHtml.push('</div>');

    return keysHtml.join('\n');
}


return that;
})();
window.util = util;
