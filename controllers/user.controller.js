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

        if(newUser.id){
            if(newUser.gender){
                if(newUser.name){
                    if(newUser.contact){
                        if(newUser.address){
                            if(newUser.photoUrl){
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
                            else{
                                res.send("Please, save data with photoUrl")
                            }
                        }
                        else{
                            res.send("Please, save data with address")
                        }
                    }
                    else{
                        res.send("Please, save data with contact")
                    }
                }
                else{
                    res.send("Please, save data with name")
                }
            }
            else{
                res.send("Please, save data with gender")
            }
        }
        else{
            res.send("Please, save data with id")
        }

        
        // res.send("ok")
    }
}

module.exports.updateUser = (req, res, next) => {
    const updatedInfo = req.body;
    const data = fs.readFileSync(__dirname + '/../data.json');

    const parseData = JSON.parse(data);
    const updateAbleUser = parseData.find( data => data.id === updatedInfo.id);

    if(!updateAbleUser) {
        res.send("User is not exists");
    }
    else{
        updateAbleUser.id = updatedInfo.id;
        updateAbleUser.gender = updatedInfo.gender;
        updateAbleUser.name = updatedInfo.name;
        updateAbleUser.contact = updatedInfo.contact;
        updateAbleUser.address = updatedInfo.address;
        updateAbleUser.photoUrl = updatedInfo.photoUrl;

        // res.send(JSON.stringify)

        fs.writeFile(__dirname + '/../data.json', JSON.stringify(parseData), (err) => {
            if(err){
                res.send("Update failed");
            }
            else{
                res.send("User's info Updated");
            }
        });

    }
}

module.exports.deleteUser = (req, res, next) => {
    const { id} = req.params;
    const data = fs.readFileSync(__dirname + '/../data.json');

    const parseData = JSON.parse(data);
    const newUsers = parseData.filter( data => data.id !== Number(id));

    console.log(newUsers);

    fs.writeFile(__dirname + '/../data.json', JSON.stringify(newUsers), (err) => {
        if(err){
            res.send("Failed");
        }
        else{
            res.send("Deleted");
        }
    });
}