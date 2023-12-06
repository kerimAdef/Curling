const borneVue=32;//amplitude de deplacement de la camera

 
function init(){
 var stats = initStats();
    // creation de rendu et de la taille
 let rendu = new THREE.WebGLRenderer({ antialias: true });
 rendu.shadowMap.enabled = true;
 let scene = new THREE.Scene();   
 let result;
 let camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 100);
 rendu.shadowMap.enabled = true;
 rendu.setClearColor(new THREE.Color(0x000000));
 rendu.setSize(window.innerWidth*.9, window.innerHeight*.9);
 cameraLumiere(scene,camera);
 lumiere(scene);
 //repere(scene);
 //plans contenant deux axes du repere
 //planRepere(scene);

 

 //faire le balaie 

 // rectangle
 let geometry = new THREE.BoxGeometry(2,0.3,0.5);
 let material = new THREE.MeshBasicMaterial({color:0x0CECFE});
 const cube = new THREE.Mesh(geometry,material);
 scene.add(cube);


// cylindre
 let cyl=new THREE.CylinderGeometry(0.1,0.1,3);
 let matCyl= new THREE.MeshBasicMaterial({color :0xFFFFFF});
 let cylinder = new THREE.Mesh(cyl,matCyl);
 cyl.rotateX(Math.PI*0.5);
 cylinder.position.z=1.7;
 //let surfCSG=new ThreeBSP(matCyl);
 scene.add(cylinder);

 //cone

let coneGeo1 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial1 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
let cone1 = new THREE.Mesh(coneGeo1,coneMaterial1);
coneGeo1.rotateX(Math.PI*0.5);
cone1.position.z=-0.5;
scene.add(cone1);

let coneGeo2 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial2 = new THREE.MeshBasicMaterial({color: 0xFF5733});
let cone2 = new THREE.Mesh(coneGeo2,coneMaterial2);
coneGeo2.rotateX(Math.PI*0.5);
cone2.position.z=-0.5;
cone2.position.x=0.2;
scene.add(cone2);


let coneGeo3 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial3 = new THREE.MeshBasicMaterial({color: 0xFFFF33});
let cone3 = new THREE.Mesh(coneGeo3,coneMaterial3);
coneGeo3.rotateX(Math.PI*0.5);
cone3.position.z=-0.5;
cone3.position.x=0.3;
scene.add(cone3);

let coneGeo4 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial4 = new THREE.MeshBasicMaterial({color: 0xBD5CF3});
let cone4 = new THREE.Mesh(coneGeo4,coneMaterial4);
coneGeo4.rotateX(Math.PI*0.5);
cone4.position.z=-0.5;
cone4.position.x=0.4;
scene.add(cone4);


let coneGeo5 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial5 = new THREE.MeshBasicMaterial({color: 0x6B725F});
let cone5 = new THREE.Mesh(coneGeo5,coneMaterial5);
coneGeo5.rotateX(Math.PI*0.5);
cone5.position.z=-0.5;
cone5.position.x=0.5;
scene.add(cone5);


let coneGeo6 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial6 = new THREE.MeshBasicMaterial({color: 0xFFFF33});
let cone6 = new THREE.Mesh(coneGeo6,coneMaterial6);
coneGeo6.rotateX(Math.PI*0.5);
cone6.position.z=-0.5;
cone6.position.x=0.6;
scene.add(cone6);

let coneGeo7 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial7 = new THREE.MeshBasicMaterial({color: 0xFF5733});
let cone7 = new THREE.Mesh(coneGeo7,coneMaterial7);
coneGeo7.rotateX(Math.PI*0.5);
cone7.position.z=-0.5; 
cone7.position.x=0.7;
scene.add(cone7);

let coneGeo8 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial8 = new THREE.MeshBasicMaterial({color: 0x33FFE3});
let cone8 = new THREE.Mesh(coneGeo8,coneMaterial8);
coneGeo8.rotateX(Math.PI*0.5);
cone8.position.z=-0.5;
cone8.position.x=0.8;
scene.add(cone8);


