// Signature Dishes
const menuItems1 = [
    {
      name: "Truffle Mushroom Risotto",
      price: "$24.99",
      description: "Creamy risotto with wild mushrooms and shaved truffle.",
      image: "../media/risotto.jpeg"
    },
    {
      name: "Grilled Salmon Teriyaki",
      price: "$28.50",
      description: "Fresh Atlantic salmon glazed with teriyaki sauce.",
      image: "../media/salmon.jpeg"
    },
    {
      name: "Roasted Beet Salad",
      price: "$14.00",
      description: "Mixed greens, roasted beets, goat cheese, and walnuts.",
      image: "../media/salad.jpeg"
    },
    {
      name: "Classic Margherita Pizza",
      price: "$18.00",
      description: "San Marzano tomatoes, mozzarella, and fresh basil.",
      image: "../media/pizza.jpeg"
    }
  ];
  // Breakfast Menu Items
const menuItems2 = [
    {
      name: "Pancakes with Maple Syrup",
      price: "$15.00",
      description: "Fluffy pancakes served with maple syrup and butter.",
      image: "../media/pancakes.jpeg"
    },
    {
      name: "Avocado Toast",
      price: "$12.50",
      description: "Fresh avocado on toasted sourdough with a sprinkle of chili flakes.",
      image: "../media/avocado-toast.jpeg"
    },
    {
      name: "Eggs Benedict",
      price: "$18.00",
      description: "Poached eggs, ham, and hollandaise sauce on an English muffin.",
      image: "../media/eggs-benedict.jpeg"
    }
  ];
  
  // Lunch Menu Items
  const menuItems3 = [
    {
      name: "Grilled Chicken Caesar Salad",
      price: "$20.00",
      description: "Grilled chicken breast with a classic Caesar salad.",
      image: "../media/caesar-salad.jpeg"
    },
    {
      name: "Beef Burger",
      price: "$22.00",
      description: "Juicy beef patty with lettuce, tomato, and special sauce.",
      image: "../media/beef-burger.jpeg"
    },
    {
      name: "Vegetarian Wrap",
      price: "$18.50",
      description: "Wrap filled with mixed vegetables, hummus, and feta cheese.",
      image: "../media/vegetarian-wrap.jpeg"
    }
  ];
  
  // Dinner Menu Items
  const menuItems4 = [
    {
      name: "Lamb Shank with Mint Sauce",
      price: "$30.00",
      description: "Slow-cooked lamb shank with a fresh mint sauce.",
      image: "../media/lamb-shank.jpeg"
    },
    {
      name: "Seared Duck Breast",
      price: "$32.00",
      description: "Seared duck breast with a berry reduction sauce.",
      image: "../media/duck-breast.jpeg"
    },
    {
      name: "Vegetable Paella",
      price: "$24.00",
      description: "Spanish rice dish with a medley of seasonal vegetables.",
      image: "../media/vegetable-paella.jpeg"
    }
  ];
  
  // Drinks Menu Items
  const menuItems5 = [
    {
      name: "Mojito",
      price: "$10.00",
      description: "Fresh mint, rum, lime juice, soda water, and sugar.",
      image: "../media/mojito.jpeg"
    },
    {
      name: "Red Wine",
      price: "$12.00",
      description: "Full-bodied red wine, rich in flavor.",
      image: "../media/red-wine.jpeg"
    },
    {
      name: "Cappuccino",
      price: "$5.50",
      description: "Espresso topped with steamed milk and foam.",
      image: "../media/cappuccino.jpeg"
    }
  ];
  
  $(document).ready(function() {
    const container1 = $("#menu-container1");
    const container2 = $("#menu-container2");
    const container3 = $("#menu-container3");
    const container4 = $("#menu-container4");
    const container5 = $("#menu-container5");
  
    menuItems1.forEach(item => {
      const card = `
        <div class="menu-item">
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p class="price">${item.price}</p>
          <p class="desc">${item.description}</p>
        </div>
      `;
      container1.append(card);
    });
    menuItems2.forEach(item => {
        const card = `
          <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            <p class="desc">${item.description}</p>
          </div>
        `;
        container2.append(card);
      });
      menuItems3.forEach(item => {
        const card = `
          <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            <p class="desc">${item.description}</p>
          </div>
        `;
        container3.append(card);
      });
      menuItems4.forEach(item => {
        const card = `
          <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            <p class="desc">${item.description}</p>
          </div>
        `;
        container4.append(card);
      });
      menuItems5.forEach(item => {
        const card = `
          <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            <p class="desc">${item.description}</p>
          </div>
        `;
        container5.append(card);
      });
    
  });
  