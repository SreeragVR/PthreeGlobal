const toggler = document.querySelector('.navbar-toggler');

const header = document.querySelector(".scroll-heaader");

const checkBoxToggle = document.querySelector(".toggle-checkbox")

document.addEventListener("DOMContentLoaded", () => {

    if (header) {
        let lastScrollY = window.scrollY;
        let isScrolling;

        document.addEventListener("scroll", function () {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }

            if (currentScrollY > lastScrollY) {
                header.classList.add("header-hidden");
            } else {
                header.classList.remove("header-hidden");
            }

            lastScrollY = currentScrollY;

            clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                header.classList.remove("header-hidden");
            }, 200);
        });
    }
})


let isNavOpen = false;

toggler.addEventListener("click", () => {
    if (!isNavOpen) {
        header.classList.add("header-scrolled")
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll("#navbarSupportedContent a");
    const navbarCollapse = document.getElementById("navbarSupportedContent");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {

            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }

            if (checkBoxToggle) {
                checkBoxToggle.checked = false;
            }

        })
    })
})


// const diagramButton = document.querySelectorAll(".diagram-btn")

document.addEventListener("DOMContentLoaded", () => {
    const btnCircleMap = {
        airQuality: ["cardiovascular-health", "respiratory-health", "immune-health", "reproductive-health", "mental-health", "cognitive-health"],
        waterQuality: ["digestive-health", "immune-health", "reproductive-health", "musculoskeletal-health", "mental-health", "cognitive-health"],
        light: ["digestive-health", "immune-health", "reproductive-health", "mental-health", "cognitive-health",],
        humidity: ["cardiovascular-health", "respiratory-health", "immune-health"],
        sound: ["mental-health", "cognitive-health"],
        temperature: ["cardiovascular-health", "respiratory-health", "immune-health", "reproductive-health", "mental-health", "cognitive-health"],
        material: ["respiratory-health", "digestive-health", "immune-health", "reproductive-health"],
        ergonomics: ["musculoskeletal-health", "mental-health"],
        biophilia: ["mental-health", "cognitive-health"],
        sleep: ["cardiovascular-health", "respiratory-health", "digestive-health", "immune-health", "reproductive-health", "musculoskeletal-health", "mental-health", "cognitive-health"],
        physicalActivity: ["cardiovascular-health", "respiratory-health", "digestive-health", "immune-health", "reproductive-health", "musculoskeletal-health", "mental-health", "cognitive-health"],
        nourishment: ["cardiovascular-health", "respiratory-health", "digestive-health", "immune-health", "reproductive-health", "musculoskeletal-health", "mental-health", "cognitive-health"],
        mindfulPractice: ["cardiovascular-health", "mental-health", "cognitive-health"],
        communityEngagement: ["mental-health", "cognitive-health"],
        workplacePolicies: ["mental-health", "cognitive-health"],
        healthLiteracy: ["mental-health", "cognitive-health"]
    };

    const diagramButtons = document.querySelectorAll(".diagram-btn");

    diagramButtons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            const circlesToHighlight = btnCircleMap[btn.id] || [];
            circlesToHighlight.forEach(circleClass => {
                const circle = document.querySelector(`.diagram-circle.${circleClass}`);
                if (circle) {
                    circle.classList.add("highlight");
                }
            });
        });

        btn.addEventListener("mouseleave", () => {
            const circlesToHighlight = btnCircleMap[btn.id] || [];
            circlesToHighlight.forEach(circleClass => {
                const circle = document.querySelector(`.diagram-circle.${circleClass}`);
                if (circle) {
                    circle.classList.remove("highlight");
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const circleButtonMap = {
        "cognitive-health": ["airQuality", "waterQuality", "sound", "temperature", "sleep", "physicalActivity", "nourishment", "mindfulPractice", "communityEngagement", "workplacePolicies", "healthLiteracy"],
        "mental-health": ["airQuality", "waterQuality", "light", "sound", "temperature", "ergonomics", "biophilia", "sleep", "physicalActivity", "nourishment", "mindfulPractice", "communityEngagement", "workplacePolicies", "healthLiteracy"],
        "musculoskeletal-health": ["waterQuality", "ergonomics", "sleep", "physicalActivity", "nourishment"],
        "cardiovascular-health": ["airQuality", "humidity", "temperature", "sleep", "physicalActivity", "nourishment", "mindfulPractice"],
        "respiratory-health": ["airQuality", "humidity", "temperature", "material", "sleep", "physicalActivity", "nourishment"],
        "immune-health": ["airQuality", "waterQuality", "humidity", "temperature", "material", "sleep", "physicalActivity", "nourishment"],
        "reproductive-health": ["airQuality", "waterQuality", "temperature", "material", "sleep", "physicalActivity", "nourishment"],
        "digestive-health": ["waterQuality", "light", "material", "sleep", "physicalActivity", "nourishment"]
    };

    const diagramCircles = document.querySelectorAll(".diagram-circle");

    diagramCircles.forEach(circle => {
        circle.addEventListener("mouseenter", () => {
            const buttonsToHighlight = circleButtonMap[circle.classList[1]] || [];
            buttonsToHighlight.forEach(buttonId => {
                const button = document.getElementById(buttonId);
                const buttonIcon = button.querySelector('.health-icons')
                const buttonSolidIcon = button.querySelector('.health-icons-solid')
                const buttonSpan = button.querySelector('span')
                const underLine = button.querySelector('.under-line')

                if (button) {
                    button.classList.add("gradient-bg")
                }

                if (buttonIcon) {
                    buttonIcon.classList.add("z-0")
                }
                if (buttonSolidIcon) {
                    buttonSolidIcon.classList.add("z-1", "rotate-0")
                }

                if (underLine) {
                    underLine.classList.add("w-70")
                }

                if (buttonSpan) {
                    buttonSpan.classList.add("btn-highlight");
                }
            });
        });

        circle.addEventListener("mouseleave", () => {
            const buttonsToHighlight = circleButtonMap[circle.classList[1]] || [];
            buttonsToHighlight.forEach(buttonId => {
                const button = document.getElementById(buttonId);
                const buttonIcon = button.querySelector('.health-icons')
                const buttonSolidIcon = button.querySelector('.health-icons-solid')
                const buttonSpan = button.querySelector('span')
                const underLine = button.querySelector('.under-line')

                if (button) {
                    button.classList.remove("gradient-bg")
                }

                if (buttonIcon) {
                    buttonIcon.classList.remove("z-0")
                }
                if (buttonSolidIcon) {
                    buttonSolidIcon.classList.remove("z-1", "rotate-0")
                }

                if (underLine) {
                    underLine.classList.remove("w-70")
                }

                if (buttonSpan) {
                    buttonSpan.classList.remove("btn-highlight");
                }
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const areas = document.querySelectorAll("area[data-index]");
    const cards = document.querySelectorAll(".approach-card[data-index]");
    const approachImage = document.querySelector(".approach-image");

    areas.forEach(area => {
        area.addEventListener("mouseover", () => {
            approachImage.style.opacity = "0.2";
            const index = area.getAttribute("data-index");
            const targetCard = document.querySelector(`.approach-card[data-index="${index}"]`);
            const targetNumber = document.querySelector(`.approach-number[data-index="${index}"]`);


            if (targetCard) {
                targetCard.classList.add("card-highlight");
            }

            if (targetNumber) {
                console.log(`is here ${index}`);
                targetNumber.classList.add("data-image-highlight");
            }
        });

        area.addEventListener("mouseout", () => {
            approachImage.style.opacity = "1";
            const index = area.getAttribute("data-index");
            const targetCard = document.querySelector(`.approach-card[data-index="${index}"]`);
            const targetNumber = document.querySelector(`.approach-number[data-index="${index}"]`);


            if (targetCard) {
                targetCard.classList.remove("card-highlight");
            }

            if (targetNumber) {
                targetNumber.classList.remove("data-image-highlight");
            }
        });
    });

    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            approachImage.style.opacity = "0.2";
            const index = card.getAttribute("data-index");
            const targetNumber = document.querySelector(`.approach-number[data-index="${index}"]`);


            if (targetNumber) {
                targetNumber.classList.add("data-image-highlight");
            }
        });

        card.addEventListener("mouseout", () => {
            approachImage.style.opacity = "1";
            const index = card.getAttribute("data-index");
            const targetNumber = document.querySelector(`.approach-number[data-index="${index}"]`);
            if (targetNumber) {
                targetNumber.classList.remove("data-image-highlight");
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const diagramButtons = document.querySelectorAll(".diagram-btn");
    const targetElement = document.querySelector("#healthDiagramContainer");
    const offset = 200;

    diagramButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
});


// Aapproach-image-diagram 

const targetImage = document.querySelector("#approachImageDiagram");

document.addEventListener("DOMContentLoaded", () => {
    const approachCard = document.querySelectorAll(".approach-card");
    const offset = 200;

    approachCard.forEach(card => {
        card.addEventListener("click", (event) => {
            event.preventDefault();

            if (targetImage) {
                const elementPosition = targetImage.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
});





// SCROLL ANIMATIONS



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-scroll");
        } else {
            entry.target.classList.remove("show-scroll");
        }
    });
});


const scrollElements = document.querySelectorAll('.hidden');
scrollElements.forEach((element) => {
    observer.observe(element);
});


const observer_1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-scroll_1");
        } else {
            entry.target.classList.remove("show-scroll_1");
        }
    });
});


const scrollElements_1 = document.querySelectorAll('.hidden_1');
scrollElements_1.forEach((element) => {
    observer_1.observe(element);
});


const observer_2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-scroll_2");
        } else {
            entry.target.classList.remove("show-scroll_2");
        }
    });
});


