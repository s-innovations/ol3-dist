# ol3-dist
A bower consumable dist for ol3 (do not add it to any registry please)

Typedefinitions are added for typescript for ol3 and proj4. The ol3 TypeScript definition is automatically generated from the JSDoc annotations in the OL3 source using Jackie NG JSDoc TypeScript plugin (https://github.com/jumpinjackie/jsdoc-typescript-plugin)

## Usage
In your bower.json dependency list add
```
    "ol3": "s-innovations/ol3-dist",
```
and using a grunt pipeline I am using grunt-bower-task to install the scripts to my webapp.
```
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.initConfig({
    bower: {
            'install': {
                'options': {
                    'targetDir': 'wwwroot/libs',
                    'verbose': true
                }
            }
        }
  });
```

## Versioning

In all my projects i am using requirejs and typescript generated amd modules and by editing the bower.json to define exportOverride i now can use different versions of ol3 at runtime. You might ask why one would have more versions - and for small projects this is ofcause not something you run into. But building larger systems and releasing packages continuosly I argue that we dont always have the time to go back and update older packages to the latest version incase of breaking changes. 

```
 "exportsOverride": {
    "ol3": {
      "ol3/v3.11.2": [ "v3.11.2/ol.js", "v3.11.2/ol.css" ],
      "ol3/v3.14.0": [ "v3.14.0/ol.js", "v3.14.0/ol.css" ]
    }
  }
```

Using amd modules, modules can be defined such `import ol = require("openLayers")` resolve to latest version, and version specific loads like `import ol = require("openLayers/v3.11.2")` resolve to older versions.

a requirejs configuration might look like this
```
        require.config({
            shim: {
                "openLayers/v3.11.2": {
                    deps: ["proj4", "css!libs/ol3/v3.11.2/ol.css"],
                    init: function (proj4) {
                        this.proj.setProj4(proj4);
                    }
                },
                "openLayers": {
                    deps: ["proj4", "css!libs/ol3/v3.14.0/ol.css"],
                    init: function (proj4) {
                        this.proj.setProj4(proj4);
                    }
                },
                "jsts": {
                    deps: ["libs/jsts/javascript.util.min"]
                }
            },
            paths: {
                "si-portal-framework": "libs/si-portal-framework/dist/src",
                "template": "libs/si-portal-framework/dist/src/koExtensions/template",
                "stringTemplateEngine": "libs/si-portal-framework/dist/src/koExtensions/stringTemplateEngine",
                "css":"libs/require-css/css",
                "text": "libs/text/text",
                "knockout": "libs/knockout/knockout",
                "openLayers/v3.11.2": "libs/ol3/v3.11.2/ol",
                "openLayers": "libs/ol3/v3.14.0/ol",
                "proj4": "libs/proj4/proj4",
                "jsts": "libs/jsts/jsts.umd.min",
                "olLayerSwitcher": "libs/olLayerSwitcher/ol3-layerswitcher.umd"
            }
        });
```

## Definitions

the bower.json file of this dist project has tsd link metadata, meaning with the following grunt configuration typedefinitions can automaticly be linked to your tsd.d.ts file. The example also shows how tsd grunt can be used to install or update definition files from your tsd.json file. 

```
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-tsd');
  grunt.initConfig({
   exec: {
            tsdLink: 'tsd link'
        },
   tsd: {
            'install': {
                'options': {
                    'command': 'reinstall',
                    'latest': false,
                    'config': 'tsd.json',
                    'opts': {}
                }
            },           
            'update': {
                'options': {
                    'command': 'reinstall',
                    'latest': true,
                    'config': 'tsd.json',
                    'opts': {}
                }
            }


        }
  });
```

## Extra

A little extra information, for those who want to work with amd modules and typescript. When using 3th party libraries that are not made with amd loader support the following example is very usefull.
```
grunt.loadNpmTasks('grunt-umd');
grunt.initConfig({
    umd: {
        ol3LayerSwitcher:{
            src: "wwwroot/libs/olLayerSwitcher/ol3-layerswitcher.js",
            dest: "wwwroot/libs/olLayerSwitcher/ol3-layerswitcher.umd.js",
            deps: {
                'default': ["ol"],
                amd: ["openLayers", "css!libs/olLayerSwitcher/ol3-layerswitcher.css"]
            }
        },
        jsts: {
            options: {
                src: 'wwwroot/libs/jsts/jsts.min.js',
                dest: 'wwwroot/libs/jsts/jsts.umd.min.js',
                objectToExport: 'jsts', 
                amdModuleId: 'jsts', 
                deps: {
                    'default': ['ol'],
                    amd: ['openLayers'],
                }
            }
        }
    },
});
```
