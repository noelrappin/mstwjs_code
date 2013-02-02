Trip.delete_all

Trip.delete_all
Hotel.delete_all
Extra.delete_all

mayflower = Trip.create!(
    :name => "Mayflower Luxury Cruise",
    :tag_line => "Enjoy The Cruise That Started It All",
    :start_date => "September 6, 1620",
    :end_date => "November 21, 1620",
    :location => "Atlantic Ocean",
    :activity => "Cruising",
    :image_name => "mayflower.jpg",
    :description => "You'll take a scenic 66 day, 67 night cruise from England to Cape Cod. Come for the scurvy, stay for the starvation",
    :orders => 19
    :price => 1204)

Hotel.create!(
  :trip => mayflower,
  :name => "Deluxe Suite",
  :description => "A luxury suite. On the Mayflower. Really.",
  :nights_ordered => 10
  :price => 500)

Hotel.create!(
  :trip => mayflower,
  :name => "Standard Room",
  :description => "Just a room with a tiny view.",
  :nights_ordered => 11,
  :price => 300)

Hotel.create!(
  :trip => mayflower,
  :name => "Cargo",
  :description => "Just you and the rats.",
  :price => 100,
  :nights_ordered => 1
)

Extra.create!(
  :trip => mayflower,
  :name => "Martha's Vineyard",
  :description => "Tour Martha's Vineyard",
  :price => 400,
  :orders => 7
)

Extra.create!(
  :trip => mayflower,
  :name => "Special Boat Tour",
  :description => "Tour The Whole Boat",
  :price => 300,
  :orders => 12
)

Extra.create!(
  :trip => mayflower,
  :name => "Double Rations",
  :description => "Risk the ire of other passengers with extra food",
  :price => 200,
  :orders => 2
)

Extra.create!(
  :trip => mayflower,
  :name => "See The Compact",
  :description => "Box seat for signing of the Mayflower Compact",
  :price => 300,
  :orders => 17
)

shakespeare = Trip.create!(
    :name => "See Shakespeare's Plays",
    :tag_line => "See The Master As Intended",
    :start_date => "November 1, 1604",
    :end_date => "October 31, 1605",
    :location => "England",
    :activity => "Theater",
    :image_name => "shakespeare.jpg",
    :description => "See the world's greatest playwright on his home turf. Tour 17th Century London.",
    :price => 1313,
    :orders => 72)

Hotel.create!(
  :trip => shakespeare,
  :name => "Luxury",
  :description => "The finest suite that 1604 has to offer.",
  :price => 350,
  :nights_ordered => 53
)

Hotel.create!(
  :trip => shakespeare,
  :name => "Normal",
  :description => "Live like a playwright.",
  :price => 200,
  :nights_ordered => 68
)

Hotel.create!(
  :trip => shakespeare,
  :name => "Groundling",
  :description => "Live like a peseant",
  :price => 100,
  :nights_ordered => 56
)

Extra.create!(
  :trip => shakespeare,
  :name => "Tickets to Hamlet",
  :description => "To see, or not to see",
  :price => 145,
  :orders => 22
)

Extra.create!(
  :trip => shakespeare,
  :name => "Tickets to Romeo and Juliet",
  :description => "Wherefore art the theatre?",
  :price => 145,
  :orders => 4
)

Extra.create!(
  :trip => shakespeare,
  :name => "Globe Theater Tour",
  :description => "Behind the scenes of all the scenes",
  :price => 100,
  :orders => 34
)

Extra.create!(
  :trip => shakespeare,
  :name => "Buckingham Palace Tour",
  :description => "Beat the tourist rush and see the castle",
  :price => 156,
  :orders => 45
)

mars = Trip.create!(
    :name => "Mission To Mars",
    :tag_line => "Take One Huge Step For Man",
    :start_date => "July 16, 2047",
    :end_date => "July 24, 2049",
    :location => "Outer Space",
    :activity => "Space Travel",
    :description => "Tag along on the first manned mission to the Red Planet.",
    :image_name => "mars.jpg",
    :price => 2093,
    :orders => 15)

Hotel.create!(
  :trip => mars,
  :name => "Captain's Quarters",
  :description => "Bunk with the Captain of the First mission to Mars",
  :price => 1000,
  :nights_ordered => 8
)

Hotel.create!(
  :trip => mars,
  :name => "Officers' Quarters",
  :description => "Bunk with the officers of the First mission to Mars",
  :price => 750,
  :nights_ordered => 12
)

