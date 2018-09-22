// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBuasCr4zXCGttiDUBxBbAB6Fc_41Iu8JE',
    authDomain: 'project-64c2c.firebaseapp.com',
    databaseURL: 'https://project-64c2c.firebaseio.com',
    storageBucket: 'project-64c2c.appspot.com',
    projectId: 'project-64c2c', // <--- make sure project ID is here
    messagingSenderId: '452209644822'
  },
  mapsAPI: 'AIzaSyDCdGfPgNS1mui1GImDzyWIc41AckWiOcA'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
