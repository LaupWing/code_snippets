import '../db';
import firebase from 'firebase';
const db = firebase.firestore();

async function getCodeSnippets(){
    const res = await db.collection('code_snippets').get()
    const data = res.docs.map(doc=>{
            return doc.data();
        })
    return data
}

export default getCodeSnippets;
