document.addEventListener("DOMContentLoaded", () => {
  new WOW().init();
  // Create navbar dynamically
  const navbar = document.createElement("nav");
  navbar.className =
    "flex justify-between items-center bg-transparent fixed top-0 left-0 w-full";

  const container = document.createElement("div");
  container.className = "container flex justify-between items-center mx-auto"; // Use flex utilities for layout

  // Logo
  const logoLink = document.createElement("a");
  logoLink.className = "navbar-brand";

  const logoImg = document.createElement("img");
  logoImg.src = "/Assets/images/logo.png";
  logoImg.alt = "Logo";
  logoImg.className = "h-12"; // Set height for logo
  logoLink.appendChild(logoImg);
  container.appendChild(logoLink);

  // Navbar Links
  const navLinksList = document.createElement("ul");
  navLinksList.className = "flex space-x-5 text-white relative"; // Use flex utilities for navbar links

  const navLinksText = [
    "RETAILTECH",
    "INSURTECH",
    "BIZSUPPORT",
    "OUR COMPANY",
    "CONTACT US",
  ];
  navLinksText.forEach((text) => {
    const navItem = document.createElement("li");
    navItem.className = "nav-item relative";

    const navLink = document.createElement("a");
    navLink.className = "nav-link";
    navLink.href = "#";
    navLink.textContent = text;
    navLink.style.color = "white";

    // Check if the nav item should be collapsible
    if (text === "RETAILTECH" || text === "BIZSUPPORT") {
      const subMenu = document.createElement("ul");
      subMenu.style.width = `150px`;
      subMenu.className =
        "sub-menu hidden absolute bg-white p-2 shadow-lg rounded-md top-full left-0"; // Initially hide the submenu
      const subItems = ["Sub-Item 1", "Sub-Item 2", "Sub-Item 3"];
      subItems.forEach((subText) => {
        const subItem = document.createElement("li");

        const subLink = document.createElement("a");
        subLink.href = "#";
        subLink.style.color = "black";
        subLink.textContent = subText;
        subItem.appendChild(subLink);
        subMenu.appendChild(subItem);
      });

      navItem.appendChild(subMenu);

      // Add hover event to toggle submenu visibility
      navItem.addEventListener("mouseenter", () => {
        subMenu.classList.remove("hidden");
        subMenu.classList.add("block");
      });

      navItem.addEventListener("mouseleave", () => {
        subMenu.classList.remove("block");
        subMenu.classList.add("hidden");
      });
    }

    navItem.appendChild(navLink);
    navLinksList.appendChild(navItem);
  });

  container.appendChild(navLinksList);

  // Profile Icon (Replace with your actual profile icon)
  const profileLink = document.createElement("a");
  profileLink.className = "nav-link";

  const profileImg = document.createElement("img");
  profileImg.src = "path/to/profile-icon.png";
  profileImg.alt = "Profile";
  profileImg.className = "h-8 rounded-full"; // Set height and rounded style
  profileLink.appendChild(profileImg);
  container.appendChild(profileLink);

  navbar.appendChild(container);
  document.body.appendChild(navbar);

  // Video Background
  const videoContainer = document.getElementById("videoContainer");
  const video = document.createElement("video");
  video.className = "w-full h-full object-cover absolute top-0 left-0 z-0";
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.innerHTML = "Your browser does not support the video tag.";

  const source = document.createElement("source");
  source.src = "/Assets/Videoes/home.mp4";
  source.type = "video/mp4";
  video.appendChild(source);

  videoContainer.appendChild(video);

  // Overlay for dark effect
  const overlay = document.createElement("div");
  overlay.className = "absolute inset-0 bg-black opacity-50";
  videoContainer.appendChild(overlay);

  // Slider Animation
  const sliderContent = [
    {
      header: "Welcome to Our Website",
      text: "Explore our services and discover more.",
    },
    { header: "About Us", text: "Learn about our company and our mission." },
    {
      header: "Our Services",
      text: "Discover the range of services we offer.",
    },
  ];

  const slider = document.createElement("div");
  slider.className =
    "absolute inset-0 flex flex-col justify-center items-center text-white";
  slider.style.animation = "fade-in 1s ease-in-out";

  let currentIndex = 0;

  function animateSlider() {
    const currentSlide = sliderContent[currentIndex];

    const header = document.createElement("h1");
    header.textContent = currentSlide.header;
    header.className = "text-4xl font-bold mb-4"; // Set header styles

    const paragraph = document.createElement("p");
    paragraph.textContent = currentSlide.text;
    paragraph.className = "text-lg"; // Set paragraph styles

    slider.innerHTML = "";
    slider.appendChild(header);
    slider.appendChild(paragraph);

    // Reset slider animation properties
    slider.style.opacity = "0"; // Start with opacity 0 (hidden)
    slider.style.transform = "translateY(100%)"; // Start from bottom of the container

    videoContainer.appendChild(slider);

    // Trigger reflow to apply initial CSS properties before animating
    void slider.offsetWidth;

    // Apply fade-in and slide-up animation
    slider.style.transition = "opacity 0.5s ease, transform 1s ease";
    slider.style.opacity = "1"; // Fade in (show) the slider
    slider.style.transform = "translateY(0)"; // Slide up to original position

    currentIndex = (currentIndex + 1) % sliderContent.length;

    setTimeout(() => {
      // Apply fade-out animation before removing the slider
      slider.style.transition = "opacity 0.5s ease, transform 1s ease";
      slider.style.opacity = "0"; // Fade out (hide) the slider
      slider.style.transform = "translateY(-100%)"; // Slide up (offscreen)

      setTimeout(() => {
        slider.remove(); // Remove the slider element after fading out
        animateSlider(); // Show next slide
      }, 500); // Delay before removing slider (match fade-out duration)
    }, 5000); // Delay before hiding current slide
  }

  animateSlider();
  createFeatureSlider();
  createAboutUs();
});

