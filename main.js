//Function to perform fetch action

async function getData(){
    let url = 'fetch_data.json';

    try{
        let resonse = await fetch(url)
        return await resonse.json();
    } catch(error){
        console.log(error)
    }
}