const cycle1 = {
    Monday: {
        Breakfast: ['Pancakes M/W/S', 'Bacon', 'Cottage Fries'],
        Lunch: [
            'Ravioli Italian Soup E/M/W',
            'Chicken Noodle Soup W',
            'Buffalo Chicken Salad M/W/S',
            'Spicy Miso Pork Ramen E/F/W/S',
            'Roasted Harissa Chicken',
            'Stuffed Bell Peppers',
            "Chef's Choice",
            "Meatlover's Pizza M/W/S (Beachside and Parkside only)",
        ],
        Dinner: [
            'Ravioli Italian Soup E/M/W',
            'Chicken Noodle Soup W',
            'Buffalo Chicken Salad M/W/S',
            'Chicken Tenders W',
            'Texas Style Pork Ribs',
            'Kung Pao Gardein Chicken S/W',
            "Chef's Choice",
            "Meatlover's Pizza M/W/S (Beachside and Parkside only)",
        ],
    },
    Tuesday: {
        Breakfast: ['Biscuit and Country Gravy M/W/S', 'Kielbasa S', 'Hash Browns'],
        Lunch: [
            'Minestrone Soup W',
            'Potato and Bacon Soup M/W/S',
            'Kale and Quinoa Salad',
            'Grilled Thai Chicken',
            'Burrito Bowl',
            'Pasta w/ Gardein Meat Sauce S/W',
            "Chef's Choice",
            'Buffalo Chicken Pizza M/W/S (Beachside and Parkside only)',
        ],
        Dinner: [
            'Minestrone Soup W',
            'Potato and Bacon Soup M/W/S',
            'Kale and Quinoa Salad',
            'Meat Lasagna W/E/M/S',
            'Chicken w/Lemon Herb Sauce',
            'Brown Rice and Quinoa w/Roasted Tomato',
            "Chef's Choice",
            'Buffalo Chicken Pizza M/W/S (Parkside and Beachside only)',
        ],
    },
    Wednesday: {
        Breakfast: ['Chorizo and Egg Burrito E/W/S', 'Turkey Sausage Links', 'Country Potatoes'],
        Lunch: [
            'Corn Chowder Soup M/S/W',
            'Posole  Soup',
            'Greek Salad M',
            'Baked Ziti W/M',
            'Grilled Beef Flank Steak w/Chimichurri Sauce',
            'Gardein Orange Chicken S/W',
            "Chef's Choice",
            'Pepperoni and Jalapeño Pizza M/W/S (Beachside and Parkside only)',
        ],
        Dinner: [
            'Corn Chowder Soup M/S/W',
            'Posole  Soup',
            'Greek Salad M',
            'BBQ Chicken Sandwich W',
            'Pork Chile Verde',
            'Gardein Chicken Tenders S/W',
            "Chef's Choice",
            'Pepperoni and Jalapeño Pizza M/W/S (Beachside and Parkside only)',
        ],
    },
    Thursday: {
        Breakfast: ['Sausage, Egg and Cheese English Muffin Sandwich E/M/W', 'Sausage Patty', 'Tater Tots'],
        Lunch: [
            'Chicken and Rice Soup',
            'Tomato Basil Soup M/W',
            'RYO California Sushi F/E/W/S/SF-C',
            'Pasta and Meatballs M/W/S/E',
            'Hamburger Bar M/W',
            'Gardein Beef w/Black Pepper Sauce S/W',
            "Chef's Choice",
            'Pesto Artichoke Pizza M/W/S (Beachside and Parkside only)',
        ],
        Dinner: [
            'Chicken and Rice Soup',
            'Tomato Basil Soup M/W',
            'RYO California Sushi F/E/W/S/SF-C',
            'Teriyaki Chicken W/S',
            'Loaded Grilled Cheese Sandwich M/W/S',
            'Vegetable Lentil Stew',
            "Chef's Choice",
            'Pesto Artichoke Pizza M/W/S (Beachside and Parkside only)',
        ],
    },
    Friday: {
        Breakfast: ['French Toast E/M/W', 'Bacon', "Potatoes O'Brien"],
        Lunch: [
            'Clam Chowder M/W/SF-C',
            'Vegetable Noodle Soup W',
            'Apple Walnut Salad TN',
            'Lemon Pepper Salmon F',
            'Moroccan Chicken w/Vegetables',
            'Edamame Fried Rice S/W',
            "Chef's Choice",
            'Veggie Pizza M/W/S (Beachside and Parkside only)',
        ],
        Dinner: [
            'Clam Chowder M/W/SF-C',
            'Vegetable Noodle Soup W',
            'Apple Walnut Salad TN',
            'Beef Red Chile Colorado',
            'Fish and Chips F/W/M',
            'Gardein Chicken and Broccoli W/S',
            "Chef's Choice",
            'Veggie Pizza M/W/S (Beachside and Parkside only)',
        ],
    },
    Saturday: {
        Brunch: [
            'Croissant Sandwich W/E/M/S',
            'Kielbasa S',
            'Cottage Fries',
            'Italian Wedding  Soup W/S/M',
            'Broccoli Cheddar Soup M/W/S',
            "Chef's Choice",
            'Build Your Own Crepe',
        ],
        Dinner: [
            'Italian Wedding  Soup W/S/M        ',
            'Broccoli Cheddar Soup M/W/S        ',
            'Beef Enchiladas S/W/M        ',
            'Gardein FajitasS/W',
            'Fish and Chips F/W (Beachside only)            ',
        ],
    },
    Sunday: {
        Brunch: [
            'Waffle Sticks E/M/S/W        ',
            'Sausage Link        ',
            'Hash Brown Patty        ',
            'Beef Barley Soup W        ',
            'Potato Chowder Soup W/M/S            ',
            "Chef's Choice            ",
        ],
        Dinner: [
            'Beef Barley Soup W        ',
            'Potato Chowder Soup W/M/S        ',
            'Chicken Parmesan M/W/S        ',
            'Baked Tortellini w/Spinach E/M/W            ',
            'Szechuan Tofu and Eggplant S/W            ',
            'Corn dogs W/E/M (Beachside only)            ',
        ],
    },
};