const scrollElements_2 = document.querySelectorAll('.hidden_2');
scrollElements_2.forEach((element) => {
    observer_2.observe(element);
});





const teamElements = document.querySelectorAll('.team-card')
const advisorsElement = document.querySelectorAll('.advisors-card')

// SCROLL ANIMATION

function scrollAnimation(className, element) {

    const observerElement = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add(className)
            } else {
                e.target.classList.remove(className)
            }
        })
    })

    const seclectedElements = document.querySelectorAll(element)
    seclectedElements.forEach((event) => {
        observerElement.observe(event)
    })
}


scrollAnimation("team-animation", ".team-card")
scrollAnimation("team-animation", ".advisors-card")



// IMAGE MAP RESIZER

if (targetImage) {
    imageMapResize();
}




let contactForm = document.querySelector('#contactForm')
let bodyElement = document.querySelector('body')

// submitButton.addEventListener('click', ()=>{
//     contactForm.classList.add('pop-form')
//     bodyElement.classList.add('overflow-hidden')
// })


let openPopUp = () => {
    contactForm.classList.add('pop-form')
    bodyElement.classList.add('overflow-hidden')
}

let closePopup = () => {
    contactForm.classList.remove("pop-form");
    bodyElement.classList.remove('overflow-hidden')
}



