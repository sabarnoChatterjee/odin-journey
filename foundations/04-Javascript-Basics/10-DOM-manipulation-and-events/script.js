// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero voluptate optio deserunt quidem ratione facere dolorem soluta inventore cupiditate! Nisi hic totam nulla fugiat ratione, eligendi illo? Explicabo libero omnis eius totam. Debitis velit quia autem molestiae eos beatae a molestias provident suscipit distinctio, illo deleniti delectus quod blanditiis iusto impedit! Beatae nemo quam tenetur commodi incidunt! Vitae repudiandae, velit cupiditate vel asperiores sunt molestiae repellendus facilis atque ipsa autem, sequi cumque, sed rem quam! Quidem porro ut cum, eum esse voluptatem reiciendis. Velit numquam aut doloremque tempora, aliquid nihil ex obcaecati sunt, laudantium quo ea quae ratione dolorum debitis!`;


// container.appendChild(content);


// a <p> with red text that says “Hey I’m red!”
// const content = document.createElement("p");
// content.classList.add("red");
// content.textContent = "Hey I’m red!";

// container.appendChild(content);


// an <h3> with blue text that says “I’m a blue h3!”
// const content = document.createElement("h3");
// content.classList.add("blue");
// content.textContent="I’m a blue h3!";

// container.appendChild(content);


// 3.
const container = document.querySelector("#container");

const content = document.createElement("div");
const element1 = document.createElement("h1");
const element2 = document.createElement("p");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener('click', ()=>{
    content.classList.toggle('hidden');
    if (element1.textContent === 'I’m in a div') {
            element1.textContent = 'Changed text!';
            toggleButton.textContent = 'Hide'; // Optionally change button text too
        } else {
            element1.textContent = 'I’m in a div';
            toggleButton.textContent = 'Show'; // Optionally change button text too
        }
})


element1.textContent = "I’m in a div";
element2.textContent = "ME TOO!";

content.append(element1,element2);
content.classList.add("div");

container.appendChild(content);