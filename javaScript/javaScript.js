// ........Gettings elements................

var sideBar = document.getElementById("sideBar");
var sideBarWidth= sideBar.offsetWidth;
var animatedTattoo = document.getElementById('animatedTattoo');
var playIcon= document.getElementById('playIcon');
var pauseIcon= document.getElementById('pauseIcon');

myScrollTop = window.scrollY


animatedTattooTop=animatedTattoo.offsetTop;
animatedTattooWidth= animatedTattoo.offsetWidth;
animatedTattoo.style.height=animatedTattooWidth;
// playIcon.style.top=animatedTattooTop+(animatedTattooWidth/2)-playIcon.offsetWidth/2
// playIcon.style.left=animatedTattoo.offsetLeft+animatedTattooWidth/2-playIcon.offsetWidth/2




// ..........navigation progress



myCursor = document.getElementById("myCursor");


competences = document.getElementById("competences");
webDev = document.getElementById("webDev");
graphisme = document.getElementById("graphisme");
design = document.getElementById("design");
softSkills = document.getElementById("softSkills");
formation = document.getElementById("formation");
Passions = document.getElementById("Passions");
realisations = document.getElementById("realisations");
realisationWeb = document.getElementById("realisationWeb");
realisationGraphisme = document.getElementById("realisationGraphisme");
realisationDesign = document.getElementById("realisationDesign");
realisationOther = document.getElementById("realisationOther");
contact = document.getElementById("contact");


competencesNav = document.getElementById("competencesNav");
webDevNav = document.getElementById("webDevNav");
graphismeNav = document.getElementById("graphismeNav");
designNav = document.getElementById("designNav");
softSkillsNav = document.getElementById("softSkillsNav");
formationNav = document.getElementById("formationNav");
PassionsNav = document.getElementById("PassionsNav");
realisationsNav = document.getElementById("realisationsNav");
realisationWebNav = document.getElementById("realisationWebNav");
realisationGraphismeNav = document.getElementById("realisationGraphismeNav");
realisationDesignNav = document.getElementById("realisationDesignNav");
realisationOtherNav = document.getElementById("realisationOtherNav");
contacNavt = document.getElementById("contactNav");


competencesTop = competences.offsetTop
webDevTop = webDev.offsetTop
graphismeTop = graphisme.offsetTop
designTop = design.offsetTop
softSkillsTop = softSkills.offsetTop
formationTop = formation.offsetTop
PassionsTop = Passions.offsetTop
realisationsTop = realisations.offsetTop
realisationWebTop = realisationWeb.offsetTop
realisationGraphismeTop = realisationGraphisme.offsetTop
realisationDesignTop = realisationDesign.offsetTop
realisationOtherTop = realisationOther.offsetTop
contactTop = contact.offsetTop



competencesNavTop = competencesNav.offsetTop
webDevNavTop = webDevNav.offsetTop
graphismeNavTop = graphismeNav.offsetTop
designNavTop = designNav.offsetTop
softSkillsNavTop = softSkillsNav.offsetTop
formationNavTop = formationNav.offsetTop
PassionsNavTop = PassionsNav.offsetTop
realisationsNavTop = realisationsNav.offsetTop
realisationWebNavTop = realisationWebNav.offsetTop
realisationGraphismeNavTop = realisationGraphismeNav.offsetTop
realisationDesignNavTop = realisationDesignNav.offsetTop
realisationOtherNavTop = realisationOtherNav.offsetTop
contactNavTop = contactNav.offsetTop


