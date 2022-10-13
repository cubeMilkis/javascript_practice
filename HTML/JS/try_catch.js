//try
try {
    hello.toUpperCase();
} catch {   //catch
    console.log(`ERROR!`);
}

const yell = (msg)=>{
    try{
    console.log(msg.toUpperCase().repeat(3));
    } catch (e){
        console.log(`PLEASE PASS A STRING NEXT TIME!`);
    }
}