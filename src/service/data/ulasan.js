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
  
  // Mendapatkan semua data ulasan
  export default async function getDataUlasanAll() {
    try {
      const ulasanCollectionRef = collection(db, "ulasan");
      const ulasanSnapshot = await getDocs(ulasanCollectionRef);
  
      const ulasanData = [];
      ulasanSnapshot.forEach((doc) => {
        ulasanData.push({ idUlasan: doc.id, ...doc.data() });
      });
  
      return ulasanData;
    } catch (error) {
      console.error("Error fetching all ulasan data:", error);
      throw error;
    }
  }
  
  // Mendapatkan data ulasan berdasarkan ID
  export async function getDataUlasan(idUlasan) {
    try {
      const ulasanDocRef = doc(db, "ulasan", idUlasan);
      const ulasanSnapshot = await getDoc(ulasanDocRef);
  
      if (ulasanSnapshot.exists()) {
        return ulasanSnapshot.data();
      } else {
        throw new Error("Data not found");
      }
    } catch (error) {
      console.error("Error fetching ulasan data:", error);
      throw error;
    }
  }
  
  // Menambahkan ulasan baru
  export async function tambahUlasan(dataUlasan) {
    try {
      const ulasanCollectionRef = collection(db, "ulasan");
      const newUlasanRef = await addDoc(ulasanCollectionRef, dataUlasan);
  
      return newUlasanRef.id;
    } catch (error) {
      console.error("Error menambahkan ulasan:", error);
      throw error;
    }
  }
  
  // Mengubah ulasan berdasarkan ID
  export async function ubahUlasan(idUlasan, dataUlasan) {
    try {
      const ulasanDocRef = doc(db, "ulasan", idUlasan);
      await updateDoc(ulasanDocRef, dataUlasan);
  
      console.log("Ulasan berhasil diubah");
    } catch (error) {
      console.error("Error mengubah ulasan:", error);
      throw error;
    }
  }
  
  // Menghapus ulasan berdasarkan ID
  export async function hapusUlasan(idUlasan) {
    try {
      const ulasanDocRef = doc(db, "ulasan", idUlasan);
      await deleteDoc(ulasanDocRef);
  
      console.log("Ulasan berhasil dihapus");
    } catch (error) {
      console.error("Error menghapus ulasan:", error);
      throw error;
    }
  }
  