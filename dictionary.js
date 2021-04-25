class Dictionary{

    constructor(){

        this.dictionary = {}
    }
    add(key,value){

        this.dictionary[key]=value;
    }

    get(key){
        return this.dictionary[key]
    }
}

const  phoneBook = new Dictionary();

phoneBook.add('Mahi','01717030303');
phoneBook.add('Porimoni','01717030000');
phoneBook.add('Purnima','070700707');
phoneBook.add('Kajok','5555555');

console.log(phoneBook.dictionary);
const mahi = phoneBook.get('Mahi')
console.log(mahi);
