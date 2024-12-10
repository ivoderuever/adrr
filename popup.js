import domains from './domains.js';
import pastes from './pastes.js'

function setMessage(txt) {
    const message = document.querySelector('.message');
    message.innerHTML = txt;
}

// Function to dynamically generate buttons based on languages
function generateLocaleButtons(tld, allowedLangs) {
    const container = document.querySelector('.locale-container');
    container.innerHTML = ''; // Clear existing buttons

    allowedLangs.forEach((lang) => {
        const button = document.createElement('button');
        button.textContent = `Set ${lang}`;
        button.id = `set-${lang}`;
        button.className = 'btn';
        button.dataset.lang = lang;
        container.appendChild(button);

        // Attach click event to the button
        button.addEventListener('click', () => {
            const addressData = pastes[lang];
            if (!addressData) {
                setMessage("This language is missing it's contents")
                return;
            }

            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const activeTab = tabs[0];

                if (activeTab.url.includes(`custtom.${tld}`)) {
                    // Execute the script to fill in the form
                    chrome.scripting.executeScript({
                        target: { tabId: activeTab.id },
                        func: (data) => {
                            Object.entries(data).forEach(([key, value]) => {
                                if (key === 'events') {
                                    value.forEach((event, index) => {
                                        const delayTime = event.delay ? 500 : 0; // Use 1 second (1000ms) if delay is true, otherwise no delay
                                        setTimeout(() => {
                                            const target = document.querySelector(event.target);
                                            if (target) target.click();
                                        }, 0 + delayTime); // Combine 200ms staggered delay with the event-specific delay
                                    });
                                } else {
                                    const inputField = document.querySelector(`input[name="${key}"]`);
                                    if (inputField) inputField.value = value;
                                }
                            });
                        },
                        args: [addressData], // Pass the selected dataset to the injected script
                    });
                } else {
                    setMessage("This domain is not supported by this extension")
                }
            });
        });
    });
}

// Extract TLD from active tab's URL and update the popup
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    
    // Match the domain's TLD including multi-part TLDs like .co.uk
    const tldMatch = activeTab.url.match(/https:\/\/.*\.custtom\.(.+?)\//);
    
    if (tldMatch) {
        const tld = tldMatch[1];
        const tldElement = document.querySelector('#locale');
        tldElement.textContent = tld;

        // Find the domain object for the extracted TLD
        const domain = domains.find((d) => d.tld === tld);
        if (domain) {
            // Generate buttons for allowed languages
            generateLocaleButtons(tld, domain.lang);
        } else {
            setMessage("No languages are configured for this domain");
        }
    } else {
        setMessage("This domain is not supported by this extension");
    }
});