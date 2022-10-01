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
        const afterSlice = JSON.stringify(parseData.slice(0, limit));
        
        res.send(afterSlice);
    }
    else{
        res.send(data);
    }

}