function createFeatureSlider() {
  // const sliderContainer = document.createElement("div");
  // sliderContainer.style.position = "relative";
  // sliderContainer.style.width = "100%";
  // sliderContainer.style.height = "500px";
  const imageUrls = [
    { url: "/Assets/images/01.gif", headertext: "Slide 1" },
    { url: "/Assets/images/02.gif", headertext: "Slide 2" },
    { url: "/Assets/images/03.gif", headertext: "Slide 3" },
    { url: "/Assets/images/01.gif", headertext: "Slide 1" },
    { url: "/Assets/images/02.gif", headertext: "Slide 2" },
    { url: "/Assets/images/03.gif", headertext: "Slide 3" },
  ];

  // const imageUrls = [
  //   "/Assets/images/usiic.png",
  //   "/Assets/images/g-tech.png",
  //   "/Assets/images/iso.png",
  //   "/Assets/images/microsoft.png",
  //   "/Assets/images/nasscom-1.png",
  //   "https://swiperjs.com/demos/images/nature-6.jpg",
  //   "https://swiperjs.com/demos/images/nature-7.jpg",
  //   "https://swiperjs.com/demos/images/nature-8.jpg",
  //   "https://swiperjs.com/demos/images/nature-9.jpg",
  // ];

  // Create a new swiper container
  const swiperParentContainer = document.createElement("div");
  swiperParentContainer.style.height = "500px";
  swiperParentContainer.style.display = "flex";
  swiperParentContainer.style.position='relative';
  swiperParentContainer.style.justifyContent = "center";
  swiperParentContainer.style.alignItems = "center";
  const swiperContainer = document.createElement("div");
  swiperContainer.classList.add("myswiper1");
  swiperContainer.setAttribute('id','swiper-contaner3')
  swiperContainer.style.height = "100%";
  swiperContainer.style.width = "80%";
  swiperContainer.style.height = "100%";
  swiperContainer.style.position='absolute'
  swiperContainer.style.top='-120px'
  swiperContainer.style.overflowX = "hidden";

  // Create swiper wrapper inside the container
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");

  // Append swiper wrapper to swiper container
  swiperContainer.appendChild(swiperWrapper);

  // Populate swiper slides with images
  imageUrls.forEach(function (item) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.style.backgroundPosition = "center";
    slide.style.backgroundSize = "cover";
    //slide.style.width = "100px";
    slide.style.height = "400px";
    slide.style.borderRadius = "10px";
    slide.style.transition=` border-color 0.3s ease transform 0.3s ease`
    slide.style.border='4px solid transparent';
    slide.style.backgroundImage = `url('${item.url}')`;
    const header=document.createElement('h2');
    header.style.color='blue';
    header.classList.add('header-hidden');
    header.textContent=`${item.headertext}`
    slide.appendChild(header)
    swiperWrapper.appendChild(slide);
  });
  swiperParentContainer.appendChild(swiperContainer);
  // Append swiper container to the body
  document.body.appendChild(swiperParentContainer);

  // Initialize Swiper
  const swiper = new Swiper("#swiper-contaner3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    slidesPerGroup:1,
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 300,
      modifier: 2,
      slideShadows: true,
    },
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 800,
    on: {
      init: function () {
        // Initially show header text of the centered slide
        updateHeaderTextVisibility(this);
        // Adjust slide transition duration dynamically for smoother animation
        this.params.speed = 800; // Set desired transition duration (in milliseconds)
      },
      slideChangeTransitionEnd: function () {
        // Update header text visibility on slide change
        updateHeaderTextVisibility(this);
      },
      transitionEnd: function () {
        // Handle transition end (manual or automated)
        updateHeaderTextVisibility(this);
      },
    },
  });
  // Function to update header text visibility based on slide position
  function updateHeaderTextVisibility(swiperInstance) {
    var swiperRect = swiperInstance.el.getBoundingClientRect();
    var slides = swiperInstance.slides;

    slides.forEach(function (slide) {
      var header = slide.querySelector("h2");
      var slideRect = slide.getBoundingClientRect();

      // Check if the slide is centered horizontally
      var isCentered =
        slideRect.left >= swiperRect.left &&
        slideRect.right <= swiperRect.right;

      if (isCentered) {
        slide.style.border='4px solid #007bff'
        slide.style.transform= 'translateX(-5px)'
        header.classList.remove("header-hidden");
        header.classList.add("header-visible");
      } else {
        slide.style.border='4px solid transparent'
        header.classList.remove("header-visible");
        header.classList.add("header-hidden");
      }
    });
  }

}