function updatePosition(){
  competencesTop = competences.offsetTop
  webDevTop = webDev.offsetTop
  graphismeTop = graphisme.offsetTop
  designTop = design.offsetTop
  softSkillsTop = softSkills.offsetTop
  formationTop = formation.offsetTop
  PassionsTop = Passions.offsetTop
  realisationsTop = realisations.offsetTop
  realisationWebTop = realisationWeb.offsetTop
  realisationGraphismeTop = realisationGraphisme.offsetTop
  realisationDesignTop = realisationDesign.offsetTop
  realisationOtherTop = realisationOther.offsetTop
  contactTop = contact.offsetTop

  competencesNavTop = competencesNav.offsetTop
  webDevNavTop = webDevNav.offsetTop
  graphismeNavTop = graphismeNav.offsetTop
  designNavTop = designNav.offsetTop
  softSkillsNavTop = softSkillsNav.offsetTop
  formationNavTop = formationNav.offsetTop
  PassionsNavTop = PassionsNav.offsetTop
  realisationsNavTop = realisationsNav.offsetTop
  realisationWebNavTop = realisationWebNav.offsetTop
  realisationGraphismeNavTop = realisationGraphismeNav.offsetTop
  realisationDesignNavTop = realisationDesignNav.offsetTop
  realisationOtherNavTop = realisationOtherNav.offsetTop
  contactNavTop = contactNav.offsetTop

  
}




console.log(competencesTop)
console.log(webDevTop)
console.log(graphismeTop)
console.log(designTop)
console.log(softSkillsTop)
console.log(formationTop)
console.log(PassionsTop)
console.log(realisationsTop)
console.log(realisationWebTop)
console.log(realisationGraphismeTop)
console.log(realisationDesignTop)
console.log(realisationOtherTop)
console.log(contactTop)


//...........Variables statements.............





function menuPosition(){
  scrollH = window.scrollY+50;
  console.log(scrollH)
  if(scrollH<webDevTop){
    myCursor.style.top= `${competencesNavTop}px`;
  }
  if(scrollH>=webDevTop && scrollH<graphismeTop){
    myCursor.style.top=`${webDevNavTop}px`; 
  }
  if(scrollH>=graphismeTop && scrollH<designTop){
    myCursor.style.top=`${graphismeNavTop}px`; 
  }
  if(scrollH>=designTop && scrollH<softSkillsTop){
    myCursor.style.top=`${designNavTop}px`; 
  }
  if(scrollH>=softSkillsTop && scrollH<formationTop){
    myCursor.style.top=`${softSkillsNavTop}px`; 
  }

  if(scrollH>=formationTop && scrollH<PassionsTop){
    myCursor.style.top=`${formationNavTop}px`; 
  }
  if(scrollH>=PassionsTop && scrollH<realisationsTop){

    myCursor.style.top=`${PassionsNavTop}px`; 
  }
  if(scrollH>=realisationsTop && scrollH<realisationWebTop){
    myCursor.style.top=`${realisationsNavTop}px`; 
  }
  if(scrollH>=realisationWebTop && scrollH<realisationGraphismeTop){
    myCursor.style.top=`${realisationWebNavTop}px`; 
  }
  if(scrollH>=realisationGraphismeTop && scrollH<realisationDesignTop){
    myCursor.style.top=`${realisationGraphismeNavTop}px`; 
  }

  if(scrollH>=realisationDesignTop && scrollH<realisationOtherTop){
    myCursor.style.top=`${realisationDesignNavTop}px`; 
  }

  if(scrollH>=realisationOtherTop && scrollH<contactTop){
    myCursor.style.top=`${realisationOtherNavTop}px`; 
  }

  if(scrollH>=contactTop){
    myCursor.style.top=`${contactNavTop}px`; 
  }


}


// ................................	positioning................................
function refreshPosition(){
  sideBarWidth= sideBar.offsetWidth;

  animatedTattooTop=animatedTattoo.offsetTop;
animatedTattooWidth= animatedTattoo.offsetWidth;
animatedTattoo.style.height=animatedTattooWidth;
// playIcon.style.top=animatedTattooTop+(animatedTattooWidth/2)-playIcon.offsetWidth/2
// playIcon.style.left=animatedTattoo.offsetLeft+animatedTattooWidth/2-playIcon.offsetWidth/2

  
}


function onResize(){
  updatePosition();
  refreshPosition();
  traceTimeline()
  menuPosition();
}
window.onresize = onResize;


function onScroll(){
  updatePosition();
  menuPosition();
  myScrollTop = window.scrollY
}
window.onscroll = onScroll;





// .............................particle-canvas..................................

//..... excess......




var excess=0;
var colorBackGround= "#ffffff";

