import * as member from "./constructors/member.js"
import * as result from "./constructors/results.js";
import * as listRenderer from "./listrenderer.js";
import { memberRenderer } from "./memberRenderer.js";
import { resultRenderer } from "./resultRenderer.js";


window.addEventListener("load", start);



function start() {
    // runBuildDisplayMembers();
    // runBuildAndShowResults();
    runBuildDisplayMembersAndResults()
    
    
 
    
}



const members = [];
const results = [];

async function runBuildDisplayMembersAndResults() {
    await buildMembersList();
    await buildResults();
    // const target = document.querySelector("table#members tbody");
    
    const memberList = listRenderer.construct(members, "table#members tbody", memberRenderer)
    memberList.render();
    // displayMembers(members);

    const resultList=listRenderer.construct(results, "table#results tBody", resultRenderer)
    resultList.render();

    document.querySelector("#sort-member-name").addEventListener("click", () => memberList.sort( "name"))
    document.querySelector("#sort-member-active").addEventListener("click", () => memberList.sort( "active"))
    document.querySelector("#sort-member-birthday").addEventListener("click", () => memberList.sort("birthday"))
    document.querySelector("#sort-member-age").addEventListener("click", () => memberList.sort("age"))
    document.querySelector("#sort-member-status").addEventListener("click", () => memberList.sort( "group"))


    document.querySelectorAll("[data-action='sort']").forEach(sortButton =>{
        sortButton.addEventListener("click", () => resultList.sort(sortButton.dataset.sortby))
    });


    //--------------------------------
    // const sorting = document.querySelector("#sort-members");
    // sorting.addEventListener("change", () => renderMember.sortList(sorting) );

    

    // const filtering = document.querySelector("#filter-members");
    // filtering.addEventListener("change", () => {renderMember.filterList(filtering.value, filtering)
    
    // // console.log("filter clikced")
    // });



    //------------------------
    // const checkbox = document.querySelector("#filter-active");

    
    // checkbox.addEventListener("click", () => renderMember.filterList(checkbox.value, checkbox.checked));
    
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





// ----------------------------------------------------------RESULTS--------------------------------------------------




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







export { findMember }