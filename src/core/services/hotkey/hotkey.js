angular.module('material.core')
  .factory('$mdHotkey', MdHotkey);

function MdHotkey($window) {
  console.log($window.navigator.userAgent);
  var isMac = /Mac OS X/.test($window.navigator.userAgent);
  return {
    shortcutToText: shortcutToText
  };

  function shortcutToText(shortcut) {
    var keys = shortcut.split('-');
    var result = [];
    var sep = keys.length > 2 ? '+' : '';
    result = keys.map(function(key, index) {
      var last = (index == keys.length - 1);
      if (last) return key;

      switch (key) {
        case 'M': return isMac ? '⌘' : 'ctrl';
      }
    });

    return result.join(sep);
  }
}
