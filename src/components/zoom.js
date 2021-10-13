import React from 'react';
// import { useHistory } from "react-router-dom";


const Zoom = () => {
    return (
        <div>
            {/* function getArr(p) {
    //   let arr = ["משה", "דוד", "יוסף","נחמיה"];
    let select = document.getElementById("selectCity");
    //   let count = 0;
    //    arr.forEach(name => {
    let n = document.createElement("option");
    n.textContent = p.name + " is " + p.description;
    //   n.value = p.name +" is "+ p.description;
    //  n.id = count;
    //   count++;
    select.appendChild(n);
} */}
            {/* 
function get() {

fetch('api/Values')
    .then(data => {
        return data.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(d => getArr(d));
    });
} */}
            {/* <script src="JavaScript.js"></script>
    <link href="StyleSheet.css" rel="stylesheet"/> */}

            {/* List<City> l = new List<City>()
        {
             new City {name="Jerusalem", description="Kadosh"},
             new City {name="Ashdod", description="Beach"},
        };
        
        // GET: api/<ValuesController>
        [HttpGet]
        public List<City> Get()
        {
            return l;
        } */}
////////////
  fetch("api/Values", {
        method: "Post",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(city),//שיודע רק לקבל גיסון cs ממירים את היוזר לג'יסון כי הוא הולך ל
    })
        .then(response => {
        if (response.ok) {
            alert("!!!עלה בהצלחה");
            return response.text();
        }

        else { response.json().then(error1 => { alert(JSON.stringify(error1.errors)); }) }
        })
        .then(data => {
            console.log(data);
        })
///////
  <input type="text" id="name" name="name"><br><br>
    <label for="fname"> description:</label>
}

        </div>
    )
}
export default Zoom;
