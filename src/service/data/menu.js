import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default async function getDatamenuAll() {
  try {
    const menuCollectionRef = collection(db, "menu");
    const menuSnapshot = await getDocs(menuCollectionRef);

    const menuData = [];
    menuSnapshot.forEach((doc) => {
      const data = doc.data();
      menuData.push({
        idMenu: doc.id,
        title: data.title,
        img: data.img,
        product: data.product,
      });
    });

    return menuData;
  } catch (error) {
    console.error("Error fetching all menu data:", error);
    throw error;
  }
}

export async function getDatamenu(idmenu) {
  try {
    const menuDocRef = doc(db, "menu", idmenu);
    const menuSnapshot = await getDoc(menuDocRef);

    if (menuSnapshot.exists()) {
      return menuSnapshot.data();
    } else {
      throw "Data not found";
    }
  } catch (error) {
    console.error("Error fetching menu data:", error);
    throw error;
  }
}

export async function tambahmenu(datamenu) {
  try {
    const { img, ...otherData } = datamenu;

    const storageRef = ref(storage, `menu/${img.name}`);

    const snapshot = await uploadBytes(storageRef, img);

    const downloadURL = await getDownloadURL(snapshot.ref);

    const datamenuWithImgURL = { ...otherData, img: downloadURL };

    const docRef = await addDoc(collection(db, "menu"), datamenuWithImgURL);

    return docRef.id;
  } catch (error) {
    console.error("Error menambahkan menu:", error);
    throw error;
  }
}

export async function ubahmenu(idmenu, datamenu) {
    try {
      const { img, ...otherData } = datamenu;
  
      if (img && img.name) {
        const storageRef = ref(storage, `menu/${img.name}`);
        const snapshot = await uploadBytes(storageRef, img);
        const downloadURL = await getDownloadURL(snapshot.ref);
        otherData.img = downloadURL;
      }
  
      const menuDocRef = doc(db, "menu", idmenu);
      await updateDoc(menuDocRef, otherData);
  
      console.log("menu berhasil diubah");
    } catch (error) {
      console.error("Error mengubah menu:", error);
      throw error;
    }
  }

export async function hapusmenu(idmenu) {
  try {
    const menuDocRef = doc(db, "menu", idmenu);
    await deleteDoc(menuDocRef);

    console.log("menu berhasil dihapus");
  } catch (error) {
    console.error("Error menghapus menu:", error);
    throw error;
  }
}
