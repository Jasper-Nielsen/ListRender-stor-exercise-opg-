function construct(list, container, itemRenderer) {

    const ListRenderer = {
        render() {
            
                const table = document.querySelector("table#members tbody");
                table.innerHTML = "";
                //husk getAge() køres på objektet derfor member.getAge()
                for (const member of list) {
                    const html = /*html*/`
    <tr>
      <td>${member.name} </td>
      <td>${member.active}</td>
      <td>${member.birthday}</td>
      <td>${member.age}</td>
      <td>${determineAgeCategory(member.age)}</td>
      <td>${member.email}</td>
    </tr>`;

                    table.insertAdjacentHTML("beforeend", html);
                
            }
        }
    }
    return ListRenderer;
}


function determineAgeCategory(age) {
    if (age < 18) {
        return "Junior"
    } else {
        return "Senior"
    }
}
export {construct}