const axios = require("axios"); 
const hello = () => {
  console.log("Hello")
}

module.exports = {
  hello
}; 

clientData = axios.create ({
  baseURL: this.baseURL, 
  headers: {
    Accept: "application/json", 
     app_id: "b91ba6fb", 
        app_key:"18cba4081827e5572ab9733dae095075"
    }

}); 

clientData.get("hello").then(res=> {
    var data1 = res.data.results[0].lexicalEntries; 
    data1.forEach(element => {
        console.log(element.lexicalWord); 
        console.log(element.entries[0].senses[0].short_definitions[0]); 
    });
    console.log("Provided by " + res.data.metadata.provider); 
});  
