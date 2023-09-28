const resultRenderer = {
    render() {
const result = this.item;
        // const sortedList = sortTime(resultList);

       
            let name = "";

            if (result.member == undefined) {
                name = "ukendt"
            } else {
                name = result.member.name;
            };

            const html = /*html */ `
<tr>
    <td>${new Date(result.date).toLocaleString('da-DK', { dateStyle: 'long' })}</td>
    <td>${name}</td>
    <td>${translateDiscipline(result.discipline)}</td>
    <td>${translateResultType(result.type)}</td>
    <td>${result.displayTime}</td>
</tr>
`
            return html;
        // };
    }
}

function sortTime(list) {
    return list.sort((a, b) => a.time - b.time);
}

function translateDiscipline(discipline) {
    if (discipline === "breaststroke") {
        return "bryst"
    } else if (discipline === "backstroke") {
        return "ryg"
    } else {
        return discipline;
    }
}

function translateResultType(type) {
    if (type === "training") {
        return "træning"
    } else {
        return "stævne"
    }
}

export { resultRenderer }

//#results tbody