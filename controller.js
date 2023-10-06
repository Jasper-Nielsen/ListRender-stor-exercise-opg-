import { MemberObject } from "./constructors/member.js"
import { ResultObject } from "./constructors/results.js";

const members = [];
const results = [];

async function readMembers() {
    if (members.length > 0) {
        return members;
    } else {
        await buildMembersList();
        return members;
    }
}


async function readResults() {
    if (results.length > 0) {
        return results;
    } else {
        await buildResults();
        return results;
    }
}


// CONTROLLER

async function fetchMembers() {
    const resp = await fetch("members.json");
    const data = await resp.json();
    return data;
}

async function buildMembersList() {
    const originalObjects = await fetchMembers();

    for (const orgobj of originalObjects) {
        const memberObj = new MemberObject(orgobj);
        members.push(memberObj);
    }
}




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
        const resultObject = new ResultObject(personResult);


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
export { readMembers, readResults, findMember }