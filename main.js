//Function to perform fetch action

async function getData(){
    let url = 'fetch_data.json';

    try{
        let resonse = await fetch(url)
        let data = await resonse.json();
        return data;
        console.log(data)
    } catch(error){
        console.log(error)
    }
}

//Render to the DOM
async function renderUsers() {
    let users = await getData();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <img src="${user.profileURL}" >
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();