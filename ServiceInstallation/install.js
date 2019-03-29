var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Tfg.ExchMTALookup.srv',
  description: 'Node API to retrieve the MTA exchange info for a user',
  script: 'D:\\Tfg.AD.Service\\server.js',
/*   nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ] */
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();