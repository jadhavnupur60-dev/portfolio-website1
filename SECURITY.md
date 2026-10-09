
# Portfolio Website Security

## Overview

This project includes basic security measures to reduce common
browser-based risks.

## 1. Content Security Policy

A Content Security Policy (CSP) is configured in `index.html`.

The policy restricts scripts, styles, images, fonts, network
connections, and form submission destinations. It also blocks
embedded object content.

The policy should be reviewed if trusted third-party resources
are introduced.

## 2. External JavaScript

JavaScript is loaded from `script.js`.

Event handlers are registered using `addEventListener()` instead
of inline HTML event attributes such as `onclick` and `onsubmit`.

## 3. Input Validation

The contact form checks required fields, input lengths, and email
format before displaying a validation message.

Client-side validation does not replace server-side validation.

## 4. Safer Output Handling

The application uses `textContent` to display status messages
instead of inserting potentially untrusted text through `innerHTML`.

## 5. Limitations

The contact form is a demonstration and does not send or store
messages. No server-side processing is implemented.

A CSP supplied through an HTML meta element has limitations
compared with a CSP delivered through an HTTP response header.

## 6. Testing

After changes, test the website and check the browser console for
CSP violations. Verify navigation, project links, images, form
validation, and responsive layout.

## Author

Nupur Jadhav