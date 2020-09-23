export enum Gender {
    MALE = 'M',
    FEMALE = 'F',
}

export const getGender = (genderString: string): Gender => {
    switch (genderString) {
        case 'M': {
            return Gender.MALE;
        }
        default:
        case 'F': {
            return Gender.FEMALE;
        }
    }
};
