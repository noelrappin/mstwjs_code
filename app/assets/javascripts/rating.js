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
    }
  }
  return Constructor
})();

