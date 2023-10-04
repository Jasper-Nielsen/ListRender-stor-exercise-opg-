

function construct(list, container, itemRenderer) {

    const ListRenderer = {
        renderers:[],
        sortBy: undefined,
        sortDir: undefined,
        // container: container,
        render() {
            const table = document.querySelector(container)
            for (const renderer of this.renderers) {
               
                 const html = renderer.render() 
            
                 table.insertAdjacentHTML("beforeend",html)
                const addedHtml = table.lastElementChild
                    if(renderer.postRender){
                        renderer.postRender(addedHtml)
                    }
                


                }
        //    return list.forEach(item => {itemRenderer.render(item)});
        },
       sortList(sortBy){
           if (sortBy.value === "name-ascending"){
            this.renderers.sort((a,b)=> a.item.name.localeCompare(b.item.name));
           } else if (sortBy.value === "name-descending"){
               this.renderers.sort((a, b) => b.item.name.localeCompare(a.item.name));
           } else if (sortBy.value === "age") {
               this.renderers.sort((a, b) => a.item.age - b.item.age);
           }
           this.clear();
           this.render();
           
       },
       clear(){
           const table = document.querySelector(container)
           table.innerHTML = "";
       }
    }

    for (const item of list) {
        const renderer = Object.create(itemRenderer);
        renderer.item = item;
        ListRenderer.renderers.push(renderer)
    }


    return ListRenderer;
}

// const sortedList = sortTime(resultList);

// for (const result of sortedList) {
//     let name = "";

//     if (result.member == undefined) {
//         name = "ukendt"
//     } else {
//         name = result.member.name;
//     };

export { construct }