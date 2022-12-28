
export const customFilter = (rows, filter) => {
// rows contain the entire data
// terms contains whatever you have as filter

//console.log(terms,rows)

var lowerSearch = filter ? filter.toLowerCase() : ""

const filteredRows = rows.filter(
    (row, i) =>{
    
    //Gather search condition    

    
    //Assume true in case there is no search 
    let s1 = true
    
    //If search term exists, convert to lower case and see which rows contain it
    if(lowerSearch != ""){
        s1 = false
        //Get the values
        let s1_values = Object.values(row)
        //Convert to lowercase
        let s1_lower = s1_values.map(x => x.toString().toLowerCase())
        
        for (let val = 0; val<s1_lower.length; val++){
            if (s1_lower[val].includes(lowerSearch)){
            s1 = true
            break
            }
        }
    }else{
        s1 = true
    }

    return s1

    })

return filteredRows
}