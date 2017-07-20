"use strict";
const path = require('path');
module.exports = function (config) {
	const configuration = {
		frameworks: ["jasmine", "karma-typescript"],
		files: [
			{pattern: "./base.spec.ts"},
			{pattern: "./src/**/*.+(ts|html)"}
		],
		preprocessors: {
			"**/*.ts": ["karma-typescript"]
		},
		karmaTypescriptConfig: {
			bundlerOptions: {
				entrypoints: /\.spec\.ts$/,
				transforms: [
					require("karma-typescript-angular2-transform"),
					require("karma-typescript-es6-transform")() // the arguments here can be like .babelrc options (eg presets defaults to es2015)
				]
			},


			compilerOptions: {
				exclude: ['dist', 'compiled', 'inlined'],
				module: "commonjs",
				baseUrl: './',
				"emitDecoratorMetadata": true,
				"downlevelIteration": true,
				"importHelpers": true,
				"allowSyntheticDefaultImports": true,
				"sourceMap": true,
				"noEmitHelpers": true,
				"experimentalDecorators": true,
				target: 'es5',
				lib: ["dom","es5","es6","scripthost"]
			}
		},
		reporters: ["progress", "karma-typescript"],
		browsers: ['ChromeNoSandbox'],
		customLaunchers: {
			ChromeNoSandbox: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},
		/*
		 * Continuous Integration mode
		 * if true, Karma captures browsers, runs the tests and exits
		 */
		singleRun: true
	};


	config.set(configuration);
};
