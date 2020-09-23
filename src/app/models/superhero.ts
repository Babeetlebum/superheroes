import { Gender } from '@models/gender';

export interface Superhero {
    id: number;
    firstname: string;
    lastname: string;
    gender: Gender;
    supername: string;
    powers: string[];
}
