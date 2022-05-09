
    let button = document.querySelector('.download_btn');
    button.addEventListener('click', getResponse);
    

async function getResponse(){
    let success = document.querySelector('.download_success');
    success.classList.remove('_success');    
    let people = document.querySelector('.people');
    people.innerHTML = '';
    for(let index = 0; index<5; index++){
        let response = await fetch('https://randomuser.me/api');
        // let response = await fetch('https://yesno.wtf/api');
        let content  = await response.json();
        people.innerHTML += `
        <div class="person">
            <div class="person_image">
                <img src="${content.results.picture}">
                // <img src="${content.image}" alt="" width="300px" height="200px">
            </div>
            /* <div class="information">
                <div class="inf">Answer: ${content.answer}</div>
            </div> */
        </div>
        `
    }

    success.classList.add('_success');    
}





    /*let response = await fetch('https://rickandmortyapi.com/api/character/1');
    let content  = await response.json();
    let people = document.querySelector('.people');
    people.innerHTML = '';
    people.innerHTML += `
    <div class="person">
        <div class="person_image">
            <img src="${content.image}" alt="" width="300px" height="200px">
        </div>
        <div class="information">
            <div class="inf">Name: ${content.name}</div>
            <div class="inf">Gender: ${content.gender}</div>
            <div class="inf">Species: ${content.species}</div>
            <div class="inf">Status: ${content.status}</div>
        </div>
    </div>
    `

    response = await fetch('https://rickandmortyapi.com/api/character/2');
    content  = await response.json();
    people = document.querySelector('.people');
    people.innerHTML += `
    <div class="person">
        <div class="person_image">
            <img src="${content.image}" alt="" width="300px" height="200px">
        </div>
        <div class="information">
            <div class="inf">Name: ${content.name}</div>
            <div class="inf">Gender: ${content.gender}</div>
            <div class="inf">Species: ${content.species}</div>
            <div class="inf">Status: ${content.status}</div>
        </div>
    </div>
    `

    response = await fetch('https://rickandmortyapi.com/api/character/3');
    content  = await response.json();
    people = document.querySelector('.people');
    people.innerHTML += `
    <div class="person">
        <div class="person_image">
            <img src="${content.image}" alt="" width="300px" height="200px">
        </div>
        <div class="information">
            <div class="inf">Name: ${content.name}</div>
            <div class="inf">Gender: ${content.gender}</div>
            <div class="inf">Species: ${content.species}</div>
            <div class="inf">Status: ${content.status}</div>
        </div>
    </div>
    `

    response = await fetch('https://rickandmortyapi.com/api/character/4');
    content  = await response.json();
    people = document.querySelector('.people');
    people.innerHTML += `
    <div class="person">
        <div class="person_image">
            <img src="${content.image}" alt="" width="300px" height="200px">
        </div>
        <div class="information">
            <div class="inf">Name: ${content.name}</div>
            <div class="inf">Gender: ${content.gender}</div>
            <div class="inf">Species: ${content.species}</div>
            <div class="inf">Status: ${content.status}</div>
        </div>
    </div>
    `

    response = await fetch('https://rickandmortyapi.com/api/character/5');
    content  = await response.json();
    people = document.querySelector('.people');
    people.innerHTML += `
    <div class="person">
        <div class="person_image">
            <img src="${content.image}" alt="" width="300px" height="200px">
        </div>
        <div class="information">
            <div class="inf">Name: ${content.name}</div>
            <div class="inf">Gender: ${content.gender}</div>
            <div class="inf">Species: ${content.species}</div>
            <div class="inf">Status: ${content.status}</div>
        </div>
    </div>
    `*/


    
   /* let response = await fetch('https://rickandmortyapi.com/api/character');
    let content  = await response.json();
    console.log(content);
    let cont = Object.values(content);
    let values = cont[1];
    values = values.splice(0, 5);
    console.log(values);

    let key;
    let people = document.querySelector('.people');
    for(key in values){
        console.log('values[key]');
        people.innerHTML += `
            <div class="person">
                <div class="person_image">
                    <img src="feodosia.jpg" alt="" width="300px" height="200px">
                </div>
                <div class="information">
                    <div class="inf">Name: ${values[key].employee_name}</div>
                    <div class="inf">ku</div>
                    <div class="inf">ku</div>
                    <div class="inf">ku</div>
                </div>
            </div>
        `
    }*/
/*}*/