Hotel.create!(
  :trip => mars,
  :name => "Crews' Quarters",
  :description => "Bunk with the crew of the first mission to Mars",
  :price => 500,
  :nights_ordered => 14
)

Hotel.create!(
  :trip => mars,
  :name => "Cargo",
  :description => "Bunk with the cargo of the first mission to Mars",
  :price => 250,
  :nights_ordered => 12
)

Extra.create!(
  :trip => mars,
  :name => "Martian Life Form",
  :description => "Come home with your very own Martian",
  :price => 1500,
  :orders => 4
)

Extra.create!(
  :trip => mars,
  :name => "Golf",
  :description => "Play Golf at a fraction of Earth gravity",
  :price => 1200,
  :orders => 14
)

Extra.create!(
  :trip => mars,
  :name => "Phobos",
  :description => "Tour one of Mars' tiny moons",
  :price => 1000,
  :orders => 11
)

Extra.create!(
  :trip => mars,
  :name => "Olympus Mons",
  :description => "For the serious mountain man",
  :price => 750,
  :orders => 8
)

cubbies = Trip.create!(:name => "The Cubs Win The World Series",
    :tag_line => "Experience The Ultimate Rarity",
    :start_date => "October 10, 1908",
    :end_date => "October 14, 1908",
    :location => "USA",
    :activity => "Baseball",
    :image_name => "cubbies.jpg",
    :description => "Watch the 1908 Cubs win the World Series and start a 103 year drought. Game tickets included.",
    :price => 10343,
    :orders => 51)

Hotel.create!(
  :trip => cubbies,
  :name => "A Suite of your own",
  :description => "A top end suite in downtown Chicago",
  :price => 400,
  :nights_ordered => 49
)

Hotel.create!(
  :trip => cubbies,
  :name => "A room of your own",
  :description => "A room somewhere in Chicago",
  :price => 200,
  :nights_ordered => 8
)

Hotel.create!(
  :trip => cubbies,
  :name => "A bench of your own",
  :description => "Sleep in the Cubs' dugout",
  :price => 100,
  :nights_ordered => 39
)

Extra.create!(
  :trip => cubbies,
  :name => "Throw out the first pitch",
  :description => "Throw out the ceremonial first pitch at a game. Limited availablity.",
  :price => 1000,
  :orders => 2
)

Extra.create!(
  :trip => cubbies,
  :name => "Catch a home run",
  :description => "We'll sit you in the precise seat needed to catch a home run coming your way. But the reflexes need to be yours.",
  :price => 500,
  :orders => 30
)

Extra.create!(
  :trip => cubbies,
  :name => "Ballpark tour",
  :description => "Take a behind the scenes tour of the ballpark",
  :price => 100,
  :orders => 14
)

Extra.create!(
  :trip => cubbies,
  :name => "Chicago Architectural tour",
  :description => "See the future sites of all of Chicago's cool buildings",
  :price => 150,
  :orders => 24
)

lewis = Trip.create!(:name => "Hike With Lewis And Clark",
    :tag_line => "Enjoy the Great Outdoors",
    :start_date => "May 14, 1804",
    :end_date => "September 23, 1806",
    :location => "USA",
    :activity => "Hiking",
    :image_name => "lewis.jpg",
    :description => "Get back to nature with the original walking tour of the American west.",
    :price => 10343,
    :orders => 80)

Hotel.create!(
  :trip => lewis,
  :name => "Deluxe Tent",
  :description => "The finest tent sleeping option 1806 can buy.",
  :price => 175,
  :nights_ordered => 59
)

Hotel.create!(
  :trip => lewis,
  :name => "Average tent",
  :description => "Just a tent, you know.",
  :price => 100,
  :nights_ordered => 43
)

Hotel.create!(
  :trip => lewis,
  :name => "Sleep under the stars",
  :description => "Commune with nature all-day, every-day",
  :price => 50,
  :nights_ordered => 60
)

Extra.create!(
  :trip => lewis,
  :name => "Bug repellent",
  :description => "Surprisingly useful across the prairie",
  :price => 100,
  :orders => 14
)

Extra.create!(
  :trip => lewis,
  :name => "Snickers Bars",
  :description => "We bet you miss candy while crossing the plains",
  :price => 75,
  :orders => 22
)

Extra.create!(
  :trip => lewis,
  :name => "Mount Rushmore",
  :description => "A little out of your way, and no presidential statues",
  :price => 100,
  :orders => 27
)

