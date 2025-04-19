const specials = [
    {
      name: "Lobster Thermidor",
      description: "Succulent lobster baked in creamy wine sauce.",
      image: "media/lobster.jpeg"
    },
    {
      name: "Duck à l’Orange",
      description: "Classic French dish with sweet citrus glaze.",
      image: "media/duck.jpeg"
    },
    {
      name: "Wagyu Beef Steak",
      description: "A5 Japanese Wagyu grilled to perfection.",
      image: "media/wagyu.jpeg"
    },
    {
      name: "Saffron Paella",
      description: "Spanish rice with prawns, mussels, and saffron.",
      image: "media/paella.jpeg"
    }
  ];
  
  let currentSlide = 0;
  
  function renderSpecials() {
    const wrapper = $(".carousel-wrapper");
    wrapper.empty();
    const special = specials[currentSlide];
    const card = `
      <div class="special-card">
        <img src="${special.image}" alt="${special.name}">
        <h3>${special.name}</h3>
        <p>${special.description}</p>
      </div>
    `;
    wrapper.html(card);
  }
  
  $(document).ready(function() {
    renderSpecials();
  
    $("#prevBtn").click(function() {
      currentSlide = (currentSlide - 1 + specials.length) % specials.length;
      renderSpecials();
    });
  
    $("#nextBtn").click(function() {
      currentSlide = (currentSlide + 1) % specials.length;
      renderSpecials();
    });
  });
  