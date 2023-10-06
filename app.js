
import {ListRenderer} from "./listrenderer.js";
import { MemberRenderer } from "./memberRenderer.js";
import { ResultRenderer } from "./resultRenderer.js";
import * as controller from "./controller.js"

window.addEventListener("load", start);



function start() {
    // runBuildDisplayMembers();
    // runBuildAndShowResults();
    runBuildDisplayMembersAndResults()
    
    
 
    
}





async function runBuildDisplayMembersAndResults() {
  
    // const target = document.querySelector("table#members tbody");
    
    const memberList = new ListRenderer(await controller.readMembers(), "table#members tbody", new MemberRenderer)
    memberList.render();
    // displayMembers(members);

    const resultList= new ListRenderer(await controller.readResults(), "table#results tBody", new ResultRenderer)
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





