const cycle2 = {
    Monday: {
        Breakfast: ['Pancakes M/W/S        ', 'Turkey Sausage        ', 'Tater Tots        '],
        Lunch: [
            'Chicken Gumbo Soup  E/M/S/W/F        ',
            'Butternut Squash Soup  M        ',
            'Pesto Tortellini Salad  M/W/E        ',
            'Beef Tri Tip w/ Caramelized Onions            ',
            'The Buddha Bowl            ',
            "Chef's Choice             ",
            'Patty Melt W/M/S (Beachside only)            ',
            'BBQ Chicken Pizza M/W/S (Beachside and Parkside only)            ',
        ],
        Dinner: [
            'Chicken Gumbo Soup E/M/S/W/F        ',
            'Butternut Squash Soup M        ',
            'Pesto Tortellini Salad M/W/E        ',
            'Butter Chicken M            ',
            'Creamy Cauliflower Mac and Cheese W            ',
            "Chef's Choice             ",
            'Patty Melt W/M/S (Beachside only)            ',
            'BBQ Chicken Pizza M/W/S (Beachside and Parkside only)            ',
        ],
    },
    Tuesday: {
        Breakfast: ['Chilaquiles M        ', 'Bacon', 'Hash Browns        '],
        Lunch: [
            'Broccoli Cheddar Soup M/W/S        ',
            'Chicken Tortilla Soup S/W        ',
            'Cobb Salad M/E        ',
            'Pasta Beef BologneseW(Beachside only)            ',
            'Vegetable Tangine            ',
            "Chef's Choice             ",
            'Nacho Bar M (Beachside only)            ',
            'Hawaiian Pizza M/W/S(Beachside and Parkside only)            ',
        ],
        Dinner: [
            'Broccoli Cheddar Soup M/W/S        ',
            'Chicken Tortilla Soup S/W        ',
            'Cobb Salad M/E        ',
            'Chicken and Black Pepper Sauce S/W            ',
            'Nacho Bar M(Beachside and Hillside only)            ',
            'Fried Avocado Tacos W/M/S/E            ',
            "Chef's Choice             ",
            'Nacho Bar(Beachside only) Hawaiian Pizza M/W/S(Beachside and Parkside only)            ',
        ],
    },
    Wednesday: {
        Breakfast: ['Breakfast Burrito E/W/M        ', 'Pork Links        ', 'Country Potatoes        '],
        Lunch: [
            'Tomato Basil Soup M/W        ',
            'Chicken Noodle Soup W        ',
            'RYO Spicy California Sushi F/E/W/S/SF-C        ',
            'Orange Chicken Bowl W/S            ',
            'Tofu w/White Bean Stew S            ',
            "Chef's Choice             ",
            'Beef Bulgogi Fries W/S/M (Beachside only)            ',
            'Taco Pizza M/W/S (Beachside and Parkside only)            ',
        ],
        Dinner: [
            'Tomato Basil Soup M/W        ',
            'Chicken Noodle Soup W        ',
            'RYO Spicy California Sushi F/E/W/S/SF-C        ',
            'Cajun Fish F            ',
            'Beef Bulgogi Fries W/S/M            ',
            'Vegetable Barley Stew W            ',
            "Chef's Choice             ",
            'Beef Bulgogi Fries W/S/M (Beachside only)            ',
            'Taco Pizza M/W/S (Beachside and Parkside only)            ',
        ],
    },
    Thursday: {
        Breakfast: ['Biscuit and Country Gravy M/W/S        ', 'Turkey Bacon        ', 'Cottage Fries        '],
        Lunch: [
            'Creamy Cauliflower Soup         ',
            'Caldo de Res Soup        ',
            'Brown Rice and Quinoa Kale Salad        ',
            'Peruvian Roasted Chicken            ',
            'Gardein Chicken Stir Fry S/W            ',
            "Chef's Choice             ",
            'Ranch Chicken Bacon Pizza W/M/S(Beachside and Parkside only)            ',
        ],
        Dinner: [
            'Creamy Cauliflower Soup        ',
            'Caldo de Res Soup        ',
            'Brown Rice and Quinoa Kale Salad        ',
            'Sweet and Spicy Pork S/W(Beachside only) ',
            'Gardein Beef and Onions S/W            ',
            "Chef's Choice             ",
            'Beef Taquitos S/W(Beachside only) Ranch Chicken Bacon Pizza W/M/S(Beachside and Parkside only)            ',
        ],
    },
    Friday: {
        Breakfast: ['Egg, Ham and Cheese on Croissant Sandwich E/W/M/S        ', 'Lil Smokies        ', "Potatoes O'Brien        "],
        Lunch: [
            'Minestrone Soup W         ',
            'Clam Chowder M/W/SF-C        ',
            'Elote in a Cup E/M        ',
            'Chicken Shawarma Bowl M            ',
            'Thai Curry Tofu S            ',
            "Chef's Choice             ",
            'Creamy Garlic Ricotta Flatbread Pizza  M/W/S(Beachside and Parkside only)            ',
        ],
        Dinner: [
            'Minestrone Soup W         ',
            'Clam Chowder M/W/SF-C        ',
            'Elote in a Cup E/M        ',
            'Wings and Things W            ',
            'Asian Noodles w/Vegetables W/S            ',
            "Chef's Choice             ",
            'Fish Tacos F/E(Beachside only)            ',
            'Creamy Garlic Ricotta Flatbread Pizza M/W/S(Beachside and Parkside only)            ',
        ],
    },
    Saturday: {
        Brunch: [
            'Breakfast Sandwich on Naan Bread E/W/M/S        ',
            'Bacon',
            'Home Style Potatoes         ',
            'Split Pea Soup        ',
            'Miso Soup F/S            ',
            "Chef's  Choice            ",
            'Omelette BarE/M(Beachside only)            ',
        ],
        Dinner: [
            'Split Pea Soup        ',
            'Miso Soup F/S        ',
            'Shrimp Pesto Pasta SF-C/W/M            ',
            'Bean and Cheese Pupusa M            ',
            'Chipotle Chicken Bowl (Beachside only)            ',
        ],
    },
    Sunday: {
        Brunch: [
            'Chocolate Chip Pancakes M/W/S        ',
            'Sausage Patty        ',
            'Hash Brown Patty        ',
            'Beef and Rice Soup             ',
            'Vegetable Noodle Soup W            ',
            "Chef's Choice             ",
            'Omelette Bar E/M            ',
        ],
        Dinner: [
            'Beef and Rice Soup         ',
            'Vegetable Noodle Soup W        ',
            'BBQ Pulled Pork SandwichW/M/E(Beachside only)            ',
            'Ratatouille',
        ],
    },
};

