const fs = require('fs');

module.exports.randomUser = (req, res, next) => {
    const data = fs.readFileSync(__dirname + '/../data.json');
    const parseData = JSON.parse(data);
    
    const randomNumber = Math.floor(Math.random() * (parseData.length));
    const randomUser = JSON.stringify(parseData[randomNumber]);

    res.send(randomUser);
}

module.exports.allUser = (req, res, next) => {
    const {limit} = req.query;
    const data = fs.readFileSync(__dirname + '/../data.json');

    if(limit){
        const parseData = JSON.parse(data);
        const sliceData = JSON.stringify(parseData.slice(0, limit));
        
        res.send(sliceData);
    }
    else{
        res.send(data);
    }
}

module.exports.saveUser = (req, res, next) => {
    const newUser = req.body;
    const data = fs.readFileSync(__dirname + '/../data.json');

    const parseData = JSON.parse(data);
    const existUser = parseData.find( data => data.id === newUser.id);

    if(existUser) {
        res.send("Already exists");
    }
    else{
        parseData.push(newUser);

        fs.writeFile(__dirname + '/../data.json', JSON.stringify(parseData), (err) => {
            if(err){
                res.send("User save failed");
            }
            else{
                res.send("User saved");
            }
        });
    }
}