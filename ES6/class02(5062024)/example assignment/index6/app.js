const mobileData = {
    "iPhone": {
      "models": ["iphone7", "iPhone 12", "iPhone 11", "iPhone SE"],
      "descriptions": {
        "iphone7": "processor: Snapdragon 8 Gen 2, ram: 12, storage: 512",
        

        "iPhone 12": "The latest iPhone model with advanced features.",
        "iPhone 11": "A previous generation iPhone with great performance.",
        "iPhone SE": "A budget-friendly iPhone with modern features."
      }
    },
    "Samsung": {
      "models": ["Galaxy S21", "Galaxy Note 20", "Galaxy A52"],
      "descriptions": {
        "Galaxy S21": "Flagship Samsung phone with powerful specs.",
        "Galaxy Note 20": "Samsung's flagship phablet with a stylus.",
        "Galaxy A52": "A mid-range Samsung phone with a large display."
      }
    }
  };
  
  const mobileSelect = document.getElementById('mobile-select');
  const modelSelect = document.getElementById('model-select');
  const modelDescription = document.getElementById('model-description');
  
  // Populate mobile dropdown
  for (const mobile in mobileData) {
    const option = document.createElement('option');
    option.value = mobile;
    option.textContent = mobile;
    mobileSelect.appendChild(option);
  }
  
  function populateModels() {
    const selectedMobile = mobileSelect.value;
    modelSelect.innerHTML = '<option value="" disabled selected>Select Model</option>';
  
    if (selectedMobile) {
      const { models } = mobileData[selectedMobile];
      models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
      });
    }
  }
  
  modelSelect.addEventListener('change', () => {
    const selectedMobile = mobileSelect.value;
    const selectedModel = modelSelect.value;
  
    if (selectedMobile && selectedModel) {
      const { descriptions } = mobileData[selectedMobile];
      modelDescription.textContent = descriptions[selectedModel];
    } else {
      modelDescription.textContent = '';
    }
  });
  