document.addEventListener('DOMContentLoaded', function () {
    const diagramSection = document.getElementById('diagram-section');

    const observerNew = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'in-view' class to trigger animations
                    diagramSection.classList.add('in-view');

                    // Stop observing after the animation is triggered
                    observerNew.unobserve(diagramSection);
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the section is visible
        }
    );

    // Start observing the diagram section
    if (diagramSection) {
        observerNew.observe(diagramSection);
    }
});



//   ABOUT PAGE
const words = ["dummy.", "awesome.", "amazing.", "fantastic."];
let index = 0;
let charIndex = 0;
const span = document.getElementById("changingText");

if(span){
    function typeWord() {
        if (charIndex < words[index].length) {
            span.textContent += words[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeWord, 150);
        } else {
            setTimeout(eraseWord, 1500);
        }
    }
    
    function eraseWord() {
        if (charIndex > 0) {
            span.textContent = words[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseWord, 100);
        } else {
            index = (index + 1) % words.length;
            setTimeout(typeWord, 500);
        }
    }
    
    window.addEventListener("load", () => {
        typeWord();
    });
}



  const parallaxText = document.querySelector(".about-banner-content")
  
if(parallaxText){
    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let speed = 0.5;
    
        parallaxText.style.transform = `translateY(${scrollY * speed}px)`
      })
}




