
function construct(memberdata) {

    const MemberObject = {
        firstName: memberdata.firstName,
        lastName: memberdata.lastName,
        _active: memberdata.isActiveMember,
        competitive: memberdata.isCompetitive,
        birthday: new Date(memberdata.dateOfBirth).toLocaleString('da-DK', { dateStyle: 'short' }),
        email: memberdata.email,
        gender: memberdata.gender,
        image: memberdata.image,
        hasPayed: memberdata.hasPayed,
        id: memberdata.id,
        get age() {
            const ageInMiliseconds = Date.now() - new Date(memberdata.dateOfBirth)
            return Math.floor(ageInMiliseconds / 1000 / 60 / 60 / 24 / 365)
        },
        get name() {
            return `${this.firstName} ${this.lastName}`
        },
        isJunior() {
            return this.age < 18;
        },
        isSenior() {
            return this.age >= 18;
        },
        get group(){
            if(this.isJunior){
                // console.log(` juniorstat is junior`)
                return "junior";
            }
            if(this.isSenior){
                console.log(` seniorstat is senior`)
                return "senior";
            }
        },
        get active() {
            return this._active;
        }
    }
    Object.defineProperties(MemberObject, {
        id: {
            writable: false
        },
        name: {
            enumerable: false
        },
        image: {
            enumerable: false
        }
    })
    return MemberObject;
};

export { construct }