describe('Notebook', function() {

  describe('.add', function() {

    it('Stores a note', function() {
      notebook = new Notebook();
      notebook.add('wowzers');
      expect(notebook.all()).toContain('wowzers')
    });

  });

});
