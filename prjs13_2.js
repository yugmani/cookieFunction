// Function to set a new cookie
function set_it(){
    let thename = prompt("Enter your favorite type of cookie", ""),

    //To allow using spaces, commas, or semicolons in your cookie
    thetext = encodeURIComponent(thename),

    //to set an expiration date of cookie
    expdate = ";expires = Tue, 30 June 2020 12:00:00 UTC";
    thetext += expdate;
    //setting a cookie
    document.cookie = thetext;
}


//Function to read the cookie which already exists.
function read_it(){
    if(document.cookie){
        //reading a cookie if it exists.
        let mycookie = document.cookie;
        //getting data in a more readable format
        let name = decodeURIComponent(mycookie);
        let greetingEl = document.getElementById("greeting");
        greetingEl.innerHTML = `<h1>Welcome, ${name}!</h1>`;
    }
    else {
        //call a function to set a new cookie
        set_it();
        read_it();
        }
}


//call function to read a cookie
read_it();
