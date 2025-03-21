// 1. Change the About Us text dynamically
document.getElementById("changeTextButton").addEventListener("click", function() {
    const aboutText = document.getElementById("aboutText");
    aboutText.textContent = "Katalist Limited is now a leading provider of AI-powered solutions, revolutionizing industries with innovative software and technology.";
});

// 2. Modify CSS styles for a service section
document.getElementById("changeStyleButton").addEventListener("click", function() {
    const serviceSection = document.getElementById("serviceOne");
    serviceSection.style.backgroundColor = "#f4f4f4";
    serviceSection.style.border = "2px solid #4CAF50";
    serviceSection.style.padding = "15px";
});

// 3. Add or remove portfolio item dynamically
document.getElementById("togglePortfolio").addEventListener("click", function() {
    const portfolioItem = document.getElementById("portfolioItem");

    // Check if the portfolio item already exists
    if (portfolioItem) {
        portfolioItem.style.display = portfolioItem.style.display === "none" ? "block" : "none";
    } else {
        const newPortfolioItem = document.createElement("div");
        newPortfolioItem.classList.add("portfolio-item");
        newPortfolioItem.innerHTML = `
            <h3>Project Two</h3>
            <p>A mobile app for real-time team collaboration and task management.</p>
        `;
        document.getElementById("portfolio").appendChild(newPortfolioItem);
    }
});
