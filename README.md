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
