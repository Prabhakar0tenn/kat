// 50 cat breeds: name, short description, fun facts
const catBreeds = [
    {
      name: "Persian",
      description: "Calm, dignified, and docile, known for their long, luxurious coats.",
      facts: [
        "They originated in ancient Persia (modern-day Iran).",
        "They’re one of the oldest cat breeds."
      ]
    },
    {
      name: "Maine Coon",
      description: "Large, friendly, and playful, often referred to as 'gentle giants.'",
      facts: [
        "They’re the official state cat of Maine (USA).",
        "They can weigh up to 18 pounds or more."
      ]
    },
    {
      name: "Exotic Shorthair",
      description: "Laid-back, sweet, and basically a Persian with a shorter coat.",
      facts: [
        "They’re known as the ‘lazy man’s Persian.’",
        "They have round faces with a sweet expression."
      ]
    },
    {
      name: "Siamese",
      description: "Elegant, affectionate, and strikingly intelligent, often with color-point coats.",
      facts: [
        "They’re famous for their vocal, chatty nature.",
        "Their coat darkens in cooler areas of their body."
      ]
    },
    {
      name: "Ragdoll",
      description: "Docile, affectionate, and large, known to go limp when picked up (like a ragdoll).",
      facts: [
        "They often have striking blue eyes.",
        "They were developed in California in the 1960s."
      ]
    },
    {
      name: "British Shorthair",
      description: "Easygoing, sturdy, and calm, with a plush coat and round face.",
      facts: [
        "The famous Cheshire Cat from 'Alice in Wonderland' was inspired by a British Shorthair.",
        "They’re one of the oldest English cat breeds."
      ]
    },
    {
      name: "Sphynx",
      description: "Hairless, inquisitive, and friendly, known for their wrinkled skin and big ears.",
      facts: [
        "They’re not truly hairless; they have a fine peach-fuzz coat.",
        "They need regular baths because they produce normal cat oils without fur to absorb it."
      ]
    },
    {
      name: "Scottish Fold",
      description: "Sweet, calm, and known for their folded ears that give an owl-like appearance.",
      facts: [
        "Their ear fold is due to a genetic mutation.",
        "They often sit in a 'Buddha' position, which looks hilarious."
      ]
    },
    {
      name: "Bengal",
      description: "Active, confident, and playful, with a striking leopard-like coat.",
      facts: [
        "They’re a hybrid of domestic cats and the Asian leopard cat.",
        "They often enjoy playing in water."
      ]
    },
    {
      name: "Birman",
      description: "Gentle, sociable, and known for their striking blue eyes and color-point coat with white paws.",
      facts: [
        "They’re sometimes called the ‘Sacred Cat of Burma.’",
        "Legend says they got their blue eyes from a temple goddess."
      ]
    },
    {
      name: "Abyssinian",
      description: "Energetic, intelligent, and curious, often called the 'clowns' of the cat kingdom.",
      facts: [
        "They have a ticked coat that gives a wildcat look.",
        "They might have originated near the Nile River."
      ]
    },
    {
      name: "American Shorthair",
      description: "Adaptable, friendly, and low-maintenance, descended from European cats brought to North America.",
      facts: [
        "They were prized for rodent control on early American ships.",
        "They come in over 80 different coat colors and patterns."
      ]
    },
    {
      name: "Oriental Shorthair",
      description: "Lively, talkative, and slender, related to the Siamese but with more coat color variations.",
      facts: [
        "They can come in over 300 color and pattern combos.",
        "They’re known for their large, bat-like ears."
      ]
    },
    {
      name: "Devon Rex",
      description: "Impish, mischievous, and outgoing, with large ears and a wavy coat.",
      facts: [
        "They’re sometimes called ‘pixie cats’ due to their elfin looks.",
        "They have fragile, short, curly whiskers."
      ]
    },
    {
      name: "Himalayan",
      description: "A cross between Persian and Siamese, calm with color-point patterns and blue eyes.",
      facts: [
        "They’re essentially Persians with Siamese markings.",
        "Their name is derived from their resemblance to Himalayan rabbits."
      ]
    },
    {
      name: "Burmese",
      description: "Playful, affectionate, and people-oriented, with a sleek, sable-like coat.",
      facts: [
        "They originated from Burma (Myanmar).",
        "They love being close to their humans."
      ]
    },
    {
      name: "Tonkinese",
      description: "Sociable, playful, and vocal, a blend of Burmese and Siamese traits.",
      facts: [
        "They have beautiful aqua-colored eyes.",
        "They’re very chatty and love attention."
      ]
    },
    {
      name: "Siberian",
      description: "Majestic, agile, and intelligent, with a thick triple-layer coat for cold climates.",
      facts: [
        "They’re native to Russia’s Siberian forests.",
        "They’re considered hypoallergenic due to lower Fel d1 protein."
      ]
    },
    {
      name: "Norwegian Forest Cat",
      description: "Robust, friendly, and calm, adapted to Norway’s cold weather with a thick coat.",
      facts: [
        "They’re called 'skogkatt' in Norway, meaning ‘forest cat.’",
        "They’re believed to be the cats of Viking legends."
      ]
    },
    {
      name: "Russian Blue",
      description: "Gentle, reserved, and intelligent, with a plush blue-gray coat and vivid green eyes.",
      facts: [
        "They’re sometimes called the ‘Archangel Cat,’ from Archangel Isles in Russia.",
        "They’re known for being quiet and loyal."
      ]
    },
    {
      name: "Selkirk Rex",
      description: "Easygoing, patient, and curly-coated, sometimes called the ‘cat in sheep’s clothing.’",
      facts: [
        "They have a naturally curly coat due to a genetic mutation.",
        "They can be either shorthaired or longhaired."
      ]
    },
    {
      name: "Turkish Angora",
      description: "Graceful, playful, and often white with striking eyes (sometimes odd-eyed).",
      facts: [
        "They originated in the Ankara region of Turkey.",
        "They’re one of the oldest natural cat breeds."
      ]
    },
    {
      name: "Turkish Van",
      description: "Active, strong swimmers, often white with color on the head and tail.",
      facts: [
        "They love water, earning them the nickname ‘Swimming Cats.’",
        "They hail from the Lake Van region in Turkey."
      ]
    },
    {
      name: "Chartreux",
      description: "Quiet, sweet, and observant, with a dense, blue-gray coat and copper eyes.",
      facts: [
        "They’re a historic French breed rumored to have been kept by Carthusian monks.",
        "They rarely meow and are known for their silent nature."
      ]
    },
    {
      name: "Ragamuffin",
      description: "Affectionate, gentle, and large, closely related to Ragdolls.",
      facts: [
        "They often go limp when cuddled, similar to Ragdolls.",
        "They can weigh over 20 pounds."
      ]
    },
    {
      name: "Balinese",
      description: "Essentially a long-haired Siamese, graceful, intelligent, and vocal.",
      facts: [
        "Their name is inspired by the graceful dancers of Bali.",
        "They have silky, plumed tails."
      ]
    },
    {
      name: "Manx",
      description: "Tailless (or short-tailed), playful, and known for their rabbit-like hopping gait.",
      facts: [
        "They come from the Isle of Man, where a genetic mutation caused taillessness.",
        "They can have various tail lengths: rumpy, riser, stumpy, or longy."
      ]
    },
    {
      name: "Cornish Rex",
      description: "Athletic, wavy-coated, and curious, with large ears and a sleek body.",
      facts: [
        "They have only the soft undercoat (down hair).",
        "They originated in Cornwall, England."
      ]
    },
    {
      name: "American Curl",
      description: "Distinctive backward-curling ears, affectionate, and curious.",
      facts: [
        "Their ear curl is a spontaneous mutation discovered in California.",
        "Kittens are born with straight ears that begin to curl within days."
      ]
    },
    {
      name: "Somali",
      description: "Fox-like appearance, energetic, and playful, a long-haired version of the Abyssinian.",
      facts: [
        "They’re called the ‘Little Red Fox’ of the cat world.",
        "They love climbing and exploring high places."
      ]
    },
    {
      name: "LaPerm",
      description: "Unique curly or wavy coat, friendly, and outgoing, with a playful nature.",
      facts: [
        "They originated on a farm in Oregon due to a spontaneous mutation.",
        "Kittens can be born bald and develop curls later."
      ]
    },
    {
      name: "Snowshoe",
      description: "A Siamese-type cat with white paws, affectionate, and playful.",
      facts: [
        "They were created in the 1960s in Philadelphia by crossing Siamese and bi-color American Shorthairs.",
        "They have distinctive ‘snow-white’ feet."
      ]
    },
    {
      name: "Japanese Bobtail",
      description: "Energetic, curious, and recognized by their short, pom-pom tail.",
      facts: [
        "They’re considered a symbol of good luck in Japan (like the Maneki-neko).",
        "Their tails are unique, like human fingerprints."
      ]
    },
    {
      name: "Singapura",
      description: "Tiny, playful, and mischievous, often cited as the smallest domestic cat breed.",
      facts: [
        "They’re named after the Malaysian word for Singapore.",
        "They have big eyes and ears compared to their body size."
      ]
    },
    {
      name: "Ocicat",
      description: "Spotted, athletic, and social, bred to look like an ocelot but without wild DNA.",
      facts: [
        "They were created from Siamese, Abyssinian, and American Shorthair crosses.",
        "They’re the only spotted domestic cat selectively bred for spots."
      ]
    },
    {
      name: "Savannah",
      description: "Tall, slender, and exotic, a hybrid of domestic cats and the African serval.",
      facts: [
        "They can jump up to 8 feet high from a standing position.",
        "Their ownership is regulated in some places due to their wild ancestry."
      ]
    },
    {
      name: "Munchkin",
      description: "Short-legged, outgoing, and playful, sometimes called the 'Corgis of the cat world.'",
      facts: [
        "Their short legs are caused by a natural genetic mutation.",
        "They move around like ferrets, with a cute little waddle."
      ]
    },
    {
      name: "Egyptian Mau",
      description: "Graceful, fast, and naturally spotted, believed to be descended from ancient Egyptian cats.",
      facts: [
        "They can run up to 30 mph, making them one of the fastest domestic cats.",
        "They’re often depicted in ancient Egyptian art."
      ]
    },
    {
      name: "Havana Brown",
      description: "Rare, chocolate-brown coat, gentle, and talkative.",
      facts: [
        "They were developed by crossing Siamese with black domestic shorthairs.",
        "They have unique muzzle shapes described as a ‘corn cob.’"
      ]
    },
    {
      name: "Khao Manee",
      description: "White, often odd-eyed, from Thailand, known as the ‘Diamond Eye’ cat.",
      facts: [
        "They were once kept by Thai royalty and considered good luck.",
        "Their name means ‘White Gem’ in Thai."
      ]
    },
    {
      name: "Selkirk Rex",
      description: "Relaxed, plush, curly coat, sometimes nicknamed the ‘Sheep Cat.’",
      facts: [
        "They’re one of the few cat breeds with curly fur from a dominant gene.",
        "Originated from a single rescue cat in Montana."
      ]
    },
    {
      name: "Pixie-bob",
      description: "Bobtailed, rugged, and dog-like personality, rumored to have wild bobcat heritage (though unproven).",
      facts: [
        "They often enjoy leash walks and playing fetch.",
        "They can have polydactyl feet (extra toes)."
      ]
    },
    {
      name: "American Bobtail",
      description: "Short-tailed, athletic, and affectionate, often called the ‘golden retriever of cats.’",
      facts: [
        "They were developed in the 1960s from a short-tailed stray found in Arizona.",
        "Their tail length varies from barely visible to half the length of a normal tail."
      ]
    },
    {
      name: "Napoleon (Minuet)",
      description: "A cross between Munchkin and Persian, short-legged, sweet, and cuddly.",
      facts: [
        "Named after Napoleon due to the short stature (though ironically Napoleon wasn’t actually short).",
        "They have a round face and big eyes, giving a kitten-like appearance."
      ]
    },
    {
      name: "Peterbald",
      description: "Russian origin, can be hairless or have a short coat, graceful and affectionate.",
      facts: [
        "They’re a mix of Donskoy and Oriental Shorthair cats.",
        "They can have various coat textures: bald, flock, velour, brush, or straight."
      ]
    },
    {
      name: "American Wirehair",
      description: "Rare, wiry coat, playful, and easygoing, originated from a random mutation in New York.",
      facts: [
        "Their wiry coat is unique among cat breeds.",
        "They’re closely related to the American Shorthair."
      ]
    },
    {
      name: "Bombay",
      description: "All-black coat, golden eyes, often called the ‘mini-panther.’",
      facts: [
        "They were created to resemble a black panther.",
        "They’re known for their outgoing, playful nature."
      ]
    },
    {
      name: "Nebelung",
      description: "Long-haired Russian Blue type, gentle, and reserved, with a silky blue coat.",
      facts: [
        "Their name comes from the German word ‘Nebel,’ meaning ‘mist’ or ‘fog.’",
        "They have a distinct long, dense undercoat."
      ]
    }
  ];
  
  // DOM references
  const container = document.getElementById("cat-breed-container");
  const searchInput = document.getElementById("search-input");
  
  // Modal references
  const modal = document.getElementById("cat-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalFacts = document.getElementById("modal-facts");
  
  /**
   * Renders the cat breed cards into the grid.
   */
  function displayCatBreeds(breeds) {
    container.innerHTML = "";
    breeds.forEach((breed, index) => {
      // Create the card
      const card = document.createElement("div");
      card.classList.add("cat-card");
  
      // Real cat images using cataas.com
      // Each breed gets a "random" param to help produce a unique image.
      // Example: https://cataas.com/cat/cute?width=500&height=280&random=1
      const img = document.createElement("img");
      img.src = `https://cataas.com/cat/cute?width=500&height=280&random=${index + 1}`;
      img.alt = breed.name;
  
      // Content
      const cardContent = document.createElement("div");
      cardContent.classList.add("cat-card-content");
  
      const title = document.createElement("h2");
      title.textContent = breed.name;
  
      const desc = document.createElement("p");
      desc.textContent = breed.description;
  
      // Append to card
      cardContent.appendChild(title);
      cardContent.appendChild(desc);
      card.appendChild(img);
      card.appendChild(cardContent);
      container.appendChild(card);
  
      // Click event to open modal with extra info
      card.addEventListener("click", () => openModal(breed, index));
    });
  }
  
  /**
   * Opens the modal and populates it with the breed's data.
   */
  function openModal(breed, index) {
    // Larger image in modal
    // Example: https://cataas.com/cat/cute?width=600&height=400&random=1
    modalImg.src = `https://cataas.com/cat/cute?width=600&height=400&random=${index + 1}`;
    modalTitle.textContent = breed.name;
    modalDescription.textContent = breed.description;
  
    // Clear previous facts
    modalFacts.innerHTML = "";
    // Populate new facts
    breed.facts.forEach((fact) => {
      const li = document.createElement("li");
      li.textContent = fact;
      modalFacts.appendChild(li);
    });
  
    // Show the modal
    modal.style.display = "block";
  }
  
  // Event listener to close the modal
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  // Close the modal if user clicks outside the modal-content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  
  // Search functionality
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredBreeds = catBreeds.filter(breed =>
      breed.name.toLowerCase().includes(query)
    );
    displayCatBreeds(filteredBreeds);
  });
  
  // Initial display of all cat breeds
  displayCatBreeds(catBreeds);
  