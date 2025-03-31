# Actually Work Offline

```Work offline that respects the user's wishes.```

When added to a Firefox browser, this extension blocks all requests to non-localhost URLs for the duration of the browsing session. It is designed to be used with a Firefox wrapper to add an `-offline` flag.

## Purpose

The Firefox "Profile Selection" menu has significant usability issues. Many users, even those with extensive software engineering experience, are unaware of Firefox Profiles due to the hidden nature of the feature (requiring the `-P` flag to access).

This extension addresses a particular pain point: enabling true offline mode. The current Firefox implementation allows offline mode to be accidentally disabled if a user attempts to visit a remote site. Our extension ensures that "Work Offline means Work Offline" until the browser is closed, at which point the extension uninstalls itself.

This extension intentionally does not include toggle functionality. It is designed with a specific purpose - to stay offline for the entire session, without exception.

## Note

Chrome's approach to these same features is substantially worse than Firefox's implementation and continues to deteriorate with each update. While we expect better from Firefox given their focus on users, Chrome seems to be actively moving in the opposite direction of usability in this domain.