const cycle3 = {
    Monday: {
        Breakfast: ['French Toast E/M/W        ', 'Kielbasa S        ', 'Hash Browns        '],
        Lunch: [
            'Broccoli Cheddar Soup M/W/S        ',
            'Chicken and Rice Soup        ',
            'Citrus Kale Salad        ',
            'Morocan Beef with Vegetables (Beachside only)            ',
            'Cheese Enchilada Suizas M/W            ',
            'Pasta alla Norma W            ',
            'Turkey Burger W/M (Beachside only)            ',
            "Chef's Choice             ",
            'Supreme Pizza S/W/M (Beachside and Parkside only)            ',
        ],
        Dinner: [
            'Broccoli Cheddar Soup M/W/S        ',
            'Chicken and Rice Soup                                   ',
            'Citrus Kale Salad            ',
            'Beijing Beef S/W/SF-C            ',
            'Burrito Bowl',
            'Kung Pao Tofu S',
            "Chef's Choice",
            'Turkey Burger W/M (Beachside only)',
            'Supreme Pizza S/W/M (Beachside and Parkside only)',
        ],
    },
    Tuesday: {
        Breakfast: ['Sausage, Egg and Cheese English Muffin Sandwich W/E/M/S', 'Bacon', 'Cottage Fries'],
        Lunch: [
            'Italian Wedding Soup S/W/M',
            'Cream of Asparagus Soup M/W/S',
            'Cauliflower Ceviche',
            'Mongolian Chicken Drumstick W/S',
            'Gardein Meatball Sub W/S',
            "Chef's Choice",
            'Beef Hot Dog Bar M/W(Beachside only)',
            'Carne Asada Pizza S/W/M (Beachside and Parkside only)',
        ],
        Dinner: [
            'Italian Wedding Soup S/W/M',
            'Cream of Asparagus Soup M/W/S',
            'Cauliflower Ceviche',
            'Popcorn Chicken Bowl W/M',
            'Gardein Beef Teriyaki Bowl S/W',
            "Chef's Choice",
            'Carne Asada Pizza S/W/M (Beachside and Parkside only)',
        ],
    },
    Wednesday: {
        Breakfast: ['Hawaiian Breakfast E', 'SPAM/Ham', 'Country Potatoes/Rice'],
        Lunch: [
            'Tomato Basil Soup M/W',
            'Vegetable Noodle Soup W',
            'RYO Veggie Sushi',
            'Tandoori Chicken W/M/S',
            'Potato and Cauliflower Curry',
            "Chef's Choice",
            'Roasted Butternut Squash w/Bacon and Caramelized Onion Pizza S/W/M (Beachside and Parkside only)',
        ],
        Dinner: [
            'Tomato Basil Soup M/W',
            'Vegetable Noodle Soup W',
            'RYO Veggie Sushi',
            'Meatloaf W/E (Beachside only)',
            "Chef's Choice",
            'Roasted Butternut Squash w/Bacon and Caramelized Onion Pizza S/W/M (Beachside and Parkside only)',
        ],
    },
    Thursday: {
        Breakfast: ['Blueberry Pancakes M/W/S', 'Pork Links', 'Tater Tots'],
        Lunch: [
            'Potato Chowder Soup W/M/S',
            'Posole Soup',
            'Chicken Taco Salad M/W/E',
            'BBQ Pork Ribs',
            'Lentil Chili Mac W',
            "Chef's Choice",
            'Buffalo Chicken Pizza S/W/M (Beachside and Parkside only)',
            'Chicken Bahn Mi Sandwich W/S (Beachside only)',
        ],
        Dinner: [
            'Potato Chowder Soup W/M/S',
            'Posole Soup',
            'Chicken Taco Salad M/W/E',
            'Turkey Pesto Flatbread M/W/E',
            'Cowboy Beef Flank Steak',
            'Tofu Fried Rice S/W',
            "Chef's Choice",
            'Buffalo Chicken Pizza S/W/M (Beachside and Parkside only)',
            'Chicken Bahn Mi Sandwich W/S (Beachside only)',
        ],
    },
    Friday: {
        Breakfast: ['Breakfast Burrito E/W/M', 'Turkey Sausage', "Potatoes O'Brien"],
        Lunch: [
            'Minestrone  Soup W',
            'Clam Chowder M/W/SF-C',
            'Arugula Salad M',
            'Beef Sliders W (Beachside only) Firecracker Salmon F/S/W',
            'Szechuan Tofu and Veggies S/W',
            "Chef's Choice ",
            'Caprese Flatbread Pizza S/W/M (Beachside and Parkside only)',
        ],
        Dinner: [
            'Minestrone Soup W',
            'Clam Chowder M/W/SF-C',
            'Arugula Salad M ',
            'Shrimp Scampi SF-C/W/M',
            'Pasta w/Gardein Meat Sauce S/W',
            "Chef's Choice ",
            'Caprese Flatbread Pizza S/W/M (Beachside and Parkside only)',
        ],
    },
    Saturday: {
        Brunch: [
            'Waffle Sticks E/M/S/W',
            'Bacon',
            'Home Fries ',
            'Chicken Gumbo Soup E/M/S/W/F',
            'Omelette Station E/M (Beachside only) Miso Soup F/S',
            "Chef's Choice",
        ],
        Dinner: [
            'Chicken Gumbo Soup E/M/S/W/F',
            'Miso Soup F/S',
            'Steak Quesadilla M/W',
            'Buffalo Chicken Fries W',
            'Chana Masala Chickpeas',
            'Asada fries M (Beachside only)',
        ],
    },
    Sunday: {
        Brunch: [
            'French Toast Sticks E/M/W/S',
            'Sausage Links',
            'Hash Brown Patty',
            'Potato Leek Soup M/S/W',
            'Albondigas Soup',
            "Chef's Choice",
        ],
        Dinner: [
            'Potato Leek Soup M/S/W',
            'Albondigas Soup',
            'Irish Nacho Bar M',
            'Chicken Bacon Alfredo Pasta W/M',
            'Gardein Beef Fajitas S/W',
        ],
    },
};

