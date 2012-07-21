var Rating = (function() {

  Constructor = function(element) {
    this.element = element;
    this.totalRatings = 0;
    this.totalStars = 0;
    this.values = [];
    this.id = 0;
  };

  Constructor.prototype = {
    parseJson: function(jsonData) {
      var jsonObject = $.parseJSON(jsonData);
      this.parseValues(jsonObject);
      this.calculatePercentages();
      this.calculateAverage();
      return self;
    },

    parseValues: function(jsonObject) {
      this.id = jsonObject.id;
      var self = this;
      $.each([1, 2, 3, 4, 5], function(index, value) {
        self.values[index] = {};
        self.values[index].count = jsonObject.values[value];
        self.values[index].rating = value;
        self.totalRatings += self.values[index].count;
        self.totalStars += (value * self.values[index].count);
      });
    },

    calculatePercentages: function() {
      var self = this;
      $.each([1, 2, 3, 4, 5], function(index, value) {
        self.values[index].percentage =
            self.values[index].count * 1.0 / self.totalRatings * 100;
        self.values[index].width = self.values[index].percentage * 3;
      });
    },

    calculateAverage: function() {
      this.averageRating = this.totalStars * 1.0 / this.totalRatings;
      this.ratingPercentage = this.averageRating / 5.0 * 100;
    },

    //##template
    url: function() {
      return "/"+ $(this.element).attr("id").replace("_", "/") + "/rating.json";
    },

    renderTemplate: function(template) {
      return Mustache.to_html(this.template(), this);
    },

    reloadData: function(data) {
      this.parseJson(data);
      $(this.element).html(this.renderTemplate(this.template()));
    },

    template: function() {
      return $.trim($("#rating_template").html());
    },

    acquireJson: function() {
      var self = this;
      $.ajax({
        url: this.url(),
        dataType: 'text',
        success: function(data) {
          self.reloadData(data);
        }
      })
    },
    //##template

    //##updateJson
    updateJson: function(clickedElement) {
      var $form = this.element.find("form");
      $form.find(".form_rating").val($(clickedElement).text());
      self = this;
      $.ajax({
        url: $form.attr('action'),
        dataType: 'text',
        type: 'post',
        data: $form.serialize(),
        success: function(data, status) {
          self.reloadData(data);
        }
      });
    }
    //##updateJson

  }
  return Constructor
})();

//##clickHandler
clickHandlers = function() {
  $(document).on('click', '.star_container .star', function(event) {
    event.preventDefault();
    var $rating_element = $(this).parents(".rating");
    var rating = new Rating($rating_element);
    rating.updateJson(this);
  })
}
//##clickHandler

//##loadRatings
loadRatings = function() {
  $(".rating").each(function() {
    var rating = new Rating(this);
    rating.acquireJson();
  })
};

$(function() {
  loadRatings();
  clickHandlers();
})
//##loadRatings

