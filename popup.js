const extBtn = document.querySelector('#setName');

extBtn.addEventListener('click', function() {
    // Address data (hardcoded for this example)
    const addressData = {
        firstName: "John",
        prefixName: "",
        lastName: "Doe"
    };

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];

        if (activeTab.url.match(/https:\/\/.*\.custtom\..*\//)) {
            // Execute the script to fill in the form
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                func: (data) => {
                    // Fill in the form on the target page
                    const firstNameField = document.querySelector('input[name="invoice_first_name"]');
                    const prefixNameField = document.querySelector('input[name="invoice_pre_name"]');
                    const lastNameField = document.querySelector('input[name="invoice_last_name"]');

                    if (firstNameField) firstNameField.value = data.firstName;
                    if (prefixNameField) prefixNameField.value = data.prefixName;
                    if (lastNameField) lastNameField.value = data.lastName;
                },
                args: [addressData], // Pass addressData to the injected script
            });
        } else {
            // Show an error if the URL doesn't match
            alert("This extension only works on custtom websites.");
        }
    });
});