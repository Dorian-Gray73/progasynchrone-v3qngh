import {searchImagesP, getDataP, composeMozaicP, sendToServerP} from "./cbPromesse";
import {log} from "./cbAPI";

async function exo3(descr: string): Promise<void> {
}

const bt3 = document.querySelector('#bt3') as HTMLElement;
bt3.onclick = () => {
  log("avant l'appelle à exo3");
  exo3('chats');
  log("après l'appelle à exo3");
};