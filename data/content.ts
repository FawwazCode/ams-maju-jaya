export const siteConfig = {
  name: "AMS Maju Jaya",
  shortName: "AMS Maju Jaya",
  description:
  "Jasa nyetting dan berbagai kebutuhan desain untuk acara, usaha, sekolah, organisasi, dan kebutuhan lainnya.",
  whatsapp: "+6285959291392",
  whatsappMessage:
  "Halo AMS Maju Jaya, saya ingin order jasa desainnya.",
  instagram: "",
  location: "Indonesia",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

export const  navigation = [
    {
        label: "Beranda",
        href: "#home",
    },
    {
        label: "Layanan",
        href: "#services",
    },
    {
        label: "Portfolio",
        href: "#portfolio",
    },
    {
        label: "Tentang Kami",
        href: "#about",
    },
    {
        label: "FAQ",
        href: "#faq",
    },
];

export const services = [
  {
    title: "Jasa Nyetting",
    description:
      "Membantu berbagai kebutuhan nyetting dan desain sesuai dengan kebutuhan Anda.",
  },
  {
    title: "Desain Undangan",
    description:
      "Desain undangan untuk pernikahan, ulang tahun, acara keluarga, dan berbagai momen spesial lainnya.",
  },
  {
    title: "Desain Banner",
    description:
      "Desain banner dan spanduk untuk acara, promosi usaha, kegiatan, dan berbagai kebutuhan lainnya.",
  },
  {
    title: "Piagam",
    description:
      "Menyediakan kebutuhan piagam untuk penghargaan, perlombaan, kegiatan sekolah, organisasi, dan acara lainnya.",
  },
  {
    title: "Piala",
    description:
      "Menyediakan piala untuk berbagai kebutuhan perlombaan, penghargaan, dan kegiatan.",
  },
  {
    title: "Kebutuhan Desain Lainnya",
    description:
      "Memiliki kebutuhan desain atau nyetting lainnya? Silakan konsultasikan terlebih dahulu.",
  },
];

export const portfolioCategories = [
  "Semua",
  "Undangan",
  "Banner",
  "Piagam",
  "Promosi",
];

export const portfolio = [
  {
    title: "Desain Undangan",
    category: "Undangan",
    image: "/images/portfolio/invitation/invitation-01.jpg",
  },
  {
    title: "Desain Banner",
    category: "Banner",
    image: "/images/portfolio/banner/banner-01.jpg",
  },
  {
    title: "Desain Piagam",
    category: "Piagam",
    image: "/images/portfolio/piagam/piagam-01.jpg",
  },
  {
    title: "Desain Promosi",
    category: "Promosi",
    image: "/images/portfolio/promotion/promotion-01.jpg",
  },
];

export const advantages = [
  {
    title: "Sesuai Kebutuhan",
    description:
      "Setiap desain dibuat berdasarkan kebutuhan, konsep, dan keinginan pelanggan.",
  },
  {
    title: "Detail & Berkualitas",
    description:
      "Kami memperhatikan komposisi, warna, typography, dan detail visual pada setiap desain.",
  },
  {
    title: "Mudah Dikonsultasikan",
    description:
      "Ceritakan kebutuhan Anda dengan bahasa sederhana dan kami bantu menemukan konsep yang sesuai.",
  },
  {
    title: "Ramah & Profesional",
    description:
      "Kami mengutamakan komunikasi yang nyaman dan pelayanan yang baik selama proses desain.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Hubungi Kami",
    description:
      "Hubungi AMS Maju Jaya melalui WhatsApp dan ceritakan kebutuhan yang ingin Anda buat.",
  },
  {
    number: "02",
    title: "Konsultasi",
    description:
      "Diskusikan konsep, ukuran, isi, warna, dan detail lainnya sesuai kebutuhan Anda.",
  },
  {
    number: "03",
    title: "Pengerjaan",
    description:
      "Setelah detail disepakati, desain atau pesanan Anda akan mulai kami proses.",
  },
  {
    number: "04",
    title: "Selesai",
    description:
      "Hasil akhir disiapkan sesuai kebutuhan dan kesepakatan yang telah dibicarakan.",
  },
];

export const faqItems = [
  {
    question: "Apa saja jasa yang tersedia di AMS Maju Jaya?",
    answer:
      "Kami menyediakan berbagai kebutuhan nyetting dan desain, seperti desain undangan, banner, piagam, serta kebutuhan piala dan berbagai kebutuhan lainnya yang dapat dikonsultasikan terlebih dahulu.",
  },
  {
    question: "Apakah saya bisa request desain sesuai keinginan?",
    answer:
      "Tentu. Anda dapat menyampaikan konsep, referensi, warna, tulisan, atau kebutuhan lainnya. Detail desain dapat didiskusikan terlebih dahulu agar sesuai dengan kebutuhan Anda.",
  },
  {
    question: "Apakah bisa konsultasi sebelum melakukan pemesanan?",
    answer:
      "Bisa. Silakan hubungi AMS Maju Jaya melalui WhatsApp untuk menjelaskan kebutuhan Anda. Kami akan membantu mendiskusikan detail yang diperlukan.",
  },
  {
    question: "Apakah AMS Maju Jaya menerima kebutuhan desain lainnya?",
    answer:
      "Ya. Jika kebutuhan Anda belum tercantum di website, silakan tanyakan terlebih dahulu. Kami akan melihat dan mendiskusikan apakah kebutuhan tersebut dapat kami bantu.",
  },
  {
    question: "Bagaimana cara melakukan pemesanan?",
    answer:
      "Anda cukup menghubungi kami melalui WhatsApp, kemudian sampaikan kebutuhan yang ingin dibuat. Setelah itu, detail seperti konsep, ukuran, jumlah, dan kebutuhan lainnya dapat didiskusikan bersama.",
  },
  {
    question: "Bagaimana jika saya belum memiliki konsep desain?",
    answer:
      "Tidak masalah. Anda tetap dapat menghubungi kami dan menjelaskan kebutuhan atau acara yang akan dibuat. Konsep dan detail desain dapat dibicarakan bersama sebelum proses pengerjaan.",
  },
];

export const aboutContent = {
  title: "Membantu Ide Anda Menjadi Desain",
  description:
    "Kami membantu berbagai kebutuhan desain visual dengan mengutamakan hasil yang menarik, jelas, dan sesuai dengan kebutuhan pelanggan.",
  tools: [
    "Adobe Photoshop",
    "Adobe Illustrator",
  ],
};