!function(a){
var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;
"function"==typeof define&&define.amd?define(["exports"],
function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,
{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,
this.g=a.g,this.particleColor=a.options.particleColor,
this.x=Math.random()*this.canvas.width,
this.y=Math.random()*this.canvas.height,
this.velocity={x:(Math.random()-.5)*a.options.velocity,
y:(Math.random()-.5)*a.options.velocity}};

return c.prototype.update=function(){(this.x>this.canvas.width+excess||this.x<-excess)&&(this.velocity.x=-this.velocity.x),
(this.y>this.canvas.height+excess||this.y<-excess)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,

this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),
this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},
b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},
this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff",background:void 0!==b.background?b.background:colorBackGround,
interactive:void 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},
this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),
this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),
/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});
else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;
this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))
return console.error("Please specify a valid particleColor hexadecimal color"),!1;
this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,
this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",
function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,
this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];
for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));
this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];
for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));
this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),
this.canvas.addEventListener("mousemove",

//sidebar
function(a){this.p.x=a.clientX-this.canvas.offsetLeft-sideBarWidth,

  // this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),
  // var rect = element.getBoundingClientRect();
  // console.log(rect.top, rect.right, rect.bottom, rect.left);

   rectCanvas =this.canvas.getBoundingClientRect();


  this.p.y=a.clientY-rectCanvas.top}.bind(this)),
this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},
this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;
for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();
for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));
c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),
this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},
b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});


// Initialisation

var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#000',
//   background: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg',
  interactive: true,
  speed: 'slow',
  density: 'high'
  
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);



var canvasDiv2 = document.getElementById('particle-canvas2');
var particleCanvas2 = new ParticleNetwork(canvasDiv2, options);


var canvasDiv3 = document.getElementById('particle-canvas3');
var particleCanvas3 = new ParticleNetwork(canvasDiv3, options);







//........................ Timeline Data.......................

var timelineData =[
  {side:"left", type:"schooling", title:" <i class=\"fas fa-graduation-cap\"></i> Certificat d'Aptitude Théorique de Télépilote de drone", info:"Formation pratique et examen théorique" , place:"Direction Générale de l'Aviation Civile (DGAC), Toulouse", date:"2020", xPos:0 },
  {side:"right", type:"experience", title:"Développeur Application Mobile - React-Native / Chef de projet", info:" 3 mois" , place:"Agence Patte Blanche, Montpellier", date:"2020", xPos:0 },
  {side:"left", type:"schooling", title:" <i class=\"fas fa-graduation-cap\"></i> Formation Développeur Mobile / Java React-Native", info:"Bac+2 en 9 mois" , place:"ADRAR, Montpellier", date:"2019", xPos:0 },
  {side:"right", type:"experience", title:"Créateur et Gerant de \"Radio Swing Montpellier\"", info:"2 ans" , place:"Montpellier", date:"2017", xPos:0 },
  {side:"left", type:"experience", title:"Service à la personne, ateliers pour les enfants", info:"2 ans" , place:"Montpellier", date:"2016", xPos:0 },
  {side:"right", type:"experience", title:"Service civique communication et animation scientifique", info:"1 an, Suivi d'un CDD" , place:"Association Les Petits Débrouillards, Montpellier", date:"2014", xPos:0 },
  {side:"left", type:"schooling", title:" <i class=\"fas fa-graduation-cap\"></i> Formation Initiale d'Animateur", info:"" , place:"Association Les Petits Débrouillards / Planète Sciences,<br>Perpignan", date:"2014", xPos:0 },
  {side:"right", type:"experience", title:"Chef d'entreprise en Auto-Entrepreneuriat", info:"Entreprise de communication pour l'environnement, 2 ans" , place:"Montpellier", date:"2012", xPos:0 },
  {side:"left", type:"schooling", title:" <i class=\"fas fa-graduation-cap\"></i> Auto-formation", info:"Outils de communication," , place:"Montpellier", date:"2012", xPos:0 },
  {side:"right", type:"schooling", title:" <i class=\"fas fa-graduation-cap\"></i> DUT Génie Biologique Genie de l'environnement", info:"" , place:"Perpignan", date:"2011", xPos:0 },
  {side:"left", type:"experience", title:"Président du Bureau Des Etudiants", info:"IUT de Perpignan," , place:"Perpignan", date:"2011", xPos:0 },
  {side:"right", type:"schooling", title:" <i class=\"fas fa-graduation-cap\"></i> Bac scientifique option physique-chimie", info:"Mention Bien," , place:"Lodève", date:"2009", xPos:0 },
  {side:"left", type:"experience", title:"Benevole partenaire de l'ONF", info:"Réimplantation d'une souche indigène de truite Fario," , place:"Haut-Languedoc", date:"2007", xPos:0 },


]


