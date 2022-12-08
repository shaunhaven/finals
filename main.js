async function RChecker(){
    var Bresult2 = document.getElementsByName("2ndans")
    for(choice of Bresult2){
        if(choice.checked){
            var Bresult2 = choice.getAttribute("value")
        }
    }
    var Cresult3 = document.getElementsByName("3rdans")
    for(choice of Cresult3){    
        if(choice.checked){
            var Cresult3 = choice.getAttribute("value")
        }
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", 
        body: JSON.stringify({
            body: Bresult2 + " " + Cresult3
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    if(!response.ok){
        throw new Error("Something Went Wrong" + response.statusText)
    }
    const data = await response.json()
    console.log(data.body)
    document.getElementById("result").innerHTML = data.body
}
    async function Gresponse(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/8");
    if(!response.ok){
        throw new Error("Something Went Wrong" + response.statusText)
    }
    const data = await response.json()
    console.log(data)
    document.getElementById("result").innerHTML = data.title
}
function apiCheck(){
    if(document.getElementById("egg1").checked){
        Gresponse()
    }
    if(document.getElementById("egg2").checked){
        RChecker()
    }
}