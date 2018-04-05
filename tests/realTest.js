describe('Front End (Main Page)', function() {
  describe('Page elements', function() {
    it('Has a title called "Tasteless Notes"', function() {
      return expect('header').toContainHtmlContent('Tasteless Notes')
    })

    it('Has a form input element', function() {
      return expect('note_input').toBeHtmlElement();
    });

    it('Has a submit button element', function() {
      return expect('create_note').toBeHtmlElement();
    });

    it('Has a notes list element', function() {
      return expect('notes_list').toBeHtmlElement();
    });

  });

  describe('Page interactivity', function() {
    it('should be able to fill in and create a new form', function() {
      helpers.fillInForm('note_input', 'My First Note');
      helpers.clickObject('create_note');
      return expect('notes_list').toContainHtmlContent('My First Note');
    });
  });

});
