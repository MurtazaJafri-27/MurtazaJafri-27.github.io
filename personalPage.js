document.addEventListener('DOMContentLoaded', function() {
const checkbox = document.getElementById('modes');
const heading = document.querySelector('label h1');

heading.textContent = 'Light Mode'

checkbox.addEventListener('change', function() {
    if(this.checked){
        heading.textContent = 'Dark Mode'
    }
    else{
        heading.textContent = 'Light Mode'
    }
})
})


document.addEventListener('DOMContentLoaded', function(){
    const checkbox2 = document.getElementById('intro')
    const introParagraph = document.querySelector('.introPara')

    introParagraph.innerHTML = ""

    checkbox2.addEventListener('change', function() {
        if(this.checked){
            introParagraph.innerHTML = `<h1>Introduction:</h1><br>I\’\ m a 19-year-old university student pursuing a BS in Computer Science (BSCS), with a strong interest in technology, problem-solving, and software development. <br>I’m currently learning and working with C, JavaScript, HTML, CSS, and Python, <br>and I enjoy understanding how systems work from the ground up.

In my free time, I\’\ m an avid gamer who enjoys immersive and strategy-driven games<br> such as Dragon Age: Origins, Diablo IV, The Elder Scrolls IV: Oblivion, Crusader Kings II, and The Sims 2.<br> My hobbies include gaming, coding, studying, and continuously improving my skills and discipline.

I\’\ guided by my faith as a Muslim, which shapes my values and mindset. <br>My long-term goal is to grow into a skilled software engineer and eventually become an AI expert, contributing to meaningful and impactful technology.`
        }
        else{
            introParagraph.innerHTML = ""
        }
    })
})



document.addEventListener('DOMContentLoaded', function() {
    const artworkCheckbox = document.getElementById('artworkToggle')
    const introCheckbox = document.getElementById('intro')
    const introParagraph = document.querySelector('.introPara')
    const toggle = document.getElementById('artworkToggle');
    const pageLabels = document.querySelectorAll('label[for^="page"]');

toggle.addEventListener('change', () => {
    pageLabels.forEach(label => {
        label.style.display = toggle.checked ? 'block' : 'none';
    });
})
introCheckbox.addEventListener('change', () => {
      pageLabels.forEach(label => {
        label.style.display = 'none';
    })})

    artworkCheckbox.addEventListener('change', function() {
        if(this.checked){
            introCheckbox.checked = false;
            introParagraph.innerHTML = " "
        }
    })
    introCheckbox.addEventListener('change', function() {
        if(this.checked){
            artworkCheckbox.checked = false;
        }
    })

});

document.addEventListener('DOMContentLoaded', function() {
       const uniToggle = document.getElementById('universityToggle')
       const modeLabel = document.querySelector('label h1')

       uniToggle.addEventListener('change', function() {
        if(this.checked){
             modeLabel.style.transition = 'right 0.4s ease-in all'
            modeLabel.style.right = '14vw'
        }
        else {
            modeLabel.style.right = '2%'
        }
       })
})

