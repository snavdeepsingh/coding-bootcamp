// var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

// var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

// for (var i=0; i<14; i++  ){
//     if (random_value === stuff[i]){
//         console.log (random_value +"  and   " + i);
//     }

// }

// =====================================

function binary_search(A,n) {
    let L = 0;
    let R = n-1;

    while (L<=R){
        let m = (L+R)/2;
        if(A[m]< T){
            L = m+1;
        }
        else if (A[m] > T){
            R = m -1;
        }
        else {
            return m;
        }
        return unsuccessful;
    } 
}