function animatePath(pathId, animatedPathId, circleClass, containerClass, minWidth = 0, maxWidth = Infinity) {
    const path = document.querySelector(pathId);
    const pathAnimated = document.querySelector(animatedPathId);
    const circle = document.querySelector(circleClass);
    const container = document.querySelector(containerClass);
    const elementsToChange = document.querySelectorAll(".story-content");

    if (!path || !pathAnimated || !circle || !container) return;

    const pathLength = path.getTotalLength();
    pathAnimated.style.strokeDasharray = pathLength;
    pathAnimated.style.strokeDashoffset = pathLength;

    function moveCircle() {
        if (window.innerWidth < minWidth || window.innerWidth > maxWidth) return;

        requestAnimationFrame(() => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const containerTop = container.offsetTop;
            const containerHeight = container.offsetHeight;

            if (scrollPosition > containerTop && scrollPosition < containerTop + containerHeight) {
                let progress = (scrollPosition - containerTop) / containerHeight;
                progress = Math.min(1, Math.max(0, progress));

                const point = path.getPointAtLength(progress * pathLength);
                circle.setAttribute("cx", point.x);
                circle.setAttribute("cy", point.y);
                pathAnimated.style.strokeDashoffset = pathLength * (1 - progress);

                const circleRect = circle.getBoundingClientRect();

                elementsToChange.forEach(element => {
                    const rect = element.getBoundingClientRect();
                    element.classList.toggle("intersected", 
                        circleRect.bottom > rect.top &&
                        circleRect.top < rect.bottom &&
                        circleRect.right > rect.left &&
                        circleRect.left < rect.right
                    );
                });
            }
        });
    }

    window.addEventListener("scroll", moveCircle);
    moveCircle();
}


// People Section
animatePath("#peoplePath", "#peoplePathAnimation", "#peopleCircle", ".impact-people-container",992, Infinity);
animatePath("#peopleScreenPath", "#peopleScreenPathAnimation", "#peopleScreenCircle", ".impact-people-container", 0, 991.98);

// Planet Section
animatePath("#planetPath", "#planetPathAnimation", "#planetCircle", ".impact-planet-container",992, Infinity);
animatePath("#planetScreenPath", "#planetScreenPathAnimation", "#planetScreenCircle", ".impact-planet-container", 0, 991.98);

// Profit Section
animatePath("#profitPath", "#profitPathAnimation", "#profitCircle", ".impact-profit-container",992, Infinity);
animatePath("#profitScreenPath", "#profitScreenPathAnimation", "#profitScreenCircle", ".impact-profit-container", 0, 991.98);

// Future Smart Section
animatePath("#futureSmartPath", "#futureSmartAnimation", "#futureCircle", ".future-smart-container",992, Infinity);
animatePath("#futureScreenPath", "#futureScreenPathAnimation", "#futureScreenCircle", ".future-smart-container", 0, 991.98);





let peopleStoryPath = document.querySelectorAll('.people-story-svg-1');


const observerElementSvg = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('strokeView');
        } else {
            entry.target.classList.remove('strokeView');
        }
    });
}, { threshold: 0.1 });


peopleStoryPath.forEach((path, index) => {
    if (path) { 
        let pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;
        observerElementSvg.observe(path);
    } else {
        console.log(`Path ${index + 1} not found`);
    }
});
