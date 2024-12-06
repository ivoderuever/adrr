import pastes from './pastes.js'
const extBtn = document.querySelector('#setName');

extBtn.addEventListener('click', function() {
    // Example: Dynamically determine the dataset based on user choice (e.g., a dropdown or button)
    const selectedDataset = "NL"; // Replace with logic to get user-selected dataset
    const addressData = pastes[selectedDataset];

    if (!addressData) {
        alert("Selected dataset not found!");
        return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];

        if (activeTab.url.match(/https:\/\/.*\.custtom\..*\//)) {
            // Execute the script to fill in the form
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                func: (data) => {
                    // Fill in the form on the target page using dynamic keys
                    Object.entries(data).forEach(([key, value]) => {
                        if (key === 'events') {
                            value.forEach(event => {
                                document.querySelector(event.target).click();
                            });
                        } else {
                            const inputField = document.querySelector(`input[name="${key}"]`);
                            if (inputField) {
                                inputField.value = value;
                            }
                        }
                    });
                },
                args: [addressData], // Pass the selected dataset to the injected script
            });
        } else {
            // Show an error if the URL doesn't match
            alert("This extension only works on custtom websites.");
        }
    });
});