let coneGeo9 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial9 = new THREE.MeshBasicMaterial({color: 0x0F03C6});
let cone9 = new THREE.Mesh(coneGeo9,coneMaterial9);
coneGeo9.rotateX(Math.PI*0.5);
cone9.position.z=-0.5;
cone9.position.x=-0.2;
scene.add(cone9);


let coneGeo10 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial10 = new THREE.MeshBasicMaterial({color: 0xFFFF33});
let cone10 = new THREE.Mesh(coneGeo10,coneMaterial10);
coneGeo10.rotateX(Math.PI*0.5);
cone10.position.z=-0.5;
cone10.position.x=-0.3;
scene.add(cone10);


let coneGeo11 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial11 = new THREE.MeshBasicMaterial({color: 0x33FFFE3});
let cone11 = new THREE.Mesh(coneGeo11,coneMaterial11);
coneGeo11.rotateX(Math.PI*0.5);
cone11.position.z=-0.5;
cone11.position.x=-0.4;
scene.add(cone11);


let coneGeo12 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial12 = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
let cone12 = new THREE.Mesh(coneGeo12,coneMaterial12);
coneGeo12.rotateX(Math.PI*0.5);
cone12.position.z=-0.5;
cone12.position.x=-0.5;
scene.add(cone12);


let coneGeo13 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial13 = new THREE.MeshBasicMaterial({color: 0x99A000});
let cone13 = new THREE.Mesh(coneGeo13,coneMaterial13);
coneGeo13.rotateX(Math.PI*0.5);
cone13.position.z=-0.5;
cone9.position.x=-0.6;
scene.add(cone13);


let coneGeo14 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial14 = new THREE.MeshBasicMaterial({color: 0xE4AF21});
let cone14 = new THREE.Mesh(coneGeo14,coneMaterial14);
coneGeo14.rotateX(Math.PI*0.5);
cone14.position.z=-0.5;
cone14.position.x=-0.7;
scene.add(cone14);


let coneGeo15 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial15 = new THREE.MeshBasicMaterial({color: 0xFF5733});
let cone15 = new THREE.Mesh(coneGeo15,coneMaterial15);
coneGeo15.rotateX(Math.PI*0.5);
cone15.position.z=-0.5;
cone15.position.x=-0.8;
scene.add(cone15);

let coneGeo16 = new THREE.ConeGeometry(0.1,-0.5,0.7);
let coneMaterial16 = new THREE.MeshBasicMaterial({color: 0x00A07A});
let cone16 = new THREE.Mesh(coneGeo16,coneMaterial16);
coneGeo16.rotateX(Math.PI*0.5);
cone15.position.z=-0.5;
cone15.position.x=-0.10;
scene.add(cone16);


let group1=new THREE.Group();



group1.add(cube);
group1.add(cylinder);
group1.add(cone1);
group1.add(cone2);
group1.add(cone3);
group1.add(cone4);
group1.add(cone5);
group1.add(cone6);
group1.add(cone7);
group1.add(cone8);
group1.add(cone9);
group1.add(cone10);
group1.add(cone11);
group1.add(cone12);
group1.add(cone13);
group1.add(cone14);
group1.add(cone15);
group1.add(cone16);

//group1.scale.set(0.5,0.5,0.5);
scene.add(group1);









 
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
   this.cameraZoom = 2;
   //pb avec camera lockAt
   this.cameraxDir = 0;//camera.getWorldDirection().x;
   this.camerayDir = 0;//camera.getWorldDirection().y;
   this.camerazDir = 0;//camera.getWorldDirection().z;

    
   //pour actualiser dans la scene   
   this.actualisation = function () {
    posCamera();
    reAffichage();
   }; // fin this.actualisation
 }; // fin de la fonction menuGUI
 // ajout de la camera dans le menu
 ajoutCameraGui(gui,menuGUI,camera)
 //ajout du menu pour actualiser l'affichage 
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
   posCamera();//sphereGeom1.parameters.radius = 2;//
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