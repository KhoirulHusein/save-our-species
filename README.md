# (S.O.S) Save Our Species

<p align="center">
  <img src="https://github.com/sparkle31/save-our-species/blob/main/public/logo300x300.png" alt="Logo S.O.S">
</p>

<h3 align="center">Aksi Nyata untuk Perlindungan Satwa</h3>

## Daftar Isi
- [Bergabung bersama S.O.S](#bergabung-bersama-sos)
- [S.O.S itu apa?](#sos-itu-apa)
  - [Alasan dibalik S.O.S](#alasan-dibalik-sos)
  - [Kenapa harus S.O.S?](#kenapa-harus-sos)
  - [Kalau mau lapor ke mana?](#kalau-mau-lapor-ke-mana)
  - [Mau ikut volunteer? Banyak pilihannya!](#mau-ikut-volunteer-banyak-pilihannya)
  - [Mau donasi aja deh..](#mau-donasi-aja-deh)
- [Backend](#backend)
- [Akses kode S.O.S](#akses-kode-sos)
  - [Sebelum clone, siapkan dulu](#sebelum-clone-siapkan-dulu)
    - [1. Clone repository S.O.S](#1-clone-repository-sos)
    - [2. Buka repository di IDE pilihanmu](#2-buka-repository-di-ide-pilihanmu)
    - [3. Pasang dependencies yang diperlukan](#3-pasang-dependencies-yang-diperlukan)
  - [Jalankan kode S.O.S dengan perintah berikut](#jalankan-kode-sos-dengan-perintah-berikut)
- [Teknologi dalam proyek S.O.S](#teknologi-dalam-proyek-sos)
- [Creator](#creator)
- [Didukung Oleh](#didukung-oleh)

## Bergabung bersama S.O.S
Bergabung untuk berpartisipasi langsung dalam perlindungan satwa dilindungi di Indonesia dengan S.O.S. Akses web S.O.S pada [link deploy S.O.S](#).

## S.O.S itu apa?
Save Our Species adalah platform online yang didedikasikan untuk perlindungan satwa dilindungi di Indonesia. S.O.S bukan hanya sebuah situs web, tetapi juga merupakan sumber informasi dan aksi nyata dalam menjaga keberlanjutan kehidupan satwa liar yang terancam di Indonesia.

### Alasan dibalik S.O.S
Indonesia memiliki keanekaragaman hayati yang sangat tinggi, mencakup berbagai macam satwa liar. Namun, pengetahuan yang terbatas di kalangan penduduk Indonesia tentang hewan liar di negara ini menjadi tantangan signifikan dalam upaya konservasi satwa liar. Untuk mengatasi kesenjangan ini, proyek SOS diinisiasi. SOS bertujuan untuk memanfaatkan teknologi web modern guna menyediakan platform untuk meningkatkan kesadaran dan pemahaman tentang keanekaragaman satwa liar di Indonesia.

### Kenapa harus S.O.S?
Berbeda dari website lembaga hewan lainnya, S.O.S memberikan akses edukasi yang disertai keterangan perlindungan hukum dari setiap hewan yang dilindungi di Indonesia. S.O.S juga memberikan opsi kepada penggunanya untuk memilih kegiatan volunteer, tujuan donasi, form pelaporan, hingga pemberitaan terkini dalam dunia perlindungan hewan pada fitur artikel.

### Kalau mau lapor ke mana?
S.O.S menyediakan fitur lapor, diperuntukan untuk pengguna yang memiliki laporan mengenai pelanggaran hukum terkait hewan dilindungi. Akses form lapor melalui pilihan LAPOR pada website S.O.S

<p align="center">
  <img src="https://github.com/sparkle31/save-our-species/blob/main/public/images/screencapture-saveourspecies-my-id-lapor-2023-12-17-01_11_12.png" alt="Fitur Lapor">
</p>

### Mau ikut volunteer? Banyak pilihannya!
Banyak masyarakat umum yang kebingungan dan ragu dalam mengikuti kegiatan volunteer perlindungan/pelestarian hewan dan alam. Ini dikarenakan kurangnya informasi pada web lembaga lain dan setiap lembaganya hanya menyediakan satu opsi volunteer.

S.O.S menyediakan beberapa pilihan lembaga untuk diikuti beserta keterangan kegiatan dan informasi mengenai lembaga. Bisa langsung daftar volunteer juga! Akses form volunteer melalui pilihan Volunteer pada website S.O.S.

<p align="center">
  <img src="https://github.com/sparkle31/save-our-species/blob/main/public/images/screencapture-saveourspecies-my-id-Volunteer-2023-12-17-01_08_38.png" alt="Fitur Volunteer">
</p>

### Mau donasi aja deh..
Bagi pengguna yang mau donasi, S.O.S menyediakan form donasi dan opsi lembaga yang ingin diberikan donasinya. Pengguna bisa menentukan jumlah donasi dan memilih lembaga apa yang mau dituju.

<p align="center">
  <img src="https://github.com/sparkle31/save-our-species/blob/main/public/images/screencapture-saveourspecies-my-id-donation-lembaga-6565769689c3b7056081153f-2023-12-17-01_11_49.png" alt="Fitur Donasi">
</p>

## Backend
SOS menggunakan Axios untuk menangani permintaan HTTP dan berbagai alat dan pustaka lain untuk menyederhanakan pengembangan. Source code backend ada pada [link](https://github.com/sparkle31/save-our-species/tree/main/src/back-end) berikut.

## Akses kode S.O.S
Akses *source code* S.O.S untuk build proyek S.O.S di lokal mu

### Sebelum clone, siapkan dulu
Pastikan kamu telah menginstal *software* berikut pada lokal:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

#### 1. Clone repository S.O.S
Clone repo S.O.S dengan mendownload berkas zip dari repository ini *(main)*, atau dengan menjalankan perintah berikut pada terminal:

```bash
    $ git clone https://github.com/sparkle31/save-our-species
```

#### 2. Buka repository di IDE pilihanmu
Dalam pengembangan aplikasi S.O.S kami menggunakan Visual Studio Code, lalu pada terminal masuk ke repository save-our-species.

```bash
   $ cd save-our-species
```   

#### 3. Pasang dependencies yang diperlukan
Pasang dependencies yang diperlukan dalam project ini

```bash
   $ npm install
```

<p> :red_circle: <strong>Catatan Penting:</strong> <u>Sebelum melakukan pengembangan, pastikan untuk mengganti fetch data menjadi localhost untuk mengambil data dari server!</u></p>

### Jalankan kode S.O.S dengan perintah berikut
Untuk menjalankan project, gunakan perintah berikut pada *directory project*:
- npm start: Jalankan aplikasi di *development mode*.
- npm build: Membangun aplikasi menggunakan *Webpack*.

## Teknologi dalam proyek S.O.S
### Frontend
- HTML dan CSS
- JavaScript
- [Axios](https://github.com/axios/axios)
- [Tailwind](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Tabler icons](https://tabler-icons.io/)
- [Font Awesome](https://fontawesome.com/icons)
- [React](https://react.dev/)
- [Webpack](https://webpack.js.org/)

### Backend
- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)

## Creator
- Khoirul Husein
- Salsa Maulidina Puteri
- Siti Rahmah
- Kevin Raihan Hidayat
- Agung Romadhon

## Didukung Oleh
**Dicoding Indonesia**
