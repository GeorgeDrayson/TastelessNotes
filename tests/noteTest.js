describe('Note', function() {

  describe('.getBody', function() {

    it('returns the body', function() {
      note = new Note('Get some shopping')
      return expect(note.getBody()).toEqual('Get some shopping')
    });

  });

  describe('.abbrBody', function() {

    it('abbreviates the body to 20 characters', function() {
      note = new Note('Shopping: milk, tea, ketchup, burger patty, burger bun')
      return expect(note.abbrBody(20)).toEqual('Shopping: milk, tea,...')
    });

  });

});
