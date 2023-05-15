const api = "https://kimbupsbl.github.io/TDE-PROJE/";

const quizLimit = 8; // default: 8
const answerTime = 20; //default: 20


const questions = [
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
          options: {
        a: "Çiçekleride suladı.",
        b: "Bu dünya sana da bana da kalmaz.",
        c: "Bugün okulda eğlence var.",
        d: "Pazardan sepet de almış.",
               },
       answer: "a",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
       options: {
        a: "Siz de bizimle sinemaya gelmek ister misiniz?",
        b: "Annem de bu konuda benim kararımı destekliyor.",
        c: "Ece de Esra ile aynı okula başlayacakmış.",
        d: "Televizyonunda sesini kısarsanız iyi olur.",
               },
       answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        options: {
        a: "Sevgide sınır olmaz.",
        b: "Sadece babam değil, annemde biliyor.",
        c: "Babam fabrikada çalışıyor.",
        d: "Bugün okulda eğlence vardı.",
               },
       answer: "b",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
       options: {
        a: "Sen de bizimle gel.",
        b: "Başarıya ulaşmak için günde en az sekiz saat çalışacaksın.",
        c: "Hayatta kalabilmek için uğraşıyorlar.",
        d: "Yalnız kalsanda doğru olduğuna inandığın yoldan dönmeyeceksin.",
               },
       answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
       options: {
        a: "Yarın okul da parti varmış.",
        b: "Sende mi hastasın?",
        c: "Annem de komşuyla beraber pazara gitti.",
        d: "Ev de huzur kalmadı.",
               },
       answer: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
       options: {
        a: "Trende yolculuk yapmayı severim.",
        b: "Benimde saçlarıma karlar yağdı.",
        c: "Sokak da oyun oynuyorlar.",
        d: "Giderkende söylemiştim ama işe yaramadı.",
               },
       answer: "a",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
       options: {
        a: "Yazdığı hikayeler bir dergide yayımlandı.",
        b: "İki yıl Galatasaray Lisesinde çalıştı.",
        c: "Şiire merakı ilkokulda başlamıştı.",
        d: "Çocuklar için sadece masal değil, şiirlerde yazdı.",
               },
           answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
       options: {
        a: "Ayşe kalemini bende unutmuş.",
        b: "Yarınki geziye ben de geleceğim.",
        c: "Yüzündeki bende irileşme mi olmuş?",
        d: "Kitabın ben de, yarın getiririm.",
               },
       answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
      options: {
        a: "Gösteride ön sıralarda olmak çok güzel.",
        b: "Bir de ne göreyim? Arkadaşım yanıma gelmiş.",
        c: "Arkadaşlarınız kitaplığı da temizlesin.",
        d: "Gömleğim de mürekkep lekesi var.",
               },
       answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
      options: {
        a: "Cem de çok bozdu.",
        b: "Şişli Etfal Hastanesindeki teyzeyi de gördüm.",
        c: "Doktor maaşların da düzeltme olacak mı?",
        d: "İngilizce bilmeyen de kendine akademisyen demesin.",
               },
       answer: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
      options: {
        a: "Her kelimeyi ayrı yazayımda Türkçe biliyor sansınlar.",
        b: "Sen gidersen bende gelirim.",
        c: "Oysa yoğurtlu sosun da içimi ferahlatması gerekiyordu.",
        d: "Sonun da Nişantaşı Üniversitesini kazandım.",
               },
       answer: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
        options: {
        a: "Bu insanlar ne yapmak vede nereye varmak istemektedir?",
        b: "Onun karikatürleri de ahlakı gibi kötü.",
        c: "Gülümsede fotoğrafın güzel çıksın.",
        d: "Şuradada güzel bir dere varmış.",
               },
       answer: "b",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
      options: {
        a: "Blog yazımda senden bahsettim.",
        b: "Yazımda kışımda sensin benim.",
        c: "Yayında ve yapımda emeği geçenlere teşekkür ederim.",
        d: "Kar da zarar da ihtimal dahilindedir.",
               },
           answer: "b",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
      options: {
        a: "On soruyu doğru cevaplayınca sertifika da veriyorlarmış.",
        b: "Bilene kolay da bilmeyen için çok zor.",
        c: "Kendi dilini yazamayanda var.",
        d: "Ben hamburger ya da tost yiyeceğim.",
               },
           answer: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        options: {
        a: "Sarı sitede arabalar bir milyon olmuş.",
        b: "Market fiyatları da almış başını gidiyor.",
        c: "Yok mu güzel bir haber sen de?",
        d: "Kurulu düzeniniz olmasa da gelmezdiniz diye düşünüyorum.",
               },
           answer: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
       options: {
        a: "Televizyonu ay da yıl da bir açıyorum.",
        b: "Yapay zekada önemli ama önce insan olmak lazım.",
        c: "Sporda yapıyorum, diyette yapıyorum.",
        d: "Yüksek kaldırımda güpegündüz, Melahat'i almışım da sonra Alemdar'a gitmişim öyle mi?",
               },
           answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
      options: {
        a: "Gülşen de iyice abarttı.",
        b: "Ciddi ciddi gazete alıp da okuyan kaldı mı?",
        c: "Paralel evrenler teorisinide biliyorum.",
        d: "Hiçbiri.",
               },
           answer: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
       options: {
        a: "Ne ad ne de sanın kalır ve unutulur gidersin.",
        b: "Dün annem elimi tutarken bugün yirmi dokuz da doldu.",
        c: "Sade laf edene de at bir çizik ve de badeyi içip sapıtana yazık.",
        d: "Hiçbiri.",
               },
           answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
      options: {
        a: "Eksi kırk derece soğuk suda bile yüzerim inan ki.",
        b: "Uzaklarda bir yerlerde güneşler doğuyor.",
        c: "İki düğme iki ayrı kolda, bizim gibi ayrı yolda.",
        d: "Hiçbiri.",
               },
           answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        options: {
        a: "Bilgisayar ekranın da çentiğin ne işi var?",
        b: "Şarj aleti de mi vermiyorsunuz?",
        c: "Alnımızda keriz mi yazıyor?",
        d: "Yine de alacağım seni.",
               },
           answer: "a",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
       options: {
        a: "Şıklar da pek bir anlamlıydı.",
        b: "Köfte yiyeceksen Çatalca'da yiyeceksin.",
        c: "Farkında mısın için de bulunduğun durumun?",
        d: "Arabada beş, evde on beş defa tekrar ettim.",
               },
           answer: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
       options: {
        a: "Emlak balonu da patladı patlayacak.",
        b: "Eskiden salam da kaşar da lükstü.",
        c: "Olay yeri inceleme ekibi de gelmiş.",
        d: "Bunların teklif ettiği miktar deve de kulak.",
               },
           answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
       options: {
        a: "İyi hoşta sen neden bu işi yapmıyorsun?",
        b: "Dolandırıcılara on bin lira kaptırdı ama da ha akıllanmadı.",
        c: "Albayım da bizimle beraber geliyor.",
        d: "Balayın da hangi otele gittiniz?",
               },
           answer: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
       options: {
        a: "Dürümüde sever kendisi.",
        b: "Eski tadı kalmadı ama yinede takılıyoruz orada.",
        c: "Sedat, fareler için kapan da getirdin mi oğlum?",
        d: "Başak burcu olduğum için çokta etkilenmedim.",
               },
           answer: "c",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
      options: {
        a: "Melekte bana kartpostal göndermiş.",
        b: "Rize de görev yapan bir öğretmen tanıyorum.",
        c: "Kargaların gagaladığı kargolarda bu kutunun içinde mi?",
        d: "Tahsin Bey de iyi bir yazılımcıdır.",
               },
           answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        options: {
        a: "Kahvaltıda simitte ister misin?",
        b: "Görevdeyken de yemek yiyebilirsin.",
        c: "Doktorlar da sağlık çalışanıdır.",
        d: "Aleyna sahnede çok güzel dans etti.",
               },
           answer: "a",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
       options: {
        a: "Sende mi Brütüs?",
        b: "Kalem sende mi Brütüs?",
        c: "Sendeleme Brütüs!",
        d: "Sence de yanlış olmadı mı Brütüs?",
               },
           answer: "a",
    },
    {
        question: "Aşağıdakilerden hangisinde yazım yanlışı yoktur?",
       options: {
        a: "Ölülerde sanıyor ki diriler her gün helva yiyor.",
        b: "Evlenipte ne yapacaksın?",
        c: "Düğün için de 200000 kredi çektim.",
        d: "Boşanınca çocuğumu hiç te göremedim.",
               },
           answer: "c",
    },
    {
        question: "Aşağıdakilerden hangisinde yazım yanlışı yoktur?",
       options: {
        a: "Albayımda sabahları napalm kokusuna bayılır.",
        b: "Vals albayımında uzmanlık alanıdır.",
        c: "Albaylarında kalbi kırılabilir.",
        d: "Şimdi sana da albayına da başlayacağım!",
               },
           answer: "d",
    },
    {
        question: "Aşağıdakilerden hangisinde yazım yanlışı yoktur?",
       options: {
        a: "Hayatta bir kumar değil mi zaten?",
        b: "Hayatta kalırsa kesin intikamını alır.",
        c: "Hayat da en hakiki mürşit ilimdir.",
        d: "Hayat ta güzel ama bedeli var.",
               },
           answer: "b",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        options: {
        a: "Ben de özledim ben de. Resmin var şu an elimde.",
        b: "Ben suyumu kazandım da içtim.",
        c: "Yıllar ikimizden de çok şeyler götürmüş.",
        d: "Dahi anlamındaki de sitesinin adminide çok yakışıklı.",
               },
           answer: "d",
    },
    {
        question: "Hangi cümlede birden fazla yazım yanlışı yapılmıştır?",
        options: {
        a: "Sende bir şeyi beğen be adam!",
        b: "Her yerde senin adın yazılı.",
        c: "Halbuki ne hayallerimiz vardı ikimizinde.",
        d: "Koltuk da otura otura bende senin gibi şişmanladım.",
               },
           answer: "d",
    },
    {
        question: "Aşağıdakilerden hangisinde yazım yanlışı yoktur?",
      options: {
        a: "Senide gördüğüme sevindim.",
        b: "Piknik için simitte aldım.",
        c: "O dizi de en sevdiğim oyuncu oynuyor.",
        d: "Ben de seni çok özledim.",
               },
           answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
       options: {
        a: "Her cümle de hata mı aranır?",
        b: "Sen de çok olmaya başladın.",
        c: "Bu yaz tatilide hemen geçiveriyor.",
        d: "Çokta umrumdaydı sanki.",
               },
           answer: "b",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
        options: {
        a: "Katkıda bulunmak güzel de soru bulmak zor.",
        b: "Bir de baktım evde hiç süt kalmamış.",
        c: "O ürünün içinde zararlı yağlar da var.",
        d: "Hangisinde katkı olmadığını söylede bilelim.",
               },
           answer: "d",
    },
    {
        question: "Aşağıdaki şarkı sözlerinin hangisinde yazım yanlışı vardır?",
       options: {
        a: "Sen de benim kadar gerçekleri biliyorsun.",
        b: "Umurum da değil seviyorum.",
        c: "Seni bu dünyada en çok kim sever?",
        d: "Gel sen ne çektiğimi bir de bana sor.",
               },
           answer: "b",
    },
        {
        question: "Aşağıdakilerden hangisinde yazım yanlışı yoktur?",
        options: {
        a: "Karadeniz de gemilerin mi battı?",
        b: "Gemiler de talim var.",
        c: "Hastalık da ve sağlık da birlikte olalım.",
        d: "Eğitimsizim ama para bende.",
               },
           answer: "d",
    },
    {
        question: "Aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?",
       options: {
        a: "Ekşi Sözlük'te viral olduk iyi mi?",
        b: "Yedi saatte yüz bin kişi sertifika almış.",
        c: "Bazı yazarlarda o soruda kesme işareti yok diye eleştirmiş.",
        d: "TDK kurum adlarına gelen eklerin yazım kurallarını değiştirdi.",
               },
           answer: "c",
    },
];
