# UI-Elements-Webkit
a set of UI components for Algotec products using Angular platform 

## SVG ICONS
all components use alg-icon component to display icons, this references svg symbols that should already be on the page
when the component mounts, to get the svg icons needed for this package's components loaded one must add the svg sprite to the page by either
 1. by including the build generated icons.svg sprite in the html (manually or using XHR)
 2. utilizing [svgstore-webpack-plugin](https://github.com/mrsum/webpack-svgstore-plugin) in webpack config 
 and globbing this package src folder for svg assets
 
 the loading function should look like this
 ````javascript
 (function uiPackAppSVG() {
 	let __svg__ = { pat**h: '../node_modules/@algotec/ui-elements-webkit/src/**/*.svg', name: 'assets/icon/[hash].ui-icons.svg' };
 	require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);
 })();
 ````
 
 the configuration for svgStore plugin looks like this :
 ````javascript
 ///plugin
 new SvgStore({
 			svgoOptions: { // svgo options https://github.com/svg/svgo
 				plugins: [
 					{removeStyleElement: true},
 					{collapseGroups: true},
 					{cleanupIDs: true},
 					{removeDimensions: true}
 				]
 			},
 			prefix: 'icon'
 		}),
````

notice that the generated ID will be 'icon-'+filename where filename is case-insensitive and all dots converted to dashes
eg :
something.Weird.svg --> #icon-something-weird