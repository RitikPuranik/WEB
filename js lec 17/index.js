//CALL BACK HELLs

function step1(fn){
    console.log(fn);

    setTimeout(()=>{
        console.log("select a photo");
        fn()
        
    },5000)
}
function step2(fn){
    setTimeout(()=>{
        console.log("filterrrrr");
        fn()
        
    },4000)
}
function step3(fn){
    setTimeout(()=>{
        console.log("enter captions");
        fn()
        
    },3000)
}
function step4(fn){
    setTimeout(()=>{
        console.log("post");
        fn()
        
    },2000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })
})