

class MemberObject  {
        constructor(memberdata) {
        this.firstName = memberdata.firstName;
        this.lastName = memberdata.lastName;
        this._active = memberdata.isActiveMember;
        this.competitive = memberdata.isCompetitive;
        this.birthday = new Date(memberdata.dateOfBirth);
        this.email = memberdata.email;
        this.gender = memberdata.gender;
        this.image = memberdata.image;
        this.hasPayed = memberdata.hasPayed;
        this.id = memberdata.id;
        }
        get age() {
            const ageInMiliseconds = Date.now() - this.birthday
            return Math.floor(ageInMiliseconds / 1000 / 60 / 60 / 24 / 365)
        }
        get name() {
            return `${this.firstName} ${this.lastName}`
        }
        get isJunior() {
            return this.age < 18;
        }
        get isSenior() {
            return this.age >= 18;
        }
        get group(){
            if(this.isJunior){
                // console.log(` juniorstat is junior`)
                return "junior";
            }
            if(this.isSenior){
                console.log(` seniorstat is senior`)
                return "senior";
            }
        }
        get active() {
            return this._active;
        }
    }


    // Object.defineProperties(MemberObject, {
    //     id: {
    //         writable: false
    //     },
    //     name: {
    //         enumerable: false
    //     },
    //     image: {
    //         enumerable: false
    //     }
    // })
    


export { MemberObject }