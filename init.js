const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main() 
  .then(() => { 
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
  { 
    from:"Bob",
    to: "Job",
    msg: " I am fine", 
    created_at: new Date(),
  },
  { 
    from:"Tim",
    to: "Nob",
    msg: " Send me notes for exam", 
    created_at: new Date(),
  },
  { 
    from:"Manju",
    to: "Sam",
    msg: " teach me JS callbacks", 
    created_at: new Date(),
  },
  { 
    from:"Mona",
    to: "Ummu",
    msg: " I love you", 
    created_at: new Date(),
  },
  { 
    from:"Sumi",
    to: "Farhu",
    msg: " I want to meet you at 1 p.m. tomorrow", 
    created_at: new Date(),
  },
];
  
Chat.insertMany(allChats);