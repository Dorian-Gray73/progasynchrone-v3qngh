import {searchImagesP, getDataP, composeMozaicP, sendToServerP} from "./cbPromesse";
import {log} from "./cbAPI";

async function exo3(descr: string): Promise<void> {
  const urls = await searchImagesP(descr);
  const images = await Promise.all(urls.map(getDataP))
  const moz = await composeMozaicP(images);
  log( await sendToServerP(moz));
}

const bt3 = document.querySelector('#bt3') as HTMLElement;
bt3.onclick = () => {
  log("avant l'appelle à exo3");
  exo3('chats');
  log("après l'appelle à exo3");
};