import * as member from "./constructors/member.js"
import * as result from "./constructors/results.js";
import * as listRenderer from "./listrenderer.js";
import { memberRenderer } from "./memberRenderer.js";
import { resultRenderer } from "./resultRenderer.js";
window.addEventListener("load", start);



function start() {
    runBuildDisplayMembers();
    runBuildAndShowResults();

    document.querySelector("#sort-members").addEventListener("change",sortMember);
}



function sortMember(){
    const sortValue = document.querySelector("#sort-members").value
    console.log("SORT CLICK")
    if (sortValue === "name"){
        console.log("NAME")
    } else if (sortValue === "isActiveMember"){
        console.log("ACTIVE")
    } 
    else if (sortValue === "age") {
        console.log("AGE")
    } 

    /* <option value="name">Name</option>
      <option value="isActiveMember">Active</option>
      <option value="age">Age</option>
     */
}

const members = [];

async function runBuildDisplayMembers() {
    await buildMembersList();

    const renderMember = listRenderer.construct(members, "table#members tbody", memberRenderer)
    renderMember.render();
    // displayMembers(members);
    
}

async function runBuildAndShowResults() {
    await buildResults();
    // showResults(results);

    const renderResult = listRenderer.construct(results, "#results tbody", resultRenderer);
    renderResult.render()

}


async function fetchMembers() {
    const resp = await fetch("members.json");
    const data = await resp.json();
    return data;
}

async function buildMembersList() {
    const originalObjects = await fetchMembers();

    for (const orgobj of originalObjects) {
        const memberObj = member.construct(orgobj);
        members.push(memberObj);
    }
}

// function displayMembers(members) {
//     const table = document.querySelector("table#members tbody");
//     table.innerHTML = "";
//     //husk getAge() køres på objektet derfor member.getAge()
//     for (const member of members) {
//         const html = /*html*/`
//     <tr>
//       <td>${member.name} </td>
//       <td>${member.active}</td>
//       <td>${member.birthday}</td>
//       <td>${member.age}</td>
//       <td>${determineAgeCategory(member.age)}</td>
//       <td>${member.email}</td>
//     </tr>`;

//         table.insertAdjacentHTML("beforeend", html);
//     }
// }




// ----------------------------------------------------------RESULTS--------------------------------------------------


const results = [];

async function fetchResults() {
    const response = await fetch("results.json");
    const data = await response.json()
    return data;
}
async function buildResults() {
    //hent data først
    const originalResults = await fetchResults();

    // hver resultat skal tilføjes til results liste derfor for of
    // husk resultat objekterne skal laves derfor kald på konstruktor
    for (const personResult of originalResults) {
        const resultObject = result.construct(personResult);


        // mål byg liste. dvs push noget til results = []
        results.push(resultObject);
    }

}


function findMember(memberId) {

    return members.find(member => member.id === memberId)


    // let foundMember = undefined;

    // for (const member of members) {
    //     if (memberId === member.id) {
    //         foundMember = member;
    //     } 
    // } return foundMember

}



// function showResults(resultList) {
//     document.querySelector("#results tbody").innerHTML = "";

//     const sortedList = sortTime(resultList);

//     for (const result of sortedList) {
// let name = "";

// if (result.member == undefined) {
//     name = "ukendt"
// } else {
//     name = result.member.name;
// };

//         const html = /*html */ `
// <tr>
//     <td>${new Date(result.date).toLocaleString('da-DK', { dateStyle: 'long' })}</td>
//     <td>${name}</td>
//     <td>${translateDiscipline(result.discipline)}</td>
//     <td>${translateResultType(result.type)}</td>
//     <td>${result.displayTime}</td>
// </tr>
// `

//         document.querySelector("#results tbody").insertAdjacentHTML("beforeend", html);

//     };

//     function sortTime(list) {
//         return list.sort((a, b) => a.time - b.time);
//     }
// };



export { findMember }