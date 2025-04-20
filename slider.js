const testimonial = [
   { name : "Angellina V",
    photoUrl : "image2.jpg",
    text : " I truly admire the seamless integration, reliability, and sleek design that Apple offers. Whether it's taking notes on my iPad or managing assignments on my MacBook, the ecosystem really supports my academic needs. That said, I believe there's room for improvement in areas like [insert specific point — e.g., affordability for students, longer battery life, or improved educational tools] Thank you for continuing to listen to and support your student users.",
   },
   {
    name: "Luca Moretti ",
    photoUrl : "image1.jpg",
    text :"I've been using Apple products for several years now, and I truly appreciate the user-friendly interface and build quality. The ecosystem between devices is incredibly convenient. However, I would love to see more customization options, especially in terms of user interface and default apps. I hope future updates bring more options for users who value both aesthetics and control.",
   },
   {
    name : "Rosetta Q",
    photoUrl : "image3.jpg",
    text : "I appreciate the innovation and design that Apple consistently brings to its products. However, I would like to share some feedback regarding [insert your specific issue or suggestion, e.g., battery performance, software glitches, feature requests, or customer support]. Improving this aspect would greatly enhance the overall user experience and maintain the high standards Apple is known for. Thank you for considering user feedback in your development process.",
   } ,
];

const image = document.querySelector("img");
const feedback = document.querySelector(".text");
const username = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const{name, photoUrl, text} = testimonial[idx];
     image.src = photoUrl;
     username.innerText = name;
     feedback.innerText = text;
     idx++;
     if(idx === testimonial.length){
        idx=0;
     }
     setTimeout(() =>{
        updateTestimonial();
     },10000);
}