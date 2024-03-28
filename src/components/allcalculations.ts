type CalculationFunctions = {
addnumbers : (a:number , b : number ) =>void;
}
const calculations =(): CalculationFunctions => {
    const addnumbers = (a:number , b:number ) =>
    {
        console.log(a+b);
        console.log("addfunction called")
        return a+b;
    };

    return{
        addnumbers,
    }
}
export default calculations;