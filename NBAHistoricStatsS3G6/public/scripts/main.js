var rhit = rhit || {};
const apiURL = "http://localhost:3000/api/DatabaseConnection" 
let allEntries = fetch(apiURL)
        .then(response => response.json())
        .then(data => console.log(data)); 

        rhit.AdminController = class {
                constructor() {
                console.log("construct");
                document.querySelector("#getall").onclick = (event) => {
                                this.readAll();
                        };
                document.querySelector("#getone").onclick = (event) => {
                                this.readone();
                        };
                        document.querySelector("#del").onclick = (event) => {
                                this.deleteone();
                        };
                        document.querySelector("#update").onclick = (event) => {
                                this.editone();
                        };
                        document.querySelector("#create").onclick = (event) => {
                                this.createone();
                        };
            }
            readAll() {
                console.log(`Reading Players`);
            
                // TODO: Add your code here.
                //document.querySelector("#getone").innerHTML = "";
                
                fetch(`http://localhost:3000/api/DatabaseConnection`).then(response => response.json()).then(data => {
                    // let i = 0
                    // while (i < words["words"].length) {
                    //     console.log(words);
                    // }
                    //console.log(words);
                    
                    var table = document.getElementById('tableBody');
                    table.innerHTML ='';
console.log(data);
let dataHtml = ''
data.forEach(element => {
        let hof = "No"
        if (element['HOF']){
                hof = "Yes"
        }
        dataHtml += `<tr><td>${element['Name']}</td><td>${Math.floor(element['Height'] / 12)}' ${element['Height'] - Math.floor(element['Height'] / 12)*12}"</td><td>${element['Weight']}</td><td>${element['Position']}</td><td>${hof}</td></tr>`
});
table.innerHTML = dataHtml;
                    
                })
                // console.log(words);
                // Hint for something you will need later in the process (after backend call(s))
                
            }
            readone() {
                console.log(`Reading Players`);
                let pid = document.getElementById("getoneid").value;
                // TODO: Add your code here.
                //document.querySelector("#getone").innerHTML = "";
                
                fetch("http://localhost:3000/api/DatabaseConnection/:id/?" + "playerid="+ pid).then(response => response.json()).then(data => {
                    let i = 0
                //     while (i < words.length) {
                //         console.log(words);
                //     }
                    //console.log(words);
                    //var array = words[0];
                    //document.getElementById("display-array").textContent = array.Name +" "+ array.Height +" "+ array.Weight;
                    var table = document.getElementById('tableBody');
                    table.innerHTML ='';
console.log(data);
let dataHtml = ''
data.forEach(element => {
        let hof = "No"
        if (element['HOF']){
                hof = "Yes"
        }
        dataHtml += `<tr><td>${element['Name']}</td><td>${Math.floor(element['Height'] / 12)}' ${element['Height'] - Math.floor(element['Height'] / 12)*12}"</td><td>${element['Weight']}</td><td>${element['Position']}</td><td>${hof}</td></tr>`
});
table.innerHTML = dataHtml;
                })
                // console.log(words);
                // Hint for something you will need later in the process (after backend call(s))
                
            }

            deleteone(){
                console.log(`Deleting Player`);
                let pid = document.getElementById("getdelid").value;
                       

                const response = fetch("http://localhost:3000/api/DatabaseConnection/:id/?" + "playerid="+ pid,
                {
                method: 'DELETE'
        });

        console.log("Player "+pid+" deleted");

            }


        editone(){
                        let pid = document.getElementById("10").value;
        let name = document.getElementById("11").value;
        let height = document.getElementById("12").value;
        let weight = document.getElementById("13").value;
        let position = document.getElementById("14").value;
        let hof = document.getElementById("15").value;
        let yearborn =  document.getElementById("16").value;


        const response = fetch("http://localhost:3000/api/DatabaseConnection/:id/?" + "playerid="+ pid +"&name="+ name + "&height=" + height + "&weight=" + weight + "&position=" + position + "&hof=" + hof + "&yearborn=" +yearborn,
        {
        method: 'PUT'
        });

        console.log("Player "+pid+" edited");
        }

        createone(){
                let pid = document.getElementById("10").value;
        let nameVal = document.getElementById("11").value;
        let heightVal = document.getElementById("12").value;
        let weight = document.getElementById("13").value;
        let position = document.getElementById("14").value;
        let hof = document.getElementById("15").value;
        let yearborn =  document.getElementById("16").value;
        const response = fetch("http://localhost:3000/api/DatabaseConnection/?" + "name="+ nameVal + "&height=" + heightVal + "&weight=" + weight + "&position=" + position + "&hof=" + hof + "&yearborn=" +yearborn, 
                {
                method: 'POST'
                });
        
                console.log("Player "+nameVal+" added");
        }
        
        }
// document.getElementById("submit").onclick = (event) => {
//         let nameVal = document.getElementById("1").value;
//         let heightVal = document.getElementById("2").value;
//         let weight = document.getElementById("3").value;
//         let position = document.getElementById("4").value;
//         let hof = document.getElementById("5").value;
//         let yearborn =  document.getElementById("6").value;


//         const response = fetch("http://localhost:3000/api/DatabaseConnection/?" + "name="+ nameVal + "&height=" + heightVal + "&weight=" + weight + "&position=" + position + "&hof=" + hof + "&yearborn=" +yearborn, 
//         {
//         method: 'POST'
//         });

//         console.log("Player "+nameVal+" added");
// }

// document.getElementById("del").onclick = (event) => {
//         let pid = document.getElementById("delnum").value;

//         const response = fetch("http://localhost:3000/api/DatabaseConnection/:id/?" + "playerid="+ pid,
//         {
//         method: 'DELETE'
//         });

//         console.log("Player "+pid+" deleted");
// }

// document.getElementById("edit").onclick = (event) => {
//         let pid = document.getElementById("10").value;
//         let name = document.getElementById("11").value;
//         let height = document.getElementById("12").value;
//         let weight = document.getElementById("13").value;
//         let position = document.getElementById("14").value;
//         let hof = document.getElementById("15").value;
//         let yearborn =  document.getElementById("16").value;


//         const response = fetch("http://localhost:3000/api/DatabaseConnection/:id/?" + "playerid="+ pid +"&name="+ name + "&height=" + height + "&weight=" + weight + "&position=" + position + "&hof=" + hof + "&yearborn=" +yearborn,
//         {
//         method: 'PUT'
//         });

//         console.log("Player "+pid+" edited");
// }

// document.getElementById("getone").onclick = (event) => {
//         let pid = document.getElementById("getoneid").value;


//         const response = fetch("http://localhost:3000/api/DatabaseConnection/:id/?" + "playerid="+ pid ,
//         {
//         method: 'GET'
//         })
//         .then(response => response.json())
//         .then(data => console.log(data));
       
// }
/* Main */
rhit.main = function () {
	
new rhit.AdminController();
	
};

rhit.main();