//.....Timeline params....

var timeline = document.getElementById('myTimeline');
var timelineContainer=document.getElementById('timelineContainer');
var context =myTimeline.getContext('2d');
context.fillStyle = 'black';
context.strokeStyle='black';
context.lineWidth=1.5; 

var radius=6;
var dotX0= myTimeline.width / 2;
var dotY=40;
var heightTime=100;


// Timeline Tracing









function traceTimeline(){
  timelineContainer.innerHTML="";
  for(i=0; i<timelineData.length; i++ ){


    traceDot(dotX0+timelineData[i].xPos, dotY, radius);
    createTime(i);

  
    if(i>0){
      traceStroke(dotX0+timelineData[i-1].xPos, dotY-heightTime, dotX0+timelineData[i].xPos, dotY)

    }


    dotY=dotY+heightTime;

  }
  dotY=40;
}


traceTimeline();


var time;
var timeDate;

function createTime(i){

  time = document.createElement("div"); 
  time.classList.add("time");

  let timeTitle = document.createElement("div"); 
  timeTitle.classList.add("timeTitle"); 
  time.appendChild(timeTitle);

  let timeDescription = document.createElement("div"); 
  timeDescription.classList.add("timeDescription");  
  time.appendChild(timeDescription);

  let timePlace = document.createElement("div"); 
  timePlace.classList.add("timePlace");
  time.appendChild(timePlace);


  document.getElementById("timelineContainer").appendChild(time);


  timeTitle.innerHTML=timelineData[i].title;
  timeDescription.innerHTML=timelineData[i].info;
  timePlace.innerHTML=timelineData[i].place;

  timeDate = document.createElement("div"); 
  timeDate.classList.add("timeDate");
  document.getElementById("timelineContainer").appendChild(timeDate);

  timeDate.innerHTML=timelineData[i].date;


  PositioningTimeline()
 

}





function PositioningTimeline(){

  time.style.top=`${dotY+myTimeline.offsetTop-radius}px`;
  timeDate.style.top=`${dotY+myTimeline.offsetTop-radius}px`;

  if(timelineData[i].side == "right" ){

    time.style.left =`${dotX0+timelineData[i].xPos+myTimeline.offsetLeft+60}px`;
    timeDate.style.left =`${dotX0+timelineData[i].xPos+myTimeline.offsetLeft-75}px`;


    time.classList.add("right");
    timeDate.classList.add("left");
    traceStroke(dotX0+timelineData[i].xPos-20, dotY, dotX0+timelineData[i].xPos+40, dotY)

  }

  else{
    time.style.left =`${dotX0+timelineData[i].xPos+myTimeline.offsetLeft-time.offsetWidth-70}px`;
    timeDate.style.left =`${dotX0+timelineData[i].xPos+myTimeline.offsetLeft+35}px` ;

    time.classList.add("left");
    timeDate.classList.add("right");
    traceStroke(dotX0+timelineData[i].xPos-40, dotY, dotX0+timelineData[i].xPos+20, dotY)

  }

  console.log("toto")
}








function traceDot(dotX, dotY, dotRadius){
  context.beginPath();

  context.arc(dotX, dotY, dotRadius, 0, 2 * Math.PI, false);
  context.fill();

}


function traceStroke(x1, y1, x2, y2){
  context.beginPath();
  context.moveTo(x1,y1);
  context.lineTo(x2,y2);
  context.stroke(); 
}




// /* ................stars................. */


// var cols = ['#000000','#000000','#000000','#000000','#000000','#000000'];
// var stars = 250;

// for (var i = 0; i <= stars; i++) {

// 	var size = Math.random()*3;
//   var color = cols[parseInt(Math.random()*4)];

