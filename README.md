# Soundboard - Anoujean #

## 1/ Introduction ##
```
This is an Porject for a school, the concept was to create an app with react native that can have a soundboard, with différent sound that we picked from an Library call *Freesound* by an API that was made available by the entity by himself. Following that you can also *record* some sound or noise and add to the soundboard.
```

## 2/ My Work and how far did i go ##

Basically what i did in this project was:

### *A/ Soundboard View* ###

Creating an soundboard with default sounds and clickable tiles that has random colors

### *B/ Search View* ###

Reasearching some sound with an keyword in Freesound, with its API, and add it to the Library. For this i used Axios for the beggining ,because that was what i used to use at my work, but then i realize that we saw *fetch* and decided to use for another part.

### *C/ Library view* ###

Getting a look at what sound did we add and remove it if we don't want it anymore.

## 3/ The missing parts ##

During this project i didn't finish some of the features that was supposed to be added:
. Recording & Editing an tile from the sounboard: i didn't have much time to spent on it because of another project
. Downlowding sound from Freesound: this is the part where i use fetch to download the sound but it happens that i had an issue that i couldn't resolve and lost some time:
```
Access to fetch at 'https://freesound.org/apiv2/sounds/176354/download' from origin 'http://localhost:19006' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: Redirect is not allowed for a preflight request.
```
