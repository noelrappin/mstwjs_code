//##ajax
describe("clicking a show description link", function() {
  beforeEach(function() {
    loadFixtures("one_index_trip.html");
    toggler = new Toggler();
    toggler.init();
    spyOn(toggler, 'getDescription').andCallThrough();
    spyOn($, 'ajax').andCallFake(function(ajaxParams) {
      ajaxParams.success("Description");
    });
    $(".detail_toggle").click();
  });


  it("shows the trip description", function() {
    expect($('.detail')).not.toHaveClass("hidden");
  });

  it('changes the link action to "Hide"',function() {
    expect($('.detail_toggle')).toHaveText("Hide Details");
  });

  it("calls the ajax with the correct url", function() {
    expect(toggler.getDescription.mostRecentCall.args[0])
        .toEqual("/trips/1/description");
    expect(toggler.getDescription.mostRecentCall.args[1])
        .toHaveClass("detail");
  });
  //##ajax

  describe('clicking the link again', function() {
    beforeEach(function() {
      $(".detail_toggle").click();
    });

    it('hides the description', function() {
      expect($('.detail')).toHaveClass("hidden");
    });

    it('Changes the link action back to "Show"',function(){
      expect($('.detail_toggle')).toHaveText("Show Details");
    });
  });

});
