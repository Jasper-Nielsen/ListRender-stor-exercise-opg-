

function construct(list, container, itemRenderer) {

    const ListRenderer = {
        renderers:[],
        sortBy: undefined,
        sortDir: undefined,
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
       sort(sortBy,sortDir){
        if(this.sortDir === undefined){
            sortDir = "asc"
        }else {
            sortDir = "dec"
        }
        sortBy = 
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