function createAboutUs() {
  // Create About Us Container
  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.className = "about-us-container wow fadeIn";
  aboutUsContainer.style.padding = "0 20px"; // Add horizontal padding
  aboutUsContainer.style.margin = "5% 12%"; // Centered margin and auto width
  aboutUsContainer.setAttribute("data-wow-duration", "1s");
  aboutUsContainer.setAttribute("data-wow-delay", "0.5s");

  // About Us Header
  const aboutHeader = document.createElement("h6");
  aboutHeader.style.fontWeight = `700`;
  aboutHeader.textContent = "About Us";
  aboutHeader.style.fontSize = "2rem"; // Set font size
  aboutHeader.style.marginBottom = "20px"; // Margin below header
  aboutHeader.style.color = "#1e90ff"; // Light blue color

  // Append header to aboutUsContainer
  aboutUsContainer.appendChild(aboutHeader);

  // Gradient Horizontal Line
  const line = document.createElement("div");
  line.style.width = "100%"; // Line width
  line.style.height = "15px"; // Line height
  line.style.border = "none"; // No border
  line.style.backgroundImage = `url('/Assets/images/dot_line.png')`;
  line.style.marginBottom = "20px"; // Margin below line

  // Append line to aboutUsContainer
  aboutUsContainer.appendChild(line);

  // Create two-column layout container
  const columnsContainer = document.createElement("div");
  columnsContainer.className = "flex flex-wrap justify-center"; // Center columns on smaller screens
  columnsContainer.style.maxWidth = "100%"; // Ensure columns don't exceed container width

  // Left Column with Image Background
  const leftColumn = document.createElement("div");
  leftColumn.className = "w-full md:w-1/2 mb-4"; // Full width on small screens, half width on medium screens
  leftColumn.style.minHeight = "300px"; // Minimum height for column
  leftColumn.style.backgroundImage = "url('/Assets/images/about.png')";
  leftColumn.style.backgroundSize = "cover";

  // Append leftColumn to columnsContainer
  columnsContainer.appendChild(leftColumn);

  // Right Column with Text Content
  const rightColumn = document.createElement("div");
  rightColumn.className = "w-full md:w-1/2 px-4"; // Full width on small screens, half width on medium screens
  rightColumn.style.minHeight = "300px"; // Minimum height for column
  rightColumn.style.display = "flex";
  rightColumn.style.flexDirection = "column";
  rightColumn.style.justifyContent = "center"; // Vertically center content

  // Text Content Divs with 3D Shadow Effect
  const textData = [
    {
      header: "Our Story",
      content:
        "Our story began with a dream to build a collaborative ecosystem of talented techies and business enthusiasts to create innovative solutions to solve the challenges of small and medium enterprises globally.",
    },
    {
      header: "We Breathe Life into Your Ideas!",
      content:
        "We stand out as a global enterprise solution provider, with our innovation centre nestled in the heart of Silicon Valley, combined with our delivery hub strategically positioned in India. This powerful combination empowers us to seize the essence of groundbreaking ideas and seamlessly offer the latest technology with unmatched cost-efficiency. With these unique perspectives, we are able to formulate unique solutions for a variety of business domains and help businesses take control of their workflows and scale easily. We assist enterprises to integrate their processes with technology, e-optimising of their brands and trusted business support services.",
    },
  ];

  textData.forEach((data) => {
    const textDiv = document.createElement("div");
    textDiv.className = "shadow-3xl bg-white p-4 mb-4 rounded-lg wow fadeInUp";
    textDiv.setAttribute("data-wow-duration", "1s");
    textDiv.setAttribute("data-wow-delay", "0.5s");
    textDiv.style.opacity = "0.8"; // Faded effect
    textDiv.style.boxShadow = "0 0 2px wheat";
    const header = document.createElement("h3");
    header.textContent = data.header;
    header.className = "text-xl font-semibold mb-2"; // Margin below header

    const paragraph = document.createElement("p");
    paragraph.textContent = data.content;
    paragraph.className = "text-base leading-7"; // Adjust line spacing
    paragraph.style.textAlign = "justify";
    // Append header and paragraph to textDiv
    textDiv.appendChild(header);
    textDiv.appendChild(paragraph);

    // Append textDiv to rightColumn
    rightColumn.appendChild(textDiv);
  });

  // Append rightColumn to columnsContainer
  columnsContainer.appendChild(rightColumn);

  // Append columnsContainer to aboutUsContainer
  aboutUsContainer.appendChild(columnsContainer);

  // Create and append the vertical gradient line
  const verticalLine = document.createElement("div");
  verticalLine.className = "vertical-line hidden md:block"; // Initially hidden on small screens
  columnsContainer.appendChild(verticalLine);

  // Append columnsContainer to aboutUsContainer
  aboutUsContainer.appendChild(columnsContainer);

  // Append About Us Container to document body
  document.body.appendChild(aboutUsContainer);

  // Calculate positions for the vertical line endpoints
  const firstTextDiv = rightColumn.firstChild; // First textDiv in the right column
  const lastTextDiv = rightColumn.lastChild; // Last textDiv in the right column

  if (firstTextDiv && lastTextDiv) {
    const firstHeaderTop = firstTextDiv.offsetTop;
    const lastHeaderTop = lastTextDiv.offsetTop + lastTextDiv.offsetHeight;

    // Set the position and height of the vertical line
    //verticalLine.style.top = `${firstHeaderTop}px`;
    verticalLine.style.height = `${lastHeaderTop - firstHeaderTop}px`;

    // Apply gradient background to the vertical line
    verticalLine.style.backgroundImage = `linear-gradient(to bottom, #1e90ff, rgb(239 242 244))`;
    // Position circular endpoints at the headers
    //verticalLine.style.borderRadius = "50%"; // Circular endpoints
    verticalLine.style.width = "1px"; // Line width
    verticalLine.style.position = "absolute";
    verticalLine.style.left = "51%"; // Center the line
    verticalLine.style.transform = "translateX(-50%)"; // Center horizontally
    // Position circular endpoints at the headers
    const firstCircle = createCircleEndpoint(
      firstTextDiv.offsetTop - firstHeaderTop
    );
    const lastCircle = createCircleEndpoint(
      lastTextDiv.offsetTop + lastTextDiv.offsetHeight - firstHeaderTop
    );

    verticalLine.appendChild(firstCircle);
    verticalLine.appendChild(lastCircle);
  }
  createBanner();
}

