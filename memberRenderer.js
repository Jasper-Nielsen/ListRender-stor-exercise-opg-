const dictActive ={
    true:"aktiv",
    false:"inaktiv"
} 



const memberRenderer = {
    
    render(member) {
        // const member = this.item;

        //husk getAge() køres på objektet derfor member.getAge()
        {
            const html = /*html*/`
    <tr>
      <td>${member.name} </td>
      <td>${dictActive[member.active]}</td>
      <td>${member.birthday.toLocaleString('da-DK', { dateStyle: 'short' })}</td>
      <td>${member.age}</td>
      <td>${member.group}</td>
    </tr>`;

            return html

        }
    },
      
}




export { memberRenderer }