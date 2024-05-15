function option(target, displayName, value =""){
    const option = document.createElement("option");
    option.innerText = displayName;
    if(value != undefined){
        option.value = value;
    }
    target.appendChild(option);
}
document.addEventListener("DOMContentLoaded", () => {
    
    
    // <!-- 1. show cat list -->
    for(let cat of categories){
    option(cats, cat)
    }

    // <!-- 2. listen for a change in cat list. -->
    cats.addEventListener("change", e=>{
        details.innerText ="";
        // <!-- 3. clear and show matching activities. -->
        activitiesElement.innerHTML = ""; //CLEAR - EMPTY OUT OLD OPTIONS
        for(let a of activities){

            if(cats.value == a.category){
                const option = document.createElement("option");
                option.innerText = a.name;
                // activitiesElement.appendChild(option);
            }
        }
    });

    // <!-- 4.listen fro activity change. -->
    activitiesElement.addEventListener("change", e=>{
        
        //<!-- 5. display the details for the selected actitivy . -->
        for(a of activities){
            if(a.name == activitiesElement.value){
                details.innerText = `
                    ${a.id}    

                    ${a.description} 

                    ${a.location}        
                    
                    $${a.price.toFixed(2)} 
                `;
            }

        }
        
    });
});