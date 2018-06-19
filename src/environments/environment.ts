// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase:{
    apiKey: "AIzaSyAxxRhK1LR7fL0StXG7Bshx09Jk_y7zf2M",
    authDomain: "getaplottestapp.firebaseapp.com",
    databaseURL: "https://getaplottestapp.firebaseio.com",
    projectId: "getaplottestapp",
    storageBucket: "getaplottestapp.appspot.com",
    messagingSenderId: "35343881382"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
