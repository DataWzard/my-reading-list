const library = [
  {
    category: "Quantum Physics & Computing",
    accent: "#72d6ff",
    books: [
      book("Quantum: A Guide for the Perplexed", "Jim Al-Khalili", true, "A clear, humane doorway into quantum strangeness without sanding off the mystery."),
      book("Quantum Computing: The Transformative Technology of the Qubit Revolution", "Brian Clegg", false, "A practical bridge between the weird physics and the technology it makes possible."),
      book("Quantum Supremacy", "Michio Kaku", false, "Big-scope futurism with enough theatrical sparkle to make the frontier feel close."),
      book("Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime", "Sean Carroll", true, "A bold many-worlds journey that makes reality feel larger than the everyday room around us."),
      book("Helgoland: Making Sense of the Quantum Revolution", "Carlo Rovelli", false, "Philosophical, compact, and wonderfully strange in the way good physics writing can be."),
      book("The Little Book of String Theory", "Steven S. Gubser", false, "A small volume that opens a surprisingly tall door into strings, dimensions, and elegance."),
      book("The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory of Everything", "Brian Greene", false, "A classic guided tour through the architecture of modern theoretical physics.")
    ]
  },
  {
    category: "Mathematics",
    accent: "#f8c85a",
    books: [
      book("The Joy of X: A Guided Tour of Math, from One to Infinity", "Steven Strogatz", true, "Playful, generous, and perfect for remembering that math can feel like discovery."),
      book("Infinite Powers: How Calculus Reveals the Secrets of the Universe", "Steven Strogatz", false, "Calculus becomes a lens for motion, change, and the hidden machinery of the world."),
      book("Game Theory: Understanding the Mathematics of Life", "Brian Clegg", true, "A compact strategy spellbook for choices, incentives, and human behavior."),
      book("Shape: The Hidden Geometry of Information, Biology, Strategy, Democracy, and Everything", "Jordan Ellenberg", false, "Geometry as a secret language running under wildly different parts of life."),
      book("How Not to Be Wrong: The Power of Mathematical Thinking", "Jordan Ellenberg", false, "A sharp reminder that math is often a way of noticing traps before stepping in them."),
      book("Why Machines Learn: The Elegant Math Behind Modern AI", "Anil Ananthaswamy", false, "A timely path into the math underneath modern machine intelligence."),
      book("A Mind for Numbers: How to Excel at Math and Science", "Barbara Oakley", false, "Practical learning advice that makes hard subjects feel more approachable."),
      book("Math Without Numbers", "Milo Beckman", true, "A charming proof that mathematical thinking is bigger than arithmetic."),
      book("A Combinatorial Introduction to Topology", "Michael Henle", false, "A deeper shelf pick for when shapes, spaces, and structure start calling."),
      book("The Model Thinker: What You Need to Know to Make Data Work for You", "Scott E. Page", false, "A toolkit for seeing the same problem through many useful lenses."),
      book("Mathematica: A Secret World of Intuition and Curiosity", "David Bessis", false, "A book about mathematical intuition that treats curiosity as a craft."),
      book("Thinking Better: The Art of the Shortcut in Math and Life", "Marcus du Sautoy", true, "Elegant shortcuts, clever patterns, and the pleasure of a well-placed mental lever."),
      book("Our Mathematical Universe: My Quest for the Ultimate Nature of Reality", "Max Tegmark", false, "A grand speculative climb from equations to the fabric of reality.")
    ]
  },
  {
    category: "Physics & Cosmology",
    accent: "#b69cff",
    books: [
      book("Life 3.0: Being Human in the Age of Artificial Intelligence", "Max Tegmark", true, "A cosmic-scale look at intelligence, agency, and what kind of future we might build."),
      book("Physics of the Impossible", "Michio Kaku", false, "A fun catalog of impossible ideas sorted by how reality might someday bend."),
      book("The God Particle", "Leon Lederman and Dick Teresi", true, "Particle physics with story, swagger, and a sense of historical chase."),
      book("Hyperspace: A Scientific Odyssey Through Parallel Universes, Time Warps, and the Tenth Dimension", "Michio Kaku", false, "Big dimensional thinking wrapped in cinematic scientific imagination."),
      book("The Copernicus Complex", "Caleb Scharf", false, "A thoughtful look at whether we are ordinary, special, or something subtler in the cosmos."),
      book("The Little Book of Black Holes", "Steven S. Gubser and Frans Pretorius", true, "Dense cosmic objects explained with admirable clarity and compact force."),
      book("Black Holes: The Key to Understanding the Universe", "Brian Cox and Jeff Forshaw", false, "Black holes as a gateway to gravity, information, and the universe's deepest rules."),
      book("Why Does E=mc²? (And Why Should We Care?)", "Brian Cox and Jeff Forshaw", false, "A patient route from one famous equation to the worldview behind it."),
      book("Gravity's Engines: How Bubble-Blowing Black Holes Rule Galaxies, Stars, and Life in the Cosmos", "Caleb Scharf", true, "A vivid case for black holes as active makers of cosmic history.")
    ]
  },
  {
    category: "Intelligence & Information",
    accent: "#73e0b5",
    books: [
      book("Age of Invisible Machines: A Practical Guide for Creating a Hyperautomated Ecosystem of Intelligent Digital Workers", "Robb Wilson", true, "A practical map for thinking about automation as an ecosystem rather than a pile of tools."),
      book("A Brief History of Intelligence: Evolution, AI, and the Five Breakthroughs That Made Our Brains", "Max S. Bennett", false, "Evolutionary perspective that makes intelligence feel built, layered, and contingent."),
      book("The Ascent of Information", "Caleb Scharf", false, "Information treated as a force shaping life, mind, and the universe."),
      book("A Thousand Brains: A New Theory of Intelligence", "Jeff Hawkins", false, "A compelling model of intelligence grounded in cortical structure and prediction."),
      book("How to Create a Mind: The Secret of Human Thought Revealed", "Ray Kurzweil", false, "Ambitious pattern-based thinking about minds, machines, and cognition.")
    ]
  },
  {
    category: "Engineering & Design",
    accent: "#ff8f70",
    books: [
      book("The Design of Everyday Things", "Don Norman", true, "A foundational reminder that good design feels obvious only after someone has done the hard thinking.")
    ]
  },
  {
    category: "Memoir",
    accent: "#f2eefc",
    books: [
      book("Surely You're Joking, Mr. Feynman!", "Richard P. Feynman", true, "Curious, mischievous, and alive with the joy of noticing how things work."),
      book("On Writing: A Memoir of the Craft", "Stephen King", false, "Part memoir, part craft manual, and very good company for anyone making things with words.")
    ]
  }
];

function book(title, author, completed, comment) {
  const query = encodeURIComponent(`${title} ${author}`);
  const coverTitle = encodeURIComponent(title);
  const cover = `https://covers.openlibrary.org/b/title/${coverTitle}-L.jpg?default=false`;

  return {
    title,
    author,
    completed,
    comment,
    cover,
    spine: cover,
    link: `https://www.google.com/search?tbm=bks&q=${query}`
  };
}
