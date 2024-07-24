'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Logo1 from '../../../../public/assets/LogoPrimer.png';
import hero from '../../../../public/assets/Hero.svg';
import scalability from '../../../../public/assets/scalability.png';
import misuse1 from '../../../../public/assets/misuse1.png';
import misuse2 from '../../../../public/assets/misuse2.png';
import lockups from '../../../../public/assets/Lockups.png';
import clean from '../../../../public/assets/cleanspace.png';
import penempatan from '../../../../public/assets/penempatan.png';
import logoputih from '../../../../public/assets/logoputih.png';
import ikan from '../../../../public/assets/ikan.png';
import ayam from '../../../../public/assets/ayam.png';
import kuan from '../../../../public/assets/Kuan.png';
import color from '../../../../public/assets/color.png';
import inspirasi from '../../../../public/assets/inspirasi.png';
import mono from '../../../../public/assets/mono.png';
import logobg from '../../../../public/assets/logobg.png';
import monse from '../../../../public/assets/monse.png';
import monsetype from '../../../../public/assets/monsetype.png';
import monsefont from '../../../../public/assets/monsefont.png';
import paterns from '../../../../public/assets/paterns.png';
import paternz from '../../../../public/assets/paternz.png';
import kop from '../../../../public/assets/kop.png';
import amplop from '../../../../public/assets/amplop.png';
import makasi from '../../../../public/assets/makasi.png';
import postermenu from '../../../../public/assets/postermenu.png';
import papannama from '../../../../public/assets/papannama.png';
import bukumenu from '../../../../public/assets/bukumenu.png';
import bannerx from '../../../../public/assets/bannerx.png';
import cangkir from '../../../../public/assets/buahtangan/cangkir.png';
import note from '../../../../public/assets/buahtangan/note.png';
import packaging from '../../../../public/assets/buahtangan/packaging.png';
import paperbag from '../../../../public/assets/buahtangan/paperbag.png';
import pena from '../../../../public/assets/buahtangan/pena.png';
import totbag from '../../../../public/assets/buahtangan/totbag.png';
import topi from '../../../../public/assets/komersial/topi.png';
import sweater from '../../../../public/assets/komersial/sweater.png';
import apron from '../../../../public/assets/komersial/apron.png';
import feed from '../../../../public/assets/insta/feed.png';
import high from '../../../../public/assets/insta/high.png';
import profile from '../../../../public/assets/insta/profile.png';
import Lenis from 'lenis';

