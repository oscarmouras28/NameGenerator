let pronoun=["the","our"];
let adj=["great","big"];
let noun=["jogger","racoon"];

function Generador(){
    let name="";
    for(i in pronoun){
        name=name+pronoun[i];        
        name=name+adj[0]        
        name=name+noun[0]                  
        console.log(name+".com")
        name="";
    }
    for(i in pronoun){
        name=name+pronoun[i];
        name=name+adj[1]        
        name=name+noun[1]                  
        console.log(name+".com")
        name="";
    }
    for(i in adj){
        name=name+pronoun[i];
        name=name+adj[1]        
        name=name+noun[0]                  
        console.log(name+".com")
        name="";
    }
    for(i in adj){
        name=name+pronoun[i];
        name=name+adj[0]        
        name=name+noun[1]                  
        console.log(name+".com")
        name="";
    }
    
}
console.log(Generador());
// duda de porque sale el undefined por la linea 37