const cycle4 = {
    Monday: {
        Breakfast: ['Chocolate Chip Pancakes M/W/S', 'Sausage Patty', 'Tater Tots'],
        Lunch: [
            'Vegetarian Chili W',
            'Chicken Noodle Soup W',
            'Mandarin Spinach Salad W/S',
            'Pesto  Alfredo Tortellini M/W/E',
            'Vegan Cauliflower Tacos',
            "Chef's Choice",
            'Sausage and Mushroom Pizza S/W/M (Beachside and Parkside only)',
            'Carnita Bowl (Beachside only)',
        ],
        Dinner: [
            'Vegetarian Chili W',
            'Chicken Noodle Soup W',
            'Mandarin Spinach Salad W/S',
            'Pasta w/Turkey Meat Sauce W',
            'Thai Chickpea Curry',
            "Chef's Choice",
            'Sausage and Mushroom Pizza S/W/M (Beachside and Parkside only)',
        ],
    },
    Tuesday: {
        Breakfast: ['Chilaquiles M', 'Pork Links', 'Hash Browns'],
        Lunch: [
            'Cauliflower Soup',
            'Chicken Tortilla Soup W/S',
            'BBQ Chicken Salad M/E',
            'Chicken Shawarma Bowl M (Beachside and Parkside only)',
            'Edamame Fried Rice S/W',
            "Chef's Choice",
            'Spicy California Sushi Pizza F/W/E/S/SF-C/M  (Beachside and Parkside only)',
        ],
        Dinner: [
            'Cauliflower Soup',
            'Chicken Tortilla Soup W/S',
            'BBQ Chicken Salad M/E',
            'Kimchi Fried Rice w/Beef S/W/F',
            'Italian Sausage Sub W',
            'Sweet Potato Patties E/M/W',
            "Chef's Choice",
            'Memphis Ribs (Beachside only)',
            'Spicy California Sushi Pizza F/W/E/S/SF-C/M  (Beachside and Parkside only)',
        ],
    },
    Wednesday: {
        Breakfast: ['French Toast E/M/W', 'Turkey Sausage', 'Country Potatoes'],
        Lunch: [
            'Broccoli Cheddar M/W/S',
            'Menudo Soup',
            'Lemon Basil Pasta Salad M/W',
            'Vegetable Strudel W',
            "Chef's Choice",
            'Chicken Fajita Empanada S/W/M (Beachside and Parkside only)',
        ],
        Dinner: [
            'Broccoli Cheddar M/W/S',
            'Menudo Soup',
            'Lemon Basil Pasta Salad M/W',
            'Teriyaki Chicken S/W',
            'Crispy Fish Po Boy Sandwich M/F/W/E',
            'Teriyaki Tofu S/W',
            'Hamburger Bar M/W (Beachside only)',
            "Chef's Choice",
            'Chicken Fajita Empanada S/W/M (Beachside and Parkside only)',
        ],
    },
    Thursday: {
        Breakfast: ['Breakfast Sandwich on Naan Bread E/W/M/S', 'Lil Smokies', 'Tater Tots'],
        Lunch: [
            'Vegetable Noodle Soup W',
            'Tomato Basil Soup M/W',
            'Israeli Couscous on Arugula W',
            'Beef Flank Steak w/Chimichurri Sauce',
            'Gardein Chicken Fajitas S/W (Beachside only)',
            "Chef's Choice",
            'Cheeseburger Pizza S/W/M (Beachside and Hillside only)',
        ],
        Dinner: [
            'Vegetable Noodle Soup W',
            'Tomato Basil Soup M/W',
            'Israeli Couscous on Arugula W',
            'Herb Baked Chicken',
            'Gardein Chicken Fajitas S/W (Beachside only)',
            "Chef's Choice",
            'Cheeseburger Pizza S/W/M (Beachside and Hillside only)',
        ],
    },
    Friday: {
        Breakfast: ['Ham, Egg and Cheese English Muffin Sandwich E/M/W/S', 'Bacon', 'Home Style Potatoes'],
        Lunch: [
            'Clam Chowder M/W/SF-C',
            'Ravioli Italian Soup E/M/W',
            'Fried Chicken Salad M/W',
            'Shrimp Alfredo M/W/SF-C',
            'Vegetable Kale Stew',
            'Mac and Cheese Bar M/W/S (Beachside only)',
            "Chef's Choice",
            'Veggie Pizza S/W/M (Beachside and Parkside only)',
        ],
        Dinner: [
            'Clam Chowder M/W/SF-C',
            'Ravioli Italian Soup E/M/W',
            'Fried Chicken Salad M/W',
            'Orange Chicken W/S (Hillside and Parkside only)',
            'Lemon Pepper Tilapia F',
            'Gardein Orange Chicken W/S',
            "Chef's Choice",
            'Veggie Pizza S/W/M (Beachside and Parkside only)',
            'Build Your Own Grain Bowl (Hillside only)',
            'Lemon Shrimp Stir Fry SF-C/S/W (Hillside only)',
        ],
    },
    Saturday: {
        Brunch: [
            'Pancakes M/W/S',
            'Turkey Bacon ',
            "Potatoes O'Brien",
            'Vegetable Rice Soup (Hillside only)',
            'Beef and Barley Soup W (Hillside only)',
            'Butternut Squash Soup M (Beachside only)',
            'Chicken and Rice Soup (Beachside only)',
            "Chef's Choice",
            'Omelette Bar E/M(Beachside only)',
            'Build Your Own Crepe (Hillside only)',
        ],
        Dinner: [
            'Vegetable Rice Soup (Hillside only)',
            'Beef and Barley Soup W (Hillside only)',
            'Butternut Squash Soup M (Beachside only)',
            'Chicken and Rice Soup (Beachside only)',
            'Irish Nacho Bar M (Hillside only)',
            'Orange Chicken W/S (Beachside only)',
            'Spicy Ranch Chicken Sandwich W/S/E/M (Hillside only)',
            'Grilled Chicken and Bacon Sandwich W/E/M/S (Beachside only)',
            'Vegetable and Tofu Fried Rice S/W',
        ],
    },
    Sunday: {
        Brunch: [
            'French Toast E/M/W',
            'Sausage Link',
            'Hash Brown Patty',
            'Vegetable Rice Soup',
            'Beef and Barley Soup W',
            "Chef's Choice",
            'Omelette Bar E/M (Beachside only)',
        ],
        Dinner: [
            'Vegetable Rice Soup',
            'Beef and Barley Soup W',
            'Sweet and Spicy Pork W/S (Beachside only)',
            'Chicken Birria Torta W',
            'Memphis Pork Ribs',
            'Pasta w/Gardein Meat Sauce W/S',
        ],
    },
};

