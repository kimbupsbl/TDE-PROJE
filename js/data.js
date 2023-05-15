const api = "https://kimbupsbl.github.io/TDE-PROJE/";

const quizLimit = 8; // default: 8
const answerTime = 20; //default: 20

   const quizData = [
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Çiçekleride suladı.",
        b: "Bu dünya sana da bana da kalmaz.",
        c: "Bugün okulda eğlence var.",
        d: "Pazardan sepet de almış.",
        correct: "a",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Siz de bizimle sinemaya gelmek ister misiniz?",
        b: "Annem de bu konuda benim kararımı destekliyor.",
        c: "Ece de Esra ile aynı okula başlayacakmış.",
        d: "Televizyonunda sesini kısarsanız iyi olur.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Sevgide sınır olmaz.",
        b: "Sadece babam değil, annemde biliyor.",
        c: "Babam fabrikada çalışıyor.",
        d: "Bugün okulda eğlence vardı.",
        correct: "b",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Sen de bizimle gel.",
        b: "Başarıya ulaşmak için günde en az sekiz saat çalışacaksın.",
        c: "Hayatta kalabilmek için uğraşıyorlar.",
        d: "Yalnız kalsanda doğru olduğuna inandığın yoldan dönmeyeceksin.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
        a: "Yarın okul da parti varmış.",
        b: "Sende mi hastasın?",
        c: "Annem de komşuyla beraber pazara gitti.",
        d: "Ev de huzur kalmadı.",
        correct: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
        a: "Trende yolculuk yapmayı severim.",
        b: "Benimde saçlarıma karlar yağdı.",
        c: "Sokak da oyun oynuyorlar.",
        d: "Giderkende söylemiştim ama işe yaramadı.",
        correct: "a",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Yazdığı hikayeler bir dergide yayımlandı.",
        b: "İki yıl Galatasaray Lisesinde çalıştı.",
        c: "Şiire merakı ilkokulda başlamıştı.",
        d: "Çocuklar için sadece masal değil, şiirlerde yazdı.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Ayşe kalemini bende unutmuş.",
        b: "Yarınki geziye ben de geleceğim.",
        c: "Yüzündeki bende irileşme mi olmuş?",
        d: "Kitabın ben de, yarın getiririm.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Gösteride ön sıralarda olmak çok güzel.",
        b: "Bir de ne göreyim? Arkadaşım yanıma gelmiş.",
        c: "Arkadaşlarınız kitaplığı da temizlesin.",
        d: "Gömleğim de mürekkep lekesi var.",
        correct: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        a: "Cem de çok bozdu.",
        b: "Şişli Etfal Hastanesindeki teyzeyi de gördüm.",
        c: "Doktor maaşların da düzeltme olacak mı?",
        d: "İngilizce bilmeyen de kendine akademisyen demesin.",
        correct: "c",
    },
];

export default quizData;
