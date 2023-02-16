// naxadasutyan amen araji tary dardznenk mecatar.
/*
function str(str) {
    let string = str.toLowerCase().split(" ");
    let result = string.map((el) =>{
        return el.replace(el.charAt(0), el.charAt(0).toUpperCase());
    })
    console.log(result.join(" "));
}

str("Hello my name is Gevor");
*/
/*
function spl(spl, spl1) {
    let split = spl.split("").sort()
    let split1 = spl1.split("").sort()
    if(split == split1) {
        console.log(true); 
    } 
    return console.log(split, split1);
}

spl("name", "amen")
*/

let w = "name";
let w1 = "amen";
let map = new Map()
console.log(); 
if(w.split("").sort().join() === w1.split("").sort().join()) {
    map.set(w,w1)
}   
console.log(map);