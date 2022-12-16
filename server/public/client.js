$(document).ready(onReady);
function onReady(){
    getToDo();
    $('#submitButton').on('click', postToDo);
    $('body').on('click', '.completeButton', completeButton);
    $('body').on('click', '.deleteButton', deleteButton);
}
function getToDo(){
    $.ajax({
        method: 'GET',
        url: '/toDo'
    }).then((response) =>{
        $('tbody').empty();
        for(let res of response){
            if(res.status === 'Complete'){
                $('tbody').append(`
                <tr class="complete" data-id=${res.id}>
                    <th>${res.task}</th>
                    <th>${res.status}</th>
                    <th>Completed</th>
                    <th><button class="deleteButton">Delete</th>
                </tr>
                `)
                $('.complete').css("background-color", "green");
            }else{
                $('tbody').append(`
                <tr data-id=${res.id}>
                    <th>${res.task}</th>
                    <th>${res.status}</th>
                    <th><button class="completeButton">Complete</th>
                    <th><button class="deleteButton">Delete</th>
                </tr>
                `) 
            }
        }
        console.log(response);
    }).catch((error) =>{
        console.log('error',error)
    })
}

function postToDo(){
    console.log('in submit button')
    $.ajax({
        method: 'POST',
        url:'/toDo',
        data: {
            task: $('#toDoInput').val(),
            status: 'Incomplete'
        }
    }).then((response) =>{
        getToDo()
        $('#toDoInput').val('')
        $('#statusInput').val('')
    }).catch((error) =>{
        console.log('post error',error)
    })
}
function completeButton(){
    let idToUpdate = $(this).parent().parent().data().id;
    $.ajax({
        method: 'PUT',
        url:`/toDo/${idToUpdate}`,
        data:{
            status:'Complete'
        }
    }).then((response) =>{
        getToDo();
    }).catch((error) =>{
        console.log(error);
    })
}
function deleteButton(){
    let idToDelete = $(this).parent().parent().data().id;
    $.ajax({
        method:'DELETE',
        url:`/toDo/${idToDelete}`
    }).then((response) =>{
        getToDo();
    }).catch((error) =>{
        console.log(error);
    })
}