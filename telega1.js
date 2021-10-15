let tekststr1
let mosh1
let myobj
let names = ["antminer"]
let tekst = "Antminer L3+ 508 Mh/s - 95000\n" +
    "Antminer S9 13.5 Th/s - 40000\n" +
    "Antminer S9i 13.5/14 Th/s - 42000\n" +
    "Antminer T17 42Th/s - 180000\n" +
    "Antminer T17 40Th/s - 175000\n" +
    "Antminer S19 (new) 90 Th/s - 750000\n" +
    "Antminer S19 (new) 95 Th/s - 800000\n"

let tekststr = []
tekststr = tekst.split("+")

//Function
let telegafunction = function(stroka, j){
    let tekststr1 = tekststr[j].split(" ")
    for (let j = 0; j <= names.length; j++)
    if (tekststr1[0] === names[j]) {
        myobj = {
            brand: tekststr1[0]
        }
    }
    let probablymodel = stroka.match(/^\w(\d*)$/)
    myobj = {
        model: probablymodel,
        ...myobj
    }
    let probablycompute = stroka.match(/^\d+\s*([Th/s]|[Mh/s])$/)
    myobj = {
        compute: probablycompute,
        ...myobj
    }

    let probablyprice = stroka.match(/^\d\d\d+$/)
    myobj = {
        price: probablyprice,
        ...myobj
    }



}
//VIVOD
for(i = 0; i <= tekststr.length; i++){
    telegafunction(tekststr[i], 0)
    console.log(myobj)
}