Extra.create!(
  :trip => lewis,
  :name => "Surf the Pacific ocean",
  :description => "Fun for the whole family",
  :price => 150,
  :orders => 73
)

parc = Trip.create!(:name => "Visit Xerox PARC",
    :tag_line => "See the Lab That Started It All",
    :start_date => "December 12, 1979",
    :end_date => "December 13, 1979",
    :location => "California",
    :activity => "Geeking Out",
    :description => "Visit the world-famous Xerox PARC lab on a tour with some represntatives of Apple Computer. Nothing to see here...",
    :image_name => "parc.jpg",
    :price => 10343,
    :orders => 50)

Hotel.create!(
  :trip => parc,
  :name => "Luxury hotel",
  :description => "All the luxuries of 1979. WiFi not available",
  :price => 400,
  :nights_ordered => 44
)

Hotel.create!(
  :trip => parc,
  :name => "Normal hotel",
  :description => "Some of the luxuries of 1979. WiFi still not available",
  :price => 200,
  :nights_ordered => 36
)

Hotel.create!(
  :trip => parc,
  :name => "No Hotel",
  :description => "Sleep at the PARC facility, just like an overworked employee",
  :price => 100,
  :nights_ordered => 23
)

Extra.create!(
  :trip => parc,
  :name => "Take home a Xerox Star",
  :description => "The computer that started it all. WiFi not included",
  :price => 3045,
  :orders => 12
)

Extra.create!(
  :trip => parc,
  :name => "Alan Kay's autograph",
  :description => "'Nuff said. It's Alan Kay.",
  :price => 500,
  :orders => 14
)

Extra.create!(
  :trip => parc,
  :name => "Tour the PARC facility with Steve Jobs",
  :description => "Tour may include WIMP interface, mouse, OO Programming, and the Ethernet.",
  :price => 100,
  :orders => 34
)

Extra.create!(
  :trip => parc,
  :name => "Stanford University student tour",
  :description => "See the sights",
  :price => 25,
  :orders => 37
)

washington = Trip.create!(:name => "Cross The Delaware",
  :tag_line => "A Winter Nature Hike With Washington",
  :start_date => "December 25, 1776",
  :end_date => "December 26, 1776",
  :location => "USA",
  :activity => "Hiking",
  :image_name => "washington.jpg",
  :description => "Follow the Colonial Army as they make their way toward one of the critical battles of the Revolution",
  :price => 21353,
  :orders => 44)

Hotel.create!(
  :trip => washington,
  :name => "Live with the general",
  :description => "Expensive. But quiet. Watch out though -- we hear that George snores.",
  :price => 500,
  :nights_ordered => 27
)

Hotel.create!(
  :trip => washington,
  :name => "Live with the officers",
  :description => "Moderate. But liveable.",
  :price => 300,
  :nights_ordered => 29
)

Hotel.create!(
  :trip => washington,
  :name => "Live with the troops",
  :description => "Cheap. But noisy.",
  :price => 100,
  :nights_ordered => 3
)

Hotel.create!(
  :trip => washington,
  :name => "Live with the rats",
  :description => "Cheaper. But noisier.",
  :price => 10,
  :nights_ordered => 14
)

Extra.create!(
  :trip => washington,
  :name => "Washington's Autograph",
  :description => "Have George put his John Hancock on a piece of paper",
  :price => 5000,
  :orders => 15
)

Extra.create!(
  :trip => washington,
  :name => "Pose for the famous picture",
  :description => "My general crossed the Delaware and all I got was this lousy picture.",
  :price => 200,
  :orders => 29
)

Extra.create!(
  :trip => washington,
  :name => "Tour the Colonial Camp",
  :description => "Shoes optional.",
  :price => 400,
  :orders => 6
)

Extra.create!(
  :trip => washington,
  :name => "Tour the British Barracks",
  :description => "Don't give away the surprise!",
  :price => 200,
  :orders => 39
)

napoleon = Trip.create!(:name => "Escape From Elba",
    :tag_line => "A Hundred Days With Napoleon",
    :start_date => "February 26, 1815",
    :end_date => "June 20, 1815",
    :location => "France",
    :activity => "War",
    :image_name => "napoleon.jpg",
    :description => "Relive history's most famous prison escape",
    :price => 34645,
    :orders => 94)

Hotel.create!(
  :trip => napoleon,
  :name => "Bunk with the Emperor",
  :description => "Live like a king. Literally.",
  :price => 1250,
  :nights_ordered => 62
)

