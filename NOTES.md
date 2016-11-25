# References:
http://ionicframework.com/docs/v2/components/

# Merged Project:
GitHub\-Ionic-\IonicTutorial2\
GitHub\driftyco\ionic-preview-app\

Bugfix161010:
Added sass data into ionic.config.json
{
  "name": "IonicPreviewApp",
  "app_id": "",
  "v2": true,
  "typescript": true,
  "sass": {
    "src": ["app/theme/app.+(ios|md).scss"],
    "dest": "www/build/css",
    "include": [
      "node_modules/ionic-framework",
      "node_modules/ionicons/dist/fonts",
      "node_modules/ionicons/dist/scss"
    ]
  }
}
