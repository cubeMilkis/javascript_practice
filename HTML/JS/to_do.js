//to do list making
let wants = prompt(`what would you like to do?`);

//commands
// const commands = [`new`, `list`, `delete`, `quit`];
const todos = [`Posting articles on blog`, `Draw Mintruffle`];
//checking while
while(wants !== `quit` && wants !== `q`){
    if(wants === `list`) {
        console.log(`***********************`);
        for(let i = 1; i <= todos.length; i++){
            console.log(`${i}.) ${todos[i-1]}`);
        }
        console.log(`***********************`);
    } else if(wants === `new`){
        const newTodo = prompt(`Ok, what id your new to do?`);
        todos.push(newTodo);
        console.log(`${newTodo} added to your list`);
    } else if(wants === `delete`){
        const deleteTodo = parseInt(prompt(`Ok, enter a number of the list to delete`));
        if (!Number.isNaN(deleteTodo)){
            const deleted = todos.splice(deleteTodo-1, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }
    }
    wants = prompt(`what would you like to do?`);
}
console.log(`Goodbye`);