describe("clicking a show description link", function() {
  beforeEach(function() {
    loadFixtures("one_index_trip.html");
    init();
    $(".detail_toggle").click(); 
  });

  it("shows the trip description", function() {        
    expect($('.detail')).not.toHaveClass("hidden");
  }); 

  it('changes the link action to "Hide"',function() {
    expect($('.detail_toggle')).toHaveText("Hide Details"); 
  });
});