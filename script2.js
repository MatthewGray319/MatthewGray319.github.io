function startup(){

const section = document.getElementById("section");
// This will set the text inside of our #title to a new value

const section_text = document.getElementById("section_text");

const skills_menu = document.querySelector("#skills_menu");

const experience_menu = document.querySelector("#experience_menu");

const about_menu = document.querySelector("#about_menu");

// This is going to make your 'h1' tag(s)
// be '50px' when you click it
skills_menu.addEventListener("click", function() {
    section.innerText = "Skills";
    section_text.innerText = "C# • .NET• EF Core • JavaScript •MVC • HTML • CSS (Flexbox and Grid) • TDD • Agile (Scrum) • Webpack • Object Oriented Programming (OOP) •  JSON • REST APIs • Responsive Design / Mobile • Relational Databases • Source Control / Git Node.js, ASP.NET and ASP.NET Core • Problem-solver • Detail oriented • Patient";

})
experience_menu.addEventListener("click", function() {
    section.innerText = "Experience";
    section_text.innerText = "I'm currently enrolled in We Can Code IT, a coding bootcamp. Previously I worked as a chemical engineer in bioproduct start-up companies in Lousiana, Wisconsin, and Colorado.";
})
about_menu.addEventListener("click", function() {
    section.innerText = "About Myself";
    section_text.innerText = "I am a software developer, proficient in full stack C#. Ever since I was a teenager, I had a love of computers. This love of computing recently led to my new career in coding after working 17 years in the biofuels / bioproducts industry. You will find me a diligent worker with multifaceted experience in group projects, training junior professionals, and creating value for start-up companies. I am interested in job opportunities in the Cleveland area.";
})

var i = 0;
var txt = 'Hi, I am Matthew Gray, a full stack developer.'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("headline2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }


}
typeWriter();





}