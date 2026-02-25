function enterSite(){
    document.querySelector(".landing").style.display="none";
    document.getElementById("content").style.display="block";
    document.getElementById("music").play();
    floatingHearts();
}

/* Love messages */
function showMsg(){
    const msgs=[
        "You are my safe place ❤️",
        "Your smile is addictive 💕",
        "My favourite human 💖"
    ];
    alert(msgs[Math.floor(Math.random()*msgs.length)]);
}

/* Floating hearts */
function floatingHearts(){
    setInterval(()=>{
        const heart=document.createElement("div");
        heart.className="heart";
        heart.innerHTML="💖";
        heart.style.left=Math.random()*100+"vw";
        heart.style.fontSize=(20+Math.random()*30)+"px";
        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),6000);
    },500);
}

/* Confetti surprise */
function surprise(){
    for(let i=0;i<120;i++){
        const conf=document.createElement("div");
        conf.className="confetti";
        conf.style.left=Math.random()*100+"vw";
        conf.style.background=`hsl(${Math.random()*360},100%,70%)`;
        document.body.appendChild(conf);
        setTimeout(()=>conf.remove(),4000);
    }
    alert("You are the best thing that ever happened to me 🎂❤️");
}