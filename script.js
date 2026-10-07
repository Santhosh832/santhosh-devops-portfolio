// ==========================================
// DevOps Portfolio JavaScript
// ==========================================


// 1. Current year in footer
const currentYear = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${currentYear} C Santhosh · Built with HTML, CSS & JavaScript`;
}


// 2. Scroll reveal animation
const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


sections.forEach((section) => {

    section.classList.add("reveal");

    revealObserver.observe(section);

});


// 3. Terminal typing effect

const terminalCommands = [
    "kubectl get pods",
    "docker ps",
    "terraform apply",
    "git push origin main"
];

let commandIndex = 0;

const terminalCommand =
    document.querySelector(".terminal-body p");


function typeCommand() {

    if (!terminalCommand) {
        return;
    }

    const command =
        terminalCommands[commandIndex];

    let characterIndex = 0;

    terminalCommand.innerHTML =
        '<span class="green">santhosh</span>@devops:~$ ';


    const typingInterval = setInterval(() => {

        terminalCommand.innerHTML +=
            command[characterIndex];

        characterIndex++;

        if (characterIndex >= command.length) {

            clearInterval(typingInterval);

            setTimeout(() => {

                commandIndex =
                    (commandIndex + 1) %
                    terminalCommands.length;

                typeCommand();

            }, 1800);

        }

    }, 70);

}


setTimeout(typeCommand, 1000);


// 4. Highlight navigation link while scrolling

const navigationLinks =
    document.querySelectorAll("nav a");

const pageSections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    pageSections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


// 5. Console message

console.log(
    "%c🚀 C Santhosh DevOps Portfolio",
    "font-size: 18px; font-weight: bold;"
);

console.log(
    "Built with HTML, CSS, JavaScript, Docker & DevOps."
);