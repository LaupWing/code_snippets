import dateFormat from 'dateformat';

export default (post)=>{
    const date = new Date(post.createdAt.seconds*1000);
    const createdAt = dateFormat(date);
    return createdAt
}