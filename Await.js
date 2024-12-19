function fetchUserData(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve('user data received'),1000);
    });
}
function fetchPosts(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve('posts data received'),500); 
    });
}
fetchUserData()
    .then((userData)=>{
        console.log(userData);
        return fetchPosts();
    })
    .then((postsData)=>{
        console.log(postsData);
    })
    .catch((error)=>{
        console.error(error);
    });

    async function getUserAndPosts(){
        try{
            const userData=await fetchUserData();
            console.log(userData);

            const postsData=await fetchPosts();
            console.log(postsData);
        }
        catch(error){
            console.error(error);
        }
    }
    getUserAndPosts();
