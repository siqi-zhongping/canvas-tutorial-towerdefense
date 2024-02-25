import towerDefenseMapUrl from '../image/towerDefenseMap.png'
import orcUrl from '../image/orc.png'
import towerUrl from '../image/tower.png'
import projectileUrl from '../image/projectile.png'
import wayPoints from './waypoints.js'
import placementtileData from './placementtile.js'

const canvas = document.querySelector('canvas')
canvas.width = 1280
canvas.height = 768
const c = canvas.getContext('2d')

var towerDefenseMap = new Image()
towerDefenseMap.src = towerDefenseMapUrl

var orcImage = new Image()
orcImage.src = orcUrl

var towerImage = new Image()
towerImage.src = towerUrl

var projectileImage = new Image()
projectileImage.src = projectileUrl


const placementtileData2D = []
for(var i=0;i<placementtileData.length;i=i+20){
  placementtileData2D.push(placementtileData.slice(i,i+20));
}
towerDefenseMap.onload = function() {
  orcImage.onload = function() {
    towerImage.onload = function() {
      projectileImage.onload = function() {
        animate()
      }
    }
  }
}

var passedNum = 0
class placementtile{
  constructor(position={x:0,y:0}){
    this.position = position
    this.size = 64
    this.color = "rgba(255,255,255,0.15)"
    this.isOccupied = false
  }
  draw() {
    c.fillStyle=this.color
    c.fillRect(this.position.x,this.position.y,this.size,this.size)
  }

  update(mouse) {

    if(mouse.x>this.position.x && mouse.x<this.position.x+this.size
      && mouse.y>this.position.y && mouse.y<this.position.y+this.size){
        this.color = "white"
    }else{
      this.color = "rgba(255,255,255,0.15)"
    }
    this.draw()
  }
}


class enemy{
  constructor(position={x:0,y:0}){
    this.position = position
    this.wayPointsIndex = 0
    this.width = 100
    this.height = 100
    this.radis = 50
    this.heath = 100
    this.imageIndex = 0
    this.frame = 0
  }
  draw() {
    /*
    c.beginPath()
    c.arc(this.position.x,this.position.y,this.radis,0,Math.PI*2)
    c.fillStyle = "red"
    c.fill()
    c.closePath()
    */
   if(this.frame%10==0){
    this.imageIndex++;
   }
   this.frame++

    c.drawImage(orcImage, this.imageIndex*orcImage.width/7,0,orcImage.width/7,79,
    this.position.x, this.position.y, orcImage.width/7,79)

    
    if(this.imageIndex == 7){
      this.imageIndex = 0
    }

    c.fillStyle = "green"
    c.fillRect(this.position.x-this.radis,this.position.y-15-this.radis-15,this.width,20)
    c.fillStyle = "red"
    c.fillRect(this.position.x-this.radis+this.width,this.position.y-15-this.radis-15,-this.width*(1-this.heath/100),20)
  }
  update() {
    this.draw();
    const ydistance = wayPoints[this.wayPointsIndex].y-this.position.y;
    const xdistance = wayPoints[this.wayPointsIndex].x-this.position.x; 
    var redian = Math.atan2(ydistance,xdistance);
    this.position.x =  this.position.x+Math.cos(redian);
    this.position.y =  this.position.y+Math.sin(redian);
    if(Math.round(this.position.x) == Math.round(wayPoints[this.wayPointsIndex].x) &&  
    Math.round(this.position.y) == Math.round(wayPoints[this.wayPointsIndex].y)&&this.wayPointsIndex<wayPoints.length-1){
      this.wayPointsIndex++;
    }
  }
}
const enemyArr = []

var enemyCountNum = 5
function enemyIn(enemyCountNum){
  for(var i=1;i<enemyCountNum;i++){
    enemyArr.push(new enemy({x:-150*i,y:489}));
  } 
}
enemyIn(enemyCountNum)

