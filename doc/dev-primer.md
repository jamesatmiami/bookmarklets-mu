## Development Guide - Getting Started

### Go to the parent directory under which a working copy will be created:

  ```$ cd <parent-directory>```

### Create a working copy of the ```bookmarklets-mu``` repository

  ```$ git clone https://github.com/jamesatmiami/bookmarklets-mu.git```

### Change directory to the working copy

  ```$ cd bookmarklets-library```

### Install ```npm``` package dependencies

  ```$ npm install```

This command follows the directives in the ```package.json``` file.

### Start coding...

  ```$ cd ..```

### Build, using ```webpack```, with the following command

  ```$ npm run build```

See ```package.json``` and ```webpack.config.js``` for more info on what the build will produce.

You can control whether ```webpack``` outputs minified JavaScript by editing the ```package.json``` file:

* ```webpack -p``` # produces minified 'production-ready' output
* ```webpack``` # with no switches outputs non-minified JavaScript for debugging

### Load ```index.html``` in your browser to install the bookmarklets

The links in ```index.html``` point to the updated bookmarklet scripts in the ```build``` subdirectory.
