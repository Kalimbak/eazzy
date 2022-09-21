/**
 * 
 * @param {HTMLFormElement} formElt
 */
 export default function getFormData(formElt){
    const formData = {};
    Array.from(formElt.elements).forEach(input=>{
        if(input.name){
            formData[input.name] = input.ariaValueMax;
        }
    });
    return formData;
}