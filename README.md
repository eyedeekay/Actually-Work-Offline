# Actually Work Offline

```Work offline that respects the users wishes.```

When added to a Firefox browser, this blocks all requests to non-localhost URLS for the
remainder of the browsing session. It is intended to be used with a Firefox wrapper in
order to add an `-offline` flag.

## Why?

Because the Firefox **"Profile Selection"** menu has absurdly stupid UX. It's just the
dumbest most annoying goddamn dumbshit I've ever seen. It's actively trying to be fucking
useless. If you have to pass the `-P` flag to start the goddamn profile menu people are
going to use Firefox for decades without ever noticing the profile menu. People with decades
of Software Engineering experience and real UI/UX expertise look at me blankly whan I say
the words "Firefox Profile" and when I show them how to make them they ask me "How the fuck
was I supposed to know that?" and frankly I don't fucking blame them. And it's the only way
to put your browser into "Work Offline" mode before launching the browsing session. In fact,
it's the only way to do any kind of identity management other than "Private Browsing" through
the GUI without starting a browsing session. That is so fucking stupid it makes me want to
fucking scream. And it gets worse, on the off change you make it to the profiles menu and
realize "Hey I should fucking look at this before I run Firefox **every fucking time**" and
check "Work Offline" and start a browsing session, If you by chance visit a remote site in
the browser once, it will ask you to refresh the page and then **end you offline browsing**
**session**. This is confusing and self-defeating. Much like Mozilla's routine behavior TBH.

With this extension, **Work Offline means Work Offline** and nothing else, until you close
the browser and the extension uninstalls itself. If you want a version which adds a toggle
or something like that, fork it and submit a PR.

## BTW

Oh by the say, Chrome's UI/UX for the equivalent operation is even dumber and getting worse.
But I don't expect anything from Chrome. Mozilla should fucking know better.