// 	$('#starsBox').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random()*100 + '%; left: ' + Math.random()*100 + '%; background: ' + color + '; box-shadow: 0 0 '+ Math.random()*10 +'px' + color + ';"></span>') ;
// };

// setTimeout(function(){ 
// 	$('#starsBox span').each(function(){  
//  		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
//   });
// }, 1);

// setInterval(function(){ 
// 	$('#starsBox span').each(function(){  	
//  		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
//   });
// }, 100000);


var absyntheLong="Tu es de ces alcools, si purs que l'on enflamme, <br>sur un morceau de sucre, pour détendre les âmes. <br><br>De ces spiritueux, qu'on boit en rituel, <br>d'un air spirituel, qu'on voit au fond des yeux. <br><br>Des yeux qui improvisent, des rêves et des chimères, <br>tous les deux sous l'emprise, d'une Eve imaginaire. <br><br>Tu entre comme une épée, dans mon cœur à revers, <br>ne laissant dépasser, que ta poignée parée, <br>de saphirs et d’émeraudes, et dont passe au travers, <br>mes martyrs en exode, dont je suis libéré. <br><br>Tu es comme cette fée, que l'on dit bleue ou verte, <br>et qui laisse une plaie, à moitié entrouverte. <br><br>Ta percée déconcerte, les âmes les plus saintes, <br>et comme une fenêtre, laisse échapper les plaintes.<br> On veut te savourer, ô délicate absinthe, <br>par de lentes gorgées, une fois la flamme éteinte. <br><br>Pareil à celui qui, changea leur eau en vin, <br>à choisi douze apôtres, moi j'ai choisi mes strophes. <br>Au lieu de ce messie, et de ses vers de vingt, <br>La mesure me suffit, dans un alexandrin. <br><br>Le vin est pour les dieux, un allié séculaire, <br>de ses tanins épais, il bloque la lumière. <br>A son manteau carmin, préfère ta robe claire, <br>ta pomme empoisonnée, au mensonge divin. <br>Pour ta lucidité, et pour son goût amer, <br>j'ai quitté le jardin, et rejoins Lucifer. <br><br>Impalpable immortelle, qui renie Dionysos, <br>impie immatérielle, qui n'a ni dieux ni os. <br>Et à ce dieu antique, enfant de Sémélé, <br>préfère tes yeux mystiques, aux siens immaculés. <br>Et fuyant l'alambic, ton destin esseulé, <br>a rejoint mon destin, auquel il s'est mêlé. <br><br>Humant la part des anges, ma belle Nathalie, <br>ton prénom se mélange, en une litanie. <br>Et distillant le sens, et distillant l'esprit, <br>les vapeurs en suspens, à mesure que j'écris, <br>condensent en voile opaque, sur mon regard épris. <br><br>N'atteignant plus le sens, de ces mots que j'allie.<br>N'attendant que l'essence, séparée de la lie.<br>De ces deux derniers vers, je garde une partie, <br>le début et la fin, me laissant Nathalie.";
var absyntheShort="« Impalpable immortelle, qui renie Dionysos, <br>impie immatérielle, qui n'a ni dieux ni os. <br>Et à ce dieu antique, enfant de Sémélé, <br>préfère tes yeux mystiques, aux siens immaculés. <br>Et fuyant l'alambic, ton destin ... »";
var absyntheCount=0;

// read more
function readMore1() {
  var absynthe = document.getElementById("absynthe");
  var readMore1 = document.getElementById("readMore1");

  if (absyntheCount==1) {
    readMore1.innerHTML = "Lire en entier";
    absynthe.innerHTML = absyntheShort;

    absyntheCount=0;

    $('html,body').animate({scrollTop: $("#absynthe").offset().top}, 'slow'      );
  
    

  } 
  
  else  {
    
    readMore1.innerHTML = "Refermer";
    absynthe.innerHTML = absyntheLong;
    absyntheCount=1;
    console.log(absyntheCount)
    
  }



}






