# Güney Azərbaycan Təqvimi / گونئی آذربایجان تقویمی

Şəmsi Hicri (İran) təqvimi əsasında Güney Azərbaycan təqvimi. Miladi və qəməri tarixlər də göstərilir.
Saf HTML, CSS və JavaScript; heç bir kitabxana, build və ya server tələb etmir.

## Xüsusiyyətlər
- Şəmsi təqvim, Güney Azərbaycan türkcəsi ay və gün adları (Latın və ərəb əlifbası, RTL)
- Hər gündə miladi və qəməri tarix
- Milli, dini, rəsmi və fəsil münasibətləri (filtr düymələri ilə)
- 4 tema: Təbriz, Gecə, Xalça, Səhənd
- Analoq və rəqəmsal saat
- Ayarlar, günün münasibəti üçün xəbərdarlıq, gün üzrə xatırlatmalar
- Ayarlar və xatırlatmalar brauzerin `localStorage`-ında saxlanılır

## İşə salmaq
`index.html` faylını brauzerdə açın. Və ya:

    python3 -m http.server 8000

və `http://localhost:8000` ünvanına keçin.

## Fayl quruluşu
    index.html      səhifə quruluşu
    css/style.css   temalar (data-theme) və görünüş
    js/app.js       təqvim hesabı, məlumatlar, ayarlar, bildirişlər, saat
    favicon.svg     ikon

## Qeydləri necə əlavə etməli
`js/app.js` faylında `E(açar, latınca ad, ərəbcə ad, qırmızı(1/0), növ)` sətirlərinə baxın.
Açar: `j:ay/gün` (şəmsi), `g:ay/gün` (miladi), `h:ay/gün` (qəməri).
Növ: `m` milli, `d` dini, `r` rəsmi, `f` fəsil.

## Yeni tema əlavə etmək
`css/style.css` faylında `[data-theme="ad"]` blokunu kopyalayın və `js/app.js`-də `THEMES` siyahısına əlavə edin.

## GitHub Pages ilə yayımlamaq
Repo > Settings > Pages > Branch: `main`, qovluq `/ (root)`.

## Məlum məhdudiyyətlər
- Qəməri və dini tarixlər hesablanır, İranın rəsmi təqvimindən 1–2 gün fərqlənə bilər.
- Bildirişlər səhifə açıq olanda işləyir. Bağlı olanda bildiriş üçün PWA (service worker və push) lazımdır.
- Ərəb əlifbasındakı tərcümələri bir ana dili daşıyıcısı yoxlamalıdır.