// Helper function to create circular endpoint
function createCircleEndpoint(topOffset) {
  const circle = document.createElement("div");
  circle.style.position = "absolute";
  circle.style.top = `${topOffset}px`;
  circle.style.left = `47%`;
  circle.style.width = "10px";
  circle.style.height = "10px";
  circle.style.borderRadius = "50%";
  circle.style.backgroundColor = "#000";
  return circle;
}
function createBanner() {
  // Create Banner Container
  const bannerContainer = document.createElement("div");
  bannerContainer.className = "banner-container";
  bannerContainer.style.backgroundImage = "url('/Assets/images/banner_bg.jpg')";
  bannerContainer.style.backgroundSize = "cover";
  bannerContainer.style.height = "300px"; // Set height for the banner
  bannerContainer.style.position = "relative"; // Set position relative for absolute elements
  bannerContainer.style.zIndex = "-1";
  // Create Left Content Div
  const leftContent = document.createElement("div");
  leftContent.className = "left-content";
  leftContent.style.position = "absolute";
  leftContent.style.left = "0";
  leftContent.style.top = "0";
  leftContent.style.width = "100%"; // Take full width initially

  // Two-lined Header
  const headerText = document.createElement("div");
  headerText.style.color = "#fff";
  headerText.style.fontSize = "20px";

  //headerText.style.fontWeight = "bold";

  headerText.innerHTML =
    "Looking For High Quality<br>Services For Your Business?";
  headerText.style.marginTop = "50px";
  headerText.className = "text-base leading-7";
  leftContent.appendChild(headerText);

  // Paragraph
  const paragraphText = document.createElement("p");
  paragraphText.style.color = "#2fb4cb";
  paragraphText.style.fontSize = "16px";
  paragraphText.textContent = "We have a team to help you...!";
  paragraphText.style.marginTop = "10px";
  paragraphText.className = "text-base leading-7";
  leftContent.appendChild(paragraphText);

  // Button
  const button = document.createElement("button");
  button.textContent = "TALK TO OUR EXPERT";
  button.style.backgroundColor = "none";
  button.style.color = "#fff";
  button.style.border = "2px solid #fff";
  button.style.borderRadius = "5px";
  button.style.padding = "10px 30px";
  button.style.marginTop = "30px";
  button.style.cursor = "pointer";

  // Hover Effect for Button
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#fff";
    button.style.color = "#000";
  });

  // Hover Effect for Button
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "transparent";
    button.style.color = "#fff";
  });
  leftContent.appendChild(button);

  // Append Left Content Div to Banner Container
  bannerContainer.appendChild(leftContent);
  // Create Image Container (for medium and large screens)
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  imageContainer.style.position = "absolute";
  imageContainer.style.right = "10%"; // Adjust right positioning
  imageContainer.style.top = "50%"; // Center vertically
  imageContainer.style.transform = "translateY(-50%)";
  imageContainer.style.display = "flex";
  imageContainer.style.alignItems = "center";
  imageContainer.style.zIndex = "99";
  // Create Image 1
  const image1 = document.createElement("img");
  image1.src = "/Assets/images/google.png";
  image1.alt = "Image 1";
  image1.style.width = "160px"; // Adjust width as needed
  image1.style.marginRight = "160px"; // Add margin between images
  image1.style.backgroundColor = "#0F2C3A";
  imageContainer.appendChild(image1);

  // Create Image 2
  const image2 = document.createElement("img");
  image2.src = "/Assets/images/glassdoor.png";
  image2.alt = "Image 2";
  image2.style.width = "160px"; // Adjust width as needed
  image2.style.marginLeft = "60px"; // Add margin between images
  image2.style.backgroundColor = "#0F2C3A";
  imageContainer.appendChild(image2);

  // Append Image Container to Banner Container
  bannerContainer.appendChild(imageContainer);
  // Create Right Content Div (for medium and large screens)
  const rightContent = document.createElement("div");
  rightContent.className = "right-content";
  rightContent.style.position = "absolute";
  rightContent.style.right = "0";
  rightContent.style.top = "50%";
  rightContent.style.transform = "translateY(-50%)";
  rightContent.style.width = "65%";
  rightContent.style.height = "1px";
  rightContent.style.backgroundColor = "#1e90ff"; // Light blue color
  rightContent.style.display = "none"; // Initially hide for small screens
  rightContent.style.zIndex = "-1";
  setTimeout(() => {
    console.log(rightContent.offsetWidth);
    // Create small circles at intervals of 20px (for medium and large screens)
    const numCircles = Math.floor(rightContent.offsetWidth / 50);
    console.log(numCircles);
    for (let i = 1; i <= numCircles; i++) {
      const circle = document.createElement("div");
      circle.className = "circle";
      circle.style.position = "absolute";
      circle.style.width = "10px";
      circle.style.height = "10px";
      circle.style.borderRadius = "50%";
      circle.style.backgroundColor = "#1e90ff"; // Light blue color
      circle.style.left = `${i * 50}px`;
      circle.style.top = "-4px"; // Position above the line
      rightContent.appendChild(circle);
    }
  });

  // Append Right Content Div to Banner Container
  bannerContainer.appendChild(rightContent);

  // Append Banner Container to document body
  document.body.appendChild(bannerContainer);

  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function handleResponsiveLayout(mediaQuery) {
    if (mediaQuery.matches) {
      // For screens <= 768px width
      leftContent.style.width = "100%";
      headerText.style.fontSize = "16px";
      headerText.style.marginLeft = `10%`;
      paragraphText.style.fontSize = "12px";
      paragraphText.style.marginLeft = `10%`;
      button.style.fontSize = "14px";
      button.style.marginLeft = "10%";
      rightContent.style.display = "none"; // Show right content
      imageContainer.style.position = "relative"; // Reset position for images
      imageContainer.style.right = "auto"; // Reset right positioning
      imageContainer.style.top = "auto"; // Reset top positioning
      imageContainer.style.transform = "none"; // Reset transform
      imageContainer.style.display = "block"; // Display images as block (below leftContent)
      imageContainer.style.marginTop = "20px"; // Add margin from leftContent
    } else {
      // For screens > 768px width
      leftContent.style.width = "35%";
      headerText.style.fontSize = "20px";
      headerText.style.marginLeft = `40%`;
      paragraphText.style.fontSize = "16px";
      paragraphText.style.marginLeft = `40%`;
      button.style.fontSize = "16px";
      button.style.marginLeft = "41%";
      rightContent.style.display = "block"; // Show right content
      imageContainer.style.position = "absolute"; // Position images
      imageContainer.style.right = "10%"; // Adjust right positioning
      imageContainer.style.top = "50%"; // Center vertically
      imageContainer.style.transform = "translateY(-50%)";
      imageContainer.style.display = "flex"; // Display images inline
      imageContainer.style.marginTop = "0"; // Reset margin top
    }
  }

  // Initial call to set styles based on screen size
  handleResponsiveLayout(mediaQuery);

  // Listen for changes in screen size and adjust styles accordingly
  mediaQuery.addEventListener("change", handleResponsiveLayout);

  // Call the function to create the managed solutions section
  createManagedSolutionsSection();
}

// Ensure that everything is executed after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  new WOW().init(); // Initialize WOW.js animations
});

