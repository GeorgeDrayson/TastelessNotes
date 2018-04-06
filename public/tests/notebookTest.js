describe('Notebook', function() {

  describe('.add', function() {

    it('Stores a note', function() {
      testNotebook = new Notebook();
      testNotebook.add('wowzers');
      expect(testNotebook.all()).toContain('wowzers')
    });

    it('Deletes a note', function() {
      testNotebook.delete(testNotebook._notes, 'wowzers');
      expect(testNotebook.all()).toNotContain('wowzers')
    });

  });

});
