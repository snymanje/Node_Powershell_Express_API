const Shell = require('node-powershell');

const ps = new Shell({
    executionPolicy: 'Bypass',
    noProfile: true
});

exports.getPSData = (req, res, next) => {
    ps.addCommand(`Get-Process | ? { $_.name -like '*code*' }`);
    ps.invoke()
        .then(response => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(response)
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        });
}