function createManagedSolutionsSection() {
  // Create Full Screen Container
  const fullScreenContainer = document.createElement("div");
  fullScreenContainer.className = "full-screen-container";
  fullScreenContainer.style.width = "100vw";
  fullScreenContainer.style.height = "100vh";
  //fullScreenContainer.style.backgroundColor = "#f2f2f2"; // Light background color
  fullScreenContainer.style.display = "flex";
  //fullScreenContainer.style.justifyContent = "center";
  fullScreenContainer.style.alignItems = "center";
  fullScreenContainer.style.flexDirection = "column";
  fullScreenContainer.style.overflow = "hidden"; // Hide overflow to prevent horizontal scroll

  // Header Text
  const headerText = document.createElement("h4");
  headerText.textContent = "MANAGED BUSINESS ";
  headerText.style.fontSize = "22px";
  headerText.style.color = "black"; // Dark text color
  headerText.style.marginTop = "20px";
  headerText.style.padding = "10px";
  headerText.style.fontWeight = "700";
  // Blue Text Span
  const blueText = document.createElement("span");
  blueText.textContent = "SOLUTIONS";
  blueText.style.color = "#1e90ff"; // Blue text color
  headerText.appendChild(blueText);

  fullScreenContainer.appendChild(headerText);

  // Gradient Line with Circle
  const lineContainer = document.createElement("div");
  lineContainer.style.position = "relative";
  lineContainer.style.width = "60%"; // Adjust line width as needed
  lineContainer.style.height = "1.5px"; // Line thickness
  lineContainer.style.background =
    "linear-gradient(to right, #1e90ff, #a6e4ff)"; // Gradient color

  // Circle at Left Endpoint
  const circle = document.createElement("div");
  circle.style.position = "absolute";
  circle.style.width = "10px"; // Circle diameter
  circle.style.height = "10px";
  circle.style.borderRadius = "50%";
  circle.style.backgroundColor = "#1e90ff"; // Circle color
  circle.style.left = "-1px";
  circle.style.top = "-8px"; // Position above the line
  lineContainer.appendChild(circle);

  fullScreenContainer.appendChild(lineContainer);
  // Paragraph
  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.";
  paragraph.style.margin = "70px";
  paragraph.style.padding = "0 20px";
  paragraph.style.textAlign = "center";
  paragraph.style.fontSize = "16px";
  // paragraph.style.opacity = "0";
  // paragraph.style.transform = "translateY(-20px)";
  // paragraph.style.transition =
  //   "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
  fullScreenContainer.appendChild(paragraph);

  const boxesData = [
    { name: "Users Globally", count: "500+", icon: "users" },
    { name: "Global Partners", count: "50+", icon: "globe" },
    { name: "User Satisfaction Rate", count: "95%", icon: "smile" },
    { name: "Case Studies", count: "25+", icon: "book" },
    { name: "Business Applications", count: "200+", icon: "briefcase" },
  ];

  // Create container div
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  containerDiv.style.width = "40%";
  // Create row div
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row", "justify-content-center", "gap-3");

  // Append row div to container div
  containerDiv.appendChild(rowDiv);

  // Loop through boxes data
  boxesData.forEach((box, index) => {
    // Create column div
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("col-lg-4", "col-md-6");

    // Create box div
    const boxDiv = document.createElement("div");
    boxDiv.classList.add("box", "justify-content-center");
    // Create icon element
    const iconElement = document.createElement("i");
    iconElement.classList.add(
      "fas",
      `fa-${box.icon}`,
      "fa-3x",
      "mb-3",
      "text-info"
    );
    iconElement.style.marginTop = "5px";
    // Create count element
    const countElement = document.createElement("div");
    countElement.textContent = box.count;
    countElement.classList.add("fw-bold", "fs-4", "text-info");

    // Create name element
    const nameElement = document.createElement("div");
    nameElement.textContent = box.name;
    // nameElement.classList.add("text-muted", "fs-7");
    nameElement.style.fontSize = "small";
    // Append icon, count, and name to box div
    boxDiv.appendChild(iconElement);
    boxDiv.appendChild(countElement);
    boxDiv.appendChild(nameElement);
    columnDiv.style.backgroundImage = `url("/Assets/images/gradient_border.png")`;
    columnDiv.style.backgroundPosition = "center";
    columnDiv.style.backgroundSize = "cover";
    columnDiv.style.backgroundRepeat = "no-repeat";
    boxDiv.style.textAlign = "center";
    columnDiv.style.marginBottom = "20px";
    columnDiv.style.height = "139px";
    columnDiv.style.width = "160px";
    // Append box div to column div
    columnDiv.appendChild(boxDiv);

    // Append column div to row div
    rowDiv.appendChild(columnDiv);
  });
  fullScreenContainer.appendChild(containerDiv);
  // Append Full Screen Container to document body
  document.body.appendChild(fullScreenContainer);

  createFeaturedIn();
}

