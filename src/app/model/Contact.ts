import { Registered } from './Registered';
import { Name } from './Name';
import { Picture } from './Picture';

export class Contact{

    constructor(
        public id: Number,
        public gender : String,
        public name : Name,
        public email :String,
        public age : Number,
        public phone : String,
        public picture : Picture,
        public registered : Registered,
        public nat : String,
        public favorited? : Boolean
    ){}

}