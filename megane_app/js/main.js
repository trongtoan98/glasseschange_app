/**
 * ステップ　1: メガネのリストを画面に表示する。
 * _Glasses
 * _GlassesList
 * ステップ　2: メガネをかけてみる機能を作成する。
 * ステップ　3: メガネをかけてない状態とメガネをかけてる状態を比べる機能。
 */
let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
//import Glassesクラス　と　GlassesListクラス
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

let glassesList = new GlassesList();
//  elementbyID
const getELE = (id) => {
    return document.getElementById(id);

}


// メガネのリストを画面に表示する。
const showGlassesList = () => {
    let divGlassesList = getELE("vglassesList");
    dataGlasses.map((item, index) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg,
            item.brand, item.color, item.price, item.description);
        glassesList.addGlasses(gl);
    });
    // console.log(glassesList.glist);
    divGlassesList.innerHTML = glassesList.renderGlasses();
}
showGlassesList();
const tryOnGlasses = (event) => {
    let gID = event.target.getAttribute("data-id");
    let gObject = {};
    for (let value of glassesList.glist) {
        if (value.id == gID) {
            gObject = value;
        }
        // console.log(gObject);
    }
    showInfo(gObject);
};
// vì chuyền file main.js dạng module nên cần chuyển thành hàm windown để râ ngoài sử dụng
window.tryOnGlasses = tryOnGlasses;
const showInfo = (gObject) => {
    let divAvatar = getELE("avatar");
    let divInfo = getELE("glassesInfo");
    divAvatar.innerHTML = `
    <img id ="glasses" src ="${gObject.virtualImg}">
    `;
    let status = '';
    if (gObject.status) {
        status = "Stocking";
    } else {
        status = "Sold out";
    }
    divInfo.innerHTML = `
        <h5>${gObject.name}-${gObject.brand} (${gObject.color}) </h5>
        <p class = "card-text">
            <span class = "btn btn-danger btn-sm mr-2">$
            ${gObject.price}</span>
            <span class ="text-success">${status}</span>
        </p>
        <p class ="card-text">
            ${gObject.desc}
        </p>
    `;
    divInfo.style.display = "block";
};

/**
 * befor: メガネをかけない状態
 * after: メガネをかけてる状態
 */

const removeGlasses = (isDisplay) => {
    let glasses = getELE("glasses");
    if (glasses != null) {
        if (isDisplay) {
            glasses.style.display = "block";
        } else {
            glasses.style.display = "none";
        }
    }

}
window.removeGlasses = removeGlasses;