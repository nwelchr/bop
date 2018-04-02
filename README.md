# **Bop**

[Preview](https://htmlpreview.github.io/?https://github.com/nwelchr/its-a-bop/blob/master/index.html)

![](screenshot.png)

## Table of Contents
- [Introduction](#introduction)
- [How It Works](#how-it-works)
- [Summary of Features](#features)
- [Project Design](#project-design)
- [Additional Features](#additional-features)

<a name="introduction"></a>
## Introduction

[Bop](http://www.google.com) is a simple single-page Spotify clone. It allows users to search, discover, stream, and share music.

This application works on mobile and web devices.

<a name="how-it-works"></a>
## How It Works
**Bop!** is built on a `Rails 5` backend, connected to `PostgresSQL` for database management. Communication between frontend and backend was made through Fetch AJAX requests. Responses are manipulated and rendered by `React` and `Redux`. The `howler.js` API was used to have greater control over music. CSS `@media` queries allow for compatibility with all devices and screen sizes.

<a name="features"></a>
## Summary of Features
- RESTful
  - Data resources are always accessed *via* standard `HTTP` requests to an API endpoints.
- Secure
  - User authentication is built from the ground up and maintained by in-app `BCrypt` password hashes as well as `SecureRandom` session key management.
- Dynamic
  - Single-page application handles all UI actions without redirecting to new links or re-rendering material. State is managed and dynamically updated using `Redux`.

<a name="project-design"></a>
## Project Design
**Bop!** was built over a 10-day period in April 2018 as a part of App Academy's Software Engineering Bootcamp.

<a name="additional-features"></a>
## Additional Features (to be implemented)
- Settings page
  - Language support (coming soon: French, Spanish)
  - Color schemes (Dark, Light, and Funky themes)
- Mouse-free access

| Keystroke | Action |
| :---: | :---: |
| `SPACE` | Play and Pause songs |
| `TAB` | Search songs |
| `SHIFT + A` | Add song to Songs |

- Audio Visualization
  - Play button will optionally pulse to the beat of the song
  - Seek bar will have translucent music visualization pane
- Custom menu on right-click
- See friends who are currently online
  - 'Currently listening to' pane
