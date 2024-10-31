//Attendee class is used as a DTO for RSVP requests
export default class Attendee {

    private email: string;
    private first: string;
    private last: string;
    private quantity: number;
    private kids: number;
    private restrictions: string;
    
    constructor(email: string, first: string, last: string, quantity: number, kids: number, restrictions: string){
        this.email = email;
        this.first = first;
        this.last = last;
        this.quantity = quantity;
        this.kids = kids;
        this.restrictions = restrictions;
    }

}