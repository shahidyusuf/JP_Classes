  // Sample mobile data
  const mobiles = [
    { brand: "Samsung", name: "Galaxy S20", price: 1200 },
    { brand: "Samsung", name: "Galaxy Note 20", price: 1500 },
    { brand: "Apple", name: "iPhone 11", price: 1000 },
    { brand: "Apple", name: "iPhone 12", price: 1300 },
    { brand: "Google", name: "Pixel 5", price: 800 },
    // Add more mobiles as needed
  ];

  // Function to filter and render mobiles
  function filterAndRenderMobiles() {
    const brand = document.getElementById("brandDropdown").value;
    const price = document.getElementById("priceDropdown").value;

    const filteredMobiles = mobiles.filter(mobile => {
      if (brand && mobile.brand !== brand) return false;
      if (price) {
        const minPrice = parseInt(price);
        if (minPrice === 1000 && mobile.price > 1000) return false;
        if (minPrice === 2000 && (mobile.price <= 1000 || mobile.price > 2000)) return false;
        if (minPrice === 3000 && mobile.price <= 2000) return false;
      }
      return true;
    });

    const mobileListElement = document.getElementById("mobileList");
    mobileListElement.innerHTML = "";
    filteredMobiles.forEach(mobile => {
      const li = document.createElement("li");
      li.textContent = `${mobile.brand} - ${mobile.name} ($${mobile.price})`;
      mobileListElement.appendChild(li);
    });
  }

  // Event listeners for dropdown change
  document.getElementById("brandDropdown").addEventListener("change", filterAndRenderMobiles);
  document.getElementById("priceDropdown").addEventListener("change", filterAndRenderMobiles);

  // Initial render
  filterAndRenderMobiles();
// </script>
