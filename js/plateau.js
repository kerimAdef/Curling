const borneVue=32;//amplitude de deplacement de la camera
const epaiCbe = 2;
 const NbePtsCercleCylindre = 50;
 const NbePtsGeneratriceCylindre  = 1;
 const nbeMeridienTore = 40;
 const nbeParallelTore = 20;
 const creux = true; // pour avoir des cylindres ouverts
 // plans
 
const largPlanCSG = 25;
 const hautPlanCSG  = 25;
 const nbSegmentlargPlanCSG  = 30;
 const nbSegmenthautPlanCSG  = 30;
 

function init(){
 var stats = initStats();
    // creation de rendu et de la taille
 let rendu = new THREE.WebGLRenderer({ antialias: true });
 //rendu.shadowMap.enabled = true;
 let scene = new THREE.Scene();   
 let result;
 let camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 100);
 rendu.shadowMap.enabled = true;
 rendu.setClearColor(new THREE.Color(0xffffff));
 rendu.setSize(window.innerWidth*.9, window.innerHeight*.9);
 cameraLumiere(scene,camera);
 lumiere(scene);
 //repere(scene);
 //plans contenant deux axes du repere
 //planRepere(scene);



// modelisation  de bezier


function TraceBezierCubique(P0, P1, P2, P3,nbPts,coul,epaiCbe){
 let cbeBez = new THREE.CubicBezierCurve3(P0, P1, P2, P3);
 //let cbe = new THREE.CurvePath();
 let cbeGeometry = new THREE.Geometry();
 cbeGeometry.vertices = cbeBez.getPoints(nbPts);
 let material = new THREE.LineBasicMaterial( 
   { color : coul , 
     linewidth: epaiCbe    
   } );
 let BezierCubique = new THREE.Line( cbeGeometry, material );
 BezierCubique.curve=cbeBez;
 return (BezierCubique);
}  // fin fonction THREE.CubicBezierCurve


 // construction du plateau
 
let materialPhong = new THREE.MeshPhongMaterial({
  color:"#13C6C6",
  //D7B7B7
  opacity: 0.1,
  transparent:true,
  wireframe: false,
  flatShading:true,
  shininess:10,
  side: THREE.DoubleSide
});

//propriete du materiau avec Phong
function MateriauPhong(coulD,transpa,bolTrans,coulSpe){ 
 let Material = new THREE.MeshPhongMaterial({
   color: coulD,
   opacity: transpa,
   transparent: bolTrans,
   //     wireframe: false,
   specular:coulSpe, 
   flatShading: true,
   side: THREE.DoubleSide,
 });
 return Material;
}//fin fonction MateriauPhong


 let geometry = new THREE.PlaneGeometry(20,6,4,7);
 //let material = new THREE.MeshPhongMaterial( { color:0x13C6C6},1,false );
 let plane = new THREE.Mesh( geometry, materialPhong );
 //geometry.rotateZ(-Math.PI/4);
 scene.add( plane );

 // construction des maisons

 let innerRadius=2.5;
 let outerRadius =3;
 let thetaSegments=30 ;
 let phiSegments =14;
 let thetaStart=0;
 let thetaLength=Math.PI*2;

