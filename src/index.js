import {getUsers, deleteUser} from './api/userApi';
/* eslint-disable no-console */

getUsers().then(result => {
    let usersBody = "";
    
    result.forEach(user => {
        usersBody += `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        `;
    }); 

    document.querySelector('#users').innerHTML = usersBody;
    
    const deletLinks = document.querySelectorAll('.deleteUser');

    [].forEach.call(deletLinks, (deleteLink)=>{
        deleteLink.addEventListener('click', event => {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });
})