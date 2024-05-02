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
  createAboutUs();
});

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
  const line = document.createElement("hr");
  line.style.width = "100%"; // Line width
  line.style.height = "3px"; // Line height
  line.style.border = "none"; // No border
  line.style.backgroundImage =
    "linear-gradient(to right, #1e90ff, rgb(239 242 244))"; // Gradient colors
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
  paragraph.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  paragraph.style.marginTop = "20px";
  paragraph.style.padding = "0 20px";
  paragraph.style.textAlign = "center";
  paragraph.style.fontSize = "16px";
  paragraph.style.opacity = "0";
  paragraph.style.transform = "translateY(-20px)";
  paragraph.style.transition =
    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
  fullScreenContainer.appendChild(paragraph);

  // Boxes Container
  const boxesContainer = document.createElement("div");
  boxesContainer.className = "boxes-container";
  boxesContainer.style.display = "grid";
  boxesContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(30%, 1fr))";
  boxesContainer.style.gap = "20px";
  boxesContainer.style.width='60%'
  boxesContainer.style.justifyItems = "center";
  boxesContainer.style.marginTop = "20px";
  fullScreenContainer.appendChild(boxesContainer);

  // Individual Boxes Data
  const boxesData = [
    { name: "Users Globally", count: "500+", icon: "users" },
    { name: "Global Partners", count: "50+", icon: "globe" },
    { name: "User Satisfaction Rate", count: "95%", icon: "smile" },
    { name: "Case Studies", count: "25+", icon: "book" },
    { name: "Business Applications", count: "200+", icon: "briefcase" },
  ];

  // Create Box Function
  function createBox(text, count, iconClass) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = "80%";
    box.style.height = "160px";
    box.style.padding = "10px";
    box.style.border = "1px solid #1e90ff";
    box.style.borderRadius = "5px";
    box.style.textAlign = "center";

    // Font Awesome Icon
    const icon = document.createElement("i");
    icon.className = `fas fa-${iconClass}`; // Font Awesome icon class
    icon.style.fontSize = "24px";
    icon.style.color = "#1e90ff";
    box.appendChild(icon);

    const countSpan = document.createElement("span");
    countSpan.textContent = count;
    countSpan.style.display = "block";
    countSpan.style.fontSize = "20px";
    countSpan.style.fontWeight = "bold";
    countSpan.style.color = "#1e90ff";
    box.appendChild(countSpan);

    const label = document.createElement("div");
    label.textContent = text;
    box.appendChild(label);

    return box;
  }

  // Populate Boxes
  boxesData.forEach((data) => {
    const box = createBox(data.name, data.count, data.icon);
    boxesContainer.appendChild(box);
  });

  // Append Full Screen Container to document body
  document.body.appendChild(fullScreenContainer);
}
// Function to animate count from start to end value
function animateCount(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(() => {
    current += increment;
    element.textContent = current + "+";
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}
