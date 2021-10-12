var Userdb = require('../model/model');
var Userbks = require('../model/books');
const {v4 : uuidv4} = require('uuid')

exports.create=(req,res)=>{
if(!req.body){

    res.status(400).send("Message cannot be empty");
    return;

}
const newId = uuidv4()
const user = new Userdb({
    name: req.body.name,
    unq:newId 
});

user
.save(user).then(data=>{
    res.send(data);
}).catch(err=>{
    res.status(500).send(err.message)
})
}

exports.createBook=(req,res)=>{
    if(!req.body){
    
        res.status(400).send("Message cannot be empty");
        return;
    
    }
    const newId = uuidv4()
    const user = new Userbks({
        name: req.body.name,
        authid: req.body.authid,
        author: req.body.author,
        isbn:req.body.isbn,
        unq:newId
    });
    
    user
    .save(user).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send(err.message)
    })
    }








exports.find=(req,res)=>{
Userdb.find().then(user=>{
    console.log(user);
    res.send(user);
}).catch(err=>{
    res.send("mess error");
})
}



exports.findBook=(req,res)=>{
    Userbks.find().then(user=>{
        console.log(user);
        res.send(user);
    }).catch(err=>{
        res.send("mess error");
    })
    }


exports.getauthor=(req,res)=>{
    Userdb.findById(req.params.id).then(data=>{
      const stri= data.name;
        var store= Userbks.find({author: stri}).then(user=>{
            console.log(user);
            res.send(user);
        })
       
    })
}

exports.getbook=(req,res)=>{
    Userbks.findById(req.params.id).then(data=>{
      const stri= data.author;
    
        Userdb.find({name: stri}).then(user=>{
            console.log(user);
            res.send(data);
        })
       
    })
}



exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send("Message cannot be empty");
    }
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    Userdb.findByIdAndUpdate(id,req.body).then(data=>{
        res.send(data);
    })
}

exports.updateBook=(req,res)=>{
    if(!req.body){
        res.status(400).send("Message cannot be empty");
    }
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    Userbks.findByIdAndUpdate(id,req.body).then(data=>{
        res.send(data);
    })
}




exports.delete=(req,res)=>{
    if(!req.body){
        res.status(400).send("Message cannot be empty");
    }
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    Userdb.findByIdAndDelete(id).then(data=>{
        res.send(data);
    })
}


exports.deleteBook=(req,res)=>{
    if(!req.body){
        res.status(400).send("Message cannot be empty");
    }
    const id = req.params.id;
    console.log(id);
    console.log(req.body);
    Userbks.findByIdAndDelete(id).then(data=>{
        res.send(data);
    })
}