Hotel.create!(
  :trip => napoleon,
  :name => "Bunk with the Loyalists",
  :description => "Live near a king.",
  :price => 1000,
  :nights_ordered => 11
)

Hotel.create!(
  :trip => napoleon,
  :name => "Bunk with the English",
  :description => "Live against a king",
  :price => 750,
  :nights_ordered => 63
)

Extra.create!(
  :trip => napoleon,
  :name => "Height contest!",
  :description => "Find out if you are taller than history's most famous shorty.",
  :price => 100,
  :orders => 93
)

Extra.create!(
  :trip => napoleon,
  :name => "Get a cool hat",
  :description => "Just like Napoleon's",
  :price => 50,
  :orders => 80
)

Extra.create!(
  :trip => napoleon,
  :name => "Behind the scenes at Elba",
  :description => "Find out how an Emporer in exile lives",
  :price => 160,
  :orders => 51
)

Extra.create!(
  :trip => napoleon,
  :name => "Battlefield tour of Waterloo",
  :description => "Tour the battlefield where Napoleon met his you-know-what",
  :price => 110,
  :orders => 17
)

everest = Trip.create!(:name => "Climb Everest With Hillary",
    :tag_line => "Relive The Most Famous Climb",
    :start_date => "March 1, 1953",
    :end_date => "June 15, 1953",
    :location => "Himalayas",
    :activity => "Mountain Climbing",
    :image_name => "everest.jpg",
    :description => "All the excitement of knowing the outcome in advance",
    :price => 21353,
    :orders => 29)

Hotel.create!(
  :trip => everest,
  :name => "Luxury accomodations",
  :description => "Live like you are at base camp",
  :price => 200,
  :nights_ordered => 18
)

Hotel.create!(
  :trip => everest,
  :name => "Moderate accomodations",
  :description => "Live like you are on the mountain",
  :price => 150,
  :nights_ordered => 17
)

Hotel.create!(
  :trip => everest,
  :name => "Hard to sleep accomodations",
  :description => "Live like you are near the peak",
  :price => 100,
  :nights_ordered => 25
)

Extra.create!(
  :trip => everest,
  :name => "Take your picture at the peak",
  :description => "Enjoy the top of the world",
  :price => 1500,
    :orders => 20
)

Extra.create!(
  :trip => everest,
  :name => "Double oxygen",
  :description => "Make it easier to breathe",
  :price => 1200,
    :orders => 1
)

Extra.create!(
  :trip => everest,
  :name => "What else. Climb the mountain",
  :description => "See everything",
  :price => 1000,
    :orders => 3
)

Extra.create!(
  :trip => everest,
  :name => "See beautiful Nepal",
  :description => "Wander at the foot of the mountains",
  :price => 100,
    :orders => 29
)

beatles = Trip.create!(:name => "The Beatles In Concert",
    :tag_line => "Attend the Historic Final Tour",
    :start_date => "August 12, 1966",
    :end_date => "August 29, 1966",
    :location => "USA",
    :activity => "Concert Going",
    :image_name => "beatles.jpg",
    :description => "See the fab four one final time",
    :price => 33450,
    :orders => 71)

Hotel.create!(
  :trip => beatles,
  :name => "We're with the band",
  :description => "Stay at top-notch accomodations",
  :price => 1500,
  :nights_ordered => 17
)

Hotel.create!(
  :trip => beatles,
  :name => "We're with the fans",
  :description => "Stay at accomodations",
  :price => 600,
  :nights_ordered => 2
)

Hotel.create!(
  :trip => beatles,
  :name => "We're here",
  :description => "Stay.",
  :price => 200,
  :nights_ordered => 17
)

Extra.create!(
  :trip => beatles,
  :name => "Signed guitars",
  :description => "From John, Paul, and George",
  :price => 1500,
  :orders => 61
)

Extra.create!(
  :trip => beatles,
  :name => "Have John or Paul write a song about you",
  :description => "Offer only valid if your name is Michelle, Jude, or Prudence",
  :price => 100,
  :orders => 45
)

Extra.create!(
  :trip => beatles,
  :name => "Backstage pass",
  :description => "Meet the Beatles",
  :price => 1000,
  :orders => 16
)

Extra.create!(
  :trip => beatles,
  :name => "Ride on a tour bus",
  :description => "Actually, kind of dull",
  :price => 500,
  :orders => 35
)

