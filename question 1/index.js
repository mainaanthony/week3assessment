const posts_url = "'https://jsonplaceholder.typicode.com/posts/1"



//getting a resource

async function getPosts(){
  let result = await fetch('https://jsonplaceholder.typicode.com/posts')
  //this first fetch just gets the data but in unreadable format
  console.log(result)
  let products = await result.json()
  //this second await now converts the data to readable data
  console.log(products)
  }





// console.log(getPosts())








// //posting a post
async function postPosts(){
  try{

  let res =  await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  }catch(error){
     let results = await res.json()
     console.log(results)

  }
}

console.log(postPosts())


//update 

async function updatePost(){
     try{
      let res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      
       

     }catch(error){

         let results = await res.json()
         console.log(results)

     }

    




//   }

// console.log(updatePost())


///delete a resource

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});












//listing the nested resources


async function listNestedResources(){
try{
  let res =  await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
}catch(error)
{
  let result = await res.json()
  console.log(result)    


}



}

console.log(listNestedResources())
















//filterPosts

async function filterPosts(){
  let res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
try{

}catch(error){
  let results = await res.json();
  console.log(results)

}


 

}

console.log(filterPosts())
