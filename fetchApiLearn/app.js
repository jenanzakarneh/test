getUsers();




// document.getElementById('add-post').addEventListener('submit',addPost);
      
function getUsers(){
     fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json())
     .then((data)=>{
     let output= `<div class="card">
         <h3> Posts </h3>
         </div>`;
         let id=0;
         data.forEach(function(post){
             output+=`
             <div class="card" id = "${id}"onclick="modifyPost(this)">
                 <h3>${post.title}</h3>
                 <p>${post.body}</p>
                 </div>
            `;
             id++;
        });
         document.getElementById('output').innerHTML=output;
     }
         
     )
 }
 function addPost(e){
     
     e.preventDefault();
     let title = document.getElementById('title').value;
     let body = document.getElementById('body').value;

     fetch('https://jsonplaceholder.typicode.com/posts',{
         method: 'POST',
         headers: {
            'Accept':'application/json , text/plain */*', 
            'content-type':'application/json'
         },
         body: JSON.stringify({title: title , body: body})
     }).then((res)=> res.json())
     .then((data)=>console.log(data));
 }
 function modifyPost(post){
    const form = document.getElementById("add-post");
    form.scrollIntoView();
    let title = post.querySelector("h3");//title element 
    let body= post.querySelector("p");//body element
    console.log("title is : "+ title.innerHTML);
    console.log("body is : "+ body.innerHTML);

    form.querySelector("#title").defaultValue=title.innerHTML;
    form .querySelector("#body").defaultValue=body.innerHTML;
 }
 function editCard(){
    console.log("post updated ")
 }