document.addEventListener('DOMContentLoaded', function() {
    const introCheck = document.getElementById('intro');
    const artworkToggle = document.getElementById('artworkToggle');
    const uniToggle = document.getElementById('universityToggle');
    const projToggle = document.getElementById('projects');
    const  pageLabels = document.querySelectorAll('main label');

    const introParagraph = document.querySelector('.introPara');
    const artworkDiv = document.querySelector('.artwork');

    // Page number labels (1 and 2)
    const pageButtons = document.querySelectorAll('main label h3');
    const pageBoxes = document.querySelectorAll('.pageBox');

    projToggle.addEventListener('change', function() {
        if (this.checked) {
            // Turn off other sections
            uniToggle.checked = false;
            artworkToggle.checked = false;
            introCheck.checked = false;

            // Force-hide other content
            introParagraph.innerHTML = "";
            introParagraph.style.display = 'none';
            artworkDiv.style.transform = 'translateY(-200vh)';
            pageBoxes.forEach(pageBoxes => {
                 pageBoxes.style.display = 'none';
            });

            // HIDE page number labels
            pageButtons.forEach(h3 => {
                h3.style.display = 'none';
            });
            pageLabels.forEach(label => {
                label.style.display = 'block';
            })

        } else {
            // Reset when Projects is unchecked
            introParagraph.style.display = '';
            artworkDiv.style.transform = '';
            pageLabels.forEach(label => {
                label.style.display = '';
            })

            // SHOW page number labels again
            pageButtons.forEach(h3 => {
                h3.style.display = '';
            });
            pageBoxes.forEach(pageBoxes => {
                 pageBoxes.style.display = '';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sem1check = document.getElementById('sem1')
    const sem2check = document.getElementById('sem2')
    const sem3check = document.getElementById('sem3')
    const sem4check = document.getElementById('sem4')
    const sem5check = document.getElementById('sem5')
    const sem6check = document.getElementById('sem6')
    const sem7check = document.getElementById('sem7')
    const sem8check = document.getElementById('sem8')

    const sem1label = document.querySelector('label[for="sem1"]')
    const sem2label = document.querySelector('label[for="sem2"]')
    const sem3label = document.querySelector('label[for="sem3"]')
    const sem4label = document.querySelector('label[for="sem4"]')
    const sem5label = document.querySelector('label[for="sem5"]')
    const sem6label = document.querySelector('label[for="sem6"]')
    const sem7label = document.querySelector('label[for="sem7"]')
    const sem8label = document.querySelector('label[for="sem8"]')

    // Semester 1
    sem1check.addEventListener('change', function() {
        if(this.checked){
            sem2label.style.display = 'none'
            sem3label.style.display = 'none'
            sem4label.style.display = 'none'
            sem5label.style.display = 'none'
            sem6label.style.display = 'none'
            sem7label.style.display = 'none'
            sem8label.style.display = 'none'
        } else {
            sem2label.style.display = 'block'
            sem3label.style.display = 'block'
            sem4label.style.display = 'block'
            sem5label.style.display = 'block'
            sem6label.style.display = 'block'
            sem7label.style.display = 'block'
            sem8label.style.display = 'block'
        }
    })

    // Semester 2
    sem2check.addEventListener('change', function() {
        if(this.checked){
            sem1label.style.display = 'none'
            sem3label.style.display = 'none'
            sem4label.style.display = 'none'
            sem5label.style.display = 'none'
            sem6label.style.display = 'none'
            sem7label.style.display = 'none'
            sem8label.style.display = 'none'
        } else {
            sem1label.style.display = 'block'
            sem3label.style.display = 'block'
            sem4label.style.display = 'block'
            sem5label.style.display = 'block'
            sem6label.style.display = 'block'
            sem7label.style.display = 'block'
            sem8label.style.display = 'block'
        }
    })

    // Semester 3
    sem3check.addEventListener('change', function() {
        if(this.checked){
            sem1label.style.display = 'none'
            sem2label.style.display = 'none'
            sem4label.style.display = 'none'
            sem5label.style.display = 'none'
            sem6label.style.display = 'none'
            sem7label.style.display = 'none'
            sem8label.style.display = 'none'
        } else {
            sem1label.style.display = 'block'
            sem2label.style.display = 'block'
            sem4label.style.display = 'block'
            sem5label.style.display = 'block'
            sem6label.style.display = 'block'
            sem7label.style.display = 'block'
            sem8label.style.display = 'block'
        }
    })

    // Semester 4
    sem4check.addEventListener('change', function() {
        if(this.checked){
            sem1label.style.display = 'none'
            sem2label.style.display = 'none'
            sem3label.style.display = 'none'
            sem5label.style.display = 'none'
            sem6label.style.display = 'none'
            sem7label.style.display = 'none'
            sem8label.style.display = 'none'
        } else {
            sem1label.style.display = 'block'
            sem2label.style.display = 'block'
            sem3label.style.display = 'block'
            sem5label.style.display = 'block'
            sem6label.style.display = 'block'
            sem7label.style.display = 'block'
            sem8label.style.display = 'block'
        }
    })

    // Semester 5
    sem5check.addEventListener('change', function() {
        if(this.checked){
            sem1label.style.display = 'none'
            sem2label.style.display = 'none'
            sem3label.style.display = 'none'
            sem4label.style.display = 'none'
            sem6label.style.display = 'none'
            sem7label.style.display = 'none'
            sem8label.style.display = 'none'
        } else {
            sem1label.style.display = 'block'
            sem2label.style.display = 'block'
            sem3label.style.display = 'block'
            sem4label.style.display = 'block'
            sem6label.style.display = 'block'
            sem7label.style.display = 'block'
            sem8label.style.display = 'block'
        }
    })

    // Semester 6
    sem6check.addEventListener('change', function() {
        if(this.checked){
            sem1label.style.display = 'none'
            sem2label.style.display = 'none'
            sem3label.style.display = 'none'
            sem4label.style.display = 'none'
            sem5label.style.display = 'none'
            sem7label.style.display = 'none'
            sem8label.style.display = 'none'
        } else {
            sem1label.style.display = 'block'
            sem2label.style.display = 'block'
            sem3label.style.display = 'block'
            sem4label.style.display = 'block'
            sem5label.style.display = 'block'
            sem7label.style.display = 'block'
            sem8label.style.display = 'block'
        }
    })

    // Semester 7
    sem7check.addEventListener('change', function() {
        if(this.checked){
            sem1label.style.display = 'none'
            sem2label.style.display = 'none'
            sem3label.style.display = 'none'
            sem4label.style.display = 'none'
            sem5label.style.display = 'none'
            sem6label.style.display = 'none'
            sem8label.style.display = 'none'
        } else {
            sem1label.style.display = 'block'
            sem2label.style.display = 'block'
            sem3label.style.display = 'block'
            sem4label.style.display = 'block'
            sem5label.style.display = 'block'
            sem6label.style.display = 'block'
            sem8label.style.display = 'block'
        }
    })

    // Semester 8
    sem8check.addEventListener('change', function() {
        if(this.checked){
            sem1label.style.display = 'none'
            sem2label.style.display = 'none'
            sem3label.style.display = 'none'
            sem4label.style.display = 'none'
            sem5label.style.display = 'none'
            sem6label.style.display = 'none'
            sem7label.style.display = 'none'
        } else {
            sem1label.style.display = 'block'
            sem2label.style.display = 'block'
            sem3label.style.display = 'block'
            sem4label.style.display = 'block'
            sem5label.style.display = 'block'
            sem6label.style.display = 'block'
            sem7label.style.display = 'block'
        }
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const page2checkbox = document.getElementById('page2')
    const page1checkbox = document.getElementById('page1')
    const images2 = document.querySelector('.artwork .page-2')
    const images1 = document.querySelector('.artwork .page-1')

    page1checkbox.addEventListener('change', function() {
         if(this.checked){
            images1.style.display = 'flex'
            images2.style.display = 'none'
         }})
    page2checkbox.addEventListener('change', function() {
         if(this.checked){
            images2.style.display = 'flex'
            images1.style.display = 'none'
         }})
    })

   document.addEventListener('DOMContentLoaded', function() {
    const loading_button = document.querySelector('.loadingButton');
    const loader = document.querySelector('.loader');

    loading_button.addEventListener('click', () => {
        loader.style.display = 'none';
    });
});