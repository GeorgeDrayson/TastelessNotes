describe('Notebook', function() {

  describe('.add', function() {

    it('Stores a note', function() {
      notebook = new Notebook();
      notebook.add('wowzers');
      expect(notebook.all()).toContain('wowzers')
    });

  });

  describe('.addToList', function() {

    it('Creates an HTML element', function() {
      function FakeNote() {

      }

      FakeNote.prototype.abbrBody = function() {
        return 'wowzers'
      }
      notebook = new Notebook();
      notebook.add(new FakeNote());
      notebook.addToList();
      return expect('notes_list').toContainHtmlContent('wowzers');
    });

  });

  describe('.addNote', function() {

    it('Creates an HTML element', function() {
      function FakeNote() {

      }

      FakeNote.prototype.abbrBody = function() {
        return 'wowowow'
      }
      notebook = new Notebook();
      notebook.addNote(new FakeNote());
      return expect('notes_list').toContainHtmlContent('wowowow');
    });

  });

});
