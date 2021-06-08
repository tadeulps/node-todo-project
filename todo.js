import readlineSync from "readline-sync"

let options = ['add', 'list', 'remove']
let index = readlineSync.keyInSelect(options, 'Type your command');
let TodoList=[];
select()

function select(){
    if(options[index]==='add'){
        const newTodo=readlineSync.question('What do you want to do? ');
        TodoList.push( {text: '🔴 '+newTodo, done: false})
    }
    else if(options[index]==='list'){
        console.log('=========================')
        console.log('Todo list')
        TodoList.map((r)=>console.log(r.text))
        console.log('=========================')
        options = ['add', 'list','check','remove'] 
    }
    else if(options[index]==='remove'){
        let remove = readlineSync.keyInSelect(TodoList.map((r)=>r.text), 'What todo do you want to remove?');
        TodoList.splice(remove,1)
        console.log('=========================')
        console.log('New list')
        TodoList.map((r)=>console.log(r.text))
        console.log('=========================')
    }
    else if(options[index]==='check'){
        let check = readlineSync.keyInSelect(TodoList.map((r)=>r.text), ' What todo do you want to check/uncheck?');
        console.log(TodoList[check].done)
        if(!TodoList[check].done){
            TodoList[check].text='🟢'+TodoList[check].text.slice(2)
            TodoList[check].done=true
        }else{
            TodoList[check].text='🔴'+TodoList[check].text.slice(2)
            TodoList[check].done=false
        }
    }else{
        return
    }
    index = readlineSync.keyInSelect(options, 'Type your command');
    select()
}
