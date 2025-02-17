// nowcoder

function findAllOccurrences(arr, target) {
    // let loc = []
    return arr.reduce((loc,currentValue,currentIndex)=>{
        if(currentValue === target)
            loc.push(currentIndex)
        return loc;
    },[])
}
console.log(findAllOccurrences(['a','b','c','d','e','f','a','b','c'],'a'))