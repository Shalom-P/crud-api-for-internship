import { v4 as uuidv4 } from 'uuid';
let post = [];


export const getposts = (req,res) =>{
    console.log(post);    
    res.send(post);
}

export const postPosts = (req,res)=>{
    const postss = req.body;
    post.push({...postss,id:uuidv4()});
    res.send(`post with the title ${postss.title} added to the database`);

}
export const getPost = (req,res)=>{
    const{ id } = req.params;
    const foundpost=post.find((postss)=> postss.id===id);
    res.send(foundpost);
}
export const deletepost = (req,res)=>{
    const{id}=req.params;
    post = post.filter((postss)=>postss.id!==id);
    res.send(`USER with the id ${id} deleted`);
}
export const updatepost = (req,res)=>{
    const {id} = req.params;
    const{title,content}=req.body;

    const post_to_update=post.find((postss) => postss.id===id);
    if(title){
        post_to_update.title = title;
    }
    if(content){
        post_to_update.content = content;
    }
    res.send(`Post with the id ${id} has been updated`)
    
}