const mobiles = Object.freeze({
    Samsung: Object.freeze(["Galaxy S20", "Galaxy Note 20", "Galaxy A71"]),
    Apple: Object.freeze(["iPhone 11", "iPhone 12", "iPhone SE"]),
    Google: Object.freeze(["Pixel 4a", "Pixel 5", "Pixel 4XL"])
    // Add more companies and models as needed
  });

  // Function to populate models dropdown based on selected company
  function populateModels() {
    const companyDropdown = document.getElementById("companyDropdown");
    const modelDropdown = document.getElementById("modelDropdown");
    const selectedCompany = companyDropdown.value;
    
    // Clear previous options
    modelDropdown.innerHTML = "<option value=''>Select Model</option>";
    
    // Populate models based on selected company
    if (selectedCompany) {
      const models = Object.freeze(mobiles[selectedCompany]);
      for (let i = 0; i < models.length; i++) {
        const model = models[i];
        const option = document.createElement("option");
        option.textContent = model;
        option.value = model;
        modelDropdown.appendChild(option);
      }
    }
    
    // After populating models, call the filtering function
    filterAndRenderProjects();
  }

  // Function to filter and render mobile projects
  function filterAndRenderProjects() {
    const companyDropdown = document.getElementById("companyDropdown");
    const modelDropdown = document.getElementById("modelDropdown");
    const mobileListElement = document.getElementById("mobileList");
    const selectedCompany = companyDropdown.value;
    const selectedModel = modelDropdown.value;

    mobileListElement.innerHTML = ""; // Clear previous list
    
    // Filter and render projects based on selected company and model
    if (selectedCompany && selectedModel) {
      const project = `${selectedCompany} - ${selectedModel}`;
      const li = document.createElement("li");
      li.textContent = project;
      mobileListElement.appendChild(li);
    } else if (selectedCompany) {
      const models = Object.freeze(mobiles[selectedCompany]);
      for (let i = 0; i < models.length; i++) {
        const model = models[i];
        const project = `${selectedCompany} - ${model}`;
        const li = document.createElement("li");
        li.textContent = project;
        mobileListElement.appendChild(li);
      }
    }
  }

  // Initial population of models dropdown
  populateModels();