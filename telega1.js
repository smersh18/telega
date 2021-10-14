
let mosh1
let myobj
let names = ["antminer"]
let model = ["L3+", "S9", "S9i", "T17", "S19"]
let mosh = ["508", "13.5", "13.5/14", "42", "90"]
let moshtype = ["Mh/s", "Th/s"]
let tekst = "Antminer L3+ 508 Mh/s - 95000\n" +
    "Antminer S9 13.5 Th/s - 40000\n" +
    "Antminer S9i 13.5/14 Th/s - 42000\n" +
    "Antminer T17 42Th/s - 180000\n" +
    "Antminer T17 40Th/s - 175000\n" +
    "Antminer S19 (new) 90 Th/s - 750000\n" +
    "Antminer S19 (new) 95 Th/s - 800000\n"
let tekststr = tekst.split("+")

let tekststr1 = tekststr[i].split(" ")

for(let i = 0; i <= tekststr1.length; i++) {
    if(tekststr[i] === "(new"){
        tekststr.splice(i, 1);
    }
}

for(let e = 0; e <= tekststr.length; e++){


    for (let j = 0; j <= names.length; j++)
        if (tekststr1[0] === names[j]) {
            myobj = {
                brand: tekststr1[0]
            }
        }



    for (let j = 0; j <= names.length; j++)
        if (tekststr1[2] === model[j]) {
            myobj = {
                model: tekststr1[2]
            }
        }



    for (let j = 0; j <= names.length; j++)
        if (tekststr1[4] === moshtype[j]) {
            continue
        }




    for (let j = 0; j <= mosh.length; j++)
        if (tekststr1[3] === mosh[j]) {
            mosh1 = tekststr1[3] + tekststr1[4]
        }



    myobj = {
        compute: mosh1
    }
    myobj = {
        price: tekststr1[tekststr1.length]
    }
    console.log(myobj)
}