function anneaux(an1){
const Ringgeometry = new THREE.RingGeometry(innerRadius, outerRadius , thetaSegments , phiSegments , thetaStart , thetaLength);
const Ringmaterial = new THREE.MeshBasicMaterial( { color:0x0646F3, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( Ringgeometry, Ringmaterial );
//mesh.translateY(-8);
//scene.add( mesh );
const Ringgeometry1 = new THREE.RingGeometry(1.3, 1.6, thetaSegments , phiSegments , thetaStart , thetaLength);
const Ringmaterial1 = new THREE.MeshBasicMaterial( { color:0xFF000F, side: THREE.DoubleSide } );
const Ring = new THREE.Mesh( Ringgeometry1, Ringmaterial1 );
//Ring.translateY(-8);
//scene.add( Ring );

const Ringgeometry2 = new THREE.RingGeometry(0.3, 0.5, thetaSegments , phiSegments , thetaStart , thetaLength);
const Ringmaterial2 = new THREE.MeshBasicMaterial( { color:0xFAE105, side: THREE.DoubleSide } );
const Ring1 = new THREE.Mesh( Ringgeometry2, Ringmaterial2 );

let groupRing=new THREE.Group();
groupRing.add(mesh);
groupRing.add(Ring);
groupRing.add(Ring1);
groupRing.scale.set(0.5,0.5,0.5);
groupRing.translateX(an1);
return scene.add(groupRing);
}

 anneaux(8);
 anneaux(-8);



 // rectangle
 let geometry1 = new THREE.BoxGeometry(2,0.3,0.5);
 let material = new THREE.MeshBasicMaterial({color:0x0CECFE});
 const cube = new THREE.Mesh(geometry1,material);
 //scene.add(cube);


// cylindre
 let cyl=new THREE.CylinderGeometry(0.1,0.1,3);
 let matCyl= new THREE.MeshPhongMaterial({color : 0xDFFA05});
 let cylinder = new THREE.Mesh(cyl,matCyl);
 cyl.rotateX(Math.PI*0.5);
 cylinder.position.z=1.7;
 //let surfCSG=new ThreeBSP(matCyl);
 //scene.add(cylinder);

 //cone

let coneGeo1 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial1 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
let cone1 = new THREE.Mesh(coneGeo1,coneMaterial1);
coneGeo1.rotateX(Math.PI*0.5);
cone1.position.z=-0.5;
//scene.add(cone1);

let coneGeo2 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial2 = new THREE.MeshBasicMaterial({color: 0xFF5733});
let cone2 = new THREE.Mesh(coneGeo2,coneMaterial2);
coneGeo2.rotateX(Math.PI*0.5);
cone2.position.z=-0.5;
cone2.position.x=0.2;
//scene.add(cone2);


let coneGeo3 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial3 = new THREE.MeshBasicMaterial({color: 0xFFFF33});
let cone3 = new THREE.Mesh(coneGeo3,coneMaterial3);
coneGeo3.rotateX(Math.PI*0.5);
cone3.position.z=-0.5;
cone3.position.x=0.3;
//scene.add(cone3);

let coneGeo4 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial4 = new THREE.MeshBasicMaterial({color: 0xBD5CF3});
let cone4 = new THREE.Mesh(coneGeo4,coneMaterial4);
coneGeo4.rotateX(Math.PI*0.5);
cone4.position.z=-0.5;
cone4.position.x=0.4;
//scene.add(cone4);


let coneGeo5 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial5 = new THREE.MeshBasicMaterial({color: 0x6B725F});
let cone5 = new THREE.Mesh(coneGeo5,coneMaterial5);
coneGeo5.rotateX(Math.PI*0.5);
cone5.position.z=-0.5;
cone5.position.x=0.5;
//scene.add(cone5);


let coneGeo6 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial6 = new THREE.MeshBasicMaterial({color: 0xFFFF33});
let cone6 = new THREE.Mesh(coneGeo6,coneMaterial6);
coneGeo6.rotateX(Math.PI*0.5);
cone6.position.z=-0.5;
cone6.position.x=0.6;
//scene.add(cone6);

let coneGeo7 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial7 = new THREE.MeshBasicMaterial({color: 0xFF5733});
let cone7 = new THREE.Mesh(coneGeo7,coneMaterial7);
coneGeo7.rotateX(Math.PI*0.5);
cone7.position.z=-0.5; 
cone7.position.x=0.7;
//scene.add(cone7);

let coneGeo8 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial8 = new THREE.MeshBasicMaterial({color: 0x33FFE3});
let cone8 = new THREE.Mesh(coneGeo8,coneMaterial8);
coneGeo8.rotateX(Math.PI*0.5);
cone8.position.z=-0.5;
cone8.position.x=0.8;
//scene.add(cone8);


let coneGeo9 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial9 = new THREE.MeshBasicMaterial({color: 0x0F03C6});
let cone9 = new THREE.Mesh(coneGeo9,coneMaterial9);
coneGeo9.rotateX(Math.PI*0.5);
cone9.position.z=-0.5;
cone9.position.x=-0.2;
//scene.add(cone9);


let coneGeo10 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial10 = new THREE.MeshBasicMaterial({color: 0xFFFF33});
let cone10 = new THREE.Mesh(coneGeo10,coneMaterial10);
coneGeo10.rotateX(Math.PI*0.5);
cone10.position.z=-0.5;
cone10.position.x=-0.3;
//scene.add(cone10);


let coneGeo11 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial11 = new THREE.MeshBasicMaterial({color: 0x33FFFE3});
let cone11 = new THREE.Mesh(coneGeo11,coneMaterial11);
coneGeo11.rotateX(Math.PI*0.5);
cone11.position.z=-0.5;
cone11.position.x=-0.4;
//scene.add(cone11);


let coneGeo12 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial12 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
let cone12 = new THREE.Mesh(coneGeo12,coneMaterial12);
coneGeo12.rotateX(Math.PI*0.5);
cone12.position.z=-0.5;
cone12.position.x=-0.5;
//scene.add(cone12);


let coneGeo13 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial13 = new THREE.MeshBasicMaterial({color: 0x99A000});
let cone13 = new THREE.Mesh(coneGeo13,coneMaterial13);
coneGeo13.rotateX(Math.PI*0.5);
cone13.position.z=-0.5;
cone9.position.x=-0.6;
//scene.add(cone13);


let coneGeo14 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial14 = new THREE.MeshBasicMaterial({color: 0xE4AF21});
let cone14 = new THREE.Mesh(coneGeo14,coneMaterial14);
coneGeo14.rotateX(Math.PI*0.5);
cone14.position.z=-0.5;
cone14.position.x=-0.7;
//scene.add(cone14);


let coneGeo15 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial15 = new THREE.MeshBasicMaterial({color: 0xFF5733});
let cone15 = new THREE.Mesh(coneGeo15,coneMaterial15);
coneGeo15.rotateX(Math.PI*0.5);
cone15.position.z=-0.5;
cone15.position.x=-0.8;
//scene.add(cone15);

let coneGeo16 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial16 = new THREE.MeshBasicMaterial({color: 0x00A07A});
let cone16 = new THREE.Mesh(coneGeo16,coneMaterial16);
coneGeo16.rotateX(Math.PI*0.5);
cone15.position.z=-0.5;
cone15.position.x=-0.10;
//scene.add(cone16);


let balaie=new THREE.Group();



balaie.add(cube);
balaie.add(cylinder);
balaie.add(cone1);
balaie.add(cone2);
balaie.add(cone3);
balaie.add(cone4);
balaie.add(cone5);
balaie.add(cone6);
balaie.add(cone7);
balaie.add(cone8);
balaie.add(cone9);
balaie.add(cone10);
balaie.add(cone11);
balaie.add(cone12);
balaie.add(cone13);
balaie.add(cone14);
balaie.add(cone15);
balaie.add(cone16);

balaie.scale.set(0.5,0.5,0.5);
//balaie.translateX(6);
balaie.rotateZ(Math.PI/2)
//scene.add(balaie);



function latheBez3(nbePtCbe,nbePtRot,P0,P1,P2,P3,coul,opacite,bolTranspa){
  //let geometry = new THREE.Geometry();
  let p0= new THREE.Vector2(P0.x,P0.y);
  let p1= new THREE.Vector2(P1.x,P1.y);
  let p2= new THREE.Vector2(P2.x,P2.y);
  let p3= new THREE.Vector2(P3.x,P3.y);
  let Cbe3 = new THREE.CubicBezierCurve(p0,p1,p2,p3);
  let points = Cbe3.getPoints(nbePtCbe);
  let latheGeometry = new THREE.LatheGeometry(points,nbePtRot,0,2*Math.PI);
  let lathe = surfPhong(latheGeometry,coul,opacite,bolTranspa,"#223322");
  return lathe;
 }// fin latheBez3
 
 
 
 //la fonction de création pierre
 
 function Pierre(coul){
 let P6 = new THREE.Vector3(0.05,0.30,0);
 let P5 = new THREE.Vector3(0.15,0.27,0);
 let P4 = new THREE.Vector3(0.4,0.25,0);
 
 let P0 = new THREE.Vector3(0.4,0.20,0);
 let P1 = new THREE.Vector3(0.5,0.15,0);
 let P2 = new THREE.Vector3(0.6,0,0);
 let P3 = new THREE.Vector3(0,0,0);
 let lathePeri = latheBez3(10,50,P0, P1,P2, P3,0x000000,0,false);
  lathePeri.rotateX(Math.PI/2);
  //lathePeri.translateZ(3);
  //scene.add(lathePeri);
 
  let latheeri = latheBez3(10,50,P6, P5,P4, P0,coul,0,false);
  latheeri.rotateX(Math.PI/2);
  //lathePeri.translateZ(3);
  //scene.add(latheeri);
 
 
 let rp=0.05;
 //modelisation cylindre
 let O16 = new THREE.Vector3(0.10,0.40,0);
 let O15 = new THREE.Vector3(0.30,0.40,0);
 
 let cylindreGeometryC6 = new THREE.CylinderGeometry(rp, rp,
                   O16.x-O15.x, NbePtsCercleCylindre,NbePtsGeneratriceCylindre , creux,
                   0, 2*Math.PI);
  let cylindreC6 = surfPhong(cylindreGeometryC6,"#009999",1,true,"#FFFF00");
  cylindreC6.translateX((O16.x+O15.x)/2);
  cylindreC6.translateZ(O16.y);
  cylindreC6.rotateZ(Math.PI/2);
  //scene.add(cylindreC6); 
 
 
 function TorePeriscope(){
  let CentreTore=new THREE.Vector3(O16.x,P6.y,0);
  let rayMajeurTore = CentreTore.distanceTo(O16);
  let rayMineurTore = rp;
  let toreGeometry1 = new  THREE.TorusGeometry(rayMajeurTore, rayMineurTore, nbeParallelTore, nbeMeridienTore, Math.PI * 2);
  let ToreP = surfPhong(toreGeometry1,"#999900",1,true,"#FFFF00");
  ToreP.translateX(O16.x);
  ToreP.translateZ(P6.y);
  ToreP.rotateX(Math.PI/2);
  //CSG du tore
  var ToreP_CSG = new ThreeBSP(ToreP);
  let planXGeometry = new THREE.PlaneGeometry(largPlanCSG ,hautPlanCSG ,nbSegmentlargPlanCSG ,nbSegmenthautPlanCSG );
  let planX = surfPhong(planXGeometry,"#FF5555",1,true,"#AAFFFF");
  planX.translateZ(P6.y);
  let planX_CSG = new ThreeBSP(planX); 
  let ToreCSGX = ToreP_CSG.subtract(planX_CSG);
  let planZGeometry = new THREE.PlaneGeometry(largPlanCSG ,hautPlanCSG ,nbSegmentlargPlanCSG ,nbSegmenthautPlanCSG );
  let planZ = surfPhong(planZGeometry,"#FF55FF",1,true,"#AAFFFF");
  planZ.translateX(O16.x);
  planZ.rotateY(Math.PI/2);
  let planZ_CSG = new ThreeBSP(planZ); 
  let ToreCSGX2 = ToreCSGX.intersect(planZ_CSG);
  ToreCSGXZ = ToreCSGX2.toMesh();
  ToreCSGXZ.geometry.computeFaceNormals();
  ToreCSGXZ.geometry.computeVertexNormals();
  ToreCSGXZ.castShadow = true;
  ToreCSGXZ.receiveShadow = true;
  ToreCSGXZ.material = MateriauPhong("#009999",1,true,"#FFFF00");
  return (ToreCSGXZ);
 }// fin TorePeriscope
 
 let torePeri = TorePeriscope();
 //scene.add(torePeri);
 
 let pierre=new THREE.Group();
 pierre.add(cylindreC6);
 pierre.add(latheeri);
 pierre.add(lathePeri);
 pierre.add(torePeri);
 return pierre;}
 
 
 function score(pos1,pos2){
  let centre =new THREE.Vector3(8,0,0);
let i=0;
  let disA=centre.distanceTo(pos1);
  let disB=centre.distanceTo(pos2);
  if (disA<disB)
     i=1;
return i;
 };
 
 
 
 
 let compteur=0;
 let choix=0;
 let nombreDeTour=0;
 let equipe=1;
 
 
  let Dpart = new THREE.Vector3(-8,0,0);
 let M1 = new THREE.Vector3(1,2,0);
  let M0 = new THREE.Vector3(1,1,0);
  let M3 = new THREE.Vector3(2,2,0);
 
 
 
  let ptM1 = tracePt(scene, M1, "#00FF00",0.05,false);
  
  let ptM0 = tracePt(scene, M0, "#00FF00",0.05,false);
  
  
  let Corb= TraceBezierCubique(Dpart, ptM0.position, M3,ptM1.position,40,"#00FF00",0.01);
  
  
  let n=0;
  var tab=new Array(10);
  var j=0;
  for(var i=0;i<10;i+=2){
    tab[i]=Pierre("#F90000");
    j=i+1;
    tab[i+1]=Pierre("#002CE6");
 }
  
  let score1 =0;
  let score2 =0;



 
 //********************************************************
 //
 //  D E B U T     M E N U     G U I
 //
 //********************************************************
 var gui = new dat.GUI();//interface graphique utilisateur
  // ajout du menu dans le GUI
 let menuGUI = new function () {
   this.cameraxPos = camera.position.x;
   this.camerayPos = camera.position.y;
   this.camerazPos = camera.position.z;
   this.cameraZoom = 1.6;
   //pb avec camera lockAt
   this.cameraxDir = 1;//camera.getWorldDirection().x;
   this.camerayDir = 1;//camera.getWorldDirection().y;
   this.camerazDir = 0;//camera.getWorldDirection().z;
   this.PosX=1;
   this.PosY=1;
   this.courbe=1;
    if (Corb.Line)
    this.Corb = 'courbe';
    else this.Corb = 'rectiligne';
    this.lancer=function(){
      if(nombreDeTour<10){
      if (equipe==1){
        reAffichage();
       equipe=2 ;
       nombreDeTour=nombreDeTour+1
       
      }else{
        reAffichage();
        equipe=1;
        nombreDeTour=nombreDeTour+1;
    
      };
      }else {nombreDeTour=0;
        
        
      };
   
    };
    
   //pour actualiser dans la scene   
   this.actualisation = function () {
    posCamera();
    reAffichage();
   }; // fin this.actualisation
 }; // fin de la fonction menuGUI
 // ajout de la camera dans le menu
 ajoutCameraGui(gui,menuGUI,camera)
 //ajout du menu pour actualiser l'affichage 

//création du choix de la tajectoire
let guiChoix = gui.addFolder("trajectoire");
guiChoix.add(menuGUI,'Corb',['rectiligne','courbe']).onChange(function(e){
if(e=='rectiligne')
{
if(Corb) scene.remove(Corb);
choix=1;
}else
{
scene.add(Corb);
choix=2;
}

});



//création de la courbure
let guiCourbe =gui.addFolder("courbure");
guiCourbe.add(menuGUI,"courbe",-4,4).onChange(function(){
  menuGUI.courbe = Math.floor(menuGUI.courbe );
 proprieteObjet = menuGUI.courbe;
if (Corb) scene.remove(Corb);
 ptM0.position.set(ptM0.position.x,proprieteObjet,ptM0.position.z)

Corb= TraceBezierCubique(Dpart, ptM0.position, M3,ptM1.position,40,"#00FF00",0.01);

scene.add(Corb);
})

//création du point d'arrivé
let guiCoefG1 = gui.addFolder("Point arrivé");

guiCoefG1.add(menuGUI,"PosX",0,9).onChange(function () {
 menuGUI.PosX = Math.floor(menuGUI.PosX );
 proprieteObjet = menuGUI.PosX;
 if (Corb) scene.remove(Corb);

 ptM1.position.set(proprieteObjet,ptM1.position.y,ptM1.position.z);
 //scene.add(ptM1);
Corb= TraceBezierCubique(Dpart, ptM0.position, M3,ptM1.position,40,"#00FF00",0.01);   scene.add(Corb);
});
guiCoefG1.add(menuGUI,"PosY",-3,3).onChange(function () {
 menuGUI.PosY = Math.floor(menuGUI.PosY );
 proprieteObjet = menuGUI.PosY;
 if (Corb) scene.remove(Corb);
 ptM1.position.set(ptM1.position.x,proprieteObjet,ptM1.position.z);
 //scene.add(ptM1);
Corb= TraceBezierCubique(Dpart, ptM0.position, M3,ptM1.position,40,"#00FF00",0.01);    scene.add(Corb);
});

gui.add(menuGUI,"lancer");

menuGUI.lancer;

 gui.add(menuGUI, "actualisation");
 menuGUI.actualisation();
 //********************************************************
 //
 //  F I N     M E N U     G U I
 //
 //********************************************************




 renduAnim();
 
  // definition des fonctions idoines
 function posCamera(){
  camera.position.set(menuGUI.cameraxPos*testZero(menuGUI.cameraZoom),menuGUI.camerayPos*testZero(menuGUI.cameraZoom),menuGUI.camerazPos*testZero(menuGUI.cameraZoom));
  camera.lookAt(menuGUI.cameraxDir,menuGUI.camerayDir,menuGUI.camerazDir);
  actuaPosCameraHTML();
 }

 
 //affichage dans la page HTML
 function actuaPosCameraHTML(){
  document.forms["controle"].PosX.value=testZero(menuGUI.cameraxPos);
  document.forms["controle"].PosY.value=testZero(menuGUI.camerayPos);
  document.forms["controle"].PosZ.value=testZero(menuGUI.camerazPos); 
  document.forms["controle"].DirX.value=testZero(menuGUI.cameraxDir);
  document.forms["controle"].DirY.value=testZero(menuGUI.camerayDir);
  document.forms["controle"].DirZ.value=testZero(menuGUI.camerazDir);
 } // fin fonction posCamera
  // ajoute le rendu dans l'element HTML
 document.getElementById("webgl").appendChild(rendu.domElement);
   
  // affichage de la scene
 rendu.render(scene, camera);
  
 
 function reAffichage() {
  setTimeout(function () {
   
   // mouvement rectiligne
    let boule=tab[nombreDeTour] ;
   if(equipe==2){boule=tab[nombreDeTour];};
   if(choix==1){
    //if (boule) scene.remove(boule);
     if(compteur<1){
      if (boule) scene.remove(boule);
    compteur=compteur+0.05;
 
   let droite= new THREE.LineCurve3(Dpart,ptM1.position);
    const position= droite.getPointAt(compteur);
   boule.position.x=position.x;
   boule.position.y=position.y;
 
    scene.add(boule);
    reAffichage();}
    else compteur=0;
 
  }
    //mouvement en courbe
    if(choix==2){
    
    if (balaie) scene.remove(balaie);

     if(compteur<0.9){

      //if (boule) scene.remove(boule);
    compteur=compteur+0.05;
    n=n+1;
 
 const position=Corb.curve.getPointAt(compteur);
 boule.position.x=position.x;
 boule.position.y=position.y;
 balaie.position.x=position.x+0.5;
 balaie.position.y=position.y+Math.sin(n*Math.PI/2);
if (boule) scene.remove(boule);
    scene.add(balaie);
    scene.add(boule);
    reAffichage();}
    else compteur=0;

    
         
  }

  if ( nombreDeTour%2!=0)
    { if(score(tab[nombreDeTour-1],tab[nombreDeTour])==0){
      score1=score1+1;
      document.getElementById("scj1e1").innerHTML=score1;
      document.getElementById("scj1e1").innerHTML=score1;

     }
     else{
      score2=score2+1;
      document.getElementById("scj2e2").innerHTML=score1;
      document.getElementById("scj2e2").innerHTML=score1;
     }
    }

  }, 200);// fin setTimeout(function ()
    // render avec requestAnimationFrame
  rendu.render(scene, camera);
 }// fin fonction reAffichage()


 
 
  function renduAnim() {
    stats.update();
    // render avec requestAnimationFrame
    requestAnimationFrame(renduAnim);
// ajoute le rendu dans l'element HTML
    rendu.render(scene, camera);
  }
 
} // fin fonction init()