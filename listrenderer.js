

class ListRenderer {

        constructor(list, container, itemRenderer) {
        this.container = document.querySelector(container)
            console.log(this.container)
            console.log(container)
        this.itemRenderer = itemRenderer
        this.list = list
        
        }
        render() {
            
            this.container.innerHTML = "";
            for (const item of this.list) {
                const html = this.itemRenderer.render(item)
                this.container.insertAdjacentHTML("beforeend", html)
            }
        }
        sort(sortBy, sortDir){


            if (sortDir) {
                this.sortDir = sortDir
            } else if (sortBy === this.sortBy) {

                // hvis this.sortDir var "asc så sæt til Desc eller omvendt"

                if (this.sortDir === "asc") {
                    this.sortDir = "desc"
                } else {
                    this.sortDir = "asc"
                }
            } else {
                this.sortDir = "asc"
            }
            this.sortBy = sortBy;

            console.log(`sorter efter ${this.sortBy} i retning af ${this.sortDir}`)

            // console.log(`sort list by ${sortBy} in direction ${sortDir}`)

            this.list.sort((a, b) => {
                
                if (this.sortDir === "asc") {
                    if (a[this.sortBy] > b[this.sortBy]) {
                        return 1
                    } else {
                        return -1
                    }
                } else {

                    if (a[this.sortBy] < b[this.sortBy]) {
                        return 1
                    } else {
                        return -1
                    }

                }

            })
                ;
            this.render();
        }


        // sortList(sortBy) {
        //     if (sortBy.value === "name-ascending") {
        //         this.renderers.sort((a, b) => a.item.name.localeCompare(b.item.name));
        //     } else if (sortBy.value === "name-descending") {
        //         this.renderers.sort((a, b) => b.item.name.localeCompare(a.item.name));
        //     } else if (sortBy.value === "age") {
        //         this.renderers.sort((a, b) => a.item.age - b.item.age);
        //     }
        //     this.clear();
        //     this.render();

        // },
        clear() {
            const table = document.querySelector(container)
            table.innerHTML = "";
        }

        filterList(filterProperty, filterValue) {
            this.filterProperty = filterProperty;
            console.log(this.filterProperty)


            this.filterValue = filterValue;

            console.log(this.filterValue)

            this.clear();
            this.render();


        }
    }

    // for (const item of list) {
    //     const renderer = Object.create(itemRenderer);
    //     renderer.item = item;
    //     ListRenderer.renderers.push(renderer)
    // }


    // return ListRenderer;


// const sortedList = sortTime(resultList);

// for (const result of sortedList) {
//     let name = "";

//     if (result.member == undefined) {
//         name = "ukendt"
//     } else {
//         name = result.member.name;
//     };

export { ListRenderer }