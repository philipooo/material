ddescribe('$mdHotkey service', function() {
  var $mdHotkey;

  describe('os-x', function() {
    beforeEach(module(function($provide) {
      $provide.value('$window', { navigator: { userAgent: 'Mac OS X' } });
    }));
    beforeEach(module('material.core'));
    beforeEach(inject(function(_$mdHotkey_) {
      $mdHotkey = _$mdHotkey_;
    }));
    describe('shortcutToText', function() {
      it('works converts meta to cmd', function() {
        expect($mdHotkey.shortcutToText('M-B')).toBe('⌘B');
      });
    });
  });
});
