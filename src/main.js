// Importing from Animations and Messaging
//import { MerryXmas } from './animations';
//import { Alert } from './messaging'

// Listener to fire up Merry Xmas
document.getElementById( 'button' ).addEventListener( 'click', e => {
  System.import("./animations").then( Animations => {
     if (!this.merryXmas) {
        this.merryXmas = new Animations.MerryXmas( 'effect' );
      }
      this.merryXmas.animate(); 
  });
  
} );

// Timeout to fire up Alert
setTimeout(() => {
    System.import("./messaging").then( Msg => {
        new Msg.Alert();
    });
}, 5000);