export default function Page() {
    const sectionRef = useRef(null);


    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])



    return (
        <section>
            <div className='min-w-full  grid grid-cols-12  h-full snap-center'>
                <div className='mx-28 col-span-8 flex flex-col gap-10 mt-[90px] '>
                    <div>
                        <h1 className='text-5xl font-semibold text-[#4F6C51] mb-2'>Brand Guideline</h1>
                        <p className='text-justify'>Brand Guideline (Panduan penggunaan merek) merupakan sebuah acuan dan panduan yang
                            digunakan suatu perusahaan bisnis untuk mengatur desain visual berupa komposisi dan tampilan
                            secara umum dari sebuah merek atau brand. Panduan dalam brand guideline memiliki tujuan untuk
                            menjelaskan identitas berupa pemilihan warna brand, desain, font, foto, palet warna, dan komponen
                            penting lainnya.Panduan merek mengkomunikasikan berbagai hal tentang merek usaha, baik secara internal ke
                            organisasi atau bisnis, maupun secara eksternal kepada mitra, afiliasi, dan masyarakat umum.
                            Komponen apa yang terkandung dalam pedoman merek tidak standar di seluruh industri, tetapi
                            organisasi yang paling terlihat menggunakan pedoman merek sebagai sumber daya bagi semua
                            orang untuk memhami cara merepresentasikan setiap merek (Ica Purnamasari et al., 2023).
                            Panduan merek ini disusun untuk kepentingan penelitian Tugas Akhir Sarjana Terapan Politeknik
                            Negeri Sriwijaya.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold text-[#4F6C51] mb-2'>Tujuan Penggunaan</h1>
                        <p className='text-justify'>Brand guideline bertujuan sebagai acuan atau pedoman
                            yang harus diikuti perusahaan dalam rangka menciptakan
                            identitas brand yang konsisten di mata publik. Penyusunan
                            brand guideline tentunya memberikan beragam manfaat
                            bagi perusahaan yang menerapkannya.
                            Brand guideline akan membuat citra dari perusahaan lebih
                            mudah diingat oleh publik. Brand yang konsisten akan
                            lebih mudah diingat orang dibandingkan dengan yang
                            tidak. Konsistensi branding akan memudahkan konsumen
                            dalam mengenali dan mengingat merek usaha yang
                            dimiliki.
                            Hal ini tentunya akan berdampak positif bagi perusahaan,
                            sebab bisa meningkatkan kepercayaan konsumen
                            terhadap brand, memancing emosi positif konsumen,
                            hingga menciptakan konsumen yang setia atau loyal
                            kepada merek usaha.
                        </p>
                    </div>
                </div>
                <div className=' col-span-4 bg-black'>
                    <div className='w-full h-full'>
                        <Image src={hero} className='object-cover h-full object-center' />
                    </div>
                </div>

            </div>

            <div className='min-w-full  grid grid-cols-12 h-full  snap-center'>
                <div  className='col-span-6 flex flex-col mt-[90px] mx-24 h-full '>
                    <h1 className='text-4xl mb-2 font-semibold text-[#4F6C51]'>Jenis Logo</h1>
                    <div className='flex gap-5 flex-col '>
                        <Image src={Logo1} className='  ring-orange-200 h-[50%] object-contain border-8 border-orange-100 rounded-sm object-center ' />
                        <p  className='text-justify'>Logo “Lesehan Bakso Palapa” mulai mengikuti
                            perkembangan zaman dengan jenis logo
                            combination mark yang terkesan simple. Tampilan
                            logo yang modern ini membuat citra merek
                            menjadi unik dan mudah diingat. Logo ini
                            bertujuan juga untuk menarik perhatian khalayak
                            agar memperluas target pasar sehingga dapat
                            membangun citra dan persepsi yang baik di mata
                            pelanggan.</p>
                    </div>
                </div>
                <div className='col-span-6 flex flex-col items-center gap-5 mt-[100px]  mr-24'>
                    <div>
                        <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Makna Logo</h1>
                        <div className='flex flex-col gap-2'>
                            <p className='text-justify '>Atap pada saung mewakili bentuk atap dari
                                Rumah Baghi. Dimana Rumah Baghi merupakan
                                rumah adat suku Besemah, salah satu kelompok
                                etnis di Kota Pagaralam, Sumatera Selatan.
                            </p>
                            <p className='text-justify'>Bentuk saung mewakilkan ciri khas tempat
                                makan dari Lesehan Bakso Palapa.</p>
                            <p className='text-justify'>Logo Lesehan Bakso Palapa memiliki 2 jenis
                                tipografi, yaitu tipografi sans serif yang terdapat
                                pada kata Lesehan memiliki kesan tampilan yang
                                bersih, sederhana, dan ramping, sehingga sering
                                dikaitkan dengan gaya modern dan kontemporer.
                                Sedangkan tipografi tangan pada tulisan Bakso
                                Palapa mencerminkan ketelatenan, ketekunan,
                                kesabaran, dan keterampilan dalam menciptakan
                                hidangan kuliner.</p>
                        </div>
                    </div>
                    <div >
                        <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Simplycity</h1>
                        <p className='text-justify'>Logo dengan combination mark seperti ini cenderung memiliki desain yang sederhana dan bersih.
                            Penggunaan grafis sederhana membuat logo “Lesehan Bakso Palapa” ini mudah diingat dan mudah
                            diakses oleh khalayak. Logo menjadi sangat dalam menyampaikan pesan, karena menggunakan
                            kata-kata yang langsung dapat dimengerti oleh audiens. Hal ini dapat membantu menciptakan
                            kesan yang lebih cepat dan efisien mengenai merek dagang “Bakso Lesehan Palapa”.
                        </p>

                    </div>
                </div>
            </div>

            <div className='min-w-full h-full  snap-center'>
                <div className='mt-[90px] flex flex-col gap-10 mx-24'>
                    <div className='flex gap-5'>
                        <div className='flex flex-col justify-center  '>
                            <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Scalability</h1>
                            <p className='text-justify'>Scalability pada logo mengacu pada kemampuan sebuah logo untuk mempertahankan kualitas,
                                kesan visual, dan legabilitasnya saat diubah ukurannya dari yang sangat besar hingga sangat kecil,
                                baik dalam bentuk cetak maupun digital. Dengan tipe logo combination mark, logo “Lesehan Bakso
                                Palapa” dapat menyesuaikan berbagai media dan platform tanpa kehilangan kualitas dan
                                ketajaman.</p>
                        </div>
                        <div className='h-96'>
                            <Image  src={scalability} className='object-cover h-full object-center  ' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='h-[500px] w-[80%]' >
                            <Image  src={lockups} className='object-cover object-center h-full ' />
                        </div>
                        <div className='flex flex-col w-[90%] mt-28 justify-start gap-10  '>
                            <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Lockups</h1>
                            <p className='text-justify'>Lockups dalam logo “Lesehan Bakso Palapa” merujuk
                                pada tata letak atau susunan elemen-elemen logo
                                yang berbeda, termasuk simbol atau ikon dan teks.
                                Lockups digunakan untuk menciptakan hubungan
                                visual yang konsisten antara elemen tersebut dan
                                memastikan bahwa logo selalu tampil dengan benar
                                dan sesuai panduan merek yang ditetapkan.</p>
                        </div>
                    </div>
                    <div className='mb-20'>
                        <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Logo Misuse</h1>
                        <div className='flex justify-between h-80'>
                            <Image  src={misuse1} className='w-[49%] object-cover ' />
                            <Image  src={misuse2} className='w-[49%] object-cover' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='min-w-full h-full snap-center'>
                <div className='mt-[90px] flex flex-col gap-20 mx-28'>
                    <div className='flex '>
                        <div className='w-[70%]' >
                            <Image  src={clean} className='object-cover object-center h-full ' />
                        </div>
                        <div className='flex flex-col gap-5 justify-center'>
                            <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Clean Space</h1>
                            <p className='text-justify'>Clean space adalah area yang dilindungi di sekitar logo yang harus bebas dari elemen lain. Clean
                                space berfungsi untuk memastikan logo dapat mewakili merek tanpa gangguan. Tidak ada rumus di
                                balik area yang ditentukan oleh X; ini hanya sebagai panduan.</p>
                        </div>
                    </div>
                    <div className='flex  w-full '>
                        <div className='flex flex-col gap-5 justify-center'>
                            <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Placement Logo</h1>
                            <p className='text-justify'>Saat menempatkan logo, logo ditempatkan pada posisi yang konsisten dan menonjol yang terlihat
                                oleh khalayak. Posisi yang diperbolehkan hanya posisi atas kiri, atas tengah, atas kanan, bawah kanan,
                                dan bawah kiri.</p>
                        </div>
                        <div className='flex justify-end w-full ' >
                            <Image  src={penempatan} className='object-cover w-[70%] object-center h-full ' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-4xl mb-6 font-semibold text-[#4F6C51] w-full text-center'>
                            Logo Pada Videografi dan Fotografi
                        </h1>
                        <div className='flex w-full gap-2 h-[500px]'>
                            <div className='flex flex-col w-full gap-2'>
                                <div
                                    
                                    className='h-full w-full rounded-md'
                                    style={{
                                        backgroundImage: `url(${ayam.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'brightness(75%)',
                                    }}
                                >
                                    <div className='w-20 h-20 absolute m-2 '>
                                        <Image src={logoputih} className='object-cover ' />
                                    </div>
                                </div>
                                <div
                                    className='h-[50%] w-full rounded-md'
                                    style={{
                                        backgroundImage: `url(${ikan.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'brightness(75%)',
                                    }}
                                >
                                    <div className='w-20 h-20 absolute m-2 right-0 bottom-0'>
                                        <Image src={logoputih} className='object-cover ' />
                                    </div>
                                </div>
                            </div>
                            <div
                                className='rounded-md w-full h-full'
                                style={{
                                    backgroundImage: `url(${kuan.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'brightness(75%)',
                                }}
                            >
                                <div className='w-20 h-20 absolute m-2 top-0 right-0 '>
                                    <Image src={logoputih} className='object-cover ' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='min-w-full h-full  snap-center'>
                <div className='mt-[90px] flex flex-col mx-28'>
                    <div className='w-full flex flex-col gap-12'>

                        <div className='flex flex-col gap-4'>
                            <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Warna Utama </h1>
                            <Image src={color} />

                            <p className='text-justify'>Warna memiliki peran yang sangat penting dalam brand guideline atau panduan merek yang harus
                                di tampilkan dan digunakan secara konsisten. Dengan menggunakan warna yang unik, merek dapat
                                menonjol dan menciptakan kesan yang berbeda di benak konsumen. Warna memiliki kekuatan
                                untuk memicu respons emosional dari konsumen. Psikologi warna memainkan peran penting dalam
                                pemasaran dan branding termasuk pada merek makanan, karena dapat mempengaruhi perilaku
                                dan persepsi konsumen terhadap produk makanan. </p>
                        </div>

                        <div className='flex flex-col gap-5 '>
                            <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Inspirasi Warna</h1>
                            <Image src={inspirasi} />
                        </div>
                        <div className='flex flex-col gap-5 pb-10'>
                            <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Logo Pada Warna Background</h1>
                            <Image src={logobg} />
                        </div>
                        <div className='flex flex-col gap-5 pb-10'>
                            <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Versi Monokrom</h1>
                            <Image src={mono} />
                        </div>
                    </div>


                </div>
            </div>
            <div className='min-w-full h-full snap-center'>
                <div className='mt-[90px] flex flex-col gap-10 '>
                    <div className='mx-28'>
                        <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Primary Typeface</h1>
                        <div className='flex'>
                            <div className='w-[80%] flex items-center '>
                                <Image src={monse} className='object-cover object-center' />
                            </div>
                            <div className='flex flex-col w-[90%]'>
                                <div className=''>
                                    <Image src={monsetype} />
                                </div>
                                <p className='text-justify mx-12'>Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut
                                    laoreet dolore magna aliquam erat
                                    volutpat. Ut wisi enim ad minim veniam,
                                    quis nostrud exerci tation ullamcorper
                                    suscipit lobortis nisl ut aliquip ex ea
                                    commodo consequat.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mx-28'>
                        <div className='flex justify-between w-full items-center'>
                            <div className='h-[30%] w-full'>
                                <Image src={monsefont} className='object-cover ' />
                            </div>
                            <div className=''>
                                <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Weight and Style</h1>
                                <p className='text-justify w-[70%]'>Tiga elemen penting dalam pemilihan
                                    typeface untuk merek, yaitu jenis,
                                    gaya, dan berat. Dengan memahami
                                    ketiga elemen ini dengan baik dan
                                    mengkombinasikan typeface yang
                                    tepat, diharapkan bisa menciptakan
                                    identitas merek yang konsisten dan
                                    kuat.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-28'>
                        <h1 className='text-4xl  text-center mb-2 font-semibold text-[#4F6C51]'>Contoh Penggunaan</h1>
                        <div className='shadow-xl p-10'>
                            <div className='flex flex-col text-[#A98A55] '>
                                <h1 className='text-4xl  mb-2 font-bold '>HEADLINE</h1>
                                <h2 className='text-2xl  mb-2 font-semibold '>SUB HEADER</h2>
                                <p className='text-justify font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className='min-w-full h-full snap-center'>
                <div className='mt-[90px] mx-28'>
                    <div className='flex'>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Pattern</h1>
                            <p className='text-justify'>Pola atau pattern terdiri dari daun yang di
                                repetisi hingga membentuk satu kesatuan.
                                Pola tersebut mewakili suasana Lesehan
                                Bakso Palapa yang dikelilingi keindahan alam
                                yang sejuk dan menenangkan. </p>
                        </div>
                        <div className='w-[90%]'>
                            <Image src={paterns} className='object-cover' />
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Pengunaan Pettern</h1>
                        <div className=''>
                            <Image src={paternz} className='object-cover' />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <p className='text-justify'>Penggunaan pattern dengan warna background yang memiliki kontras yang tinggi memiliki tujuan
                                untuk menarik perhatian tanpa menjadi terlalu mencolok dibandingkan dengan objek desain
                                lainnya. Dengan meningkatkan kontras antara pattern dan background, dapat menciptakan
                                tampilan visual yang menarik namun tetap memberikan keseimbangan dalam desain secara
                                keseluruhan. Dengan begitu, pattern tersebut dapat berfungsi sebagai elemen tambahan yang
                                menyegarkan desain tanpa mengalihkan perhatian dari elemen utama atau pesan yang ingin
                                disampaikan </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='min-w-full h-full snap-center'>
                <div className='mt-[90px] mx-28 text-center gap-10 flex flex-col'>
                    <div>
                        <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Visual Administrasi</h1>
                        <p className='text-center'>Elemen visual administrasi seperti kop surat, cap, dan amplop memainkan peran penting dalam seluruh
                            kebutuhan administrasi. Kop surat menjadi identitas resmi merek yang mencangkup logo dan informasi
                            penting lainnya. Penggunaan yang konsisten dan sesuai dengan panduan merek dalam kop surat dapat
                            memberikan kesan profesional dan terpercaya. Selain itu, cap merek berfungsi sebagai tanda keaslian dokumen
                            administrasi dan memberikan perlindungan terhadap penyalangunaan merek.
                            Dalam hal ini, desain yang sesuai dengan brand guideline untuk cap merek mencerminkan dan keabsahan
                            dokumen, amplop merek yang dirancang dengan konsistensi merek memperkuat identitas dan menciptakan
                            kesan yang kuat saat pengiriman surat atau dokumen administrasi.</p>
                        <div className='flex overflow-x-auto h-96'>
                            <div className='w-full h-full'>
                                <Image src={kop} className='object-cover h-full' />
                            </div>
                            <div className='w-full h-full'>
                                <Image src={amplop} className='object-cover h-full' />
                            </div>
                            <div className='w-full h-full -translate-x-3'>
                                <Image src={makasi} className='object-cover h-full' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Media & Publikasi</h1>
                        <p className='text-center'>Berisikan tentang penggunaan elemen desain dalam berbagai media dan publikasi yang terkait dengan merek
                            dengan melalui visual yang konsisten. Bab ini mengilustrasikan bagaimana logo, tipografi, warna dan elemen
                            grafis dapat diterapkan dalam poster, banner, dan papan nama. Mockup disediakan agar memberikan contoh
                            desain yang professional dan menarik yang bertujuan untuk menarik perhatian khalayak sasaran.</p>
                        <div className='flex my-10   overflow-x-auto h-40 border'>
                            <div className='w-full h-full'>
                                <Image src={bannerx} className='object-cover h-full' />
                            </div>
                            <div className='w-full h-full'>
                                <Image src={postermenu} className='object-cover h-full' />
                            </div>
                            <div className='w-full h-full'>
                                <Image src={bukumenu} className='object-cover h-full' />
                            </div>
                            <div className='w-full h-full -translate-x-3'>
                                <Image src={papannama} className='object-cover h-full' />
                            </div>
                        </div>
                    </div>
                    <div >
                        <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51]'>Visual Buah Tangan</h1>
                        <p className='text-center mb-10'>Visual buah tangan (merchandise) yaitu memberikan contoh visual yang jelas untuk memastikan konsistensi
                            dalam penempatan logo, ukuran, dan pemilihan warna yang sesuai dan berfungsi sebagai panduan praktis
                            dalam mengembangkan produk merchandise yang sesuai dengan nilai-nilai merek Lesehan Bakso Palapa.
                            Maka dengan mengaplikasikan panduan ini dapat menciptakan merchandise yang menarik perhatian
                            khalayak, sehingga mampu menciptakan merchandise yang berkualitas dan mencerminkan keunikan serta
                            daya tarik merek Lesehan Bakso Palapa</p>
                        <div className='flex  overflow-x-auto h-96'>
                            <div className='w-full h-full'>
                                <Image src={totbag} className=' object-cover h-full' />
                            </div>
                            <div className='w-full h-full'>
                                <Image src={paperbag} className=' object-cover h-full' />
                            </div>
                            <div className='w-full h-full '>
                                <Image src={pena} className=' object-cover h-full' />
                            </div>
                        </div>
                        <div className='flex  overflow-x-auto h-96'>
                            <div className='w-full h-full'>
                                <Image src={cangkir} className=' object-cover h-full' />
                            </div>
                            <div className='w-full h-full'>
                                <Image src={note} className=' object-cover h-full' />
                            </div>
                            <div className='w-full h-full'>
                                <Image src={packaging} className=' object-cover h-full' />
                            </div>
                        </div>
                    </div>
                    <div >
                        <h1 className='text-4xl  mb-2 font-semibold text-[#4F6C51] '>Produk Komersial</h1>
                        <p className='text-center mb-10'>Visual produk komersial yaitu memberikan contoh visual yang jelas untuk memastikan konsistensi dalam
                            penempatan logo, ukuran, dan pemilihan warna yang sesuai dan berfungsi sebagai panduan praktis dalam
                            mengembangkan produk komersial yang sesuai dengan nilai-nilai merek Lesehan Bakso Palapa. Maka dengan
                            mengaplikasikan panduan ini dapat menciptakan produk komersial yang menarik perhatian khalayak,
                            sehingga mampu menciptakan produk komersial yang berkualitas dan mencerminkan keunikan serta daya
                            tarik merek Lesehan Bakso Palapa. </p>
                        <div className='flex overflow-x-auto h-96 pb-20'>
                            <div className='w-full h-full'>
                                <Image src={topi} className='object-cover h-full' />
                            </div>
                            <div className='w-full h-full'>
                                <Image src={sweater} className='object-cover h-full' />
                            </div>
                            <div className='w-full h-full -translate-x-3'>
                                <Image src={apron} className='object-cover h-full' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='min-w-full h-full snap-center'>
                <div className='mt-[90px] mx-28 flex justify-between items-center h-[100vh] '>
                    <div className='flex flex-col justify-center items-center p-10 rounded-xl bg-amber-50 shadow-md animate-floating'>
                        <h1 className='text-4xl mb-2 font-semibold text-[#4F6C51]'>Profile Instagram</h1>
                        <div className='w-52'>
                            <Image src={profile} className='object-cover w-full' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-10 rounded-xl bg-amber-50 shadow-md animate-floating'>
                        <h1 className='text-4xl mb-2 font-semibold text-[#4F6C51]'>Feed Instagram</h1>
                        <div className='w-72'>
                            <Image src={high} className='object-cover w-full' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-10 rounded-xl bg-amber-50 shadow-md animate-floating'>
                        <h1 className='text-4xl mb-2 font-semibold text-[#4F6C51]'>Feed Instagram</h1>
                        <div className='w-52'>
                            <Image src={feed} className='object-cover w-full' />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
