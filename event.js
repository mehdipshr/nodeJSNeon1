const EventEmitter = require('events');

const emitter = new EventEmitter(); /*ba oprator new mitonim az yek class estefade konim ya yek object tolid konim va mirizimesh darone const va azash estefadeh mikonim */
emitter.on('bell', (e)=> { /*HAR EVENT 2 GHESMAT DARE ghesmate aval harvaght name event seda zade beshe in function ejra mishe */
  console.log(e);
  console.log('open the door');
});

emitter.emit('bell' , {time:Date.now(),count: 2}) /*ghesmate 2 event seda zadane oon hast ke mitonim az method emit estefadeh konim */



// setTimeout(() => {
//   console.log('open the door');
// } ,2000)