const cycle5 = {
    Monday: {
        Breakfast: ['Conffeti Pancakes M/W/S', 'Kielbasa S', 'Cottage Fries'],
        Lunch: [
            'Posole Soup',
            'Broccoli Cheddar Soup M/W/S',
            'Chicken Taco Salad M/W/E',
            'Creamy Tomato Cheese Ravioli M/W/E',
            'Soyrizo Jambalaya S',
            "Chef's Choice",
            'Taco Pizza M/S/W (Beachside and Parkside only)',
            'Steak Quesadilla M/W (Beachside only)',
        ],
        Dinner: [
            'Posole Soup',
            'Broccoli Cheddar Soup M/W/S',
            'Chicken Taco Salad M/W/E',
            'Herb Roasted Turkey',
            'Tahini Chickpea Bowl W',
            "Chef's Choice",
            'Taco Pizza M/S/W (Beachside and Parkside only)',
            'Steak Quesadilla M/W (Beachside only)',
        ],
    },
    Tuesday: {
        Breakfast: ['French Toast E/M/W', 'Bacon', 'Hash Browns'],
        Lunch: [
            'Miso Soup F/S',
            'Italian Wedding Soup S/W/M',
            'Kale Salad M',
            'Kahlua Pork Bowl',
            'Gardein Chicken Tenders S/W',
            "Chef's Choice",
            'Banh Mi Chicken Sandwich W/S (Beachside only)',
            'BBQ Chicken Pizza M/S/W (Beachside and Parkside only)',
        ],
        Dinner: [
            'Miso Soup F/S',
            'Italian Wedding Soup S/W/M',
            'Kale Salad M',
            'Beef and Broccoli S/W',
            'Gardein Enchilada Scaloppine S/W',
            "Chef's Choice",
            'Banh Mi Chicken Sandwich W/S (Beachside only)',
            'BBQ Chicken Pizza M/S/W (Beachside and Parkside only)',
        ],
    },
    Wednesday: {
        Breakfast: ['Breakfast Burrito E/W/M', 'Turkey Sausage', 'Home Style Potatoes'],
        Lunch: [
            'Butternut Squash Soup M',
            'Chicken Noodle Soup W',
            'Spinach Salad TN',
            'Mongolian Beef Bowl S/W (Beachside only)',
            'Corn Dogs W/M/E',
            'Mongolian Beef Bowl S/W',
            'Chickpea  Sandwich W',
            "Chef's Choice",
            'Creamy Garlic Ricotta Flatbread Pizza M/S/W (Beachsie and Parkside only)',
        ],
        Dinner: [
            'Butternut Squash Soup M',
            'Chicken Noodle Soup W',
            'Spinach Salad TN',
            'BBQ Chicken',
            'Thai Curry Tofu S',
            "Chef's Choice",
            'Creamy Garlic Ricotta Flatbread Pizza M/S/W (Beachsie and Parkside only)',
        ],
    },
    Thursday: {
        Breakfast: ['Waffle Sticks E/M/S/W', 'Sausage Patty', 'Country Style Potatoes'],
        Lunch: [
            'Cream of Asparagus Soup W/M/S',
            'Caldo de Res Soup',
            'Tuna Rotini Salad F/W/E',
            'Chicken Tacos',
            'Gardein Orange Chicken S/W',
            "Chef's Choice",
            'Islander Bacon Pizza M/W/S (Beachside and Parkside only)',
        ],
        Dinner: [
            'Cream of Asparagus Soup W/M/S',
            'Caldo de Res Soup',
            'Tuna Rotini Salad F/W/E',
            'Beef Lomo Saltado S/W',
            'Pasta alla Norma W (Beachside only)',
            'Meatball Sub W/M/S/E (Beachside only)',
            "Chef's Choice",
            'Islander Bacon Pizza M/W/S (Beachside and Parkside only)',
        ],
    },
    Friday: {
        Breakfast: ['Turkey, Egg and Cheese on Croissant Sandwich E/M/S/W', 'Bacon', "Potatoes O'Brien"],
        Lunch: [
            'French Onion Soup',
            'Clam Chowder M/W/SF-C',
            'Chicken Caesar Salad w/Cilantro Dressing M/F',
            'Enchiladas M/S/W',
            'Spicy Korean Tofu Bowl S/W',
            "Chef's Choice",
            'Margherita Pizza M/W/S (Beachside and Hillside only)',
        ],
        Dinner: [
            'French Onion Soup',
            'Clam Chowder M/W/SF-C',
            'Chicken Caesar Salad w/Cilantro Dressing M/F',
            'Lemon Pepper Salmon F',
            'Ratatouille',
            "Chef's Choice",
            'Margherita Pizza M/W/S (Beachside and Hillside only)',
        ],
    },
    Saturday: {
        Brunch: [
            'Blueberry Pancakes M/W/S',
            'Lil Smokies',
            'Tater Tots',
            'Vegetable Noodle Soup W',
            'Chicken Tortilla Soup S/W',
            "Chef's Choice",
        ],
        Dinner: [
            'Vegetable Noodle Soup W',
            'Chicken Tortilla Soup S/W',
            'Shrimp Fried Rice S/W/SF-C',
            'Peruvian Chicken',
            'Sweet Potato and Cauliflower Stew',
        ],
    },
    Sunday: {
        Brunch: [
            'French Toast Sticks E/M/W/S',
            'Sausage Links',
            'Hash Brown Patty',
            'Beef and Rice Soup',
            'Potato Leek  Soup M/S/W',
            "Chef's Choice",
        ],
        Dinner: [
            'Beef and Rice Soup',
            'Potato Leek Soup M/S/W',
            'Beijing Beef S/W/SF-C (Beachside only)',
            'Chicken Taquitos S/M/W',
            'The Buddha Bowl',
        ],
    },
};