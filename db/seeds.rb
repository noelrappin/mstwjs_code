Trip.delete_all

mayflower = Trip.create!(
    :name => "Mayflower Luxury Cruise",
    :tag_line => "Enjoy The Cruise That Started It All",
    :start_date => "May 17, 1620", 
    :end_date => "November 21, 1620", 
    :location => "Atlantic Ocean",
    :activity => "Cruising",
    :image_name => "mayflower.jpg",
    :description => "You'll take a scenic 66 day, 67 night cruise from England to Cape Cod. Come for the scurvy, stay for the starvation",
    :price => 1204)

shakespeare = Trip.create!(
    :name => "See Shakespeare's Plays",
    :tag_line => "See The Master As Intended",
    :start_date => "November 1, 1604", 
    :end_date => "October 31, 1605",
    :location => "England",
    :activity => "Theater",
    :image_name => "shakespeare.jpg",
    :description => "See the world's greatest playwright on his home turf. Tour 17th Century London.",
    :price => 1313)
    
mars = Trip.create!(
    :name => "Mission To Mars", 
    :tag_line => "Take One Huge Step For Man",
    :start_date => "July 16, 2047", 
    :end_date => "July 24, 2049",
    :location => "Outer Space",
    :activity => "Space Travel",
    :image_name => "mars.jpg",
    :price => 2093)
    
cubbies = Trip.create!(:name => "The Cubs Win The World Series",
    :tag_line => "Experience The Ultimate Rarity",
    :start_date => "October 10, 1908", 
    :end_date => "October 14, 1908",
    :location => "USA",
    :activity => "Baseball", 
    :image_name => "cubbies.jpg",
    :price => 10343)
    
lewis = Trip.create!(:name => "Hike With Lewis And Clark",
    :tag_line => "Enjoy the Great Outdoors",
    :start_date => "May 14, 1804", 
    :end_date => "September 23, 1806", 
    :location => "USA",
    :activity => "Hiking",
    :image_name => "lewis.jpg",
    :price => 10343)
    
parc = Trip.create!(:name => "Visit Xerox PARC",
    :tag_line => "See the Lab That Started It All",
    :start_date => "December 12, 1979", 
    :end_date => "December 13, 1979", 
    :location => "California",
    :activity => "Geeking Out",
    :image_name => "parc.jpg",
    :price => 10343)
    
washington = Trip.create!(:name => "Cross The Delaware",
    :tag_line => "A Winter Nature Hike With Washington",
    :start_date => "December 25, 1776", 
    :end_date => "December 26, 1776", 
    :location => "USA",
    :activity => "Hiking",
    :image_name => "washington.jpg",
    :price => 21353)
    
napoleon = Trip.create!(:name => "Escape From Elba",
    :tag_line => "A Hundred Days With Napoleon",
    :start_date => "February 26, 1815", 
    :end_date => "June 20, 1815", 
    :location => "France",
    :activity => "War",
    :image_name => "napoleon.jpg",
    :price => 34645)
    
washington = Trip.create!(:name => "Climb Everest With Hillary",
    :tag_line => "Relive The Most Famous Climb",
    :start_date => "March 1, 1953", 
    :end_date => "June 15, 1953", 
    :location => "Himalayas",
    :activity => "Mountain Climbing",
    :image_name => "everest.jpg",
    :price => 21353)
    
beatles = Trip.create!(:name => "The Beatles In Concert",
    :tag_line => "Attend the Historic Final Tour",
    :start_date => "August 12, 1966", 
    :end_date => "August 29, 1966", 
    :location => "USA",
    :activity => "Concert Going",
    :image_name => "beatles.jpg",
    :price => 33450)
    
enigma = Trip.create!(:name => "Crack The Ensigma",
    :tag_line => "Use the First Turing Machine",
    :start_date => "September 15, 1939", 
    :end_date => "January 1, 1943", 
    :location => "UK",
    :activity => "Geeking Out",
    :image_name => "enigma.jpg",
    :price => 33450)
    
polo = Trip.create!(:name => "Tour With Marco Polo",
    :tag_line => "Travel The Exotic Spice Road",
    :start_date => "January 1, 1271", 
    :end_date => "January 1, 1275", 
    :location => "China",
    :activity => "Hiking",
    :image_name => "polo.jpg",
    :price => 33450)
    
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
