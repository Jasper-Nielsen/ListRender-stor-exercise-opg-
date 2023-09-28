const memberRenderer = {
    render() {
        const member = this.item;


        //husk getAge() køres på objektet derfor member.getAge()
        {
            const html = /*html*/`
    <tr>
    <td><button>Hej</button></td>
      <td>${member.name} </td>
      <td>${member.active}</td>
      <td>${member.birthday}</td>
      <td>${member.age}</td>
      <td>${determineAgeCategory(member.age)}</td>
      <td>${member.email}</td>
    </tr>`;

            return html

        }
    },
    postRender(element){
        console.log("noget")
        element.querySelector("button").addEventListener("click", deleteResult) 
    }

    
}

function deleteResult() {
    console.log("deleted results")
}

function determineAgeCategory(age) {
    if (age < 18) {
        return "Junior"
    } else {
        return "Senior"
    }
}

export { memberRenderer }