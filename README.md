# Front End Web Developer Nanodegree Course - Terise Lang, Student
---
#### _Three Stage Course Material Project - Restaurant Reviews App

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

Udacity provided starter code for a restaurant reviews website. The code has usability and device compatibility issues. It also doesn’t include any standard accessibility features, (ARIA) and it doesn’t work offline at all. The assignment was to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Theproject will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). The rubric was used as a resource referred to periodically to ensure project met specifications.

### How Should This Project Be Viewed?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. The provided code was explored and a plan was implemented to improve the required features in three areas: responsive design, accessibility and offline use.
4. Code was implemented to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). The student replaced `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, use of E6 code was implemented for additional written  JavaScript code.

### ADDITIONAL NOTES FROM STUDENT:

Among other techniques,

*Added English language tag to HTML documents.
*Used viewport meta tags to increase website responsiveness.
*Used (most often) 100% width and auto height for image responsiveness.
*Used em font sizes wherever applicable to add to site responsiveness.
*Used tabindex of 0, focus and hover to increase accessibility, particularly for screen readers.
*Used color scheme that avoided red (can incite seizures) and instead used other highly contrasted colors.
*Added skip-link for both screen reader and sighted-user access to main content.
*Used Lighthouse to verify 98% accessibility audit.
*Tested screen reader usability utilizing Google ChromeVox tool.
*Used Google Chrome and Firefox browsers to test overall appearance, accessibility and functionality.
*Developed code using SublimeText on Windows 7 platform.
*Used Google Chrome developer Inspect tools to do offline service worker code testing.

### CONTRIBUTORS/RESOURCES:
*Wyzant.com tutor Ian Hamilton
*Doug Brown Restaurant Reviews App Video
*W3schools.com
*Mozilla MDN
*CSS-Tips and Tricks
*Traversy Media (service workers)
*Alexandro Perez - Responsive Web App Videos
*Google Chrome Service Worker Documentation
*GitHub Service worker and responsive images documentation
*LinkedIn graphic design course (partially completed)





