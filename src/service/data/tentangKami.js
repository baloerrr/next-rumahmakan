import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

// Mendapatkan semua data tentang kami
export default async function getDataTentangKamiAll() {
  try {
    const tentangKamiCollectionRef = collection(db, "tentangkami");
    const tentangKamiSnapshot = await getDocs(tentangKamiCollectionRef);

    const tentangKamiData = [];
    tentangKamiSnapshot.forEach((doc) => {
      const data = doc.data();
      tentangKamiData.push({
        idTentangKami: doc.id,
        title: data.title,
        visi: data.visi,
        misi: data.misi,
        banner: data.banner,
      });
    });

    return tentangKamiData;
  } catch (error) {
    console.error("Error fetching all tentang kami data:", error);
    throw error;
  }
}

// Mendapatkan data tentang kami berdasarkan ID
export async function getDataTentangKami(idTentangKami) {
  try {
    const tentangKamiDocRef = doc(db, "tentangkami", idTentangKami);
    const tentangKamiSnapshot = await getDoc(tentangKamiDocRef);

    if (tentangKamiSnapshot.exists()) {
      return tentangKamiSnapshot.data();
    } else {
      throw new Error("Data not found");
    }
  } catch (error) {
    console.error("Error fetching tentang kami data:", error);
    throw error;
  }
}

// Menambahkan data tentang kami baru
export async function tambahTentangKami(dataTentangKami) {
  try {
    const tentangKamiCollectionRef = collection(db, "tentangkami");
    const newTentangKamiRef = await addDoc(
      tentangKamiCollectionRef,
      dataTentangKami
    );

    return newTentangKamiRef.id;
  } catch (error) {
    console.error("Error menambahkan tentang kami:", error);
    throw error;
  }
}

export async function ubahTentangKami(idTentangKami, dataTentangKami) {
  try {
    const { img, ...otherData } = dataTentangKami;

    if (img && img.name) {
      const storageRef = ref(storage, `tentangkami/${img.name}`);
      const snapshot = await uploadBytes(storageRef, img);
      const downloadURL = await getDownloadURL(snapshot.ref);
      otherData.img = downloadURL;
    }

    const tentangKamiDocRef = doc(db, "tentangkami", idTentangKami);
    await updateDoc(tentangKamiDocRef, otherData);

    console.log("Tentang kami berhasil diubah");
  } catch (error) {
    console.error("Error mengubah tentang kami:", error);
    throw error;
  }
}

// export async function ubahmenu(idmenu, datamenu) {
//   try {
//     const { img, ...otherData } = datamenu;

//     if (img && img.name) {
//       const storageRef = ref(storage, `menu/${img.name}`);
//       const snapshot = await uploadBytes(storageRef, img);
//       const downloadURL = await getDownloadURL(snapshot.ref);
//       otherData.img = downloadURL;
//     }

//     const menuDocRef = doc(db, "menu", idmenu);
//     await updateDoc(menuDocRef, otherData);

//     console.log("menu berhasil diubah");
//   } catch (error) {
//     console.error("Error mengubah menu:", error);
//     throw error;
//   }
// }

// Menghapus data tentang kami berdasarkan ID
export async function hapusTentangKami(idTentangKami) {
  try {
    const tentangKamiDocRef = doc(db, "tentangkami", idTentangKami);
    await deleteDoc(tentangKamiDocRef);

    console.log("Tentang kami berhasil dihapus");
  } catch (error) {
    console.error("Error menghapus tentang kami:", error);
    throw error;
  }
}
