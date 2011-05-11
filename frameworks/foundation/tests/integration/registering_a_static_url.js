describe('Scenario: Registering a static URL', function() {
  describe('Given that I have setup Fictum', function() {
    beforeEach(function() {
      Fictum.setup();
    });

    afterEach(function() {
      Fictum.teardown();
    });

    describe('And a URL that I want to stub', function() {
      var url;
      beforeEach(function() {
        url = 'someplace.com';
      });

      describe('And a text response that I want to receive', function() {
        var expectedResponse;
        beforeEach(function() {
          expectedResponse = {body:'RETURN THIS', status: 200};
        });

        describe('When I register that URL and response', function() {
          beforeEach(function() {
            Fictum.registerUrl(url, expectedResponse);
          });

          describe('And I make a request to the registered URL', function() {
            var request, response;
            beforeEach(function() {
              request = SC.Request.getUrl(url);
              response = request.send();
              waitsFor(function() {
                return response.get('status') !== -100;
              });
            });

            it('Then I should receive the registered response', function() {
              expect(response.get('body')).toBe(expectedResponse['body']);
            });
          });
        });
      });
    });
  });
});
