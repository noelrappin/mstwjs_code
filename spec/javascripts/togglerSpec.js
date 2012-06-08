describe("clicking a show description link", function() {
  //##before_each
  beforeEach(function() {
    loadFixtures("one_index_trip.html");
    toggler = new Toggle();
    toggler.init();
    $(".detail_toggle").click();
  });
  //##before_each

  it("shows the trip description", function() {        
    expect($('.detail')).not.toHaveClass("hidden");
  }); 

  it('changes the link action to "Hide"',function() {
    expect($('.detail_toggle')).toHaveText("Hide Details"); 
  });

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