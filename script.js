// Get Data

let users = [
  {
    profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMeassage: 4,
    location: "Delhi, India",
    name: "Freyaa",
    age: 18,
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music"
    }, {
        icon: `<i class="ri-map-2-fill"></i>`,
        interest: "Travelling"
    }],
    bio: "Swipe right to embark on a journey filled with laughter, adventures, and moments that make us feel alive. Let's create our own love story together.",
    isFriend: null
  },
  {
    profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMeassage: 4,
    location: "Bhopal, India",
    name: "Anjali",
    age: 23,
    interests: [{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writer"
    }, {
        icon: `<i class="ri-football-fill"></i>`,
        interest: "Football"
    }],
    bio: "Swipe right to embark on a journey filled with laughter, adventures, and moments that make us feel alive. Let's create our own love story together.",
    isFriend: null
  },
  {
    profilePic: "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMeassage: 4,
    location: "Bhavnagar, India",
    name: "Dhwani",
    age: 19,
    interests: [{
        icon: `<i class="ri-macbook-fill"></i>`,
        interest: "Coding"
    }, {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music"
    }],
    bio: "Swipe right to embark on a journey filled with laughter, adventures, and moments that make us feel alive. Let's create our own love story together.",
    isFriend: null
  },
  {
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMeassage: 4,
    location: "Ahemdabad, India",
    name: "Rishika",
    age: 26,
    interests: [{
        icon: `<i class="ri-git-repository-fill"></i>`,
        interest: "Reader"
    }, {
        icon: `<i class="ri-map-2-fill"></i>`,
        interest: "Travelling"
    }],
    bio: "Swipe right to embark on a journey filled with laughter, adventures, and moments that make us feel alive. Let's create our own love story together.",
    isFriend: null
  },
];

function select(elem){
   return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select('.prflimg img').src = users[index].profilePic;
    select('.badge h5').textContent = users[index].pendingMeassage;
    select('.location h3').textContent = users[index].location;
    select('.name h1:nth-child(1)').textContent = users[index].name;
    select('.name h1:nth-child(2)').textContent = users[index].age;


    let clutter = "";
    users[index].interests.forEach(function(interests){
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full mt-2 gap-3">
       ${interests.icon} <h3 class="text-sm tracking-tight capitalize">${interests.interest}</h3></div>`
    });

    select('.tags').innerHTML = clutter;

    select('.bio p').textContent = users[index].bio;
}

(function setInitial(){
    select('.maincard img').src = users[curr].displayPic;
    select('.incomingcard img').src = users[curr+1]?.displayPic;

    setData(curr);

    curr = 2;
})();


function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = select('.maincard');
                let incoming = select('.incomingcard');
    
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale: 1,
                    opacity: 1
                });
    
                if(curr === users.length) curr = 0;
    
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }   
        });
    
    
        tl.to(".maincard",{
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
    
        },"a")
        .from(".incomingcard",{
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
    
        },"a")
    }
    
};

let deny = select('.deny');
let accept = select('.accept');

 deny.addEventListener("click", function(){
        imageChange();
        setData(curr-1)
        gsap.from(".details .element",{
            y: "100%",
            opacity: 0,
            stagger: .06,
            ease: Power4.easeInout,
            duration: 0.7
        });
 });

 accept.addEventListener("click", function(){
    imageChange();
    setData(curr-1)
    gsap.from(".details .element",{
        y: "100%",
        opacity: 0,
        stagger: .06,
        ease: Power4.easeInout,
        duration: 0.7
    });
});

(function conatinerCreator(){
    document.querySelectorAll('.element')
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        div.appendChild(element);
        select('.details').appendChild(div);
    })
})();

