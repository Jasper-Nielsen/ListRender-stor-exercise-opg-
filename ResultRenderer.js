class ResultRenderer  {
    render(result) {
// const result = this.item;
        // const sortedList = sortTime(resultList);

       
            // let name = "";

            // if (result.member == undefined) {
            //     name = "ukendt"
            // } else {
            //     name = result.member.name;
            // };

            const html = /*html */ `
<tr>
    <td>${result.date.toLocaleString('da-DK', { dateStyle: 'short' })}</td>
    <td>${result.memberName}</td>
    <td>${dictDicipline[(result.discipline)]}</td>
    <td>${dictResultType[result.type]}</td>
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

const dictDicipline = {
breaststroke: "bryst",
backstroke: "ryg",
butterfly: "butterfly",
crawl: "crawl",
freestyle: "freestyle"
}



// function translateResultType(type) {
//     if (type === "training") {
//         return "træning"
//     } else {
//         return "stævne"
//     }
// }

const dictResultType ={
    training: "træning",
    competition: "konkurrence"
}

export { ResultRenderer  }

//#results tbody