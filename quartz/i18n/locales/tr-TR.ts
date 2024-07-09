import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Başlıksız",
    description: "Tanım bulunamadı",
  },
  components: {
    callout: {
      note: "Not",
      abstract: "Özet",
      info: "Bilgi",
      todo: "Yapılacak",
      tip: "İpucu",
      success: "Başarılı",
      question: "Soru",
      warning: "Uyarı",
      failure: "Başarısız",
      danger: "Tehlike",
      bug: "Hata",
      example: "Örnek",
      quote: "Alıntı",
    },
    backlinks: {
      title: "Geri Bağlantılar",
      noBacklinksFound: "Geri bağlantılar bulunamadı",
    },
    themeToggle: {
      lightMode: "Parlak mod",
      darkMode: "Karanlık mod",
    },
    explorer: {
      title: "Tarayıcı",
    },
    footer: {
      createdWith: "İle oluşturuldu",
    },
    graph: {
      title: "Grafik Görünümü",
    },
    recentNotes: {
      title: "Son Notlar",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Aslına bağlantı",
    },
    search: {
      title: "Ara",
      searchBarPlaceholder: "Bir şey ara",
    },
    tableOfContents: {
      title: "İçerik",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} dk okuma`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Son notlar",
      lastFewNotes: ({ count }) => `Son ${count} not`,
    },
    error: {
      title: "Bulunamadı",
      notFound: "Bu sayfa ya özeldir ya da yoktur.",
    },
    folderContent: {
      folder: "Klasör",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 nesne bu klasörde." : `${count} nesne bu klasörde.`,
    },
    tagContent: {
      tag: "Etiket",
      tagIndex: "Etiket Endeksi",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 nesne bu etkiketli." : `${count} nesne bu etiketli.`,
      showingFirst: ({ count }) => `İlk ${count} etiket gösteriliyor.`,
      totalTags: ({ count }) => `Toplam ${count} etiket bulundu.`,
    },
  },
} as const satisfies Translation