enigma = Trip.create!(:name => "Crack The Enigma",
    :tag_line => "Use the First Turing Machine",
    :start_date => "September 15, 1939",
    :end_date => "January 1, 1943",
    :location => "UK",
    :activity => "Geeking Out",
    :image_name => "enigma.jpg",
    :description => "Break the Enigma code with Britain's greatest geniuses",
    :price => 33450,
  :orders => 24)

Hotel.create!(
  :trip => enigma,
  :name => "Deluxue Hotel",
  :description => "We can guarantee this is not affected by the Blitz",
  :price => 1000,
  :nights_ordered => 3
)

Hotel.create!(
  :trip => enigma,
  :name => "A hotel",
  :description => "We can not so guarantee",
  :price => 600,
  :nights_ordered => 2
)

Hotel.create!(
  :trip => enigma,
  :name => "A bed",
  :description => "Sleep in a bomb shelter",
  :price => 300,
  :nights_ordered => 1
)

Extra.create!(
  :trip => enigma,
  :name => "Work with Alan Turing",
  :description => "Or an incredible machine simulation",
  :price => 500,
  :orders => 10
)

Extra.create!(
  :trip => enigma,
  :name => "Crack a code",
  :description => "And save the day",
  :price => 1000,
  :orders => 19
)

Extra.create!(
  :trip => enigma,
  :name => "Behind the scenes at Bletchly Park",
  :description => "See were all the math was mathed",
  :price => 100,
  :orders => 21
)

Extra.create!(
  :trip => enigma,
  :name => "Beautful London",
  :description => "Tour London during the War",
  :price => 175,
  :orders => 7
)

polo = Trip.create!(:name => "Tour With Marco Polo",
    :tag_line => "Travel The Exotic Spice Road",
    :start_date => "January 1, 1271",
    :end_date => "January 1, 1275",
    :location => "China",
    :activity => "Hiking",
    :image_name => "polo.jpg",
    :description => "A once in a lifetime opportunity",
    :price => 33450,
  :orders => 11)

Hotel.create!(
  :trip => polo,
  :name => "Stay with Marco",
  :description => "Only the best",
  :price => 1000,
  :nights_ordered => 1
)

Hotel.create!(
  :trip => polo,
  :name => "Stay near Marco",
  :description => "Not quite the best",
  :price => 750,
  :nights_ordered => 7
)

Hotel.create!(
  :trip => polo,
  :name => "Stay with the horses",
  :description => "Only the cheapest",
  :price => 100,
  :nights_ordered => 10
)

Extra.create!(
  :trip => polo,
  :name => "Genuine spice",
  :description => "Keep your meat from tasting spoiled",
  :price => 500,
  :orders => 5
)

Extra.create!(
  :trip => polo,
  :name => "Play Marco Polo with Marco Polo",
  :description => "If we can find a swimming pool",
  :price => 100,
  :orders => 3
)

Extra.create!(
  :trip => polo,
  :name => "Walk the great wall",
  :description => "Before all the tourists",
  :price => 100,
  :orders => 6
)

Extra.create!(
  :trip => polo,
  :name => "Walk the spice road",
  :description => "Caravan with the best",
  :price => 150,
  :orders => 7
)

User.delete_all

fred = User.create!(
    :persistence_token => "persistence token",
    :first_name => "Fred",
    :last_name => "Flintstone",
    :login => "fred",
    :password_salt => "salt",
    :password => "password",
    :password_confirmation => "password",
    :email => "fred@test.com")

fred.user_preferences.create(:kind => "century", :name => "1600s")

wilma = User.create!(
    :persistence_token => "persistence token",
    :first_name => "Wilma",
    :last_name => "Flintstone",
    :login => "wilma",
    :password_salt => "salt",
    :password => "password",
    :password_confirmation => "password",
    :email => "wilma@test.com")

barney = User.create!(
    :persistence_token => "persistence token",
    :first_name => "Barney",
    :last_name => "Rubble",
    :login => "barney",
    :password_salt => "salt",
    :password => "password",
    :password_confirmation => "password",
    :email => "barney@test.com")

betty = User.create!(
    :persistence_token => "persistence token",
    :first_name => "Betty",
    :last_name => "Rubble",
    :login => "betty",
    :password_salt => "salt",
    :password => "password",
    :password_confirmation => "password",
    :email => "betty@test.com")

Friend.delete_all

Friend.create(:sender => fred, :receiver => barney)
Friend.create(:sender => wilma, :receiver => betty)
