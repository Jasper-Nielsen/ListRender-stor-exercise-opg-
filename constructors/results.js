import { findMember } from "../controller.js";

//sprøgsmål kald funktioner og visning af datoer i contruktoren eller i showResults
class ResultObject  {
        constructor(resultData) {
        this.date = new Date(resultData.date);
        this.id = resultData.id;
        this.memberId = resultData.memberId;
        this.discipline = resultData.discipline;
        this.type = resultData.resultType;
        this.compareTime = resultData.time;
        this.member = findMember(resultData.memberId);
        this.displayTime = undefined;
        this.setTimeFromString(resultData.time);
        this.getTimeAsString();

        }
        get isCompetition() {
            return this.type === "competition"
        }
        get isTraining() {
            return this.type === "training"
        }
        setTimeFromString(input) {
            const minutter = Number(input.substring(0, 2));
            const sekunder = Number(input.substring(3, 5));
            const miliSekunder = Number(input.substring(6, 8)) * 10;

            this.time = miliSekunder + sekunder * 1000 + minutter * 60000;


        }
        get memberName()  {
            if(this.member !== undefined){
                return this.member.name
            } else {
                    return "undefined"
            }
        }
        getTimeAsString() {

         

            const minutes = Math.floor((this.time / 60000))
          


            const msLeft = this.time - (minutes * 60000)
           
            const seconds = Math.floor((msLeft / 1000)); ///


            const decaSeconds = (this.time % 1000) / 10; ///

            let timeView;

            if (minutes < 10) {
                timeView = `0${minutes}:${seconds}:${decaSeconds}`
            }
            else if (minutes === 0) {
                timeView = `00:${seconds}:${decaSeconds}`
            } else if (seconds < 10) {
                timeView = `00:0${seconds}:${decaSeconds}`
            }
            else if (seconds === 0) {
                timeView = `00:00:${decaSeconds}`
            } else if (decaSeconds === 0) {
                timeView = `00:00:000`
            } else if (decaSeconds < 10) {
                timeView = `00:00:0${decaSeconds}`
            }
            else {
                timeView = `${minutes}:${seconds}:${decaSeconds}`
            }

            this.displayTime = timeView;
        }

    }

 

    // Object.defineProperties(ResultsObject, {
    //     id: {
    //         writable: false
    //     },
    //     isCompetition: {
    //         enumerable: false
    //     },
    //     isTraining: {
    //         enumerable: false
    //     },
    //     time: {
    //         enumerable: false
    //     }

    // })
   



export { ResultObject}