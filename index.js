const express = require('express'); // npm i express --save

const app = express();

app.use( express.static('public') )

app.get('/', (req, res) => {
    // this response isn't sent becuase there is a index.html file in public (webservers serve index.html as no path)
    res.send('Hello Express app!')
});

app.get('/api', (req, res) => {
    // get some data from databse or file or something, try inbuilt fs.readfile or npm node-fetch
    let data = {
        "thing": true,
        "count": 7
    }
    res.send(JSON.stringify(data) )
})

// need to run as admin for ports < 2000
// 80 is open web aka localhost, 3000 for dev aka localhost:3000
app.listen(3000, () => console.log('Present.js started') )