function createFeaturedIn() {
  const featuredContainer = document.createElement("div");
  featuredContainer.className = "feature-screen-container";
  featuredContainer.style.width = "100vw";
  featuredContainer.style.display = "flex";
  //fullScreenContainer.style.justifyContent = "center";
  featuredContainer.style.alignItems = "center";
  featuredContainer.style.flexDirection = "column";
  featuredContainer.style.overflow = "hidden"; // Hide overflow to prevent horizontal scroll
  featuredContainer.style.padding = "0 20px"; // Add horizontal padding
  // Header Text
  const headerText = document.createElement("h4");
  headerText.textContent = "FEATURED ";
  headerText.style.fontSize = "22px";
  headerText.style.color = "#1e90ff"; // Dark text color
  headerText.style.marginTop = "20px";
  headerText.style.padding = "10px";
  headerText.style.display = "none";
  headerText.style.animation = "slideIn 0.5s ease forwards";
  headerText.style.fontWeight = "700";
  // Blue Text Span
  const blueText = document.createElement("span");
  blueText.textContent = "IN";
  blueText.style.color = "black"; // Blue text color
  headerText.appendChild(blueText);

  featuredContainer.appendChild(headerText);
  // Gradient Horizontal Line
  const line = document.createElement("div");
  line.style.width = "60%"; // Line width
  line.style.height = "15px"; // Line height
  line.style.border = "none"; // No border
  line.style.backgroundImage = `url('/Assets/images/dot_line.png')`;
  line.style.marginBottom = "20px"; // Margin below line
  featuredContainer.appendChild(line);

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Function to handle scroll event
  function handleScroll() {
    if (isInViewport(headerText)) {
      headerText.style.display = "block"; // Show headerText
      window.removeEventListener("scroll", handleScroll); // Remove scroll listener after revealing headerText
    }
  }

  // Add scroll event listener to trigger revealing headerText
  window.addEventListener("scroll", handleScroll);

  // Create a full-width container
  const fullWidthContainer = document.createElement("div");
  fullWidthContainer.style.width = "100vw";
  fullWidthContainer.style.display = "flex";
  fullWidthContainer.style.justifyContent = "center";
  fullWidthContainer.style.marginTop = "40px"; // Add spacing below the previous section

  // Create the flip container
  const flipContainer = document.createElement("div");
  flipContainer.className = "flip-container";
  flipContainer.style.width = "250px"; // Set the width of the flip container
  flipContainer.style.height = "125px"; // Set the height of the flip container
  flipContainer.style.perspective = "1000px"; // Add perspective for 3D effect

  // Create the flip card
  const flipCard = document.createElement("div");
  flipCard.className = "flip-card";
  flipCard.style.width = "100%";
  flipCard.style.height = "100%";
  flipCard.style.transition = "transform 0.5s"; // Add transition for smooth flip animation
  flipCard.style.transformStyle = "preserve-3d"; // Preserve 3D effect

  // Create the flip card inner container
  const flipCardInner = document.createElement("div");
  flipCardInner.className = "flip-card-inner";
  flipCardInner.style.width = "100%";
  flipCardInner.style.height = "100%";
  flipCardInner.style.position = "relative";
  flipCardInner.style.transformStyle = "preserve-3d";

  // Create the front side of the flip card
  const frontSide = document.createElement("div");
  frontSide.className = "flip-card-front";
  frontSide.style.width = "100%";
  frontSide.style.height = "100%";
  frontSide.style.backgroundImage = "url('/Assets/images/forbes.png')"; // Set the front image
  frontSide.style.backgroundSize = "cover";
  frontSide.style.position = "absolute";
  frontSide.style.top = "0";
  frontSide.style.left = "0";
  frontSide.style.right = "0";
  frontSide.style.bottom = "0";
  frontSide.style.backfaceVisibility = "hidden"; // Hide back face of the front side

  // Create the back side of the flip card
  const backSide = document.createElement("div");
  backSide.className = "flip-card-back";
  backSide.style.width = "100%";
  backSide.style.height = "100%";
  backSide.style.backgroundColor = "#022F3C"; // Set dark blue background color
  backSide.style.color = "white"; // Set text color on the back side
  backSide.style.display = "none"; // Initially hide the back side
  backSide.style.position = "absolute";
  backSide.style.top = "0";
  backSide.style.left = "0";
  backSide.style.right = "0";
  backSide.style.bottom = "0";
  backSide.style.padding = "20px";
  backSide.style.transform = "rotateY(180deg)"; // Start with back side flipped
  backSide.style.backfaceVisibility = "hidden"; // Hide back face of the back side
  backSide.style.borderRadius = "10px";
  // Text content on the back side
  const backText = document.createElement("p");
  backText.textContent = "Hover to see more";
  backSide.appendChild(backText);

  // Append front and back sides to the flip card inner container
  flipCardInner.appendChild(frontSide);
  flipCardInner.appendChild(backSide);

  // Append the flip card inner container to the flip card
  flipCard.appendChild(flipCardInner);

  // Add event listeners for hover effect to flip the card
  flipCard.addEventListener("mouseenter", () => {
    flipCard.style.transform = "rotateY(180deg)";
    backSide.style.display = "block";
    flipCard.style.cursor = "pointer";
  });

  flipCard.addEventListener("mouseleave", () => {
    flipCard.style.transform = "rotateY(0deg)";
    backSide.style.display = "none";
  });

  // Append the flip card to the flip container
  flipContainer.appendChild(flipCard);

  // Append the flip container to the full-width container
  fullWidthContainer.appendChild(flipContainer);

  // Append the full-width container to the document body
  featuredContainer.appendChild(fullWidthContainer);

  // Create a responsive grid container
  const responsiveGridContainer = document.createElement("div");
  responsiveGridContainer.className = "responsive-grid-container row";
  //responsiveGridContainer.style.display = "flex";
  //responsiveGridContainer.style.justifyContent = "center";
  responsiveGridContainer.style.marginTop = "40px"; // Add spacing below the previous section

  // Array of background images for each box
  const backgroundImages = [
    "/Assets/images/silicon.png",
    "/Assets/images/republic-1.png",
    "/Assets/images/outlook-3.png",
    "/Assets/images/khaleej-2.png",
  ];

  // Array of text contents for each box
  const textContentList = ["Discover", "Explore", "Learn", "Create"];

  // Loop to create four boxes
  for (let i = 0; i < 4; i++) {
    // Create a box container
    const boxContainer = document.createElement("div");
    boxContainer.className = "box-container col-lg-3 col-md-6 col-sm-12 mb-4";
    boxContainer.style.width = "230px"; // Set the width of each box
    boxContainer.style.height = "127px"; // Set the height of each box
    // boxContainer.style.margin = "10px"; // Add margin between boxes
    // boxContainer.style.position = "relative"; // Position the box container
    boxContainer.style.perspective = "1000px"; // Add perspective for 3D effect

    // Create the flip card for the box
    const flipCard = document.createElement("div");
    flipCard.className = "flip-card";
    flipCard.style.width = "100%";
    flipCard.style.height = "100%";
    flipCard.style.transition = "transform 0.5s"; // Add transition for smooth flip animation
    flipCard.style.transformStyle = "preserve-3d"; // Preserve 3D effect

    // Create the flip card inner container
    const flipCardInner = document.createElement("div");
    flipCardInner.className = "flip-card-inner";
    flipCardInner.style.width = "100%";
    flipCardInner.style.height = "100%";
    flipCardInner.style.position = "relative";
    flipCardInner.style.transformStyle = "preserve-3d";

    // Create the front side of the flip card
    const frontSide = document.createElement("div");
    frontSide.className = "flip-card-front";
    frontSide.style.width = "100%";
    frontSide.style.height = "100%";
    frontSide.style.backgroundImage = `url('${
      backgroundImages[i % backgroundImages.length]
    }')`; // Set the front image
    frontSide.style.backgroundSize = "cover";
    frontSide.style.position = "absolute";
    frontSide.style.top = "0";
    frontSide.style.left = "0";
    frontSide.style.right = "0";
    frontSide.style.bottom = "0";
    frontSide.style.backfaceVisibility = "hidden"; // Hide back face of the front side

    // Create the back side of the flip card
    const backSide = document.createElement("div");
    backSide.className = "flip-card-back";
    backSide.style.width = "100%";
    backSide.style.height = "100%";
    backSide.style.backgroundColor = "#022F3C"; // Set dark blue background color
    backSide.style.color = "white"; // Set text color on the back side
    backSide.style.display = "none"; // Initially hide the back side
    backSide.style.position = "absolute";
    backSide.style.top = "0";
    backSide.style.left = "0";
    backSide.style.right = "0";
    backSide.style.bottom = "0";
    backSide.style.padding = "10px";
    backSide.style.transform = "rotateY(180deg)"; // Start with back side flipped
    backSide.style.backfaceVisibility = "hidden"; // Hide back face of the back side
    backSide.style.borderRadius = "10px";
    // Text content on the back side
    const backText = document.createElement("p");
    backText.textContent = textContentList[i % textContentList.length]; // Set the text content
    backSide.appendChild(backText);

    // Append front and back sides to the flip card inner container
    flipCardInner.appendChild(frontSide);
    flipCardInner.appendChild(backSide);

    // Append the flip card inner container to the flip card
    flipCard.appendChild(flipCardInner);

    // Add event listeners for hover effect to flip the card
    flipCard.addEventListener("mouseover", () => {
      flipCard.style.transform = "rotateY(180deg)";
      backSide.style.display = "block";
      flipCard.style.cursor = "pointer";
    });

    flipCard.addEventListener("mouseout", () => {
      flipCard.style.transform = "rotateY(0deg)";
      backSide.style.display = "none";
    });

    // Append the flip card to the box container
    boxContainer.appendChild(flipCard);

    // Append the box container to the responsive grid container
    responsiveGridContainer.appendChild(boxContainer);
  }

  // Append the responsive grid container to the document body
  featuredContainer.appendChild(responsiveGridContainer);

  document.body.appendChild(featuredContainer);

  createJoinUsBanner();
}