var religionLong ="On a tous une religion.<br>On commence la vie par un acte de foi. Dès lors que nous prenons notre première inspiration, on prend le pari qu'une seconde s'en suivra, et une troisième, et de nombreuses autres pour la plupart d'entre nous.<br><br>Notre corps est ainsi notre premier temple. Et toute notre vie repose sur ce défi, que la petite mécanique qui nous anime tienne bon, le temps de quelques bouffées d'air. <br>Mais cette foi est innée, discrète, et l'on fini par oublier, que l'on croit.<br><br>Quelques uns assumeront, un peu, et croirons ostensiblement, en se rassemblant contre un ennemi commun, autour de quelques règles inventées. Cette communion leur offrira la confiance, l'assurance imaginaire d'être sur le bon chemin, sur lequel ils dépenseront ces quelques bouffées d'air, dans l'espoir d'en gagner quelques supplémentaires. Se tromper main dans la main rassurera la plupart d'entre nous, même s'il s’agit de sauter dans le vide.<br><br>L'inconnu sera trop effrayant pour un autre qui refusera de s'y jeter bras dessus bras dessous. Celui-là décidera de ne pas croire, de ne pas sauter. Il pensera appréhender le réel tel qu'il est, avec un regard qu'ils voudrait objectif, avec une science qu'il pense immuable, dans un référentiel absolu. En oubliant qu'entre le réel, s'il en est un, et lui même, le vacarme du monde et de son propre corps, viendra tinter le triste son du parfait diapason.<br><br>Ce vacarme, c'est tous les cliquetis de notre petite mécanique, la voix de celle qu'on aime, le bruit du cœur qui bat quand on la voit. Ce que l'on a vu. Nos idées reçues, et celles que l'on a pas. Les mensonges, voulus ou pas, des autres et de nous même. Et tout le reste.<br><br>Catholiques, scientifiques, capitalistes et tous les autres, nous croyons. Nous faisons chaque jour, acte de foi. En fermant à clef la porte le matin, présupposant être là le soir pour la rouvrir, en faisant un crédit, en votant pour un Homme sans aucunes certitudes, et en imaginant que cette fois-ci ce sera bien. Nous pouvons feindre le contraire mais nous avons tous un système de croyances.<br><br>Nous avons la certitude de rien, et en ce sens, la possibilité de tout. Et si nous devons croire, alors, choisissons bien.<br><br>Moi je veux croire à tout ce boucan,<br>à ce vacarme aux fond des gens,<br>qui couvre le son froid, de ce foutu diapason.<br><br>Je veux croire à ce que je n'ai pas vu,<br>à ce que l'on croit voire quand on a trop bu.<br><br>Je veux choisir de l'aimer,<br>comme on ne pourrait pas, s'il on devait compter.<br><br>Je veux des yeux dans mes yeux,<br>un corps contre le mien,<br>ma main dans ses cheveux, qui tombent sur ses seins.<br><br>Je veux leur cœur qui bat,<br>contre mon cœur qui bat,<br>surtout contre le tiens,<br>et qui s'arrête parfois, pour écouter le mien.<br><br>je veux le sourire qu'offre un inconnu,<br>à un autre qui lui plaît, aux abords de la rue.<br>Comme s'ils se connaissaient. Mais ne se verrons plus.<br><br>Et ce vieux qui les regarde,<br>ivre, et se voyant passer,<br>avec celle qu'il n'a plus.<br><br>je veux leur joie de vivre, et un peu plus encore.<br>Partager avec lui, sa peine et ses remords,<br>pourvu que je ressente, des frissons sur mon corps.<br><br>je veux briller de milles éclats, et mourir consumé,<br>plutôt qu'économiser ma flamme, et m'éteindre asphyxié.<br><br>Et si tes bouffées d'air me font brûler plus vite,<br>c'est dans cette lumière  que je veux prendre la fuite."
var religionShort="« Ce vacarme, c'est tous les cliquetis de notre petite mécanique, la voix de celle qu'on aime, le bruit du cœur qui bat quand on la voit. Ce que l'on a vu. Nos idées reçues, et celles que l'on a pas. Les mensonges, voulus ou pas, des autres et de nous même. Et tout le reste ... »"
var religionCount=0;

