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
  
  // Mendapatkan semua data home
  export default async function getDataHomeAll() {
    try {
      const homeCollectionRef = collection(db, "home");
      const homeSnapshot = await getDocs(homeCollectionRef);
  
      const homeData = [];
      homeSnapshot.forEach((doc) => {
        homeData.push({ idHome: doc.id, ...doc.data() });
      });
  
      return homeData;
    } catch (error) {
      console.error("Error fetching all home data:", error);
      throw error;
    }
  }
  
  // Mendapatkan data home berdasarkan ID
  export async function getDataHome(idHome) {
    try {
      const homeDocRef = doc(db, "home", idHome);
      const homeSnapshot = await getDoc(homeDocRef);
  
      if (homeSnapshot.exists()) {
        return homeSnapshot.data();
      } else {
        throw new Error("Data not found");
      }
    } catch (error) {
      console.error("Error fetching home data:", error);
      throw error;
    }
  }
  
  // Menambahkan data home baru
  export async function tambahHome(dataHome) {
    try {
      const homeCollectionRef = collection(db, "home");
      const newHomeRef = await addDoc(homeCollectionRef, dataHome);
  
      return newHomeRef.id;
    } catch (error) {
      console.error("Error menambahkan home:", error);
      throw error;
    }
  }
  
  // Mengubah data home berdasarkan ID
  export async function ubahHome(idHome, dataHome) {
    try {
      const homeDocRef = doc(db, "home", idHome);
      await updateDoc(homeDocRef, dataHome);
  
      console.log("Home berhasil diubah");
    } catch (error) {
      console.error("Error mengubah home:", error);
      throw error;
    }
  }
  
  // Menghapus data home berdasarkan ID
  export async function hapusHome(idHome) {
    try {
      const homeDocRef = doc(db, "home", idHome);
      await deleteDoc(homeDocRef);
  
      console.log("Home berhasil dihapus");
    } catch (error) {
      console.error("Error menghapus home:", error);
      throw error;
    }
  }
  