function createJoinUsBanner() {
  const bannerContainer = document.createElement("div");
  bannerContainer.className = "joinus-banner-container";
  bannerContainer.style.backgroundImage = "url('/Assets/images/HANS.jpg')";
  bannerContainer.style.backgroundSize = "cover";
  bannerContainer.style.height = "55vh"; // Set height for the banner
  bannerContainer.style.position = "relative"; // Set position relative for absolute elements
  bannerContainer.style.zIndex = "999";
  bannerContainer.style.display = "flex";
  bannerContainer.style.alignItems = "center";
  bannerContainer.style.flexDirection = "column";
  // Create the image element
  const img = document.createElement("img");
  img.src = "/Assets/images/bannerBoder.png"; // Set the image source
  img.style.position = "absolute";
  img.style.top = "50%"; // Center vertically
  img.style.left = "50%"; // Center horizontally
  img.style.transform = "translate(-50%, -50%)"; // Center the image precisely
  img.style.maxWidth = "85%"; // Ensure the image is responsive
  img.style.maxHeight = "85%"; // Ensure the image is responsive
  img.style.objectFit = "contain"; // Maintain aspect ratio
  img.style.zIndex = "-1";
  // Append the image to the banner container
  bannerContainer.appendChild(img);

  const header = document.createElement("h1");
  header.innerHTML =
    'JOIN OUR <span style="color: #2fb4cb;">ASSOCIATE</span> NETWORK';
  header.style.position = "relative";
  header.style.textAlign = "center";
  header.style.marginTop = "3.5%"; // Margin from the top
  header.style.opacity = "0"; // Initially hide the header
  header.style.transition = "opacity 0.8s ease"; // Add transition for opacity
  header.style.color = "white";
  header.style.fontSize = "22px";
  header.style.fontWeight = "700";
  // Append the header to the banner container
  bannerContainer.appendChild(header);

  // Create the paragraph element
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  paragraph.style.textAlign = "center";
  paragraph.style.color = "white";
  paragraph.style.opacity = "0"; // Initially hide the paragraph
  paragraph.style.transition = "opacity 0.8s ease"; // Add transition for opacity
  paragraph.style.marginTop = "6%";
  paragraph.style.width = "70%";
  bannerContainer.appendChild(paragraph);

  // Create the button element
  const button = document.createElement("button");
  button.textContent = "Join Now";
  button.style.backgroundColor = "transparent";
  button.style.color = "white";
  button.style.border = "1px solid white";
  button.style.width = "200px";
  button.style.borderRadius = "5px";
  button.style.padding = "10px 20px";
  button.style.cursor = "pointer";
  button.style.marginTop = "6%";
  button.style.opacity = "0"; // Initially hide the button
  button.style.transition = "opacity 0.8s ease"; // Add transition for opacity
  bannerContainer.appendChild(button);

  // Function to handle scroll event for fade-in effect
  function handleScroll() {
    // Get the position of the bannerContainer relative to the viewport
    const bannerTop = bannerContainer.getBoundingClientRect().top;

    // Check if the bannerContainer is in the viewport
    if (bannerTop < window.innerHeight / 1.5) {
      // If bannerContainer is in the viewport, fade in the header
      header.style.opacity = "1";
      paragraph.style.opacity = "1";
      button.style.opacity = "1";
    } else {
      // Otherwise, hide the header
      header.style.opacity = "0";
      paragraph.style.opacity = "0";
      button.style.opacity = "0";
    }
  }

  // Add scroll event listener to window
  window.addEventListener("scroll", handleScroll);

  // Initial check on page load in case the bannerContainer is already in view
  handleScroll();
  document.body.appendChild(bannerContainer);

  createSponsoreSlider();
}

function createSponsoreSlider() {
  const imageUrls = [
    "/Assets/images/usiic.png",
    "/Assets/images/g-tech.png",
    "/Assets/images/iso.png",
    "/Assets/images/microsoft.png",
    "/Assets/images/nasscom-1.png",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

  // Create a new swiper container
  const swiperParentContainer = document.createElement("div");
  swiperParentContainer.style.height = "200px";
  swiperParentContainer.style.display = "flex";
  swiperParentContainer.style.justifyContent = "center";
  swiperParentContainer.style.alignItems = "center";
  const swiperContainer = document.createElement("div");
  swiperContainer.classList.add("myswiper");
  swiperContainer.setAttribute('id','swiper-contaner1')
  swiperParentContainer.style.backgroundImage = `url("/Assets/images/bg-iso.jpg")`;
  swiperParentContainer.style.backgroundSize = "contain";
  swiperParentContainer.style.backgroundPosition = "center";
  swiperContainer.style.height = "100%";
  swiperContainer.style.width = "80%";
  swiperContainer.style.height = "80%";
  swiperContainer.style.padding = "20px";
  swiperContainer.style.overflow = "hidden";

  // Create swiper wrapper inside the container
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");

  // Append swiper wrapper to swiper container
  swiperContainer.appendChild(swiperWrapper);

  // Populate swiper slides with images
  imageUrls.forEach(function (url) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.style.backgroundPosition = "center";
    slide.style.backgroundSize = "cover";
    slide.style.width = "180px";
    slide.style.height = "90px";
    slide.style.borderRadius = "10px";
    slide.style.backgroundImage = `url('${url}')`;
    swiperWrapper.appendChild(slide);
  });
  swiperParentContainer.appendChild(swiperContainer);
  // Append swiper container to the body
  document.body.appendChild(swiperParentContainer);

  // Initialize Swiper
  const swiper = new Swiper("#swiper-contaner1", {
    loop: true,
    slidesPerView: 5, 
    spaceBetween: 30, 
    centeredSlides: true, 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      524: {
        slidesPerView: 1,
      },
      300: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 5,
      },
    },
    grabCursor: true,
  });

  createCaseStudy();
}