function readMore2() {
  var religion = document.getElementById("religion");
  var readMore2 = document.getElementById("readMore2");

  if (religionCount==1) {
    readMore2.innerHTML = "Lire en entier";
    religion.innerHTML = religionShort;

    religionCount=0
    $('html,body').animate({scrollTop: $("#religion").offset().top}, 'slow'      );
  
  } 
  
  else  {
    
    readMore2.innerHTML = "Refermer";
    religion.innerHTML = religionLong;
    religionCount=1;
    console.log(religionCount)
  }



}



var libreArbitreLong ="Tu t'agites comme le bras d'un naufragé, <br> gigotant vers la droite, on te l'a ordonné, <br>fuyant vers la gauche, on te l'a ordonné.<br><br>Tu piétines comme les jambes d'un naufragé,<br>en avant en arrière, ne sachant ou aller.<br>Pleurant sur la mer et prisonnier d'elle,<br>espérant vers la terre en regardant le ciel.<br><br>Tu t'agites et tu trembles comme un débris flottant,<br>respires et te noies au rythme du courant.<br>Comme ce reflet sur l'eau, perdu parmi cent,<br> tu brilles et t'éteins aux ordres du vent.<br><br>Ton coeur essoufflé, à ta tête en fièvre, demande à se taire dans une voix schizophrène.<br>Si les embruns salés ne brûlaient pas tes lèvres, elles crieraient dans le vide, sans hésiter Amen.<br>Mais toi tu es là, debout, sûr de toi, jurant sur cette barque que tu sais ou tu vas.<br>N'est-il pas rassurant quand on a pas le choix, de se persuader qu'on voulait aller là."
var libreArbitreShort="« Mais toi tu es là, debout, sûr de toi, jurant sur cette barque que tu sais ou tu vas. <br>N'est-il pas rassurant quand on a pas le choix, de se persuader qu'on voulait aller là ... »"
var libreArbitreCount=0;

function readMore3() {
  var libreArbitre = document.getElementById("libreArbitre");
  var readMore3 = document.getElementById("readMore3");

  if (libreArbitreCount==1) {
    readMore3.innerHTML = "Lire en entier";
    libreArbitre.innerHTML = libreArbitreShort;

    libreArbitreCount=0
    $('html,body').animate({scrollTop: $("#libreArbitre").offset().top}, 'slow'      );
  
  } 
  
  else  {
    
    readMore3.innerHTML = "Refermer";
    libreArbitre.innerHTML = libreArbitreLong;
    libreArbitreCount=1;
    console.log(libreArbitreCount)
  }



}





//......................smooth scrolling......................................

$(function() {
  /**
  * Smooth scrolling to page anchor on click
  **/
  $("a[href*='#']:not([href='#'])").click(function() {
      if (
          location.hostname == this.hostname
          && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
      ) {
          var anchor = $(this.hash);
          anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
          if ( anchor.length ) {
              $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
          }
      }
  });
});



$(function() {
  /**
  * Smooth scrolling to a specific element 
  **/
  function scrollTo( target ) {
      if( target.length ) {
          $("html, body").stop().animate( { scrollTop: target.offset().top }, 1000);
      }
  }
  // exemple scrollTo( $("#mon-id") );
});












jQuery( document ).ready(function($) {
  $('#animatedTattoo').click(function() {
      this.paused ? this.play() : this.pause();


  });
});


function playAnimatedTattoo(){
  animatedTattoo.play()
}

function pauseAnimatedTattoo(){
  animatedTattoo.pause()
}


// const video = document.querySelector('video');

 animatedTattoo.onplaying = (event) => {
   playIcon.classList.toggle("dispNone");
   pauseIcon.classList.toggle("dispNone");

  setMoveMyPosition = setInterval(moveMyPosition,500);
 };

 animatedTattoo.onended = function(e) {
   playIcon.classList.remove("dispNone");

  clearInterval (setMoveMyPosition)
 }

 animatedTattoo.onpause = (event) => {
   playIcon.classList.toggle("dispNone");
   pauseIcon.classList.toggle("dispNone");
  clearInterval (setMoveMyPosition)

};




myPosition = document.getElementById("myPosition");


function moveMyPosition(){
  myPosition.style.left= Math.ceil(25+(50*animatedTattoo.currentTime/animatedTattoo.duration))+"%"
console.log("toto")

}


$("#logo").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#particle-canvas").offset().top
  }, 2000);
});


