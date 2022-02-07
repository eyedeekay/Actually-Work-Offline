// Initialize the list of blocked hosts
let allowedHosts = [];

// Set the default list on installation.
browser.runtime.onInstalled.addListener(details => {
    browser.storage.local.set({
        allowedHosts: allowedHosts
    });
});

// Get the stored list
browser.storage.local.get(data => {
    if (data.allowedHosts) {
        allowedHosts = data.allowedHosts;
    }
});

// Listen for changes in the blocked list
browser.storage.onChanged.addListener(changeData => {
    allowedHosts = changeData.allowedHosts.newValue;
});

// On the request to open a webpage
function handleWebRequest(requestInfo) {
    // Read the web address of the page to be visited 
    const url = new URL(requestInfo.url);
    if (allowedHosts.indexOf(url.hostname) > -1) {
        console.log(`Bypassing: ${url.hostname}`);
        return {};
    }
    // if the URL matches a localhost or 127.0.0.0/8 address, bypass the proxy
    if (url.hostname.match(/^(localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1)$/)) {
        console.log(`Bypassing: ${url.hostname}`);
        return {};
    }
    console.log(`Blocking: ${url.hostname}`);
    // Stop the request from continuing
    return { cancel: true };
}

// Listen for a web request
browser.webRequest.onBeforeRequest.addListener(
    handleWebRequest, { urls: ["<all_urls>"] }, ["blocking"]
);

browser.windows.onRemoved.addListener((windowId) => {
    let windows = browser.windows.getAll()

    function countAndRemove(windowInfo) {
        // Lf we're closing the last window, self-uninstall
        if (length(windowInfo) === 0) {
            management.uninstallSelf();
        }
    }
    windows.then(
        countAndRemove,
    )
});