const placementtileArr = []
placementtileData2D.forEach((column,y)=> {
  column.forEach((row,x)=> {
    if(row == 14){
      placementtileArr.push(new placementtile({x:64*x,y:64*y}))
    }
  });
});
var animationId
function animate(){
  animationId = requestAnimationFrame(animate)
  c.clearRect(0,0,canvas.width,canvas.height)
  c.drawImage(towerDefenseMap, 0, 0, canvas.width, canvas.height)
  for(var i=0;i<enemyArr.length;i++){
    enemyArr[i].update()

    if(enemyArr[i].position.x>canvas.width){
      enemyArr.splice(i,1)
      passedNum++
      i--;
    }
  }
  
  if(passedNum >= 10 ){
    cancelAnimationFrame(animationId);
    var ele = document.querySelector("#gameOver")
    ele.style.display = "flex";
  }
  
  if(enemyArr.length == 0 ){
    enemyCountNum = enemyCountNum+5
    enemyIn(enemyCountNum)
  }
  placementtileArr.forEach(placement => {
    placement.update(mouse)
  })
  buildingArr.forEach(building => {
    building.update()

    if(building.enemys.length>0){

      //碰撞检测
      for(var i = 0;i<building.projectTiles.length;i++){
        const projecttile = building.projectTiles[i]
        var xdistance = projecttile.position.x  - projecttile.enemy.position.x;
        var ydistance = projecttile.position.y  - projecttile.enemy.position.y;

        var distance = Math.sqrt(xdistance*xdistance+ydistance*ydistance)
        if(distance <= projecttile.radis + projecttile.enemy.radis){
          building.projectTiles.splice(i,1)
          i--
          console.log(enemyArr)
          projecttile.enemy.heath = projecttile.enemy.heath-20
          if(projecttile.enemy.heath<=0){
            const enemyIndex = enemyArr.findIndex(enemy=>{
              return projecttile.enemy === enemy
            })
            if(enemyIndex>-1){
              debugger
              enemyArr.splice(enemyIndex,1)
            }
          }
          console.log(enemyArr)
        }else{
          projecttile.update()
        }
      }

    }
  })
}

const mouse = {
  x:undefined,
  y:undefined
}

canvas.addEventListener('click',(event)=>{
  if(activeTile && !activeTile.isOccupied){
    buildingArr.push(new Building({x:activeTile.position.x,y:activeTile.position.y}))
    activeTile.isOccupied = true
  }
})

const buildingArr = []
var activeTile
window.addEventListener('mousemove',(event)=>{
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  activeTile = null
  for(var i=0;i<placementtileArr.length;i++){
    if(mouse.x>placementtileArr[i].position.x && mouse.x<placementtileArr[i].position.x+placementtileArr[i].size
      && mouse.y>placementtileArr[i].position.y && mouse.y<placementtileArr[i].position.y+placementtileArr[i].size){
        activeTile = placementtileArr[i]
        break
    }
  }
})
class Building {
  constructor(position={x:0,y:0}){
    this.position = position
    this.center = {
      x:this.position.x+64,
      y:this.position.y+32
    }
    this.projectTiles = [
      
    ]
    this.radis = 200
    //进入攻击范围的敌人
    this.enemys = []
    this.index = 500
    this.imageIndex = 0
  }
  draw(){
    /*
    c.fillStyle='blue'
    c.fillRect(this.position.x,this.position.y,128,64)
    c.beginPath()
    c.arc(this.center.x,this.center.y,this.radis,0,Math.PI*2)
    c.fillStyle = "rgba(0,0,255,0.1)"
    c.fill()
    c.closePath()
    */
    c.drawImage(towerImage, this.imageIndex*towerImage.width/19,0,towerImage.width/19,144,
    this.position.x, this.position.y, towerImage.width/19,144)
    this.imageIndex++;
    if(this.imageIndex == 19){
      this.imageIndex = 0
    }
  }
  update(){
    this.draw()
    //计算进入攻击范围的敌人
    this.enemys = []
    enemyArr.forEach(enemy =>{
      var xdistance = this.center.x  - enemy.position.x;
      var ydistance = this.center.y  - enemy.position.y;
      var distance = Math.sqrt(xdistance*xdistance+ydistance*ydistance)
      if(distance<=this.radis+enemy.radis){
        this.enemys.push(enemy)
      }
      if(this.enemys.length>0){
        //this.projectTiles = []
       if(this.index % 500 == 0){
          this.projectTiles.push(new projectTile({x:this.center.x,y:this.center.y},this.enemys[0]))
          this.index = 500
        }
      }
      this.index++
    })
    console.log(this.enemys)   
  }
}
class projectTile{
  constructor(position={x:0,y:0},enemy){
    this.position = position
    this.velocity = {
      x:0,
      y:0
    }
    this.enemy = enemy
    this.radis = 10
    this.index = 0
  }
  draw(){
    /*
    c.beginPath()
    c.arc(this.position.x,this.position.y,this.radis,0,Math.PI*2)
    c.fillStyle = "orange"
    c.fill()
    */
    c.drawImage(projectileImage, 
    this.position.x, this.position.y, projectileImage.width,projectileImage.height)
  }
  update(){
      this.draw()
      var radian = Math.atan2(this.enemy.position.y-this.position.y,this.enemy.position.x-this.position.x)
      this.velocity.x = Math.cos(radian)
      this.velocity.y = Math.sin(radian)
      this.position.x = this.position.x+this.velocity.x
      this.position.y = this.position.y+this.velocity.y
  }
}