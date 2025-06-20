System.register("chunks:///_virtual/main",["./TestItem.ts","./TestScene.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/TestItem.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var c;n._RF.push({},"88fb74YsYdL84rQx9zJLA85","TestItem",void 0);var i=o.ccclass;o.property,t("TestItem",i("TestItem")(c=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).label=void 0,e}e(n,t);var o=n.prototype;return o.onLoad=function(){this.label=this.node.getChildByName("Label")},o.start=function(){},o.update=function(t){},o.toggle=function(){this.label.active=!this.label.active},n}(r))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/TestScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,c,o;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,c=t._decorator,o=t.Component}],execute:function(){var r;n._RF.push({},"2915fnObtVOJJzuiktYjSI5","TestScene",void 0);var i=c.ccclass;c.property,t("TestScene",i("TestScene")(r=function(t){function n(){for(var e,n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))||this).bg=void 0,e}e(n,t);var c=n.prototype;return c.start=function(){this.bg=this.node.getChildByName("bg")},c.update=function(t){},c.toggle=function(){this.bg.active=!this.bg.active},n}(o))||r);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});