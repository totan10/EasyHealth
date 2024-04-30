document.addEventListener("DOMContentLoaded", () => {
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
  
    const navLinksText = ["RETAILTECH", "INSURTECH", "BIZSUPPORT", "OUR COMPANY", "CONTACT US"];
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
        subMenu.style.width=`150px`
        subMenu.className = "sub-menu hidden absolute bg-white p-2 shadow-lg rounded-md top-full left-0"; // Initially hide the submenu
        const subItems = ["Sub-Item 1", "Sub-Item 2", "Sub-Item 3"];
        subItems.forEach((subText) => {
          const subItem = document.createElement("li");
          
          const subLink = document.createElement("a");
          subLink.href = "#";
          subLink.style.color="black"
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
    videoContainer.appendChild(video);
  
    const source = document.createElement("source");
    source.src = "/Assets/Videoes/home.mp4";
    source.type = "video/mp4";
  
    video.appendChild(source);
  
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
    // Create 'Let's Connect' Button
  const connectButton = document.createElement("button");
  connectButton.textContent = "Let's Connect";
  connectButton.className =
    "bg-transparent border border-white text-white py-2 px-4 rounded-md mt-8 transition-all duration-300 ease-in-out hover:bg-white hover:text-black transform hover:scale-110";
  connectButton.style.fontSize = "1.2rem"; // Set font size for the button

  // Position the button at the center of the screen below the slider
  connectButton.style.position = "absolute";
  connectButton.style.left = "50%";
  connectButton.style.bottom = "20%"; // Adjust the vertical position as needed
  connectButton.style.transform = "translateX(-50%)"; // Center horizontally
  connectButton.style.zIndex = "1"; // Ensure button appears above the slider

  videoContainer.appendChild(connectButton);
  });
  