function createCaseStudy() {
  const caseContainer = document.createElement("div");
  caseContainer.className = "case-container";
  caseContainer.style.backgroundImage = "url('/Assets/images/CASE-G.jpg')";
  caseContainer.style.backgroundSize = "cover";
  caseContainer.style.width = "100%";
  caseContainer.style.height = "120vh";
  caseContainer.style.display = "flex";
  caseContainer.style.alignItems = "center";
  caseContainer.style.justifyContent = "center";
  caseContainer.style.flexDirection = "column";
  // Header Text
  const headerText = document.createElement("h4");
  headerText.textContent = "CASE STUDY";
  headerText.style.fontSize = "28px";
  headerText.style.color = "white"; // Dark text color
  headerText.style.marginTop = "20px";
  //headerText.style.padding = "10px";
  headerText.style.opacity = "0";
  headerText.style.fontWeight = "700";
  headerText.style.transition = "opacity 0.8s ease"; // Add transition for opacity
  caseContainer.appendChild(headerText);
  // Gradient Horizontal Line
  const line = document.createElement("div");
  line.style.width = "15%"; // Line width
  line.style.height = "15px"; // Line height
  line.style.border = "none"; // No border
  line.style.backgroundImage = `url('/Assets/images/fd.png')`;
  line.style.backgroundSize = "cover";
  //line.style.backgroundPosition='center'
  line.style.marginBottom = "20px"; // Margin below line
  line.style.opacity = "0";
  line.style.transition = "opacity 0.8s ease"; // Add transition for opacity
  caseContainer.appendChild(line);

  const paragraph = document.createElement("p");
  paragraph.textContent = `Explore various challenges we've successfully resolved for our clients through this extensive range of case studies. Our primary goal is to deliver tailored solutions for the distinct Issues our clients encounter across various Industry sectors.`;
  paragraph.style.textAlign = "center";
  paragraph.style.color = "white";
  paragraph.style.opacity = "0"; // Initially hide the paragraph
  paragraph.style.transition = "opacity 0.8s ease"; // Add transition for opacity
  paragraph.style.margin = "2% 0";
  paragraph.style.width = "70%";
  paragraph.style.fontSize = "large";
  paragraph.style.fontWeight = "300";
  caseContainer.appendChild(paragraph);
  // Function to handle scroll event for fade-in effect
  function handleScroll() {
    // Get the position of the bannerContainer relative to the viewport
    const bannerTop = caseContainer.getBoundingClientRect().top;

    // Check if the bannerContainer is in the viewport
    if (bannerTop < window.innerHeight / 2) {
      // If bannerContainer is in the viewport, fade in the header
      headerText.style.opacity = "1";
      line.style.opacity = "1";
      paragraph.style.opacity = "1";
    } else {
      headerText.style.opacity = "0";
      line.style.opacity = "0";
      paragraph.style.opacity = "0";
    }
  }
  // Add scroll event listener to window
  window.addEventListener("scroll", handleScroll);

  // Initial check on page load in case the bannerContainer is already in view
  handleScroll();

  const imageUrls = [
    { url: "/Assets/images/case-study-1.jpg", headertext: "Slide 1" },
    { url: "/Assets/images/case-study-2.jpg", headertext: "Slide 2" },
    { url: "/Assets/images/case-study-3.jpg", headertext: "Slide 3" },
    { url: "/Assets/images/case-study-4.jpg", headertext: "Slide 4" },
  ];

  const swiperContainer = document.createElement("div");
  swiperContainer.classList.add("swiper-container");

  swiperContainer.style.height = "500px";
  swiperContainer.style.width = "100%";
  swiperContainer.style.padding = "20px";
  swiperContainer.style.overflow = "hidden";
  swiperContainer.setAttribute('id','swiper-contaner2')
  // Create swiper wrapper inside the container
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");

  // Populate swiper slides with images
  imageUrls.forEach(function (item) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.style.backgroundImage = `url('${item.url}')`;
    slide.style.backgroundPosition = "center";
    slide.style.backgroundSize = "cover";
    slide.style.height = "400px";
    slide.style.width = "600px";
    slide.style.borderRadius = "10px";
    slide.style.border = "3px solid transparent";
    slide.style.transition = "border-color 0.3s ease transform 0.3s ease";

    // Create and append the header text element
    const header = document.createElement("h1");
    header.textContent = item.headertext;
    header.style.color = "white";
    header.classList.add("header-hidden");
    slide.appendChild(header);
    swiperWrapper.appendChild(slide);
  });
  swiperContainer.appendChild(swiperWrapper);
  caseContainer.appendChild(swiperContainer);
  console.log(swiperContainer);
  if (swiperContainer) {
    var swiper1 = new Swiper("#swiper-container2", {
      on: {
        init: function () {
          console.log(swiper1);
          // Initially show header text of the centered slide
          updateHeaderTextVisibility(this);
          // Adjust slide transition duration dynamically for smoother animation
          this.params.speed = 800; // Set desired transition duration (in milliseconds)
        },
        slideChangeTransitionEnd: function () {
          // Update header text visibility on slide change
          console.log("Slide changed");
          updateHeaderTextVisibility(this);
        },
        transitionEnd: function () {
          // Handle transition end (manual or automated)
          updateHeaderTextVisibility(this);
        },
      },
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 800,
    });
    // Register init event listener
    swiper1.on("init", function () {
      console.log("Swiper initialized successfully");
      // Additional initialization logic here...
    });
    console.log(swiper1);
    // Function to update header text visibility based on slide position
    function updateHeaderTextVisibility(swiperInstance) {
      var swiperRect = swiperInstance.el.getBoundingClientRect();
      var slides = swiperInstance.slides;

      slides.forEach(function (slide) {
        var header = slide.querySelector("h1");
        var slideRect = slide.getBoundingClientRect();

        // Check if the slide is centered horizontally
        var isCentered =
          slideRect.left >= swiperRect.left &&
          slideRect.right <= swiperRect.right;

        if (isCentered) {
          slide.classList.add("slide-centered");
          header.classList.remove("header-hidden");
          header.classList.add("header-visible");
        } else {
          slide.classList.remove("slide-centered");
          header.classList.remove("header-visible");
          header.classList.add("header-hidden");
        }
      });
    }
  }

  document.body.appendChild(caseContainer);
}
