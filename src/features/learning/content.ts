export type Skill = "listening" | "speaking" | "reading" | "writing";
export interface Vocabulary {
  word: string;
  meaning: string;
  example: string;
  chunk: string;
}
export interface Activity {
  kind: "choice" | "writing" | "speaking";
  prompt: string;
  options?: string[];
  answer: string;
  explanation: string;
}
export interface Lesson {
  id: string;
  title: string;
  icon: string;
  skill: Skill;
  explanation: string;
  examples: string[];
  vocabulary: Vocabulary[];
  activities: Activity[];
  task: string;
}
export type Level = "A1" | "A2" | "B1";
export interface Unit {
  id: string;
  level: Level;
  title: string;
  description: string;
  lessons: Lesson[];
}
const v = (word: string, meaning: string, example: string, chunk: string): Vocabulary => ({
  word,
  meaning,
  example,
  chunk,
});
const choice = (
  prompt: string,
  options: string[],
  answer: string,
  explanation: string,
): Activity => ({ kind: "choice", prompt, options, answer, explanation });
const specifications = [
[
    "english-alphabet",
    "الفبای انگلیسی",
    "🔤",
    "reading",
    `LEVEL A1 – BEGINNER
LESSON 01: ENGLISH ALPHABET
درس اول: الفبای انگلیسی

بخش اول: معرفی درس
1. Learning Objectives – اهداف آموزشی
در پایان این درس، زبان‌آموز می‌تواند:
1. با الفبای انگلیسی و تعداد حروف آن آشنا شود.
2. ۲۶ حرف انگلیسی را به ترتیب نام ببرد.
3. شکل بزرگ (Uppercase) و کوچک (Lowercase) حروف را تشخیص دهد.
4. نام و تلفظ حروف الفبا را یاد بگیرد.
5. حروف صدادار و بی‌صدا را از یکدیگر تشخیص دهد.
6. حروفی را که شکل یا نام مشابهی دارند، از یکدیگر تشخیص دهد.
7. حروف جاافتاده در ترتیب الفبا را پیدا کند.
8. حروف بزرگ و کوچک یکدیگر را به هم متصل کند.
نکته: در این درس هدف، یادگیری نام و شکل حروف است؛ نه خواندن کلمات انگلیسی.

بخش دوم: آشنایی با الفبای انگلیسی
2. What Is the English Alphabet?
الفبای انگلیسی از ۲۶ حرف تشکیل شده است.
در زبان انگلیسی، هر حرف معمولاً دو شکل دارد:
Uppercase: حرف بزرگ
Lowercase: حرف کوچک
نمونه‌های تطبیق: A – a؛ B – b؛ C – c؛ D – d؛ E – e.
A و a دو حرف متفاوت نیستند؛ هر دو شکل یک حرف هستند.
نکته مهم: در ابتدای جمله‌ها و برای نوشتن نام افراد، کشورها و بعضی اسم‌های خاص معمولاً از حروف بزرگ استفاده می‌کنیم.
اما فعلاً لازم نیست این قواعد را حفظ کنید؛ در این درس فقط شکل بزرگ و کوچک حروف را یاد بگیرید.

بخش سوم: جدول کامل الفبای انگلیسی
3. The English Alphabet – 26 Letters
1. A – a؛ نام: A؛ تلفظ تقریبی: اِی؛ IPA: /eɪ/.
2. B – b؛ نام: Bee؛ تلفظ تقریبی: بی؛ IPA: /biː/.
3. C – c؛ نام: Cee؛ تلفظ تقریبی: سی؛ IPA: /siː/.
4. D – d؛ نام: Dee؛ تلفظ تقریبی: دی؛ IPA: /diː/.
5. E – e؛ نام: E؛ تلفظ تقریبی: ای؛ IPA: /iː/.
6. F – f؛ نام: Ef؛ تلفظ تقریبی: اِف؛ IPA: /ɛf/.
7. G – g؛ نام: Gee؛ تلفظ تقریبی: جی؛ IPA: /dʒiː/.
8. H – h؛ نام: Aitch؛ تلفظ تقریبی: اِیچ؛ IPA: /eɪtʃ/.
9. I – i؛ نام: I؛ تلفظ تقریبی: آی؛ IPA: /aɪ/.
10. J – j؛ نام: Jay؛ تلفظ تقریبی: جِی؛ IPA: /dʒeɪ/.
11. K – k؛ نام: Kay؛ تلفظ تقریبی: کِی؛ IPA: /keɪ/.
12. L – l؛ نام: El؛ تلفظ تقریبی: اِل؛ IPA: /ɛl/.
13. M – m؛ نام: Em؛ تلفظ تقریبی: اِم؛ IPA: /ɛm/.
14. N – n؛ نام: En؛ تلفظ تقریبی: اِن؛ IPA: /ɛn/.
15. O – o؛ نام: O؛ تلفظ تقریبی: اُو؛ IPA: /oʊ/.
16. P – p؛ نام: Pee؛ تلفظ تقریبی: پی؛ IPA: /piː/.
17. Q – q؛ نام: Cue؛ تلفظ تقریبی: کیو؛ IPA: /kjuː/.
18. R – r؛ نام: Ar؛ تلفظ تقریبی: آر؛ IPA: /ɑːr/.
19. S – s؛ نام: Ess؛ تلفظ تقریبی: اِس؛ IPA: /ɛs/.
20. T – t؛ نام: Tee؛ تلفظ تقریبی: تی؛ IPA: /tiː/.
21. U – u؛ نام: U؛ تلفظ تقریبی: یو؛ IPA: /juː/.
22. V – v؛ نام: Vee؛ تلفظ تقریبی: وی؛ IPA: /viː/.
23. W – w؛ نام: Double U؛ تلفظ تقریبی: دابل‌یو؛ IPA: /ˈdʌbəl.juː/.
24. X – x؛ نام: Ex؛ تلفظ تقریبی: اِکس؛ IPA: /ɛks/.
25. Y – y؛ نام: Why؛ تلفظ تقریبی: وای؛ IPA: /waɪ/.
26. Z – z؛ نام: Zee / Zed؛ تلفظ تقریبی: زی / زِد؛ IPA: /ziː/ – /zed/.
نکات تلفظی:
تلفظ‌های تقریبی فارسی فقط برای کمک به شروع یادگیری هستند؛ تلفظ دقیق را باید با شنیدن و تکرار یاد گرفت.
در انگلیسی آمریکایی، نام حرف Z معمولاً /ziː/ و در انگلیسی بریتانیایی معمولاً /zed/ است.
در این دوره، تلفظ آمریکایی مبنای اصلی آموزش است؛ بنابراین Z را فعلاً «زی» یاد می‌گیریم.
نام حرف H در انگلیسی آمریکایی معمولاً /eɪtʃ/ است؛ شکل دیگری از تلفظ آن نیز در بعضی گونه‌های انگلیسی شنیده می‌شود.

بخش چهارم: حروف بزرگ و کوچک
4. Uppercase and Lowercase Letters
هر حرف انگلیسی دو شکل اصلی دارد.
A – a؛ B – b؛ C – c؛ D – d؛ E – e؛ F – f؛ G – g؛ H – h؛ I – i؛ J – j؛ K – k؛ L – l؛ M – m؛ N – n؛ O – o؛ P – p؛ Q – q؛ R – r؛ S – s؛ T – t؛ U – u؛ V – v؛ W – w؛ X – x؛ Y – y؛ Z – z.
تمرین مشاهده: به نمونه‌های A و a، B و b، C و c، D و d، E و e، F و f، G و g، H و h، I و i، J و j توجه کنید.
تمرین: سعی کنید شکل کوچک هر حرف را کنار شکل بزرگ آن قرار دهید.

بخش پنجم: حروف صدادار و بی‌صدا
5. Vowels and Consonants
در الفبای انگلیسی، پنج حرف اصلی صدادار وجود دارد.
Vowels – حروف صدادار: A – a؛ E – e؛ I – i؛ O – o؛ U – u.
این پنج حرف را باید به‌خوبی به خاطر بسپارید: A – E – I – O – U.
Consonants – حروف بی‌صدا:
B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z.
نکته درباره حرف Y: حرف Y در بعضی کلمات نقش صدادار هم دارد؛ اما برای شروع یادگیری، پنج حرف A, E, I, O, U را به‌عنوان حروف صدادار اصلی حفظ کنید.

بخش ششم: ترتیب حروف الفبا
6. Alphabetical Order
ترتیب حروف الفبای انگلیسی:
A – B – C – D – E – F – G – H – I – J – K – L – M – N – O – P – Q – R – S – T – U – V – W – X – Y – Z.
الفبا را در پنج گروه تمرین کنید:
Group 1: A – B – C – D – E.
Group 2: F – G – H – I – J.
Group 3: K – L – M – N – O.
Group 4: P – Q – R – S – T.
Group 5: U – V – W – X – Y – Z.
روش پیشنهادی یادگیری:
1. ابتدا گروه اول را سه بار با صدای بلند تکرار کنید.
2. سپس گروه دوم را تمرین کنید.
3. گروه‌های بعدی را به همین روش یاد بگیرید.
4. در پایان، تمام حروف را از A تا Z پشت سر هم بگویید.
5. سپس سعی کنید بدون نگاه کردن به جدول، الفبا را تکرار کنید.

بخش هفتم: حروفی که ممکن است اشتباه گرفته شوند
7. Similar-Looking Letters
b و d: جهت قرار گرفتن قسمت گرد متفاوت است.
p و q: جهت قرار گرفتن قسمت گرد متفاوت است.
m و n: تعداد قوس‌ها متفاوت است.
u و v: شکل انتهایی متفاوت است.
i و j: حرف j دارای امتداد رو به پایین است.
c و o: حرف c باز است؛ حرف o بسته است.
حروفی که نام آن‌ها ممکن است اشتباه شنیده شود:
B /biː/؛ P /piː/؛ D /diː/؛ T /tiː/؛ M /ɛm/؛ N /ɛn/؛ G /dʒiː/؛ J /dʒeɪ/.
برای یادگیری بهتر، این حروف را جداگانه و با دقت گوش کنید و تکرار کنید.

بخش هشتم: تمرین تلفظ
8. Pronunciation Practice
تمرین اول: A – B – C – D – E.
تمرین دوم: F – G – H – I – J.
تمرین سوم: K – L – M – N – O.
تمرین چهارم: P – Q – R – S – T.
تمرین پنجم: U – V – W – X – Y – Z.
تمرین ششم: B – P؛ D – T؛ G – J؛ M – N؛ V – W.
نکته آموزشی: نام حرف با صدای آن در داخل کلمه یکسان نیست.
برای مثال، نام حرف A برابر /eɪ/ است؛ اما این موضوع به معنی آن نیست که A در تمام کلمات همین صدا را دارد.
یادگیری صداهای حروف در کلمات، در درس‌های بعدی انجام می‌شود.

بخش نهم: تمرین نوشتن حروف
9. Letter Writing Practice
تمرین اول: حروف بزرگ را هرکدام چند بار بنویسید:
A A A A A؛ B B B B B؛ C C C C C؛ D D D D D؛ E E E E E؛ F F F F F؛ G G G G G؛ H H H H H؛ I I I I I؛ J J J J J؛ K K K K K؛ L L L L L؛ M M M M M؛ N N N N N؛ O O O O O؛ P P P P P؛ Q Q Q Q Q؛ R R R R R؛ S S S S S؛ T T T T T؛ U U U U U؛ V V V V V؛ W W W W W؛ X X X X X؛ Y Y Y Y Y؛ Z Z Z Z Z.
تمرین دوم: حروف کوچک را هرکدام چند بار بنویسید:
a a a a a؛ b b b b b؛ c c c c c؛ d d d d d؛ e e e e e؛ f f f f f؛ g g g g g؛ h h h h h؛ i i i i i؛ j j j j j؛ k k k k k؛ l l l l l؛ m m m m m؛ n n n n n؛ o o o o o؛ p p p p p؛ q q q q q؛ r r r r r؛ s s s s s؛ t t t t t؛ u u u u u؛ v v v v v؛ w w w w w؛ x x x x x؛ y y y y y؛ z z z z z.

بخش دهم: آزمون پایان درس
10. END-OF-UNIT TEST
آزمون درس اول: الفبای انگلیسی.
سطح: A1 – Beginner.
موضوع آزمون: English Alphabet.
تعداد سؤال‌ها: ۳۰ سؤال.
نمره کل: ۳۰.
زمان پیشنهادی: ۲۰ تا ۲۵ دقیقه.
اهداف آزمون: تشخیص حروف بزرگ و کوچک؛ شناخت نام حروف؛ شناخت ترتیب الفبا؛ تشخیص حروف صدادار؛ تشخیص حروف مشابه؛ پیدا کردن حروف جاافتاده.
توجه: تمام دستورالعمل‌های آزمون به فارسی هستند.
زبان‌آموز برای پاسخ دادن به این آزمون نیازی به خواندن کلمات یا جملات انگلیسی ندارد.
بخش اول – تطبیق حروف بزرگ و کوچک، سؤال‌های ۱ تا ۵:
1. A، B، C، D، E را به‌ترتیب به a، b، c، d، e وصل کنید؛ گزینه‌ها: a – c – e – b – d.
2. F، G، H، I، J را به f، g، h، i، j وصل کنید؛ گزینه‌ها: j – f – h – g – i.
3. K، L، M، N، O را به k، l، m، n، o وصل کنید؛ گزینه‌ها: n – k – o – m – l.
4. P، Q، R، S، T را به p، q، r، s، t وصل کنید؛ گزینه‌ها: s – p – t – r – q.
5. U، V، W، X، Y، Z را به u، v، w، x، y، z وصل کنید؛ گزینه‌ها: z – w – u – y – v – x.
بخش دوم – تشخیص حروف، سؤال‌های ۶ تا ۱۰:
6. کدام گزینه حرف A کوچک است؟ A) A؛ B) a؛ C) B؛ D) b.
7. کدام گزینه حرف D بزرگ است؟ A) d؛ B) b؛ C) D؛ D) p.
8. کدام گزینه حرف M کوچک است؟ A) M؛ B) N؛ C) m؛ D) n.
9. کدام گزینه حرف G بزرگ است؟ A) g؛ B) G؛ C) J؛ D) j.
10. کدام گزینه حرف R کوچک است؟ A) R؛ B) r؛ C) P؛ D) p.
بخش سوم – ترتیب حروف الفبا، سؤال‌های ۱۱ تا ۱۵:
11. A – B – _____ – D – E.
12. F – G – H – _____ – J.
13. K – L – _____ – N – O.
14. P – Q – R – _____ – T.
15. V – W – _____ – Y – Z.
بخش چهارم – حروف صدادار، سؤال‌های ۱۶ تا ۲۰:
16. کدام گزینه یک حرف صدادار است؟ A) B؛ B) D؛ C) A؛ D) F.
17. کدام گزینه یک حرف بی‌صدا است؟ A) E؛ B) I؛ C) O؛ D) M.
18. کدام مجموعه شامل پنج حرف صدادار اصلی است؟ A) A, B, C, D, E؛ B) A, E, I, O, U؛ C) B, C, D, F, G؛ D) I, J, K, L, M.
19. کدام حرف در گروه حروف صدادار اصلی قرار ندارد؟ A) A؛ B) E؛ C) U؛ D) T.
20. تعداد حروف صدادار اصلی انگلیسی چند عدد است؟ A) ۳؛ B) ۴؛ C) ۵؛ D) ۶.
بخش پنجم – تشخیص حروف مشابه، سؤال‌های ۲۱ تا ۲۴:
21. کدام گزینه حرف b است؟ A) d؛ B) b؛ C) p؛ D) q.
22. کدام گزینه حرف q است؟ A) p؛ B) b؛ C) d؛ D) q.
23. کدام گزینه حرف کوچک n است؟ A) m؛ B) n؛ C) u؛ D) v.
24. کدام گزینه حرف کوچک j است؟ A) i؛ B) l؛ C) j؛ D) t.
بخش ششم – شناخت و نام حروف، سؤال‌های ۲۵ تا ۲۸:
25. حرفی را انتخاب کنید که نام آن /biː/ است: A) B؛ B) P؛ C) D؛ D) T.
26. حرفی را انتخاب کنید که نام آن /siː/ است: A) G؛ B) C؛ C) J؛ D) K.
27. کدام حرف نام /aɪ/ دارد؟ A) E؛ B) A؛ C) I؛ D) O.
28. کدام حرف نام /dʒeɪ/ دارد؟ A) G؛ B) J؛ C) C؛ D) Z.
بخش هفتم – ترتیب و شمارش الفبا، سؤال‌های ۲۹ و ۳۰:
29. کدام حرف بعد از M قرار می‌گیرد؟ A) L؛ B) N؛ C) O؛ D) P.
30. آخرین حرف الفبای انگلیسی کدام است؟ A) X؛ B) Y؛ C) Z؛ D) W.

بخش یازدهم: آزمون شفاهی تلفظ و شناخت حروف
11. Oral Alphabet Assessment
این بخش توسط مدرس اجرا می‌شود و زبان‌آموز نیازی به خواندن دستورالعمل ندارد.
نمره پیشنهادی: ۱۰.
فعالیت ۱ – نام بردن حروف: مدرس پنج حرف را به‌صورت تصادفی نشان می‌دهد.
زبان‌آموز باید نام هر حرف را بیان کند.
نمونه حروف: A – F – M – R – Z.
معیار ارزیابی: پنج حرف صحیح، پنج نمره؛ هر حرف صحیح، یک نمره.
فعالیت ۲ – تشخیص حروف از روی نام: مدرس نام پنج حرف را با صدای بلند می‌گوید.
زبان‌آموز باید حرف مربوط را از میان چند کارت انتخاب کند.
نمونه: نام حرف B؛ نام حرف G؛ نام حرف K؛ نام حرف P؛ نام حرف W.
معیار ارزیابی: پنج پاسخ صحیح، پنج نمره؛ هر پاسخ صحیح، یک نمره.
نکته اجرایی: مدرس باید نام حروف را واضح و طبیعی تلفظ کند و در صورت نیاز برای هر حرف فقط یک بار آن را تکرار کند.

بخش دوازدهم: پاسخ‌نامه کامل
12. Answer Key
بخش اول: 1) A-a / B-b / C-c / D-d / E-e؛ 2) F-f / G-g / H-h / I-i / J-j؛ 3) K-k / L-l / M-m / N-n / O-o؛ 4) P-p / Q-q / R-r / S-s / T-t؛ 5) U-u / V-v / W-w / X-x / Y-y / Z-z.
بخش دوم: 6) B؛ 7) C؛ 8) C؛ 9) B؛ 10) B.
بخش سوم: 11) C؛ 12) I؛ 13) M؛ 14) S؛ 15) X.
بخش چهارم: 16) C؛ 17) D؛ 18) B؛ 19) D؛ 20) C.
بخش پنجم: 21) B؛ 22) D؛ 23) B؛ 24) C.
بخش ششم: 25) A؛ 26) B؛ 27) C؛ 28) B.
بخش هفتم: 29) B؛ 30) C.

بخش سیزدهم: توضیح پاسخ‌ها
13. Answer Explanations
سؤال ۶: حرف کوچک A به شکل a نوشته می‌شود.
سؤال ۷: شکل بزرگ حرف D به صورت D است.
سؤال ۸: شکل کوچک حرف M به صورت m است.
سؤال ۹: شکل بزرگ حرف G به صورت G است.
سؤال ۱۰: شکل کوچک حرف R به صورت r است.
سؤال ۱۱: ترتیب صحیح A, B, C, D, E است؛ بنابراین حرف جاافتاده C است.
سؤال ۱۲: ترتیب صحیح F, G, H, I, J است؛ بنابراین حرف جاافتاده I است.
سؤال ۱۳: ترتیب صحیح K, L, M, N, O است؛ بنابراین حرف جاافتاده M است.
سؤال ۱۴: ترتیب صحیح P, Q, R, S, T است؛ بنابراین حرف جاافتاده S است.
سؤال ۱۵: ترتیب صحیح V, W, X, Y, Z است؛ بنابراین حرف جاافتاده X است.
سؤال ۱۶: حرف A یکی از پنج حرف صدادار اصلی است.
سؤال ۱۷: حرف M یک حرف بی‌صدا است.
سؤال ۱۸: پنج حرف صدادار اصلی عبارت‌اند از A, E, I, O, U.
سؤال ۱۹: حرف T در گروه حروف بی‌صدا قرار دارد.
سؤال ۲۰: در آموزش مقدماتی انگلیسی، پنج حرف صدادار اصلی معرفی می‌شوند.
سؤال ۲۱: حرف b با حرف d تفاوت دارد و قسمت گرد آن در سمت راست قرار گرفته است.
سؤال ۲۲: حرف q شکل متفاوتی از p، b و d دارد.
سؤال ۲۳: حرف n دارای یک قوس است؛ درحالی‌که حرف m دو قوس دارد.
سؤال ۲۴: حرف j دارای امتداد رو به پایین است.
سؤال ۲۵: نام حرف B برابر /biː/ است.
سؤال ۲۶: نام حرف C برابر /siː/ است.
سؤال ۲۷: نام حرف I برابر /aɪ/ است.
سؤال ۲۸: نام حرف J برابر /dʒeɪ/ است.
سؤال ۲۹: حرف N بعد از M قرار می‌گیرد.
سؤال ۳۰: حرف Z آخرین حرف الفبای انگلیسی است.

بخش چهاردهم: معیار ارزیابی آزمون
14. Assessment Criteria
آزمون کتبی: تعداد سؤال‌ها ۳۰؛ هر سؤال یک نمره؛ نمره کل ۳۰.
آزمون شفاهی: نمره کل ۱۰.
نمره نهایی پیشنهادی: آزمون کتبی ۳۰؛ آزمون شفاهی ۱۰؛ مجموع ۴۰.
تفسیر عملکرد:
۹۰ تا ۱۰۰٪: بسیار خوب؛ آمادگی ورود به درس بعد.
۷۵ تا ۸۹٪: خوب؛ مرور کوتاه و ورود به درس بعد.
۶۰ تا ۷۴٪: نیازمند تمرین؛ تمرین دوباره حروف اشتباه.
کمتر از ۶۰٪: نیازمند یادگیری مجدد؛ تکرار بخش‌های اصلی درس.
نکته: این درصدها معیار پیشنهادی آموزشی هستند، نه استاندارد آماری اعتبارسنجی‌شده.
اگر زبان‌آموز در شناخت حروف یا تلفظ آن‌ها مشکل اساسی دارد، بهتر است پیش از ورود به درس بعد تمرین بیشتری انجام دهد.

بخش پانزدهم: راهنمای مدرس
15. Teacher Notes
ترتیب آموزش:
1. معرفی مفهوم الفبا.
2. نمایش ۲۶ حرف بزرگ.
3. نمایش حروف کوچک.
4. تطبیق حروف بزرگ و کوچک.
5. آموزش نام و تلفظ حروف.
6. معرفی پنج حرف صدادار اصلی.
7. تمرین ترتیب حروف.
8. تمرین حروف مشابه.
9. اجرای آزمون.
نکات مهم برای زبان‌آموز کاملاً مبتدی:
در این درس نباید از زبان‌آموز انتظار خواندن کلمات انگلیسی داشت.
دستورالعمل تمرین‌ها و آزمون باید به فارسی توضیح داده شود.
در ابتدای کار، هر حرف باید هم به‌صورت بزرگ و هم به‌صورت کوچک نمایش داده شود.
بهتر است مدرس از کارت‌های تصویری حروف استفاده کند.
زبان‌آموز باید نام حروف را با صدای بلند تکرار کند.
اشتباه در تلفظ حروف باید با تکرار و شنیدن نمونه صحیح اصلاح شود.
لازم نیست تمام ۲۶ حرف در یک جلسه آموزش داده شوند؛ می‌توان آموزش را در چند جلسه کوتاه تقسیم کرد.
روش پیشنهادی تمرین در خانه: زبان‌آموز روزانه ۱۰ تا ۱۵ دقیقه تمرین کند.
۵ دقیقه مشاهده و شناخت حروف بزرگ و کوچک.
۵ دقیقه گوش دادن و تکرار نام حروف.
۵ دقیقه تمرین ترتیب الفبا.
معیار آمادگی برای درس دوم:
پیش از ورود به درس دوم، زبان‌آموز باید بتواند حروف بزرگ و کوچک را تشخیص دهد.
باید دست‌کم بیشتر حروف را با نام صحیح بیان کند.
باید الفبا را با ترتیب قابل قبول تکرار کند.
باید پنج حرف صدادار اصلی را شناسایی کند.
اگر زبان‌آموز در چند حرف خاص مشکل دارد، همان حروف باید دوباره تمرین شوند.

پایان درس اول
در این درس زبان‌آموز با ۲۶ حرف الفبای انگلیسی، حروف بزرگ و کوچک، نام و تلفظ حروف، حروف صدادار و ترتیب الفبا آشنا شد.
درس بعدی: درس ۰۲ – هجی کردن کلمات و اسامی (Spelling).
در درس بعد، زبان‌آموز یاد می‌گیرد چگونه حروف را کنار هم قرار دهد، نام خود را هجی کند و املای نام افراد را بپرسد.`,
    [
      "A – B – C – D – E – F – G – H – I – J – K – L – M – N – O – P – Q – R – S – T – U – V – W – X – Y – Z",
      "Uppercase: A, B, C, D, E. Lowercase: a, b, c, d, e.",
      "The five main vowels are A, E, I, O, U.",
      "B – P; D – T; G – J; M – N; V – W.",
      "How do you spell your name?"
    ],
    [
      v("alphabet", "الفبا", "The English alphabet has 26 letters.", "English alphabet"),
      v("uppercase", "حرف بزرگ", "A is an uppercase letter.", "uppercase letter"),
      v("lowercase", "حرف کوچک", "a is a lowercase letter.", "lowercase letter"),
      v("vowel", "حرف صدادار", "A is a vowel.", "five vowels"),
      v("consonant", "حرف بی‌صدا", "B is a consonant.", "English consonant"),
      v("letter", "حرف", "There are 26 letters.", "English letter"),
      v("spell", "هجی کردن", "Spell your name.", "spell your name")
    ],
    choice(
      "کدام مجموعه شامل پنج حرف صدادار اصلی انگلیسی است؟",
      ["A, E, I, O, U", "A, B, C, D, E", "B, C, D, F, G"],
      "A, E, I, O, U",
      "پنج حرف صدادار اصلی عبارت‌اند از A, E, I, O, U."
    ),
    "الفبای انگلیسی را از A تا Z با صدای بلند تکرار کن. سپس شکل بزرگ و کوچک حروف را به هم وصل کن و پنج حرف صدادار اصلی را نام ببر."
  ],
[
    "spelling",
    "هجی کردن کلمات و اسامی",
    "🔠",
    "speaking",
    `LEVEL A1 – BEGINNER
LESSON 02: SPELLING
درس دوم: هجی کردن کلمات و اسامی

بخش اول: اهداف آموزشی
در پایان این درس، زبان‌آموز می‌تواند مفهوم هجی کردن را درک کند، حروف کلمات ساده را به ترتیب بیان کند، نام کوچک و نام خانوادگی خود را هجی کند، درباره املای نام افراد سؤال بپرسد و درخواست کند یک کلمه دوباره و آهسته هجی شود.
همچنین تفاوت First Name، Last Name و Surname را تشخیص می‌دهد و حروفی را که نام مشابهی دارند با دقت بیشتری تلفظ می‌کند.
پیش‌نیاز: آشنایی مقدماتی با ۲۶ حرف الفبای انگلیسی و نام حروف.
نکته: در این درس لازم نیست زبان‌آموز متن انگلیسی بخواند. کلمات و حروف جداگانه و با کمک مدرس آموزش داده می‌شوند.

بخش دوم: مفهوم هجی کردن – What Is Spelling?
Spelling
هجی کردن یعنی بیان حروف تشکیل‌دهنده یک کلمه به ترتیب صحیح.
CAT
C – A – T
کلمه CAT از سه حرف تشکیل شده است.
نام حروف را بیان می‌کنیم، نه صدای آن‌ها را درون کلمه.
C – A – T
/siː/ – /eɪ/ – /tiː/
بنابراین هجی کردن با خواندن یک کلمه تفاوت دارد.
نمونه‌های ساده:
CAT — C – A – T
DOG — D – O – G
PEN — P – E – N
BAG — B – A – G
BUS — B – U – S
BOOK — B – O – O – K

بخش سوم: واژگان اصلی – Vocabulary Bank
Spell
هجی کردن؛ املای یک کلمه را بیان کردن.
I can spell my name.
من می‌توانم نامم را هجی کنم.
Can you spell this word?
آیا می‌توانی این کلمه را هجی کنی؟
Letter
حرف الفبا.
A is a letter.
A یک حرف است.
My name has five letters.
نام من پنج حرف دارد.
Name
نام، اسم.
My name is Ali.
نام من علی است.
What is your name?
نام تو چیست؟
First Name
نام کوچک.
My first name is Sara.
نام کوچک من سارا است.
Please spell your first name.
لطفاً نام کوچکت را هجی کن.
Last Name
نام خانوادگی.
My last name is Brown.
نام خانوادگی من براون است.
What is your last name?
نام خانوادگی تو چیست؟
Surname
نام خانوادگی.
My surname is Smith.
نام خانوادگی من اسمیت است.
Last Name و Surname هر دو به معنی نام خانوادگی هستند. Last Name در انگلیسی آمریکایی بسیار رایج است.
Word
کلمه، واژه.
This is a short word.
این یک کلمه کوتاه است.
Can you spell this word?
آیا می‌توانی این کلمه را هجی کنی؟
Alphabet
الفبا.
The English alphabet has 26 letters.
الفبای انگلیسی ۲۶ حرف دارد.
Let's learn the alphabet.
بیا الفبا را یاد بگیریم.

بخش چهارم: عبارت‌های کاربردی – Useful Expressions
How do you spell it?
چطور آن را هجی می‌کنید؟
Can you spell that?
می‌توانید آن را هجی کنید؟
How do you write it?
آن را چطور می‌نویسید؟
Can you repeat that?
می‌توانید آن را تکرار کنید؟
Slowly, please.
لطفاً آهسته‌تر.
How do you spell your first name?
نام کوچکتان را چطور هجی می‌کنید؟
How do you spell your last name?
نام خانوادگی‌تان را چطور هجی می‌کنید؟
Could you say that again?
ممکن است دوباره آن را بگویید؟
نمونه مکالمه:
What is your name?
نام شما چیست؟
My name is David.
نام من دیوید است.
How do you spell it?
چطور آن را هجی می‌کنید؟
D – A – V – I – D.

بخش پنجم: نام کوچک و نام خانوادگی – First Name and Last Name
First Name
نام کوچک.
Last Name
نام خانوادگی.
Full Name
نام کامل.
Surname
نام خانوادگی.
David Brown
First Name: David
نام کوچک: David
Last Name: Brown
نام خانوادگی: Brown
Full Name: David Brown
نام کامل: David Brown
در بسیاری از فرم‌های انگلیسی، نام کوچک و نام خانوادگی در دو قسمت جداگانه نوشته می‌شوند.

بخش ششم: هجی کردن کلمات ساده – Spelling Simple Words
CAT — C – A – T — سه حرف
DOG — D – O – G — سه حرف
PEN — P – E – N — سه حرف
BAG — B – A – G — سه حرف
BUS — B – U – S — سه حرف
BOX — B – O – X — سه حرف
SUN — S – U – N — سه حرف
MAP — M – A – P — سه حرف
BOOK — B – O – O – K — چهار حرف
FISH — F – I – S – H — چهار حرف
MILK — M – I – L – K — چهار حرف
DESK — D – E – S – K — چهار حرف
BALL — B – A – L – L — چهار حرف
TREE — T – R – E – E — چهار حرف
NAME — N – A – M – E — چهار حرف
تمرین شفاهی: مدرس یک کلمه را نشان می‌دهد. زبان‌آموز حروف آن را تشخیص می‌دهد و نام حروف را به ترتیب بیان می‌کند.

بخش هفتم: هجی کردن نام افراد – Spelling People's Names
Ali — A – L – I
Sara — S – A – R – A
David — D – A – V – I – D
Emma — E – M – M – A
John — J – O – H – N
Maria — M – A – R – I – A
اسم افراد ممکن است در کشورهای مختلف املای متفاوتی داشته باشد. در هجی کردن نام افراد، همیشه املایی را که خود شخص اعلام می‌کند ملاک قرار می‌دهیم.

بخش هشتم: نکات تلفظ – Pronunciation Focus
B — /biː/ — بی
P — /piː/ — پی
تمرین: B – P – B – P
D — /diː/ — دی
T — /tiː/ — تی
تمرین: D – T – D – T
G — /dʒiː/ — جی
J — /dʒeɪ/ — جِی
تمرین: G – J – G – J
M — /ɛm/ — اِم
N — /ɛn/ — اِن
تمرین: M – N – M – N
V — /viː/ — وی
W — /ˈdʌbəl.juː/ — دابل‌یو
تمرین: V – W – V – W
هنگام هجی کردن، حروف را واضح و جداگانه بیان کنید؛ برای مثال:
S – A – R – A

بخش نهم: ساختارهای پرسشی – Basic Question Structures
How do you spell + word/name?
چگونه ... را هجی می‌کنید؟
How do you spell your name?
نامتان را چگونه هجی می‌کنید؟
Can you spell + word/name?
آیا می‌توانید ... را هجی کنید؟
Can you spell your surname?
می‌توانید نام خانوادگی‌تان را هجی کنید؟
What is your first name?
نام کوچک شما چیست؟
What is your last name?
نام خانوادگی شما چیست؟

بخش دهم: تمرین‌های کلاسی – Classroom Activities
۱. مدرس یکی از حروف A تا J را نشان می‌دهد؛ زبان‌آموز نام حرف را می‌گوید.
۲. مدرس یک حرف را از کلمه حذف می‌کند؛ زبان‌آموز حرف جاافتاده را پیدا می‌کند.
C – A – _____
T
۳. زبان‌آموز نام کوچک خود را می‌نویسد و حروف آن را با صدای بلند بیان می‌کند.
۴. زبان‌آموز نام خانوادگی خود را می‌نویسد و هجی می‌کند.
۵. مدرس حروف B، P، D، T، G، J، M و N را تصادفی نشان می‌دهد؛ زبان‌آموز نام هر حرف را می‌گوید.

بخش یازدهم: مکالمه‌های کوتاه – Short Dialogues
Dialogue 1
Hello!
سلام!
Hi!
سلام!
What is your name?
نام شما چیست؟
My name is Sara.
نام من سارا است.
How do you spell it?
چطور آن را هجی می‌کنید؟
S – A – R – A.
Dialogue 2
What is your last name?
نام خانوادگی شما چیست؟
My last name is Brown.
نام خانوادگی من براون است.
Can you spell that?
می‌توانید آن را هجی کنید؟
B – R – O – W – N.
Dialogue 3
What is your first name?
نام کوچک شما چیست؟
My first name is Michael.
نام کوچک من مایکل است.
Sorry, can you spell it slowly?
ببخشید، می‌توانید آن را آهسته هجی کنید؟
M – I – C – H – A – E – L.
Dialogue 4
What is this word?
این چه کلمه‌ای است؟
BOOK.
BOOK.
How do you spell it?
چطور آن را هجی می‌کنید؟
B – O – O – K.

بخش دوازدهم: تمرین گفتاری – Speaking Practice
What is your name?
نام شما چیست؟
What is your first name?
نام کوچک شما چیست؟
How do you spell your first name?
نام کوچک خود را چطور هجی می‌کنید؟
What is your last name?
نام خانوادگی شما چیست؟
How do you spell your last name?
نام خانوادگی خود را چطور هجی می‌کنید؟
با همکلاسی خود گفت‌وگو کنید؛ یک نفر نام را می‌پرسد و نفر دیگر نام و هجی آن را می‌گوید.
کلمات تمرینی: CAT، DOG، PEN، BAG، BUS، BOOK، FISH، MILK.

بخش سیزدهم: تمرین نوشتاری – Writing Practice
حروف را مرتب کنید:
T – A – C
G – O – D
N – E – P
G – A – B
S – U – B
حرف جاافتاده را بنویسید:
C – A – _____
D – _____ – G
_____ – E – N
B – _____ – G
B – O – O – _____
نام کوچک خود را با حروف انگلیسی بنویسید.
First Name: __________________
نام خانوادگی خود را با حروف انگلیسی بنویسید.
Last Name: __________________
نام خود را با حروف جداگانه بنویسید.
S – A – R – A
My Name:
_____ – _____ – _____ – _____

بخش چهاردهم: آزمون پایان درس – End-of-Unit Test
سطح: A1 – Beginner
تعداد سؤال‌ها: ۳۰؛ نمره کتبی: ۳۰؛ زمان پیشنهادی: ۲۵ تا ۳۰ دقیقه.
دستورالعمل‌ها را مدرس به فارسی توضیح می‌دهد و زبان‌آموز نیازی به خواندن متن طولانی انگلیسی ندارد.
۱ تا ۵: تطبیق کلمه و هجی صحیح:
1. CAT: A) D – O – G  B) C – A – T  C) P – E – N
2. DOG: A) B – A – G  B) D – O – G  C) C – A – T
3. PEN: A) P – E – N  B) B – U – S  C) S – U – N
4. BAG: A) B – O – X  B) B – A – G  C) M – A – P
5. BOOK: A) B – O – O – K  B) B – A – L – L  C) F – I – S – H
6 تا ۱۰: انتخاب پاسخ صحیح:
6. Spell یعنی چه؟ A) حرف  B) هجی کردن  C) نام  D) الفبا
7. Letter یعنی چه؟ A) حرف  B) کلمه  C) نام خانوادگی  D) شماره
8. First Name یعنی چه؟ A) نام خانوادگی  B) نام کامل  C) نام کوچک  D) نام کشور
9. Last Name یعنی چه؟ A) نام کوچک  B) نام خانوادگی  C) نام مستعار  D) نام کشور
10. کدام عبارت یعنی «چطور آن را هجی می‌کنید؟» A) What is your name?  B) How do you spell it?  C) Where are you?  D) How old are you?
۱۱ تا ۱۵: حروف را مرتب کنید:
11. T – A – C
12. G – O – D
13. N – E – P
14. S – U – B
15. H – S – I – F
۱۶ تا ۲۰: حرف جاافتاده را بنویسید:
16. C – A – _____
17. D – _____ – G
18. P – E – _____
19. B – O – O – _____
20. F – I – _____ – H
۲۱ تا ۲۴: شناخت واژگان:
21. نام کامل کدام است؟ A) First Name  B) Last Name  C) Full Name  D) Letter
22. کدام عبارت نام خانوادگی است؟ A) Surname  B) Alphabet  C) Word  D) First Name
23. کدام کلمه الفباست؟ A) Spell  B) Letter  C) Alphabet  D) Name
24. کدام کلمه به معنی واژه است؟ A) Word  B) Name  C) Letter  D) Surname
۲۵ تا ۲۷: تکمیل مکالمه:
25. A: What is your name? B: My name is Sara. A: _____? B: S – A – R – A. A) How old are you? B) How do you spell it? C) Where are you?
26. A: What is your last name? B: My last name is Brown. A: Can you spell that? B: _____. A) B – R – O – W – N  B) My name is Sara.  C) I am fine.
27. A: Sorry, I don't understand. B: _____. A) Slowly, please.  B) Can you repeat that?  C) My surname is Smith.
۲۸ تا ۳۰: کاربرد ارتباطی:
28. برای درخواست هجی کردن نام کدام جمله مناسب است؟ A) Can you spell your name? B) How old are you? C) Where do you live?
29. برای پرسیدن نام خانوادگی کدام جمله مناسب است؟ A) What is your first name? B) What is your last name? C) What is your word?
30. برای درخواست آهسته‌تر صحبت کردن کدام عبارت مناسب است؟ A) Goodbye! B) Slowly, please. C) Nice to meet you.

بخش پانزدهم: آزمون شفاهی – Oral Spelling Assessment
نمره پیشنهادی: ۱۰.
فعالیت اول: مدرس پنج کلمه CAT، DOG، PEN، BOOK و FISH را نشان می‌دهد. هر هجی صحیح یک نمره؛ مجموع ۵ نمره.
فعالیت دوم: زبان‌آموز نام کوچک خود را هجی می‌کند. ترتیب حروف و وضوح بیان ارزیابی می‌شود؛ مجموع ۳ نمره.
فعالیت سوم: زبان‌آموز دو عبارت زیر را بیان می‌کند؛ هر عبارت یک نمره.
How do you spell it?
چطور آن را هجی می‌کنید؟
Can you spell that?
می‌توانید آن را هجی کنید؟

بخش شانزدهم: پاسخ‌نامه – Answer Key
۱ تا ۵: 1) B، 2) B، 3) A، 4) B، 5) A.
۶ تا ۱۰: 6) B، 7) A، 8) C، 9) B، 10) B.
۱۱ تا ۱۵: 11) CAT، 12) DOG، 13) PEN، 14) BUS، 15) FISH.
۱۶ تا ۲۰: 16) T، 17) O، 18) N، 19) K، 20) S.
۲۱ تا ۲۴: 21) C، 22) A، 23) C، 24) A.
۲۵ تا ۲۷: 25) B، 26) A، 27) B.
۲۸ تا ۳۰: 28) A، 29) B، 30) B.

بخش هفدهم: توضیح پاسخ‌ها – Answer Explanations
CAT از C، A و T ساخته شده است؛ DOG از D، O و G؛ PEN از P، E و N؛ BAG از B، A و G؛ BOOK از B، O، O و K.
Spell یعنی هجی کردن؛ Letter یعنی حرف الفبا؛ First Name یعنی نام کوچک؛ Last Name و Surname یعنی نام خانوادگی.
How do you spell it? برای پرسیدن املای یک کلمه یا اسم به کار می‌رود.
با مرتب کردن حروف T، A و C کلمه CAT؛ حروف G، O و D کلمه DOG؛ حروف N، E و P کلمه PEN؛ حروف S، U و B کلمه BUS؛ و حروف H، S، I و F کلمه FISH ساخته می‌شود.
حروف جاافتاده به‌ترتیب T، O، N، K و S هستند.
Full Name یعنی نام کامل؛ Alphabet یعنی الفبا؛ Word یعنی واژه.
در مکالمه، پس از شنیدن نام Sara پرسش How do you spell it? مناسب است و حروف نام Brown برابر B – R – O – W – N است.
Can you repeat that? برای درخواست تکرار گفته طرف مقابل مناسب است.

بخش هجدهم: معیار ارزیابی – Assessment Criteria
آزمون کتبی: تطبیق کلمات و حروف ۵ سؤال؛ شناخت واژگان و عبارت‌ها ۵ سؤال؛ مرتب کردن حروف ۵ سؤال؛ تکمیل حروف جاافتاده ۵ سؤال؛ شناخت واژگان ۴ سؤال؛ تکمیل مکالمه ۳ سؤال؛ ارتباطات کاربردی ۳ سؤال؛ مجموع ۳۰.
آزمون شفاهی: هجی کردن کلمات ۵ نمره؛ هجی کردن نام ۳ نمره؛ بیان عبارت‌های کاربردی ۲ نمره؛ مجموع ۱۰.
نمره نهایی: ۴۰.
۹۰ تا ۱۰۰ درصد: بسیار خوب؛ ورود به درس بعد.
۷۵ تا ۸۹ درصد: خوب؛ مرور کوتاه.
۶۰ تا ۷۴ درصد: نیازمند تمرین؛ تمرین دوباره هجی کردن.
کمتر از ۶۰ درصد: نیازمند یادگیری مجدد؛ مرور الفبا و هجی کردن.

بخش نوزدهم: معیارهای گفتار و نوشتار – Speaking and Writing Rubrics
Speaking: شناخت حروف، ترتیب حروف، وضوح تلفظ و توانایی هجی کردن نام ارزیابی می‌شود. سطح عالی یعنی اجرای درست و مستقل؛ متوسط یعنی چند اشتباه یا نیاز به کمک کم؛ نیازمند تمرین یعنی مشکل در تشخیص یا بیان ترتیب حروف.
Writing: شکل صحیح حروف، ترتیب حروف، تشخیص حروف بزرگ و کوچک و نوشتن درست نام ارزیابی می‌شود. سطح عالی یعنی نوشتن صحیح و مستقل؛ متوسط یعنی چند اشتباه؛ نیازمند تمرین یعنی مشکل در شکل یا ترتیب حروف.

بخش بیستم: راهنمای مدرس – Teacher Notes
ترتیب پیشنهادی: مرور کوتاه الفبا؛ معرفی Spelling؛ آموزش واژگان؛ آموزش First Name و Last Name؛ تمرین کلمات کوتاه؛ هجی کردن نام‌ها؛ آموزش عبارت‌های پرسشی؛ مکالمه دونفره؛ آزمون کتبی و شفاهی.
از زبان‌آموز انتظار خواندن متن انگلیسی نداشته باشید. کلمات را همراه حروف تشکیل‌دهنده نشان دهید. ابتدا کلمات سه‌حرفی و سپس چهارحرفی را تمرین کنید. از کارت حروف استفاده کنید و نام حروف را آهسته و واضح بگویید. در هجی کردن نام‌ها، املای اعلام‌شده توسط خود زبان‌آموز ملاک است.
وسایل کمک‌آموزشی: کارت حروف بزرگ و کوچک، کارت کلمات ساده، تخته و ماژیک، برگه تمرین، فایل صوتی نام حروف و کارت‌های First Name و Last Name.
معیار آمادگی برای درس سوم: زبان‌آموز حروف انگلیسی را تشخیص دهد، نام حروف را بیان کند، نام کوچک و نام خانوادگی خود را هجی کند، عبارت How do you spell it? را بشناسد و حروف چند کلمه ساده را به ترتیب بیان کند.

پایان درس دوم
در این درس زبان‌آموز با مفهوم هجی کردن، نام کوچک و نام خانوادگی، واژگان مربوط به املا و عبارت‌های کاربردی برای پرسیدن املای کلمات آشنا شد.
درس بعدی: درس ۰۳ – اعداد ۱ تا ۱۰ (Numbers 1–10)
در درس بعد، زبان‌آموز شمارش اعداد یک تا ده و کاربرد آن‌ها در موقعیت‌های بسیار ساده را یاد می‌گیرد.`,
    [
      "How do you spell it?",
      "Can you spell that?",
      "My first name is Sara.",
      "My last name is Brown.",
      "The English alphabet has 26 letters.",
      "I can spell my name.",
      "B – R – O – W – N.",
      "Can you repeat that?",
    ],
    [
      v("spell", "هجی کردن", "I can spell my name.", "spell my name"),
      v("letter", "حرف الفبا", "A is a letter.", "English letter"),
      v("name", "نام، اسم", "My name is Ali.", "my name"),
      v("first name", "نام کوچک", "My first name is Sara.", "first name"),
      v("last name", "نام خانوادگی", "My last name is Brown.", "last name"),
      v("surname", "نام خانوادگی", "My surname is Smith.", "family surname"),
      v("word", "کلمه، واژه", "This is a short word.", "short word"),
      v("alphabet", "الفبا", "The English alphabet has 26 letters.", "English alphabet"),
    ],
    choice(
      "کدام عبارت برای پرسیدن املای نام مناسب است؟",
      ["How do you spell it?", "How old are you?", "Where are you?"],
      "How do you spell it?",
      "عبارت How do you spell it? برای پرسیدن حروف تشکیل‌دهنده یک نام یا کلمه استفاده می‌شود.",
    ),
    "نام کوچک و نام خانوادگی خود را با حروف انگلیسی بنویس و سپس هر دو را آهسته و واضح هجی کن. با یک همکلاسی پرسش How do you spell it? را تمرین کن.",
  ],
[
    "sounds",
    "الفبا و صداهای پایه",
    "🔤",
    "reading",
    "انگلیسی ۲۶ حرف دارد. نام حرف و صدای آن همیشه یکسان نیست. در apple حرف A صدای /æ/ دارد؛ مثل صدای کوتاه «اَ».",
    ["A a — apple", "B b — book", "C c — cat", "D d — dog", "How do you spell your name?"],
    [
      v("apple", "سیب", "I have an apple.", "an apple"),
      v("book", "کتاب", "This is a book.", "read a book"),
      v("dog", "سگ", "I have a dog.", "a big dog"),
      v("elephant", "فیل", "An elephant is big.", "an elephant"),
      v("fish", "ماهی", "I like fish.", "a small fish"),
      v("spell", "هجی کردن", "How do you spell it?", "spell your name"),
    ],
    choice(
      "کدام کلمه با صدای /b/ شروع می‌شود؟",
      ["apple", "book", "cat"],
      "book",
      "حرف B در book صدای /b/ دارد.",
    ),
    "نام خودت را حرف‌به‌حرف بگو.",
  ],
[
    "numbers",
    "اعداد ۲۰ تا ۱۰۰",
    "🔢",
    "listening",
    `LEVEL A1 – BEGINNER
LESSON 04: NUMBERS 20–100
درس چهارم: اعداد ۲۰ تا ۱۰۰

سطح: A1 – مبتدی
بخش: Basic English Foundations

بخش اول: اهداف آموزشی – Learning Objectives
در پایان این درس، زبان‌آموز می‌تواند:
۱. اعداد دهگان انگلیسی از ۲۰ تا ۹۰ را بشناسد.
۲. عدد ۱۰۰ را به انگلیسی بیان کند.
۳. اعداد ترکیبی مانند ۲۱، ۳۵ و ۵۲ را بخواند و بنویسد.
۴. اعداد ۲۰ تا ۱۰۰ را به ترتیب بشمارد.
۵. عدد شنیده‌شده را تشخیص دهد.
۶. تفاوت اعداد -teen و -ty را تشخیص دهد.
۷. تعداد اشیا را با اعداد بزرگ‌تر بیان کند.
۸. اعداد ساده را از روی تلفظ مدرس به شکل نوشتاری تبدیل کند.

بخش دوم: معرفی اعداد دهگان – Tens
ابتدا باید اعداد دهگان را یاد بگیریم. این اعداد پایه ساخت بسیاری از اعداد بزرگ‌تر هستند.
20
Twenty
تلفظ تقریبی: توِنتی
30
Thirty
تلفظ تقریبی: ثِرتی
40
Forty
تلفظ تقریبی: فورتی
50
Fifty
تلفظ تقریبی: فیفتی
60
Sixty
تلفظ تقریبی: سیکستی
70
Seventy
تلفظ تقریبی: سِوِنتی
80
Eighty
تلفظ تقریبی: اِیتی
90
Ninety
تلفظ تقریبی: ناینتی
100
One hundred
تلفظ تقریبی: وان هاندرد
نکته مهم: شکل نوشتاری عدد ۴۰، Forty است؛ نه Fourty.

بخش سوم: بانک واژگان – Vocabulary Bank
TWENTY
IPA: /ˈtwen.ti/
Part of Speech: Number
معنی فارسی: بیست
Twenty books.
بیست کتاب.
I have twenty pencils.
من بیست مداد دارم.
Twenty students are here.
بیست دانش‌آموز اینجا هستند.

THIRTY
IPA: /ˈθɜːr.ti/
Part of Speech: Number
معنی فارسی: سی
Thirty apples.
سی سیب.
I have thirty books.
من سی کتاب دارم.
Thirty students are in the class.
سی دانش‌آموز در کلاس هستند.

FORTY
IPA: /ˈfɔːr.ti/
Part of Speech: Number
معنی فارسی: چهل
Forty chairs.
چهل صندلی.
I have forty pens.
من چهل خودکار دارم.
Forty people are here.
چهل نفر اینجا هستند.

FIFTY
IPA: /ˈfɪf.ti/
Part of Speech: Number
معنی فارسی: پنجاه
Fifty books.
پنجاه کتاب.
I have fifty cards.
من پنجاه کارت دارم.
Fifty students are in the school.
پنجاه دانش‌آموز در مدرسه هستند.

SIXTY
IPA: /ˈsɪk.sti/
Part of Speech: Number
معنی فارسی: شصت
Sixty pencils.
شصت مداد.
I have sixty photos.
من شصت عکس دارم.
Sixty people are in the room.
شصت نفر در اتاق هستند.

SEVENTY
IPA: /ˈsev.ən.ti/
Part of Speech: Number
معنی فارسی: هفتاد
Seventy books.
هفتاد کتاب.
I have seventy cards.
من هفتاد کارت دارم.
Seventy students are at the school.
هفتاد دانش‌آموز در مدرسه هستند.

EIGHTY
IPA: /ˈeɪ.ti/
Part of Speech: Number
معنی فارسی: هشتاد
Eighty apples.
هشتاد سیب.
I have eighty pencils.
من هشتاد مداد دارم.
Eighty people are here.
هشتاد نفر اینجا هستند.

NINETY
IPA: /ˈnaɪn.ti/
Part of Speech: Number
معنی فارسی: نود
Ninety books.
نود کتاب.
I have ninety cards.
من نود کارت دارم.
Ninety students are in the school.
نود دانش‌آموز در مدرسه هستند.

ONE HUNDRED
IPA: /ˌwʌn ˈhʌn.drəd/
Part of Speech: Number
معنی فارسی: صد
One hundred books.
صد کتاب.
I have one hundred pencils.
من صد مداد دارم.
One hundred students are here.
صد دانش‌آموز اینجا هستند.

بخش چهارم: اعداد ترکیبی – Compound Numbers
برای ساخت اعداد بین دهگان‌ها، ابتدا عدد دهگان را می‌نویسیم و سپس عدد یکان را به آن اضافه می‌کنیم. در نوشتار انگلیسی، بین دهگان و یکان از خط تیره استفاده می‌شود.
الگوی کلی:
Tens + Hyphen + Units
دهگان + خط تیره + یکان

نمونه‌ها:
21
Twenty-one
بیست و یک
22
Twenty-two
بیست و دو
23
Twenty-three
بیست و سه
24
Twenty-four
بیست و چهار
25
Twenty-five
بیست و پنج
26
Twenty-six
بیست و شش
27
Twenty-seven
بیست و هفت
28
Twenty-eight
بیست و هشت
29
Twenty-nine
بیست و نه
31
Thirty-one
سی و یک
35
Thirty-five
سی و پنج
39
Thirty-nine
سی و نه
42
Forty-two
چهل و دو
48
Forty-eight
چهل و هشت
52
Fifty-two
پنجاه و دو
57
Fifty-seven
پنجاه و هفت
64
Sixty-four
شصت و چهار
73
Seventy-three
هفتاد و سه
86
Eighty-six
هشتاد و شش
99
Ninety-nine
نود و نه

نکته مهم:
برای ساخت عدد ترکیبی، دهگان و یکان را به هم متصل می‌کنیم و میان آن‌ها یک خط تیره قرار می‌دهیم.
20 + 1
Twenty-one
بیست و یک
30 + 5
Thirty-five
سی و پنج
50 + 2
Fifty-two
پنجاه و دو
80 + 6
Eighty-six
هشتاد و شش

بخش پنجم: بانک اعداد ترکیبی مهم – Important Compound Numbers
21 — Twenty-one
25 — Twenty-five
28 — Twenty-eight
32 — Thirty-two
35 — Thirty-five
38 — Thirty-eight
41 — Forty-one
45 — Forty-five
49 — Forty-nine
52 — Fifty-two
55 — Fifty-five
58 — Fifty-eight
63 — Sixty-three
67 — Sixty-seven
71 — Seventy-one
75 — Seventy-five
79 — Seventy-nine
82 — Eighty-two
86 — Eighty-six
94 — Ninety-four
99 — Ninety-nine

بخش ششم: تفاوت اعداد -teen و -ty
یکی از نکات مهم در یادگیری اعداد انگلیسی، تفاوت بین اعداد ۱۳ تا ۱۹ و اعداد دهگان است.
thirteen
سیزده
thirty
سی
fourteen
چهارده
forty
چهل
fifteen
پانزده
fifty
پنجاه
sixteen
شانزده
sixty
شصت
seventeen
هفده
seventy
هفتاد
eighteen
هجده
eighty
هشتاد
nineteen
نوزده
ninety
نود

نکته تلفظی:
در بسیاری از اعداد -teen، بخش پایانی /tiːn/ کشیده و معمولاً دارای تکیه اصلی است.
در اعداد -ty، بخش پایانی /ti/ کوتاه‌تر است و معمولاً تکیه روی بخش اول قرار دارد.
thirteen
/ˌθɜːrˈtiːn/
thirty
/ˈθɜːr.ti/
fourteen
/ˌfɔːrˈtiːn/
forty
/ˈfɔːr.ti/
fifteen
/ˌfɪfˈtiːn/
fifty
/ˈfɪf.ti/

تمرین شنیداری تلفظ:
مدرس هر جفت را بخواند و زبان‌آموز تشخیص دهد کدام عدد را شنیده است:
Thirteen / Thirty
Fourteen / Forty
Fifteen / Fifty
Sixteen / Sixty
Seventeen / Seventy
Eighteen / Eighty
Nineteen / Ninety

بخش هفتم: شمارش از ۲۰ تا ۱۰۰ – Counting from 20 to 100
اعداد دهگان را به ترتیب بخوانید:
Twenty
بیست
Thirty
سی
Forty
چهل
Fifty
پنجاه
Sixty
شصت
Seventy
هفتاد
Eighty
هشتاد
Ninety
نود
One hundred
صد

تمرین شمارش:
۱. از ۲۰ تا ۱۰۰، ده‌تا ده‌تا بشمارید.
۲. از ۲۰ تا ۱۰۰، یک‌تا یک‌تا بشمارید.
۳. از ۱۰۰ تا ۲۰، ده‌تا ده‌تا به عقب بشمارید.

بخش هشتم: اعداد و تعداد اشیا – Numbers and Objects
Twenty-one books
بیست و یک کتاب
Twenty-five apples
بیست و پنج سیب
Thirty-five pencils
سی و پنج مداد
Forty chairs
چهل صندلی
Fifty-two students
پنجاه و دو دانش‌آموز
Sixty-four pens
شصت و چهار خودکار
Seventy-three books
هفتاد و سه کتاب
Eighty-six cards
هشتاد و شش کارت
Ninety-nine apples
نود و نه سیب
One hundred students
صد دانش‌آموز

نکته گرامری:
اسم‌های قابل‌شمارش بعد از اعداد بیشتر از یک معمولاً به شکل جمع می‌آیند.
One book
یک کتاب
Twenty books
بیست کتاب
One apple
یک سیب
Thirty-five apples
سی و پنج سیب

بخش نهم: پرسش و پاسخ درباره تعداد – Asking about Quantity
How many?
چند تا؟
How many books?
چند کتاب؟
Twenty books.
بیست کتاب.
How many apples?
چند سیب؟
Thirty-five apples.
سی و پنج سیب.
How many students?
چند دانش‌آموز؟
Fifty students.
پنجاه دانش‌آموز.

بخش دهم: مکالمه‌های کوتاه – Short Dialogues
مکالمه اول: تعداد کتاب‌ها
A: How many books?
الف: چند کتاب؟
B: Twenty-one books.
ب: بیست و یک کتاب.

مکالمه دوم: تعداد مدادها
A: How many pencils?
الف: چند مداد؟
B: Thirty-five pencils.
ب: سی و پنج مداد.

مکالمه سوم: تعداد دانش‌آموزان
A: How many students?
الف: چند دانش‌آموز؟
B: Fifty-two students.
ب: پنجاه و دو دانش‌آموز.

مکالمه چهارم: شمارش
A: Can you count, please?
الف: می‌توانی لطفاً بشماری؟
B: Twenty, thirty, forty, fifty.
ب: بیست، سی، چهل، پنجاه.

بخش یازدهم: تمرین‌های کلاسی – Classroom Activities
تمرین اول: تکرار اعداد دهگان
مدرس هر عدد را می‌خواند و زبان‌آموز سه بار تکرار می‌کند:
Twenty
Thirty
Forty
Fifty
Sixty
Seventy
Eighty
Ninety
One hundred

تمرین دوم: کارت‌های عدد
مدرس یک عدد را به انگلیسی بیان می‌کند. زبان‌آموز باید کارت دارای رقم مناسب را انتخاب کند.
نمونه:
مدرس: Fifty-two
زبان‌آموز: ۵۲

تمرین سوم: ساخت عدد ترکیبی
مدرس دو بخش عدد را جداگانه می‌گوید.
Thirty
Five
زبان‌آموز باید عدد ترکیبی را بیان کند:
Thirty-five

تمرین چهارم: تشخیص اعداد مشابه
مدرس یکی از دو عدد را می‌خواند:
Thirteen یا Thirty
Fourteen یا Forty
Fifteen یا Fifty
زبان‌آموز باید رقم درست را انتخاب کند.

تمرین پنجم: شمارش گروهی
زبان‌آموزان به نوبت اعداد دهگان را از ۲۰ تا ۱۰۰ بیان می‌کنند.

بخش دوازدهم: تمرین‌های نوشتاری – Written Practice
تمرین ۱: نوشتن عدد با حروف
عددهای زیر را به انگلیسی بنویسید:
۲۰ = __________
۳۰ = __________
۴۰ = __________
۵۰ = __________
۶۰ = __________
۷۰ = __________
۸۰ = __________
۹۰ = __________
۱۰۰ = __________

تمرین ۲: نوشتن رقم مناسب
رقم هر کلمه را بنویسید:
Twenty = ______
Thirty = ______
Forty = ______
Fifty = ______
Sixty = ______
Seventy = ______
Eighty = ______
Ninety = ______
One hundred = ______

تمرین ۳: نوشتن اعداد ترکیبی
اعداد زیر را با حروف انگلیسی بنویسید:
۲۱ = __________
۳۵ = __________
۵۲ = __________
۴۸ = __________
۶۴ = __________
۷۳ = __________
۸۶ = __________
۹۹ = __________

تمرین ۴: نوشتن رقم مناسب
رقم مناسب را مقابل هر کلمه بنویسید:
Twenty-one = ______
Thirty-five = ______
Fifty-two = ______
Forty-eight = ______
Sixty-four = ______
Seventy-three = ______
Eighty-six = ______
Ninety-nine = ______

تمرین ۵: کامل کردن ترتیب اعداد
جای خالی را کامل کنید:
Twenty, Thirty, __________
Forty, Fifty, __________
Sixty, Seventy, __________
Eighty, __________, One hundred
Twenty, __________, Forty
Fifty, __________, Seventy
Thirty, Forty, __________
Seventy, Eighty, __________

تمرین ۶: تشخیص عدد درست
گزینه درست را انتخاب کنید:
۱. عدد ۳۵ کدام است؟
الف) Thirty-five
ب) Fifty-three
ج) Thirty-four
۲. عدد ۵۲ کدام است؟
الف) Twenty-five
ب) Fifty-two
ج) Fifty-five
۳. عدد ۸۶ کدام است؟
الف) Eighty-six
ب) Sixty-eight
ج) Eighty-eight
۴. عدد ۷۳ کدام است؟
الف) Thirty-seven
ب) Seventy-three
ج) Seventy-five
۵. عدد ۹۹ کدام است؟
الف) Ninety-nine
ب) Nineteen
ج) Ninety

بخش سیزدهم: آزمون کتبی – Written Test
تعداد سؤال‌ها: ۳۰
نمره کل: ۳۰
زمان پیشنهادی: ۲۵ دقیقه
تمام دستورالعمل‌ها فارسی هستند.

بخش اول: تشخیص اعداد دهگان، سؤال‌های ۱ تا ۵
گزینه درست را انتخاب کنید:
۱. عدد ۳۰ کدام است؟
الف) Twenty
ب) Thirty
ج) Forty
د) Fifty
۲. عدد ۴۰ کدام است؟
الف) Fifty
ب) Thirty
ج) Forty
د) Sixty
۳. عدد ۶۰ کدام است؟
الف) Seventy
ب) Sixty
ج) Eighty
د) Ninety
۴. عدد ۸۰ کدام است؟
الف) Eighty
ب) Seventy
ج) Ninety
د) Fifty
۵. عدد ۱۰۰ کدام است؟
الف) Ninety
ب) Fifty
ج) One hundred
د) Twenty

بخش دوم: تشخیص عدد ترکیبی، سؤال‌های ۶ تا ۱۰
گزینه درست را انتخاب کنید:
۶. عدد ۲۱ کدام است؟
الف) Twenty-one
ب) Twenty-two
ج) Thirty-one
د) Twenty-five
۷. عدد ۳۵ کدام است؟
الف) Fifty-three
ب) Thirty-five
ج) Thirty-four
د) Forty-five
۸. عدد ۵۲ کدام است؟
الف) Twenty-five
ب) Fifty-five
ج) Fifty-two
د) Fifty-three
۹. عدد ۶۴ کدام است؟
الف) Forty-six
ب) Sixty-four
ج) Sixty-five
د) Seventy-four
۱۰. عدد ۸۶ کدام است؟
الف) Eighty-six
ب) Sixty-eight
ج) Eighty-eight
د) Ninety-six

بخش سوم: تشخیص کلمه و رقم، سؤال‌های ۱۱ تا ۱۵
رقم درست را انتخاب کنید:
۱۱. Forty
الف) ۳۰
ب) ۴۰
ج) ۵۰
د) ۶۰
۱۲. Seventy
الف) ۶۰
ب) ۸۰
ج) ۷۰
د) ۹۰
۱۳. Ninety-nine
الف) ۹۸
ب) ۸۹
ج) ۹۰
د) ۹۹
۱۴. Thirty-five
الف) ۵۳
ب) ۳۵
ج) ۳۰
د) ۵۰
۱۵. Fifty-two
الف) ۲۵
ب) ۵۵
ج) ۵۲
د) ۴۲

بخش چهارم: کامل کردن ترتیب اعداد، سؤال‌های ۱۶ تا ۲۰
عدد مناسب را در جای خالی بنویسید:
۱۶. Twenty, Thirty, __________
۱۷. Forty, Fifty, __________
۱۸. Sixty, Seventy, __________
۱۹. Eighty, __________, One hundred
۲۰. Twenty, __________, Forty

بخش پنجم: تشخیص اعداد مشابه، سؤال‌های ۲۱ تا ۲۵
گزینه‌ای را انتخاب کنید که عدد خواسته‌شده را نشان می‌دهد:
۲۱. عدد ۱۳
الف) Thirty
ب) Thirteen
ج) Thirty-three
د) Three
۲۲. عدد ۴۰
الف) Fourteen
ب) Four
ج) Forty
د) Fourteen
۲۳. عدد ۱۵
الف) Fifty
ب) Fifteen
ج) Five
د) Fifty-five
۲۴. عدد ۷۰
الف) Seventeen
ب) Seven
ج) Seventy
د) Seventy-seven
۲۵. عدد ۱۹
الف) Ninety
ب) Nineteen
ج) Nine
د) Ninety-nine

بخش ششم: نوشتن اعداد، سؤال‌های ۲۶ تا ۳۰
عددهای زیر را با حروف انگلیسی بنویسید:
۲۶. ۲۸ = __________
۲۷. ۴۵ = __________
۲۸. ۵۷ = __________
۲۹. ۷۹ = __________
۳۰. ۱۰۰ = __________

بخش چهاردهم: آزمون شفاهی – Speaking and Listening Test
نمره کل: ۱۰
زمان پیشنهادی: ۷ دقیقه

بخش اول: تلفظ اعداد دهگان، ۳ نمره
مدرس از زبان‌آموز می‌خواهد اعداد زیر را تلفظ کند:
۳۰
۵۰
۸۰
هر پاسخ صحیح: ۱ نمره.

بخش دوم: تلفظ اعداد ترکیبی، ۲ نمره
زبان‌آموز اعداد زیر را به انگلیسی بیان کند:
۳۵
۵۲
هر پاسخ صحیح: ۱ نمره.

بخش سوم: تشخیص عدد شنیده‌شده، ۳ نمره
مدرس اعداد زیر را به انگلیسی می‌خواند. زبان‌آموز باید رقم آن‌ها را بنویسد:
Forty-eight
Seventy-three
Ninety-nine
هر پاسخ صحیح: ۱ نمره.

بخش چهارم: تشخیص اعداد مشابه، ۲ نمره
مدرس یکی از دو عدد را می‌خواند. زبان‌آموز باید رقم درست را بنویسد:
Thirteen یا Thirty
Fifteen یا Fifty
هر پاسخ صحیح: ۱ نمره.

بخش پانزدهم: پاسخ‌نامه تمرین‌های نوشتاری
تمرین ۱:
۱. Twenty
۲. Thirty
۳. Forty
۴. Fifty
۵. Sixty
۶. Seventy
۷. Eighty
۸. Ninety
۹. One hundred
تمرین ۲:
۱. ۲۰
۲. ۳۰
۳. ۴۰
۴. ۵۰
۵. ۶۰
۶. ۷۰
۷. ۸۰
۸. ۹۰
۹. ۱۰۰
تمرین ۳:
۱. Twenty-one
۲. Thirty-five
۳. Fifty-two
۴. Forty-eight
۵. Sixty-four
۶. Seventy-three
۷. Eighty-six
۸. Ninety-nine
تمرین ۴:
۱. ۲۱
۲. ۳۵
۳. ۵۲
۴. ۴۸
۵. ۶۴
۶. ۷۳
۷. ۸۶
۸. ۹۹
تمرین ۵:
۱. Forty
۲. Sixty
۳. Eighty
۴. Ninety
۵. Thirty
۶. Sixty
۷. Fifty
۸. Ninety
تمرین ۶:
۱. الف
۲. ب
۳. الف
۴. ب
۵. الف

بخش شانزدهم: پاسخ‌نامه آزمون کتبی – Answer Key
بخش اول:
۱. ب) Thirty
۲. ج) Forty
۳. ب) Sixty
۴. الف) Eighty
۵. ج) One hundred
بخش دوم:
۶. الف) Twenty-one
۷. ب) Thirty-five
۸. ج) Fifty-two
۹. ب) Sixty-four
۱۰. الف) Eighty-six
بخش سوم:
۱۱. ب) ۴۰
۱۲. ج) ۷۰
۱۳. د) ۹۹
۱۴. ب) ۳۵
۱۵. ج) ۵۲
بخش چهارم:
۱۶. Forty
۱۷. Sixty
۱۸. Eighty
۱۹. Ninety
۲۰. Thirty
بخش پنجم:
۲۱. ب) Thirteen
۲۲. ج) Forty
۲۳. ب) Fifteen
۲۴. ج) Seventy
۲۵. ب) Nineteen
بخش ششم:
۲۶. Twenty-eight
۲۷. Forty-five
۲۸. Fifty-seven
۲۹. Seventy-nine
۳۰. One hundred

بخش هفدهم: پاسخ‌نامه آزمون شفاهی
بخش اول:
۱. Thirty
۲. Fifty
۳. Eighty
بخش دوم:
۱. Thirty-five
۲. Fifty-two
بخش سوم:
۱. ۴۸
۲. ۷۳
۳. ۹۹
بخش چهارم:
۱. ۱۳ یا ۳۰، مطابق عددی که مدرس تلفظ کرده است.
۲. ۱۵ یا ۵۰، مطابق عددی که مدرس تلفظ کرده است.

بخش هجدهم: توضیح پاسخ‌ها – Answer Explanations
سؤال‌های ۱ تا ۵ توانایی شناخت اعداد دهگان و عدد ۱۰۰ را می‌سنجند.
سؤال‌های ۶ تا ۱۰ توانایی ساخت و تشخیص اعداد ترکیبی را ارزیابی می‌کنند.
سؤال‌های ۱۱ تا ۱۵ ارتباط میان شکل نوشتاری و رقم را بررسی می‌کنند.
سؤال‌های ۱۶ تا ۲۰ توانایی تشخیص ترتیب اعداد دهگان را می‌سنجند.
سؤال‌های ۲۱ تا ۲۵ توانایی تمایز میان اعداد -teen و -ty را بررسی می‌کنند.
سؤال‌های ۲۶ تا ۳۰ توانایی نوشتن اعداد ترکیبی و عدد ۱۰۰ را ارزیابی می‌کنند.
نکته: در سؤال‌های شفاهی، پاسخ صحیح بر اساس عددی تعیین می‌شود که مدرس واقعاً تلفظ کرده است.

بخش نوزدهم: معیار ارزیابی – Assessment Criteria
آزمون کتبی:
۲۷ تا ۳۰: عالی؛ تسلط مناسب بر اعداد ۲۰ تا ۱۰۰.
۲۳ تا ۲۶: خوب؛ شناخت مناسب با اشتباهات جزئی.
۱۸ تا ۲۲: قابل قبول؛ یادگیری اولیه و نیازمند تمرین.
۰ تا ۱۷: نیازمند تمرین؛ نیاز به مرور مجدد.
آزمون شفاهی:
۹ تا ۱۰: تلفظ و تشخیص بسیار خوب.
۷ تا ۸: عملکرد خوب.
۵ تا ۶: عملکرد متوسط.
۰ تا ۴: نیازمند تمرین بیشتر.
شرایط پیشنهادی قبولی:
حداقل ۲۳ از ۳۰ در آزمون کتبی.
حداقل ۷ از ۱۰ در آزمون شفاهی.

بخش بیستم: یادداشت آموزشی برای مدرس – Teacher Notes
۱. ابتدا اعداد دهگان را به زبان‌آموز آموزش دهید.
۲. پیش از آموزش اعداد ترکیبی، مطمئن شوید زبان‌آموز اعداد ۱ تا ۹ را می‌شناسد.
۳. در آموزش اعداد ترکیبی، ابتدا از اعداد ساده مانند Twenty-one و Thirty-five استفاده کنید.
۴. تفاوت Forty و Fourty را به‌صورت نوشتاری توضیح دهید و شکل صحیح Forty را تمرین کنید.
۵. تفاوت اعداد -teen و -ty را با تمرین شنیداری آموزش دهید.
۶. در تمرین شنیداری، اعداد مشابه را با فاصله و وضوح مناسب تلفظ کنید.
۷. برای تمرین نوشتن، از زبان‌آموز بخواهید اعداد را بدون مشاهده نمونه بنویسد.
۸. از کارت‌های عدد برای افزایش سرعت تشخیص استفاده کنید.
۹. در پایان درس، اعداد ۱ تا ۱۰۰ را به‌صورت مرحله‌ای مرور کنید؛ اما انتظار نداشته باشید زبان‌آموز همه اعداد بین ۲۰ تا ۱۰۰ را بدون تمرین قبلی حفظ کرده باشد.
۱۰. پیش از ورود به درس بعدی، تسلط زبان‌آموز بر اعداد اصلی و ترکیبی این درس را بررسی کنید.

بخش بیست‌ویکم: یادداشت کیفیت آزمون – Test Quality Notes
روایی (Validity):
آزمون بر اساس اهداف آموزشی درس طراحی شده و شناخت اعداد دهگان، ساخت اعداد ترکیبی، تشخیص شنیداری، تلفظ و نوشتن اعداد را ارزیابی می‌کند.
پایایی (Reliability):
برای افزایش پایایی، دستورالعمل‌ها و شرایط اجرای آزمون باید برای همه زبان‌آموزان یکسان باشد. در بخش شنیداری، مدرس باید اعداد را با وضوح و سرعت تقریباً یکسان بیان کند.
عملی بودن (Practicality):
آزمون با کاغذ، مداد و کارت‌های عدد قابل اجراست و به تجهیزات تخصصی نیاز ندارد.
تحلیل سؤال‌ها:
Item Facility (IF): شاخص دشواری یا سهولت سؤال.
Item Discrimination (ID): شاخص قدرت تمایز سؤال.
Distractor Analysis: تحلیل عملکرد گزینه‌های انحرافی.
مقادیر این شاخص‌ها باید بر اساس پاسخ‌های واقعی زبان‌آموزان محاسبه شوند و پیش از اجرای آزمون قابل گزارش نیستند.

پایان درس ۰۴
عنوان درس بعدی:
درس ۰۵ – افراد، شغل‌ها و خانواده
افراد، شغل‌ها و خانواده`,
    [
      "Twenty — توِنتی — /ˈtwen.ti/",
      "Thirty — ثِرتی — /ˈθɜːr.ti/",
      "Forty — فورتی — /ˈfɔːr.ti/",
      "Fifty — فیفتی — /ˈfɪf.ti/",
      "Sixty — سیکستی — /ˈsɪk.sti/",
      "Seventy — سِوِنتی — /ˈsev.ən.ti/",
      "Eighty — اِیتی — /ˈeɪ.ti/",
      "Ninety — ناینتی — /ˈnaɪn.ti/",
      "One hundred — وان هاندرد — /ˌwʌn ˈhʌn.drəd/",
      "Twenty-one — بیست و یک",
      "Thirty-five — سی و پنج",
      "Fifty-two — پنجاه و دو",
      "How many? — چند تا؟",
    ],
    [
      v("twenty", "بیست", "Twenty books.", "twenty books"),
      v("thirty", "سی", "Thirty apples.", "thirty apples"),
      v("forty", "چهل", "Forty chairs.", "forty chairs"),
      v("fifty", "پنجاه", "Fifty books.", "fifty books"),
      v("sixty", "شصت", "Sixty pencils.", "sixty pencils"),
      v("seventy", "هفتاد", "Seventy students.", "seventy students"),
      v("eighty", "هشتاد", "Eighty apples.", "eighty apples"),
      v("ninety", "نود", "Ninety books.", "ninety books"),
      v("one hundred", "صد", "One hundred students.", "one hundred students"),
      v("twenty-one", "بیست و یک", "Twenty-one books.", "twenty-one books"),
      v("thirty-five", "سی و پنج", "Thirty-five pencils.", "thirty-five pencils"),
      v("fifty-two", "پنجاه و دو", "Fifty-two students.", "fifty-two students"),
      v("how many", "چند تا؟", "How many books?", "how many books"),
    ],
    choice(
      "عدد ۳۵ به انگلیسی کدام است؟",
      ["Fifty-three", "Thirty-five", "Thirty-four", "Forty-five"],
      "Thirty-five",
      "ابتدا دهگان Thirty و سپس یکان Five می‌آید و میان آن‌ها خط تیره قرار می‌گیرد.",
    ),
    "اعداد دهگان را از ۲۰ تا ۱۰۰ ده‌تا ده‌تا بشمار. سپس اعداد ۲۱، ۳۵، ۵۲، ۶۴، ۷۳، ۸۶ و ۹۹ را با حروف انگلیسی بنویس و با صدای بلند بخوان.",
  ],
[
    "countries",
    "کشورها و ملیت‌ها",
    "🌍",
    "reading",
    "برای گفتن اهل کجا هستی از I’m from و نام کشور استفاده کن. برای گفتن ملیت از I’m و صفت ملیت استفاده می‌کنیم: I’m Iranian. ملیت‌ها در انگلیسی همیشه با حرف بزرگ شروع می‌شوند.",
    ["I’m from Iran.", "I’m Iranian.", "She is Turkish.", "They are from Japan."],
    [
      v("Iranian", "ایرانی", "She is Iranian.", "an Iranian student"),
      v("Turkish", "ترک / اهل ترکیه", "He is Turkish.", "Turkish food"),
      v("American", "آمریکایی", "She is American.", "an American friend"),
      v("French", "فرانسوی", "I speak a little French.", "French cheese"),
      v("Japanese", "ژاپنی", "They are Japanese.", "Japanese food"),
      v("Canadian", "کانادایی", "He is Canadian.", "a Canadian teacher"),
      v("nationality", "ملیت", "What’s your nationality?", "your nationality"),
    ],
    choice(
      "She is from France. She is ___.",
      ["French", "France", "Frenchs"],
      "French",
      "برای ملیت از French استفاده می‌کنیم؛ France نام کشور است.",
    ),
    "نام کشور و ملیت خودت را بگو و بپرس دوستت اهل کجاست.",
  ],
[
    "be",
    "فعل بودن: am، is، are",
    "🌱",
    "writing",
    "با I از am، با he / she / it از is و با you / we / they از are استفاده کن. برای منفی کردن not را اضافه کن.",
    [
      "I am a student.",
      "She is a teacher.",
      "They are not tired.",
      "We are friends.",
      "He isn’t American.",
      "Are you a student?",
    ],
    [
      v("student", "دانش‌آموز / دانشجو", "I am a student.", "a student"),
      v("teacher", "معلم", "She is a teacher.", "a teacher"),
      v("friend", "دوست", "We are friends.", "a good friend"),
      v("ready", "آماده", "Are you ready?", "get ready"),
    ],
    choice(
      "جای خالی را کامل کن: She ___ a teacher.",
      ["am", "is", "are"],
      "is",
      "برای she شکل is درست است.",
    ),
    "شغل یا نقش خودت و یک دوست را با فعل بودن توضیح بده.",
  ],
[
    "pronouns",
    "ضمیرهای فاعلی و مفعولی",
    "🙋",
    "writing",
    "ضمیر فاعلی (I، you، he، she، it، we، they) قبل از فعل می‌آید. ضمیر مفعولی (me، you، him، her، it، us، them) بعد از فعل یا حرف اضافه می‌آید: Call me. I love her.",
    ["She knows him.", "Call me, please.", "Come with us.", "I love them."],
    [
      v("me", "مرا / به من", "Call me, please.", "call me"),
      v("him", "او را (مذکر)", "She knows him.", "know him"),
      v("her", "او را (مؤنث)", "I love her.", "love her"),
      v("us", "ما را / به ما", "Come with us.", "with us"),
      v("them", "آن‌ها را", "I like them.", "like them"),
    ],
    choice(
      "جای خالی را کامل کن: Please call ___.",
      ["I", "me", "my"],
      "me",
      "بعد از فعل call ضمیر مفعولی me می‌آید، نه I.",
    ),
    "سه جمله بنویس که در آن‌ها از me، him یا her استفاده شده باشد.",
  ],
[
    "have",
    "داشتن: have و has",
    "🎒",
    "writing",
    "با I، you، we و they از have و با he، she و it از has استفاده کن. برای منفی و سؤال از don’t، doesn’t، Do و Does کمک می‌گیریم: She doesn’t have a car.",
    [
      "I have two brothers.",
      "She has a new car.",
      "Do you have any sisters?",
      "He doesn’t have a bike.",
    ],
    [
      v("car", "ماشین", "She has a new car.", "a new car"),
      v("bike", "دوچرخه", "He has a red bike.", "a red bike"),
      v("children", "بچه‌ها / فرزندان", "I have two children.", "two children"),
      v("house", "خانه", "They have a big house.", "a big house"),
      v("pet", "حیوان خانگی", "I have a pet.", "have a pet"),
    ],
    choice(
      "جای خالی: She ___ a car.",
      ["have", "has", "haves"],
      "has",
      "با she از has استفاده می‌کنیم.",
    ),
    "بگو چند برادر، خواهر یا دوست داری و یک چیز را که نداری.",
  ],
[
    "present",
    "حال ساده و کارهای روزمره",
    "☀️",
    "writing",
    "حال ساده برای عادت‌ها و کارهای تکراری است. با he و she معمولاً s به فعل اضافه می‌شود. در سؤال با I و you از Do و با he و she از Does استفاده می‌کنیم.",
    [
      "I drink tea every day.",
      "She works in a school.",
      "Do you like coffee?",
      "He works in a bank.",
      "She doesn’t like coffee.",
      "Does she work here?",
    ],
    [
      v("work", "کار کردن", "I work in Tehran.", "work in"),
      v("every day", "هر روز", "I read every day.", "every day"),
      v("speak", "صحبت کردن", "You speak English.", "speak English"),
      v("study", "درس خواندن", "I study English every day.", "study at night"),
      v("watch", "تماشا کردن", "I watch TV in the evening.", "watch TV"),
      v("play", "بازی کردن / نواختن", "They play football.", "play football"),
    ],
    choice(
      "جملهٔ درست را انتخاب کن.",
      ["She work here.", "She works here.", "She working here."],
      "She works here.",
      "در حال ساده با she به work حرف s اضافه می‌شود.",
    ),
    "دو کاری را که هر روز انجام می‌دهی بنویس.",
  ],
[
    "routine",
    "کارهای روزمره",
    "⏰",
    "listening",
    "کارهای روزمره را با فعل ساده و ساعت بگو: I wake up at seven. برای ساعت از at استفاده می‌کنیم. به ترتیب کارها گوش بده و جمله‌ها را تکرار کن.",
    [
      "I wake up at seven.",
      "I have breakfast at eight.",
      "She goes to work at nine.",
      "We watch TV in the evening.",
    ],
    [
      v("wake up", "بیدار شدن", "I wake up at seven.", "wake up early"),
      v("get up", "از خواب بلند شدن", "I get up at seven thirty.", "get up late"),
      v(
        "have breakfast",
        "صبحانه خوردن",
        "I have breakfast with my family.",
        "have breakfast at eight",
      ),
      v("go to work", "سر کار رفتن", "She goes to work at nine.", "go to work by bus"),
      v("take a shower", "دوش گرفتن", "I take a shower in the morning.", "take a shower"),
      v("go to bed", "به رختخواب رفتن", "I go to bed at eleven.", "go to bed early"),
    ],
    choice(
      "کدام جمله درست است؟",
      ["I wake up at seven.", "I wake up in seven.", "I waking up at seven."],
      "I wake up at seven.",
      "برای ساعت از at استفاده می‌کنیم.",
    ),
    "برنامهٔ صبح خودت را با سه جمله و ساعت بگو.",
  ],
[
    "frequency",
    "قیدهای تکرار",
    "📊",
    "speaking",
    "قید تکرار می‌گوید یک کار چند وقت یک‌بار انجام می‌شود: always، usually، often، sometimes، rarely و never. این قید قبل از فعل اصلی و بعد از am، is و are می‌آید.",
    [
      "I always drink tea.",
      "She usually gets up early.",
      "We sometimes go shopping.",
      "He is never late.",
    ],
    [
      v("always", "همیشه", "I always study at night.", "always happy"),
      v("usually", "معمولاً", "She usually works at home.", "usually in the morning"),
      v("often", "اغلب", "We often eat rice.", "often go out"),
      v("sometimes", "گاهی", "I sometimes walk to school.", "sometimes on Fridays"),
      v("rarely", "به‌ندرت", "He rarely drinks coffee.", "rarely go out"),
      v("never", "هرگز", "She never eats meat.", "never late"),
    ],
    choice(
      "کدام جمله درست است؟",
      ["She always is happy.", "She is always happy.", "Always she is happy."],
      "She is always happy.",
      "قید تکرار بعد از فعل to be می‌آید: is always.",
    ),
    "بگو چه کارهایی را همیشه، گاهی و هرگز انجام می‌دهی.",
  ],
[
    "continuous",
    "حال استمراری: الان چه می‌کنی؟",
    "▶️",
    "writing",
    "برای کاری که همین الان انجام می‌شود، am، is یا are را با فعل + ing بگو: I’m studying. حال ساده برای عادت‌هاست و حال استمراری برای همین لحظه.",
    [
      "She is cooking now.",
      "I’m studying English.",
      "They are playing football.",
      "What are you doing?",
    ],
    [
      v("now", "الان", "I’m working now.", "right now"),
      v("at the moment", "همین لحظه", "She is sleeping at the moment.", "at the moment"),
      v("sleep", "خوابیدن", "The baby is sleeping.", "sleep well"),
      v("read", "خواندن", "I’m reading a book.", "read a book"),
      v("write", "نوشتن", "He is writing a letter.", "write a letter"),
      v("run", "دویدن", "They are running in the park.", "run in the park"),
    ],
    choice(
      "جای خالی: She ___ cooking now.",
      ["is", "are", "am"],
      "is",
      "برای she از is استفاده می‌کنیم: is cooking.",
    ),
    "بگو همین الان چه کار می‌کنی و اطرافیانت چه کار می‌کنند.",
  ],
[
    "articles",
    "حرف‌های تعریف a، an، the",
    "📚",
    "reading",
    "برای یک چیز نامشخص از a یا an استفاده کن. an قبل از صدای واکه می‌آید، مثل an apple. the به چیز مشخص یا قبلاً معرفی‌شده اشاره می‌کند.",
    [
      "a book / an apple",
      "I have a cat. The cat is small.",
      "She is an engineer.",
      "I have an umbrella.",
      "She goes to a university.",
    ],
    [
      v("engineer", "مهندس", "She is an engineer.", "an engineer"),
      v("cat", "گربه", "The cat is small.", "a cat"),
      v("umbrella", "چتر", "I have an umbrella.", "an umbrella"),
      v("hour", "ساعت (۶۰ دقیقه)", "It takes an hour.", "an hour"),
      v("university", "دانشگاه", "She goes to a university.", "a university"),
      v("egg", "تخم‌مرغ", "I eat an egg.", "an egg"),
    ],
    choice(
      "جای خالی: ___ apple",
      ["a", "an", "two"],
      "an",
      "apple با صدای واکه شروع می‌شود، پس an درست است.",
    ),
    "سه شیء اطرافت را با a یا an نام ببر.",
  ],
[
    "plurals",
    "مفرد و جمع",
    "📦",
    "writing",
    "بیشتر اسم‌ها با s جمع بسته می‌شوند: book → books. بعد از s، x، ch و sh از es استفاده می‌کنیم: box → boxes. اسم‌هایی مثل child → children بی‌قاعده‌اند و باید جدا یاد گرفته شوند.",
    [
      "There are three boxes.",
      "I have two children.",
      "Two women are in the room.",
      "My feet are cold.",
    ],
    [
      v("box", "جعبه", "Open the boxes.", "two boxes"),
      v("baby", "نوزاد", "The babies are sleeping.", "two babies"),
      v("child", "کودک", "The child is happy.", "a little child"),
      v("man", "مرد", "Two men work here.", "a tall man"),
      v("woman", "زن", "Two women work here.", "a kind woman"),
      v("person", "فرد / آدم", "Many people live here.", "a nice person"),
      v("tooth", "دندان", "My tooth hurts.", "brush your teeth"),
    ],
    choice(
      "جمع child کدام است؟",
      ["childs", "children", "childrens"],
      "children",
      "child بی‌قاعده است: child → children.",
    ),
    "جمع این کلمه‌ها را بنویس: box، baby، woman، person.",
  ],
[
    "demonstratives",
    "این، آن، این‌ها، آن‌ها",
    "👉",
    "speaking",
    "this و these برای چیزهای نزدیک‌اند و that و those برای چیزهای دور. this و that مفرد و these و those جمع هستند. برای پرسیدن بگو: What’s this?",
    ["This is my pen.", "That is your bag.", "These are my shoes.", "Are those your keys?"],
    [
      v("this", "این (نزدیک، مفرد)", "This is my pen.", "this one"),
      v("that", "آن (دور، مفرد)", "That is your bag.", "that one"),
      v("these", "این‌ها (نزدیک، جمع)", "These are my shoes.", "these shoes"),
      v("those", "آن‌ها (دور، جمع)", "Those are your books.", "those books"),
      v("pen", "خودکار", "This is my pen.", "a blue pen"),
      v("key", "کلید", "Are these your keys?", "my keys"),
    ],
    choice(
      "کتاب‌ها دور هستند. جای خالی: ___ are my books.",
      ["That", "Those", "This"],
      "Those",
      "کتاب‌ها جمع و دور هستند؛ پس Those درست است.",
    ),
    "به سه چیز نزدیک و سه چیز دور اشاره کن و بگو چه هستند.",
  ],
[
    "possessives",
    "صفت‌های ملکی",
    "🎒",
    "writing",
    "صفت ملکی قبل از اسم می‌آید: my، your، his، her، its، our، their. برای مثال her book یعنی کتاب او، وقتی مالک زن است.",
    [
      "This is my bag.",
      "Her name is Mina.",
      "Our house is small.",
      "Their house is big.",
      "Your book is here.",
    ],
    [
      v("bag", "کیف", "This is my bag.", "my bag"),
      v("name", "نام", "Her name is Mina.", "first name"),
      v("your", "مال تو / شما", "Your book is here.", "your book"),
      v("his", "مال او (مذکر)", "His car is new.", "his car"),
      v("our", "مال ما", "Our teacher is kind.", "our teacher"),
      v("their", "مال آن‌ها", "Their house is big.", "their house"),
    ],
    choice(
      "برای گفتن «نام او میناست» دربارهٔ یک زن:",
      ["His name is Mina.", "Her name is Mina.", "Their name is Mina."],
      "Her name is Mina.",
      "her برای مالکیتِ she است.",
    ),
    "دربارهٔ دو وسیله بگو متعلق به چه کسی هستند.",
  ],
[
    "ownership",
    "مال من، مال تو و ’s",
    "🔑",
    "writing",
    "mine، yours، hers، ours و theirs ضمیرهای ملکی‌اند و بعد از آن‌ها اسم نمی‌آید: This book is mine. برای مالکیت یک اسم از ’s استفاده کن: Sara’s book یعنی کتاب سارا.",
    ["This book is mine.", "That car is hers.", "This is Ali’s phone.", "The house is theirs."],
    [
      v("mine", "مال من", "This bag is mine.", "it’s mine"),
      v("yours", "مال تو", "Is this pen yours?", "is it yours"),
      v("hers", "مال او (زن)", "That car is hers.", "it’s hers"),
      v("ours", "مال ما", "The garden is ours.", "it’s ours"),
      v("theirs", "مال آن‌ها", "The house is theirs.", "it’s theirs"),
    ],
    choice(
      "«این کتاب مال من است.» کدام درست است؟",
      ["This book is my.", "This book is mine.", "This is mine book."],
      "This book is mine.",
      "در پایان جمله به‌جای my از mine استفاده می‌کنیم.",
    ),
    "سه وسیله را نشان بده و بگو مال چه کسی هستند.",
  ],
[
    "there",
    "There is و There are",
    "🛋️",
    "speaking",
    "برای گفتن اینکه چیزی در جایی وجود دارد از There is برای مفرد و There are برای جمع استفاده کن.",
    [
      "There is a table.",
      "There are two chairs.",
      "Is there a window?",
      "There isn’t a TV.",
      "Is there a bank near here?",
    ],
    [
      v("table", "میز", "There is a table.", "on the table"),
      v("chair", "صندلی", "There are two chairs.", "two chairs"),
      v("window", "پنجره", "There is a window.", "open the window"),
      v("room", "اتاق", "There are two chairs in the room.", "in the room"),
      v("garden", "باغچه", "There is a cat in the garden.", "in the garden"),
    ],
    choice(
      "جای خالی: There ___ two chairs.",
      ["is", "am", "are"],
      "are",
      "two chairs جمع است؛ از are استفاده می‌کنیم.",
    ),
    "اتاقت را با دو جملهٔ There is و There are توصیف کن.",
  ],
[
    "can",
    "توانایی‌ها: can و can’t",
    "🚲",
    "speaking",
    "can برای توانایی است. بعد از آن شکل سادهٔ فعل می‌آید و با همهٔ ضمیرها یکسان است. can’t یعنی نمی‌توانم.",
    [
      "I can swim.",
      "She can speak English.",
      "Can you ride a bike?",
      "I can’t drive.",
      "Can she play the piano?",
    ],
    [
      v("swim", "شنا کردن", "I can swim.", "can swim"),
      v("ride", "سوار شدن", "I can ride a bike.", "ride a bike"),
      v("cook", "آشپزی کردن", "He can’t cook.", "can’t cook"),
      v("drive", "رانندگی کردن", "I can’t drive.", "drive a car"),
      v("piano", "پیانو", "She can play the piano.", "play the piano"),
    ],
    choice(
      "کدام جمله درست است؟",
      ["She can swims.", "She can swim.", "She cans swim."],
      "She can swim.",
      "بعد از can فعل بدون s می‌آید.",
    ),
    "یک توانایی و یک کاری را که نمی‌توانی انجام بدهی بگو.",
  ],
[
    "imperatives",
    "دستور و نهی",
    "📢",
    "speaking",
    "جملهٔ امری با شکل ساده فعل شروع می‌شود: Sit down. برای نهی Don’t را قبل از فعل بگذار: Don’t run. اگر please اضافه کنی، جمله مؤدبانه‌تر می‌شود.",
    ["Sit down, please.", "Listen carefully.", "Don’t run here.", "Don’t be late."],
    [
      v("sit down", "بنشین", "Sit down, please.", "sit down"),
      v("stand up", "بایست", "Stand up, please.", "stand up"),
      v("listen", "گوش دادن", "Listen carefully.", "listen to music"),
      v("look", "نگاه کردن", "Look at the board.", "look at"),
      v("late", "دیر", "Don’t be late.", "be late"),
      v("open", "باز کردن", "Open the window, please.", "open the window"),
    ],
    choice(
      "«دیر نکن» کدام است؟",
      ["Don’t be late.", "Not be late.", "Don’t late."],
      "Don’t be late.",
      "برای نهی Don’t و شکل ساده فعل می‌آید؛ در اینجا فعل be است.",
    ),
    "سه دستور مؤدبانه و دو نهی برای کلاس یا خانه بگو.",
  ],
[
    "prepositions",
    "مکان و حرف‌های اضافه",
    "📍",
    "reading",
    "in یعنی داخل، on یعنی روی، under یعنی زیر و next to یعنی کنار. at برای یک نقطه یا مکان مشخص هم به کار می‌رود.",
    [
      "The book is on the table.",
      "The cat is under the chair.",
      "I am at school.",
      "The school is opposite the bank.",
      "The lamp is between the sofa and the TV.",
    ],
    [
      v("under", "زیر", "The cat is under the chair.", "under the chair"),
      v("next to", "کنار", "The bank is next to the café.", "next to"),
      v("behind", "پشت", "The cat is behind the door.", "behind the door"),
      v("between", "بین", "The lamp is between the sofa and the TV.", "between … and …"),
      v("in front of", "جلوی", "The car is in front of the house.", "in front of"),
      v("opposite", "روبه‌روی", "The school is opposite the bank.", "opposite the bank"),
      v("near", "نزدیک", "The park is near my house.", "near here"),
    ],
    choice(
      "برای گفتن «زیر میز» کدام درست است؟",
      ["on the table", "under the table", "in the table"],
      "under the table",
      "under یعنی زیر.",
    ),
    "جای سه وسیله در اتاقت را توضیح بده.",
  ],
[
    "questions",
    "پرسش‌های کاربردی",
    "❓",
    "speaking",
    "What برای چه، Where برای کجا، Who برای چه کسی و How برای چطور است. How old سن و How much قیمت را می‌پرسد.",
    [
      "What is your name?",
      "Where do you live?",
      "How much is this coffee?",
      "Who is your teacher?",
      "How many brothers do you have?",
    ],
    [
      v("where", "کجا", "Where do you live?", "where do you"),
      v("how much", "چقدر / چه قیمتی", "How much is it?", "how much is"),
      v("what", "چه / چه چیزی", "What is your name?", "what time"),
      v("who", "چه کسی", "Who is your teacher?", "who is"),
      v("when", "چه زمانی", "When is your birthday?", "when is"),
      v("why", "چرا", "Why are you sad?", "why not"),
      v("which", "کدام", "Which color do you like?", "which one"),
      v("how old", "چند ساله", "How old are you?", "how old is"),
      v("how many", "چند تا", "How many brothers do you have?", "how many books"),
      v("how often", "هر چند وقت یک‌بار", "How often do you exercise?", "how often do you"),
    ],
    choice(
      "برای پرسیدن قیمت قهوه چه می‌گویی؟",
      ["Who is this coffee?", "How much is this coffee?", "Where coffee?"],
      "How much is this coffee?",
      "برای قیمت از How much استفاده می‌کنیم.",
    ),
    "نام، شهر و قیمت یک محصول را با سه سؤال بپرس.",
  ],
[
    "colors",
    "رنگ‌ها و توصیف اشیا",
    "🎨",
    "reading",
    "در انگلیسی رنگ معمولاً قبل از اسم می‌آید: a red bag. برای توصیف هم می‌توانی بگویی The bag is red.",
    ["a red bag / a blue book", "My car is green.", "The sky is blue.", "She has a red bag."],
    [
      v("green", "سبز", "My car is green.", "a green car"),
      v("blue", "آبی", "The sky is blue.", "a blue sky"),
      v("red", "قرمز", "She has a red bag.", "a red bag"),
      v("yellow", "زرد", "The sun is yellow.", "a yellow flower"),
      v("black", "سیاه / مشکی", "My car is black.", "a black cat"),
      v("white", "سفید", "The wall is white.", "a white shirt"),
      v("pink", "صورتی", "She has a pink hat.", "a pink dress"),
      v("brown", "قهوه‌ای", "He has brown eyes.", "brown hair"),
      v("purple", "بنفش", "I like purple.", "a purple scarf"),
    ],
    choice(
      "«یک کیف قرمز» کدام است؟",
      ["a bag red", "a red bag", "red a bag"],
      "a red bag",
      "صفت رنگ قبل از اسم قرار می‌گیرد.",
    ),
    "رنگ سه شیء اطرافت را بگو.",
  ],
[
    "adjectives",
    "صفت‌های رایج",
    "✨",
    "reading",
    "صفت، اسم را توصیف می‌کند. صفت قبل از اسم می‌آید: a big house. بعد از فعل to be هم می‌تواند بیاید: The house is big. صفت‌ها جمع نمی‌شوند: two big houses.",
    [
      "My house is big.",
      "This book is interesting.",
      "She has a beautiful bag.",
      "The coffee is hot.",
    ],
    [
      v("big", "بزرگ", "My house is big.", "a big house"),
      v("small", "کوچک", "The room is small.", "a small room"),
      v("new", "جدید", "I have a new phone.", "a new phone"),
      v("old", "قدیمی / پیر", "This is an old car.", "an old car"),
      v("expensive", "گران", "This bag is expensive.", "an expensive bag"),
      v("cheap", "ارزان", "These shoes are cheap.", "cheap shoes"),
      v("easy", "آسان", "The test is easy.", "an easy test"),
      v("difficult", "دشوار", "English is not difficult.", "a difficult question"),
    ],
    choice(
      "کدام جمله درست است؟",
      ["She has a house big.", "She has a big house.", "She has big a house."],
      "She has a big house.",
      "صفت قبل از اسم می‌آید: a big house.",
    ),
    "سه چیز اطرافت را با دو صفت توصیف کن.",
  ],
[
    "feelings",
    "احساس‌ها",
    "😊",
    "speaking",
    "برای گفتن احساس از I’m یا She is استفاده کن: I’m tired. برای پرسیدن بگو How are you? یا How do you feel?",
    ["I’m very tired.", "She is happy today.", "Are you hungry?", "They are busy now."],
    [
      v("happy", "خوشحال", "She is happy today.", "feel happy"),
      v("sad", "ناراحت", "He is sad.", "feel sad"),
      v("angry", "عصبانی", "Why are you angry?", "angry with"),
      v("tired", "خسته", "I’m very tired.", "very tired"),
      v("hungry", "گرسنه", "Are you hungry?", "feel hungry"),
      v("thirsty", "تشنه", "I’m thirsty.", "feel thirsty"),
      v("busy", "مشغول", "They are busy now.", "very busy"),
    ],
    choice(
      "وقتی گرسنه‌ای چه می‌گویی؟",
      ["I’m hungry.", "I’m thirsty.", "I’m angry."],
      "I’m hungry.",
      "hungry یعنی گرسنه و thirsty یعنی تشنه.",
    ),
    "بگو الان چه احساسی داری و چرا.",
  ],
[
    "appearance",
    "توصیف ظاهر و شخصیت",
    "👩‍🦰",
    "speaking",
    "برای توصیف ظاهر از is و has استفاده کن: She is tall. She has long black hair. برای شخصیت از صفت‌هایی مثل friendly و kind کمک بگیر.",
    [
      "She has long black hair.",
      "He has blue eyes.",
      "My brother is tall and thin.",
      "She wears glasses.",
    ],
    [
      v("tall", "قدبلند", "My brother is tall.", "a tall man"),
      v("short", "کوتاه / کوتاه‌قد", "She has short hair.", "short hair"),
      v("hair", "مو", "She has long black hair.", "long hair"),
      v("glasses", "عینک", "She wears glasses.", "wear glasses"),
      v("friendly", "خونگرم / دوستانه", "He is very friendly.", "a friendly person"),
      v("kind", "مهربان", "My mother is kind.", "a kind teacher"),
      v("funny", "بامزه", "My friend is funny.", "a funny story"),
      v("smart", "باهوش", "She is smart.", "a smart student"),
    ],
    choice(
      "کدام جمله درست است؟",
      ["She have long hair.", "She has long hair.", "She is long hair."],
      "She has long hair.",
      "برای she از has استفاده می‌کنیم و مو چیزی است که او دارد.",
    ),
    "بهترین دوستت را با سه جمله توصیف کن.",
  ],
[
    "food",
    "غذا و نوشیدنی",
    "🍎",
    "listening",
    "برای گفتن علاقه از I like و برای درخواست مؤدبانه از I’d like استفاده کن. این دو عبارت کاربرد متفاوت دارند.",
    ["I like apples.", "I’d like a cup of tea, please.", "I don’t like milk."],
    [
      v("tea", "چای", "I’d like a cup of tea.", "a cup of tea"),
      v("water", "آب", "Can I have some water?", "some water"),
      v("bread", "نان", "I eat bread every day.", "a piece of bread"),
      v("rice", "برنج", "We have rice for dinner.", "rice and chicken"),
      v("chicken", "مرغ", "I’d like some chicken.", "grilled chicken"),
      v("cheese", "پنیر", "I like cheese.", "cheese and bread"),
      v("banana", "موز", "I eat a banana.", "a yellow banana"),
      v("juice", "آبمیوه", "A glass of juice, please.", "orange juice"),
    ],
    choice(
      "برای سفارش مؤدبانه چه می‌گویی؟",
      ["I’d like a tea, please.", "Tea me.", "I tea like am."],
      "I’d like a tea, please.",
      "I’d like یک روش مؤدبانه برای درخواست است.",
    ),
    "یک نوشیدنی و یک خوراکی را مؤدبانه سفارش بده.",
  ],
[
    "countable",
    "قابل‌شمارش و غیرقابل‌شمارش",
    "🧮",
    "reading",
    "اسم قابل‌شمارش را می‌شماریم: one apple، two apples. اسم غیرقابل‌شمارش را نمی‌شماریم: rice، sugar، money. برای شمردن آن‌ها از واحد استفاده می‌کنیم: a glass of water، a cup of coffee.",
    [
      "I need a glass of water.",
      "She drinks a cup of coffee.",
      "We have some rice.",
      "He has two apples.",
    ],
    [
      v("glass", "لیوان", "A glass of water, please.", "a glass of water"),
      v("cup", "فنجان", "A cup of coffee, please.", "a cup of coffee"),
      v("bottle", "بطری", "A bottle of milk, please.", "a bottle of milk"),
      v("piece", "تکه", "A piece of bread, please.", "a piece of bread"),
      v("sugar", "شکر", "Do you want sugar?", "some sugar"),
      v("money", "پول", "I don’t have money.", "some money"),
    ],
    choice(
      "کدام درست است؟",
      ["a water", "a glass of water", "two waters"],
      "a glass of water",
      "water غیرقابل‌شمارش است؛ با واحدی مثل glass آن را می‌شماریم.",
    ),
    "سه چیز را که هر روز می‌خوری یا می‌نوشی با واحدشان بگو.",
  ],
[
    "quantity",
    "some، any، much، many",
    "⚖️",
    "writing",
    "some معمولاً در جملهٔ مثبت و any در جملهٔ منفی و سؤالی می‌آید. many را با اسم قابل‌شمارش و much را با اسم غیرقابل‌شمارش به کار ببر. a lot of برای هر دو درست است.",
    [
      "I have some apples.",
      "Do you have any brothers?",
      "How much water do you drink?",
      "She has a lot of friends.",
    ],
    [
      v("some", "مقداری / چند تا", "I have some milk.", "some milk"),
      v("any", "هیچ / مقداری (منفی و سؤالی)", "I don’t have any money.", "any brothers"),
      v("many", "تعداد زیاد (قابل‌شمارش)", "How many books do you have?", "many students"),
      v("much", "مقدار زیاد (غیرقابل‌شمارش)", "How much water do you drink?", "much money"),
      v("a lot of", "خیلی / زیاد", "She has a lot of friends.", "a lot of water"),
      v("a little", "کمی", "I speak a little English.", "a little sugar"),
    ],
    choice(
      "جای خالی: I don’t have ___ money.",
      ["some", "any", "many"],
      "any",
      "در جملهٔ منفی معمولاً any می‌آید.",
    ),
    "بگو در کیفت چه چیزهایی داری و چه چیزهایی نداری.",
  ],
[
    "wouldlike",
    "پیشنهاد مؤدبانه: Would you like…?",
    "🍵",
    "speaking",
    "Would you like …? یک پیشنهاد یا دعوت مؤدبانه است. در پاسخ می‌توانی بگویی Yes, please. یا No, thank you. یا I’d love to. بعد از would like برای اسم مستقیم و برای فعل to + فعل می‌آید.",
    [
      "Would you like some tea?",
      "I’d like to travel.",
      "Would you like to come with us?",
      "I’d love to.",
    ],
    [
      v("travel", "سفر کردن", "I’d like to travel.", "love to travel"),
      v("come", "آمدن", "Would you like to come with us?", "come with us"),
      v("invite", "دعوت کردن", "I’d like to invite you.", "invite a friend"),
      v("join", "همراه شدن", "Would you like to join us?", "join us"),
    ],
    choice(
      "برای پیشنهاد مؤدبانهٔ چای کدام درست است؟",
      ["Would you like some tea?", "You want tea?", "Do tea you like?"],
      "Would you like some tea?",
      "Would you like …? شکل مؤدبانهٔ پیشنهاد دادن است.",
    ),
    "دو پیشنهاد مؤدبانه بده و دو پاسخ مؤدبانه بگو.",
  ],
[
    "liking",
    "دوست داشتن + ing",
    "❤️",
    "speaking",
    "بعد از like، love، enjoy، hate و dislike معمولاً فعل با ing می‌آید: I like swimming. برای پرسیدن بگو What do you like doing?",
    ["I like swimming.", "She loves dancing.", "They enjoy cooking.", "He hates getting up early."],
    [
      v("like", "دوست داشتن", "I like swimming.", "like reading"),
      v("love", "خیلی دوست داشتن", "She loves dancing.", "love music"),
      v("enjoy", "لذت بردن", "They enjoy cooking.", "enjoy reading"),
      v("hate", "متنفر بودن", "He hates getting up early.", "hate waiting"),
      v("dislike", "دوست نداشتن", "I dislike noisy places.", "dislike cold weather"),
    ],
    choice(
      "کدام درست است؟",
      ["I like swim.", "I like swimming.", "I like to swimming."],
      "I like swimming.",
      "بعد از like معمولاً فعل + ing می‌آید.",
    ),
    "سه کاری را که دوست داری و یک کاری را که دوست نداری بگو.",
  ],
[
    "home",
    "خانه و کلاس درس",
    "🪴",
    "reading",
    "واژه‌ها را در جمله و همراه با ترکیب‌های معمول یاد بگیر؛ مثل open the door و sit on a chair.",
    [
      "Open the door, please.",
      "There is a board in the classroom.",
      "The kitchen is next to the bedroom.",
      "My house has two bedrooms.",
      "The fridge is in the kitchen.",
    ],
    [
      v("door", "در", "Open the door, please.", "open the door"),
      v("classroom", "کلاس درس", "We are in the classroom.", "in the classroom"),
      v("kitchen", "آشپزخانه", "The fridge is in the kitchen.", "in the kitchen"),
      v("bedroom", "اتاق خواب", "My house has two bedrooms.", "a big bedroom"),
      v("bathroom", "حمام / سرویس", "The bathroom is small.", "in the bathroom"),
      v("sofa", "مبل", "The sofa is blue.", "sit on the sofa"),
      v("fridge", "یخچال", "The milk is in the fridge.", "open the fridge"),
      v("lamp", "چراغ", "The lamp is on the table.", "a small lamp"),
    ],
    choice(
      "«در را باز کن» کدام است؟",
      ["Open the door.", "Door the open.", "The door opening."],
      "Open the door.",
      "جملهٔ امری با شکل سادهٔ فعل شروع می‌شود.",
    ),
    "خانه یا کلاس خود را با سه جمله معرفی کن.",
  ],
[
    "body",
    "بدن و حال عمومی",
    "🖐️",
    "speaking",
    "برای صحبت دربارهٔ حال خودت از I feel و برای درد از My … hurts استفاده کن.",
    ["I feel tired.", "My head hurts.", "I have two hands.", "I have two eyes and one nose."],
    [
      v("head", "سر", "My head hurts.", "my head hurts"),
      v("hand", "دست", "Wash your hands.", "wash your hands"),
      v("eye", "چشم", "I have two eyes.", "blue eyes"),
      v("nose", "بینی", "My nose is cold.", "a small nose"),
      v("leg", "پا (از ران تا مچ)", "My leg hurts.", "a long leg"),
      v("stomach", "معده / شکم", "My stomach hurts.", "stomach ache"),
      v("back", "کمر / پشت", "My back hurts.", "my back"),
    ],
    choice(
      "برای گفتن «سرم درد می‌کند» چه می‌گویی؟",
      ["My head hurts.", "My head happy.", "I head am."],
      "My head hurts.",
      "hurts برای بیان درد به کار می‌رود.",
    ),
    "بگو امروز چه احساسی داری.",
  ],
[
    "health",
    "بیماری و درد",
    "🤒",
    "speaking",
    "برای گفتن بیماری از I have a … و برای درد از My … hurts استفاده کن. برای پرسیدن بگو What’s the matter? اگر حالت خیلی بد است، حتماً به یک بزرگسال یا پزشک بگو.",
    ["I have a headache.", "She has a cold.", "My stomach hurts.", "What’s the matter?"],
    [
      v("headache", "سردرد", "I have a headache.", "have a headache"),
      v("toothache", "دندان‌درد", "He has a toothache.", "have a toothache"),
      v("fever", "تب", "She has a fever.", "a high fever"),
      v("cough", "سرفه", "I have a cough.", "a bad cough"),
      v("flu", "آنفلوآنزا", "My brother has the flu.", "have the flu"),
      v("sore throat", "گلودرد", "I have a sore throat.", "a sore throat"),
    ],
    choice(
      "برای گفتن «سردرد دارم» کدام درست است؟",
      ["I have a headache.", "I am headache.", "I headache have."],
      "I have a headache.",
      "برای بیماری از I have a … استفاده می‌کنیم.",
    ),
    "بگو اگر سردرد یا گلودرد داری، چه می‌گویی و چه کمکی می‌خواهی.",
  ],
[
    "time",
    "روزها و زمان",
    "🕒",
    "listening",
    "برای ساعت از at و برای روزهای هفته از on استفاده کن. برای صبح و عصر معمولاً in the morning و in the afternoon می‌گوییم.",
    [
      "It’s Monday.",
      "I work at nine.",
      "I study on Friday.",
      "What time is it?",
      "It’s a quarter past seven.",
    ],
    [
      v("Monday", "دوشنبه", "It’s Monday.", "on Monday"),
      v("morning", "صبح", "I study in the morning.", "in the morning"),
      v("afternoon", "بعدازظهر", "I rest in the afternoon.", "in the afternoon"),
      v("evening", "عصر / شب", "We watch TV in the evening.", "in the evening"),
      v("o’clock", "ساعت (دقیق)", "It’s seven o’clock.", "seven o’clock"),
      v("quarter past", "ربع بعد از", "It’s a quarter past seven.", "quarter past seven"),
      v("half past", "نیم بعد از", "It’s half past seven.", "half past seven"),
      v("birthday", "تولد", "When is your birthday?", "on my birthday"),
    ],
    choice(
      "جای خالی: I study ___ Friday.",
      ["in", "on", "under"],
      "on",
      "برای روزهای هفته از on استفاده می‌کنیم.",
    ),
    "روز و ساعت یک برنامهٔ هفتگی را بگو.",
  ],
[
    "months",
    "ماه‌ها و فصل‌ها",
    "📅",
    "reading",
    "نام ماه‌ها و فصل‌ها با حرف بزرگ نوشته می‌شود. قبل از ماه و فصل از in استفاده می‌کنیم: in July، in winter. برای روز مشخص on و برای ساعت at می‌آید.",
    [
      "My birthday is in July.",
      "It is cold in winter.",
      "Nowruz is in March.",
      "School starts in September.",
    ],
    [
      v("January", "ژانویه", "My birthday is in January.", "in January"),
      v("March", "مارس", "Nowruz is in March.", "in March"),
      v("July", "ژوئیه", "It is hot in July.", "in July"),
      v("December", "دسامبر", "It is cold in December.", "in December"),
      v("spring", "بهار", "Flowers grow in spring.", "in spring"),
      v("summer", "تابستان", "I swim in summer.", "in summer"),
      v("autumn", "پاییز", "Leaves fall in autumn.", "in autumn"),
      v("winter", "زمستان", "It snows in winter.", "in winter"),
    ],
    choice(
      "جای خالی: My birthday is ___ July.",
      ["on", "in", "at"],
      "in",
      "قبل از نام ماه‌ها از in استفاده می‌کنیم.",
    ),
    "بگو تولدت چه ماهی است و کدام فصل را بیشتر دوست داری.",
  ],
[
    "weather",
    "وضعیت هوا",
    "🌦️",
    "listening",
    "برای پرسیدن هوا بگو What’s the weather like? و برای پاسخ از It’s و یک صفت استفاده کن: It’s sunny. برای باران و برف می‌گوییم It’s raining و It’s snowing.",
    ["It’s sunny today.", "It’s very cold.", "It’s raining.", "What’s the weather like?"],
    [
      v("sunny", "آفتابی", "It’s sunny today.", "a sunny day"),
      v("cloudy", "ابری", "It’s cloudy this morning.", "a cloudy sky"),
      v("rainy", "بارانی", "It’s a rainy day.", "a rainy day"),
      v("snowy", "برفی", "It’s snowy in the mountains.", "a snowy day"),
      v("windy", "بادی", "It’s windy today.", "a windy day"),
      v("cold", "سرد", "It’s very cold.", "cold weather"),
      v("hot", "گرم", "It’s hot in summer.", "hot weather"),
      v("warm", "ملایم و گرم", "It’s warm in spring.", "a warm day"),
    ],
    choice(
      "برای پرسیدن وضعیت هوا کدام درست است؟",
      ["What’s the weather like?", "How weather is?", "What weather do?"],
      "What’s the weather like?",
      "برای پرسیدن هوا از What’s the weather like? استفاده می‌کنیم.",
    ),
    "هوای امروز و هوای فصل مورد علاقه‌ات را توضیح بده.",
  ],
[
    "jobs",
    "شغل‌ها و محیط کار",
    "💼",
    "writing",
    "برای معرفی شغل از I’m a / an … استفاده کن. برای محل کار از I work in / at … استفاده می‌کنیم.",
    [
      "I’m a doctor.",
      "She is an engineer.",
      "He works in a hospital.",
      "My father is a driver.",
      "What do you do?",
    ],
    [
      v("doctor", "پزشک", "I’m a doctor.", "a doctor"),
      v("hospital", "بیمارستان", "She works in a hospital.", "in a hospital"),
      v("nurse", "پرستار", "She is a nurse.", "a nurse"),
      v("driver", "راننده", "My father is a driver.", "a taxi driver"),
      v("farmer", "کشاورز", "He is a farmer.", "a farmer"),
      v("waiter", "پیشخدمت (مرد)", "The waiter is kind.", "a waiter"),
      v("dentist", "دندان‌پزشک", "My dentist is very good.", "go to the dentist"),
      v("mechanic", "مکانیک", "He is a mechanic.", "a car mechanic"),
      v("police officer", "افسر پلیس", "She is a police officer.", "a police officer"),
    ],
    choice(
      "جملهٔ درست کدام است؟",
      ["I’m doctor a.", "I’m a doctor.", "I doctor is."],
      "I’m a doctor.",
      "شغل مفرد قابل شمارش به a یا an نیاز دارد.",
    ),
    "شغل دو نفر را همراه با محل کارشان بنویس.",
  ],
[
    "hobbies",
    "سرگرمی‌ها",
    "🎭",
    "speaking",
    "برای حرف زدن دربارهٔ سرگرمی‌ها از I like یا I love و فعل + ing استفاده کن. بپرس What do you do in your free time? و جواب بده I like reading and swimming.",
    [
      "I like reading and swimming.",
      "What do you do in your free time?",
      "She enjoys painting.",
      "He loves listening to music.",
    ],
    [
      v("reading", "مطالعه", "I like reading.", "like reading"),
      v("painting", "نقاشی", "She enjoys painting.", "enjoy painting"),
      v("cooking", "آشپزی", "They enjoy cooking.", "enjoy cooking"),
      v("swimming", "شنا", "I like swimming.", "go swimming"),
      v("photography", "عکاسی", "My hobby is photography.", "love photography"),
      v(
        "listening to music",
        "گوش دادن به موسیقی",
        "He loves listening to music.",
        "love listening to music",
      ),
      v("free time", "اوقات فراغ", "What do you do in your free time?", "in your free time"),
    ],
    choice(
      "برای پرسیدن دربارهٔ اوقات فراغ کدام درست است؟",
      ["What do you do in your free time?", "What is free time you?", "Do you free time?"],
      "What do you do in your free time?",
      "این جمله‌ای است که برای پرسیدن اوقات فراغ استفاده می‌شود.",
    ),
    "با یک دوست دربارهٔ سرگرمی‌هایتان دو سؤال و دو جواب بگو.",
  ],
[
    "sports",
    "ورزش‌ها",
    "⚽",
    "listening",
    "با بازی‌های توپی و تیمی از play و با ورزش‌هایی که به ing ختم می‌شوند از go استفاده می‌کنیم. برای ورزش‌هایی مثل یوگا از do کمک می‌گیریم: play football، go swimming، do yoga.",
    ["I play football.", "She plays tennis.", "We go swimming.", "He does yoga."],
    [
      v("football", "فوتبال", "I play football.", "play football"),
      v("basketball", "بسکتبال", "They play basketball.", "play basketball"),
      v("tennis", "تنیس", "She plays tennis.", "play tennis"),
      v("volleyball", "والیبال", "We play volleyball.", "play volleyball"),
      v("running", "دویدن", "We go running.", "go running"),
      v("cycling", "دوچرخه‌سواری", "He goes cycling.", "go cycling"),
      v("yoga", "یوگا", "He does yoga.", "do yoga"),
    ],
    choice(
      "جای خالی: I ___ football.",
      ["play", "go", "do"],
      "play",
      "با بازی‌های توپی مثل football از play استفاده می‌کنیم.",
    ),
    "سه ورزش را با play، go یا do بگو و بپرس دوستت کدام را دوست دارد.",
  ],
[
    "clothes",
    "لباس و پوشاک",
    "👕",
    "reading",
    "برای گفتن لباسی که تنت است از wear یا I’m wearing استفاده کن. رنگ را قبل از نام لباس بگذار: a blue shirt. برای چیزهای جفتی مثل shoes و jeans معمولاً جمع می‌آید.",
    [
      "I’m wearing a blue shirt.",
      "She wears black shoes.",
      "He has a new jacket.",
      "These jeans are cheap.",
    ],
    [
      v("shirt", "پیراهن", "I’m wearing a blue shirt.", "a blue shirt"),
      v("jeans", "شلوار جین", "These jeans are cheap.", "blue jeans"),
      v("dress", "لباس زنانه", "She has a red dress.", "a red dress"),
      v("jacket", "کت / ژاکت", "He has a new jacket.", "a warm jacket"),
      v("shoes", "کفش", "She wears black shoes.", "black shoes"),
      v("hat", "کلاه", "He wears a hat.", "a white hat"),
      v("scarf", "شال / روسری", "It’s cold, so I wear a scarf.", "a long scarf"),
    ],
    choice(
      "«او کفش مشکی می‌پوشد.» کدام درست است؟",
      ["She wears black shoes.", "She wear black shoes.", "She wears shoes black."],
      "She wears black shoes.",
      "با she به wear حرف s اضافه می‌شود و رنگ قبل از اسم می‌آید.",
    ),
    "لباس‌هایی را که الان پوشیده‌ای توضیح بده.",
  ],
[
    "shopping",
    "خرید و پول",
    "🛍️",
    "speaking",
    "در فروشگاه برای قیمت بگو How much is this? و برای رنگ یا اندازه بپرس Do you have it in blue? وقتی می‌خواهی چیزی را بخری می‌گویی I’ll take it.",
    ["How much is this shirt?", "Do you have it in blue?", "I’ll take it.", "Can I pay by card?"],
    [
      v("price", "قیمت", "What’s the price?", "a low price"),
      v("cash", "پول نقد", "Can I pay cash?", "pay cash"),
      v("card", "کارت", "Can I pay by card?", "pay by card"),
      v("receipt", "رسید", "Can I have the receipt?", "the receipt"),
      v("size", "اندازه", "Do you have a larger size?", "a larger size"),
      v("discount", "تخفیف", "Is there a discount?", "a big discount"),
      v("sale", "حراج", "The shoes are on sale.", "on sale"),
    ],
    choice(
      "برای پرسیدن قیمت چه می‌گویی؟",
      ["How much is this?", "How many is this?", "What time is this?"],
      "How much is this?",
      "برای قیمت از How much استفاده می‌کنیم.",
    ),
    "نقش مشتری و فروشنده را بازی کن: قیمت بپرس، رنگ بپرس و خرید کن.",
  ],
[
    "technology",
    "فناوری و اینترنت",
    "💻",
    "listening",
    "نام وسیله‌های دیجیتال را با فعل‌های ساده‌شان یاد بگیر: I use a laptop. I send emails. برای امنیت بیشتر، رمز عبورت را به هیچ‌کس نگو.",
    [
      "I use a laptop every day.",
      "She has a new smartphone.",
      "I send emails every day.",
      "Never share your password.",
    ],
    [
      v("laptop", "لپ‌تاپ", "I use a laptop every day.", "use a laptop"),
      v("smartphone", "گوشی هوشمند", "She has a new smartphone.", "a new smartphone"),
      v("internet", "اینترنت", "I use the internet every day.", "the internet"),
      v("website", "وب‌سایت", "This is a good website.", "visit a website"),
      v("email", "ایمیل", "I send an email.", "send an email"),
      v("password", "رمز عبور", "Never share your password.", "a strong password"),
      v("charger", "شارژر", "I need a charger.", "my phone charger"),
    ],
    choice(
      "«او یک گوشی هوشمند جدید دارد.» کدام درست است؟",
      ["She has a new smartphone.", "She have a new smartphone.", "She has new a smartphone."],
      "She has a new smartphone.",
      "با she از has استفاده می‌کنیم و صفت قبل از اسم می‌آید.",
    ),
    "بگو هر روز از چه وسیله‌هایی استفاده می‌کنی و یک نکتهٔ امنیتی دربارهٔ رمز عبور بنویس.",
  ],
[
    "town",
    "مکان‌های شهر",
    "🏙️",
    "reading",
    "برای پرسیدن مکان بگو Where is the bank? یا Is there a pharmacy near here? نام مکان‌های مهم شهر را همراه there is و حرف‌های اضافهٔ مکان یاد بگیر.",
    [
      "Where is the bank?",
      "Is there a pharmacy near here?",
      "The library is next to the park.",
      "The school is opposite the bank.",
    ],
    [
      v("bank", "بانک", "Where is the bank?", "next to the bank"),
      v("pharmacy", "داروخانه", "Is there a pharmacy near here?", "go to the pharmacy"),
      v("library", "کتابخانه", "The library is next to the park.", "in the library"),
      v("museum", "موزه", "The museum is open today.", "visit a museum"),
      v("park", "پارک", "We walk in the park.", "in the park"),
      v("post office", "اداره پست", "The post office is on the left.", "at the post office"),
      v("supermarket", "سوپرمارکت", "The supermarket is near my house.", "go to the supermarket"),
    ],
    choice(
      "برای پرسیدن جای بانک کدام درست است؟",
      ["Where is the bank?", "What is the bank?", "Who is the bank?"],
      "Where is the bank?",
      "برای پرسیدن مکان از Where استفاده می‌کنیم.",
    ),
    "سه مکان نزدیک خانه‌ات را نام ببر و بگو کجا هستند.",
  ],
[
    "directions",
    "راه پرسیدن و راهنمایی",
    "🧭",
    "speaking",
    "برای راهنمایی از دستورهای کوتاه استفاده کن: Go straight. Turn left. Turn right. برای دقیق‌تر شدن بگو at the bank یا next to the supermarket.",
    [
      "Go straight, then turn left.",
      "Turn right at the bank.",
      "It’s next to the supermarket.",
      "Excuse me, where is the bank?",
    ],
    [
      v("go straight", "مستقیم برو", "Go straight, please.", "go straight"),
      v("turn left", "به چپ بپیچ", "Turn left at the bank.", "turn left"),
      v("turn right", "به راست بپیچ", "Turn right at the corner.", "turn right"),
      v("cross the street", "از خیابان رد شو", "Cross the street here.", "cross the street"),
      v("corner", "گوشه / سر نبش", "Turn left at the corner.", "at the corner"),
      v("far", "دور", "It’s not far.", "not far"),
    ],
    choice(
      "«به چپ بپیچ.» کدام است؟",
      ["Turn left.", "Go left turn.", "Left go."],
      "Turn left.",
      "turn یعنی بپیچ و left یعنی چپ.",
    ),
    "مسیر خانهٔ خودت تا نزدیک‌ترین فروشگاه را به انگلیسی راهنمایی کن.",
  ],
[
    "transport",
    "وسیله‌های حمل‌ونقل",
    "🚌",
    "listening",
    "برای وسیلهٔ رفت‌وآمد از by استفاده می‌کنیم: by bus، by train، by taxi. فقط برای پیاده‌رفتن می‌گوییم on foot.",
    [
      "I go to work by bus.",
      "She travels by plane.",
      "We go to school on foot.",
      "How do you go to work?",
    ],
    [
      v("bus", "اتوبوس", "I go to work by bus.", "by bus"),
      v("train", "قطار", "We go by train.", "by train"),
      v("taxi", "تاکسی", "She takes a taxi.", "by taxi"),
      v("plane", "هواپیما", "He travels by plane.", "by plane"),
      v("subway", "مترو", "I go to work by subway.", "by subway"),
      v("ticket", "بلیت", "I need a ticket.", "buy a ticket"),
      v("passport", "گذرنامه", "Do you have your passport?", "a passport"),
    ],
    choice(
      "جای خالی: I go to work ___ bus.",
      ["by", "on", "with"],
      "by",
      "برای وسیله‌های حمل‌ونقل از by استفاده می‌کنیم.",
    ),
    "بگو معمولاً چطور به مدرسه، کار یا خرید می‌روی.",
  ],
[
    "comparatives",
    "مقایسه: taller و more expensive",
    "⚖️",
    "writing",
    "برای مقایسهٔ دو چیز، به صفت کوتاه er اضافه کن: tall → taller. برای صفت بلند از more استفاده کن: more expensive. بعد از آن than می‌آید. good → better و bad → worse بی‌قاعده‌اند.",
    [
      "Ali is taller than Reza.",
      "My car is cheaper than your car.",
      "English is more interesting than math.",
      "This bag is better than that bag.",
    ],
    [
      v("taller", "بلندتر", "Ali is taller than Reza.", "taller than"),
      v("cheaper", "ارزان‌تر", "This bag is cheaper.", "cheaper than"),
      v("older", "مسن‌تر / قدیمی‌تر", "My brother is older than me.", "older than"),
      v("faster", "سریع‌تر", "A car is faster than a bike.", "faster than"),
      v("more expensive", "گران‌تر", "This phone is more expensive.", "more expensive than"),
      v("better", "بهتر", "This bag is better than that bag.", "better than"),
    ],
    choice(
      "کدام جمله درست است؟",
      ["Ali is more taller than Reza.", "Ali is taller than Reza.", "Ali is tall than Reza."],
      "Ali is taller than Reza.",
      "taller خودش شکل مقایسه‌ای است؛ more و er با هم نمی‌آیند.",
    ),
    "خودت را با یک دوست یا دو وسیله را با چند جمله مقایسه کن.",
  ],
[
    "superlatives",
    "برترین: the tallest",
    "🏆",
    "writing",
    "برای گفتن «بیشترین» یا «برترین» در یک گروه، از the و صفت + est استفاده کن: the tallest. برای صفت‌های بلند از the most استفاده می‌کنیم: the most expensive. good → the best و bad → the worst.",
    [
      "Ali is the tallest student in the class.",
      "This is the most expensive phone.",
      "She is the best student.",
      "Tehran is the biggest city in Iran.",
    ],
    [
      v("tallest", "بلندقدترین", "Ali is the tallest student.", "the tallest"),
      v("biggest", "بزرگ‌ترین", "Tehran is the biggest city.", "the biggest city"),
      v("smallest", "کوچک‌ترین", "This is the smallest room.", "the smallest room"),
      v("most expensive", "گران‌ترین", "This is the most expensive phone.", "the most expensive"),
      v("best", "بهترین", "She is the best student.", "the best"),
      v("worst", "بدترین", "This is the worst day.", "the worst"),
    ],
    choice(
      "جای خالی: She is ___ student in the class.",
      ["the best", "better", "good"],
      "the best",
      "برای بهترین عضو یک گروه از the best استفاده می‌کنیم.",
    ),
    "سه جمله با the best، the biggest یا the most beautiful بگو.",
  ],
[
    "waswere",
    "گذشتهٔ فعل بودن: was و were",
    "⏪",
    "writing",
    "گذشتهٔ am و is می‌شود was و گذشتهٔ are می‌شود were. برای منفی wasn’t و weren’t را به کار ببر. برای سؤال، فعل را قبل از فاعل بگذار: Were you at home?",
    ["I was tired yesterday.", "She was at home.", "They were happy.", "Were you at school?"],
    [
      v("was", "بود (I / he / she / it)", "I was tired yesterday.", "I was at home"),
      v("were", "بودند / بودی (you / we / they)", "They were happy.", "we were friends"),
      v("yesterday", "دیروز", "I was at home yesterday.", "yesterday morning"),
      v("last night", "دیشب", "I was tired last night.", "last night"),
      v("last week", "هفتهٔ گذشته", "We were in Tehran last week.", "last week"),
      v("ago", "پیش", "It was cold two days ago.", "two days ago"),
    ],
    choice(
      "جای خالی: They ___ happy yesterday.",
      ["was", "were", "are"],
      "were",
      "گذشتهٔ they و are می‌شود were.",
    ),
    "بگو دیروز کجا بودی و چه احساسی داشتی.",
  ],
[
    "pastsimple",
    "گذشتهٔ ساده: فعل‌های باقاعده",
    "📘",
    "writing",
    "در گذشتهٔ ساده، به فعل‌های باقاعده ed اضافه می‌کنیم: watch → watched. برای منفی و سؤال از did کمک می‌گیریم و فعل به شکل ساده برمی‌گردد: Did you watch TV? I didn’t watch TV.",
    [
      "I watched TV yesterday.",
      "They played football.",
      "She didn’t visit her grandmother.",
      "Did you call him?",
    ],
    [
      v("watched", "تماشا کردم / کرد", "I watched TV last night.", "watched a movie"),
      v("played", "بازی کرد", "They played football.", "played football"),
      v("cleaned", "تمیز کرد", "She cleaned the kitchen.", "cleaned the room"),
      v("visited", "دیدار کرد", "We visited our grandmother.", "visited a friend"),
      v("studied", "درس خواند", "He studied English.", "studied for the test"),
      v("cooked", "پخت", "My mother cooked dinner.", "cooked dinner"),
    ],
    choice(
      "کدام جمله درست است؟",
      ["Did you watched TV?", "Did you watch TV?", "Do you watched TV?"],
      "Did you watch TV?",
      "بعد از Did فعل به شکل ساده می‌آید، نه watched.",
    ),
    "بگو دیروز یا آخر هفتهٔ گذشته چه کارهایی کردی و چه کارهایی نکردی.",
  ],
[
    "irregular",
    "گذشتهٔ ساده: فعل‌های بی‌قاعده",
    "🔀",
    "reading",
    "بعضی فعل‌ها بی‌قاعده‌اند و برای گذشته ed نمی‌گیرند: go → went، eat → ate، see → saw. این‌ها را باید جدا یاد گرفت. read در گذشته هم read نوشته می‌شود، اما /red/ خوانده می‌شود.",
    [
      "She went to school.",
      "I ate breakfast at eight.",
      "We saw a movie.",
      "He bought a new phone.",
    ],
    [
      v("went", "رفت (go)", "She went to school.", "went to school"),
      v("ate", "خورد (eat)", "I ate breakfast at eight.", "ate lunch"),
      v("saw", "دید (see)", "We saw a movie.", "saw a movie"),
      v("had", "داشت (have)", "I had a good day.", "had a good time"),
      v("made", "ساخت (make)", "She made a cake.", "made a cake"),
      v("bought", "خرید (buy)", "He bought a new phone.", "bought a gift"),
      v("took", "برد / گرفت (take)", "I took a taxi.", "took a taxi"),
      v("wrote", "نوشت (write)", "He wrote a letter.", "wrote a letter"),
    ],
    choice(
      "گذشتهٔ go کدام است؟",
      ["goed", "went", "gone to"],
      "went",
      "go فعل بی‌قاعده است و گذشتهٔ آن went می‌شود.",
    ),
    "سه کاری را که دیروز انجام دادی با فعل‌های بی‌قاعده بگو.",
  ],
[
    "goingto",
    "برنامهٔ آینده: going to",
    "🚀",
    "speaking",
    "برای برنامه‌ها و قصدهای آینده از am، is یا are و بعد going to و فعل ساده استفاده کن: I’m going to study tonight. قیدهایی مثل tomorrow و next week معمولاً همراه آن می‌آیند.",
    [
      "I’m going to study tonight.",
      "She’s going to travel next week.",
      "They’re going to buy a car.",
      "Are you going to come?",
    ],
    [
      v("tomorrow", "فردا", "I’m busy tomorrow.", "see you tomorrow"),
      v("tonight", "امشب", "I’m going to cook tonight.", "tonight at eight"),
      v("next week", "هفتهٔ آینده", "She’s going to travel next week.", "next week"),
      v("next month", "ماه آینده", "We’re going to move next month.", "next month"),
      v("next year", "سال آینده", "I’m going to learn French next year.", "next year"),
    ],
    choice(
      "جای خالی: She ___ going to travel.",
      ["am", "is", "are"],
      "is",
      "برای she از is استفاده می‌کنیم.",
    ),
    "سه برنامهٔ فردا، آخر هفته یا سال آینده‌ات را بگو.",
  ],
[
    "conjunctions",
    "and، but، or، because، so",
    "🔗",
    "writing",
    "با and دو چیز را به هم وصل می‌کنیم، با but تضاد می‌سازیم، با or انتخاب می‌دهیم، با because دلیل می‌گوییم و با so نتیجه را بیان می‌کنیم: It’s raining, so I’m staying home.",
    [
      "I like tea and coffee.",
      "She is tired but happy.",
      "I’m happy because it’s my birthday.",
      "It’s raining, so I’m staying home.",
    ],
    [
      v("and", "و", "I like tea and coffee.", "tea and coffee"),
      v("but", "اما", "She is tired but happy.", "small but beautiful"),
      v("or", "یا", "Do you want tea or coffee?", "tea or coffee"),
      v("because", "چون / زیرا", "I’m happy because it’s my birthday.", "because of you"),
      v("so", "بنابراین / پس", "It’s raining, so I’m staying home.", "so I stay home"),
    ],
    choice(
      "جای خالی: She is tired ___ happy.",
      ["and", "but", "because"],
      "but",
      "tired و happy با هم تضاد دارند؛ پس but درست است.",
    ),
    "با because و so دو جملهٔ کامل بنویس.",
  ],
[
    "cafe",
    "یک گفت‌وگو در کافه",
    "☕",
    "speaking",
    "در کافه سلام کن، سفارش بده و تشکر کن. عبارت Anything else? یعنی «چیز دیگری هم می‌خواهید؟».",
    [
      "A: Hello! What would you like?",
      "B: I’d like a coffee, please.",
      "A: Anything else? B: No, thank you.",
      "The bill, please.",
      "Can I see the menu?",
    ],
    [
      v("coffee", "قهوه", "A coffee, please.", "a cup of coffee"),
      v("please", "لطفاً", "A tea, please.", "yes, please"),
      v("menu", "منو", "Can I see the menu?", "the menu"),
      v("bill", "صورت‌حساب", "The bill, please.", "pay the bill"),
      v("sandwich", "ساندویچ", "A chicken sandwich, please.", "a chicken sandwich"),
      v("order", "سفارش دادن", "Are you ready to order?", "ready to order"),
    ],
    choice(
      "پاسخ مناسب به Anything else? کدام است؟",
      ["No, thank you.", "I am Sara.", "It is Monday."],
      "No, thank you.",
      "اگر سفارش دیگری نداری، مؤدبانه می‌گویی No, thank you.",
    ),
    "نقش مشتری را بازی کن: سلام، سفارش، پرسیدن قیمت و تشکر.",
  ],
[
    "polite",
    "عبارت‌های مؤدبانه و کاربردی",
    "🙏",
    "speaking",
    "این عبارت‌ها در همهٔ موقعیت‌ها به کارت می‌آیند: Can you repeat that? برای درخواست تکرار، Sorry برای عذرخواهی، Thank you برای تشکر و Can I …? برای اجازه گرفتن.",
    [
      "Can you repeat that, please?",
      "I’m sorry I’m late.",
      "Thank you very much.",
      "Can I come in?",
    ],
    [
      v("sorry", "متأسفم / ببخشید", "I’m sorry I’m late.", "say sorry"),
      v("thank you", "ممنون", "Thank you very much.", "thank you very much"),
      v("excuse me", "ببخشید (برای جلب توجه)", "Excuse me, where is the bank?", "excuse me"),
      v("repeat", "تکرار کردن", "Can you repeat that?", "repeat that"),
      v("help", "کمک", "Can you help me?", "help me"),
      v("welcome", "خوش‌آمد / خواهش می‌کنم", "You’re welcome.", "you’re welcome"),
    ],
    choice(
      "پاسخ مناسب به Thank you کدام است؟",
      ["You’re welcome.", "Nice to meet you.", "I’m fine."],
      "You’re welcome.",
      "در جواب تشکر می‌گوییم You’re welcome.",
    ),
    "برای تکرار، کمک خواستن و عذرخواهی هر کدام یک جمله بگو.",
  ],
[
    "vowels",
    "صداهای واکه و تکیهٔ کلمه",
    "🔊",
    "listening",
    "صداهای کوتاه و بلند را جدا گوش بده: sit و seat یکسان نیستند. در کلمه‌های چندبخشی روی یک بخش تکیه (stress) می‌گذاریم: TEAcher، HOspital. تلفظ درست کمک می‌کند بهتر فهمیده شوی.",
    ["Please sit here.", "I see a teacher.", "The hospital is near here.", "The food is good."],
    [
      v("sit", "نشستن (صدای کوتاه)", "Please sit here.", "sit down"),
      v("seat", "صندلی (صدای بلند)", "Take a seat, please.", "take a seat"),
      v("sound", "صدا", "I like the sound of music.", "a short sound"),
      v("vowel", "واکه / صدادار", "A, E, I, O, U are vowels.", "a vowel sound"),
      v("stress", "تکیه", "Put the stress on the first part.", "word stress"),
    ],
    choice(
      "کدام کلمه صدای بلند /iː/ دارد؟",
      ["sit", "seat", "pen"],
      "seat",
      "در seat صدای بلند /iː/ شنیده می‌شود؛ در sit صدای کوتاه /ɪ/ است.",
    ),
    "این کلمه‌ها را بلند بخوان: sit، seat، pen، car، food.",
  ],
[
    "endings",
    "تلفظ s و ed",
    "🔔",
    "listening",
    "s جمع و ed گذشته همیشه یک صدا نمی‌دهند. در books صدای /s/ و در dogs صدای /z/ داریم. بعد از صدای /ʃ/ و /tʃ/ در watches صدای /ɪz/ می‌شنویم. در ed هم سه صدا داریم: worked /t/، opened /d/ و wanted /ɪd/.",
    [
      "She watches movies.",
      "I worked yesterday.",
      "He wanted a coffee.",
      "The dogs played in the park.",
    ],
    [
      v("books", "کتاب‌ها (صدای /s/)", "I have two books.", "three books"),
      v("dogs", "سگ‌ها (صدای /z/)", "Two dogs are here.", "two dogs"),
      v("watches", "تماشا می‌کند (صدای /ɪz/)", "She watches TV.", "watches TV"),
      v("helped", "کمک کرد (صدای /t/)", "She helped me.", "helped me"),
      v("opened", "باز کرد (صدای /d/)", "He opened the door.", "opened the door"),
      v("wanted", "می‌خواست (صدای /ɪd/)", "I wanted a cup of tea.", "wanted to go"),
    ],
    choice(
      "کدام کلمه در پایانش صدای /ɪd/ دارد؟",
      ["worked", "wanted", "helped"],
      "wanted",
      "بعد از صدای /t/ یا /d/ در ed صدای /ɪd/ شنیده می‌شود.",
    ),
    "پنج کلمهٔ جمع یا گذشته را با صدای درست بلند بخوان.",
  ],
[
    "myself",
    "معرفی خودم",
    "🙂",
    "speaking",
    "خودت را با چند جملهٔ کوتاه معرفی کن: نام، سن، شهر، شغل و علاقه‌ها. هر جمله را جدا و واضح بگو. از این الگو می‌توانی در هر دیدار اول استفاده کنی.",
    [
      "Hello! My name is Sara.",
      "I’m twenty-five years old.",
      "I’m from Iran and I live in Tehran.",
      "I like reading books and listening to music.",
    ],
    [
      v("introduce", "معرفی کردن", "Let me introduce myself.", "introduce yourself"),
      v("yourself", "خودت", "Please tell me about yourself.", "about yourself"),
      v("language", "زبان", "I speak two languages.", "a new language"),
      v("Persian", "فارسی", "I speak Persian.", "speak Persian"),
    ],
    choice(
      "برای شروع معرفی کدام درست است؟",
      ["My name is Sara.", "Name my Sara.", "I name Sara is."],
      "My name is Sara.",
      "الگوی My name is … برای گفتن نام درست است.",
    ),
    "خودت را با شش جمله معرفی کن: نام، سن، شهر، شغل و دو علاقه.",
  ],
[
    "readfamily",
    "متن خواندنی: خانوادهٔ دیوید",
    "📖",
    "reading",
    "متن کوتاه را آرام بخوان. اول معنی کلی را بفهم؛ بعد هر جمله را بشنو و بلند تکرار کن. به عددها و شغل‌ها دقت کن.",
    [
      "My name is David and I’m twenty-eight years old.",
      "I live in London with my family.",
      "My father is a doctor, and my mother is a teacher.",
      "I have one brother and one sister.",
      "My brother is a student.",
      "My sister is ten years old.",
      "We are a happy family.",
    ],
    [
      v("years old", "ساله", "I’m twenty-eight years old.", "ten years old"),
      v("with", "همراه / با", "I live with my family.", "live with"),
      v("one", "یک", "I have one brother.", "one brother"),
    ],
    choice(
      "طبق متن، پدر دیوید چه شغلی دارد؟",
      ["doctor", "teacher", "student"],
      "doctor",
      "در متن آمده است: My father is a doctor.",
    ),
    "دربارهٔ خانوادهٔ خودت یک متن پنج‌جمله‌ای بنویس.",
  ],
[
    "readday",
    "متن خواندنی: یک روز معمولی",
    "📖",
    "reading",
    "متن زیر یک روز معمولی را توضیح می‌دهد. جمله‌ها را به ترتیب بخوان و به ساعت‌ها و قیدهایی مثل then و usually دقت کن.",
    [
      "I get up at six thirty every morning.",
      "I have breakfast with my family.",
      "Then I go to work by bus.",
      "I start work at eight and finish at four.",
      "In the evening, I cook dinner and watch TV.",
      "I usually go to bed at ten thirty.",
    ],
    [
      v("start", "شروع کردن", "I start work at eight.", "start work"),
      v("finish", "تمام کردن", "I finish work at four.", "finish work"),
      v("then", "بعد / سپس", "Then I go to work.", "and then"),
      v("dinner", "شام", "I cook dinner.", "cook dinner"),
    ],
    choice(
      "طبق متن، او چطور سر کار می‌رود؟",
      ["by bus", "by train", "on foot"],
      "by bus",
      "در متن آمده است: Then I go to work by bus.",
    ),
    "روز معمولی خودت را با پنج جمله و قیدهای then و usually بنویس.",
  ],
[
    "paragraph",
    "نوشتن یک پاراگراف کوتاه",
    "✍️",
    "writing",
    "یک پاراگراف کوتاه از چند جملهٔ ساده ساخته می‌شود. دربارهٔ یک موضوع بنویس، هر جمله را با حرف بزرگ شروع کن و در پایانش نقطه بگذار. نمونه‌ها را بخوان و الگو را برای خودت تکرار کن.",
    [
      "My best friend is Sara.",
      "She is twenty-two years old.",
      "She has long brown hair.",
      "My house is small but beautiful.",
    ],
    [
      v("topic", "موضوع", "Choose a topic and write.", "a good topic"),
      v("sentence", "جمله", "Write five sentences.", "a short sentence"),
      v("capital letter", "حرف بزرگ", "Start with a capital letter.", "a capital letter"),
      v("full stop", "نقطه", "Put a full stop at the end.", "a full stop"),
    ],
    choice(
      "کدام جمله برای شروع یک معرفی کوتاه مناسب است؟",
      ["I’m Anna. I’m from Italy.", "Anna Italy.", "I am Anna Italy from."],
      "I’m Anna. I’m from Italy.",
      "جمله‌های کامل و مرتب، پاراگراف خوب می‌سازند.",
    ),
    "یک پاراگراف پنج‌جمله‌ای دربارهٔ خانه یا بهترین دوستت بنویس.",
  ],
[
    "mistakes",
    "اشتباه‌های رایج زبان‌آموزان",
    "⚠️",
    "reading",
    "این خطاها بین زبان‌آموزان زیاد دیده می‌شود: I am agree ❌ → I agree. I have 20 years old ❌ → I am 20 years old. She have a car ❌ → She has a car. He can swims ❌ → He can swim. I went to home ❌ → I went home. I have a good news ❌ → I have good news.",
    ["I agree with you.", "I am twenty years old.", "She has a car.", "I went home."],
    [
      v("agree", "موافق بودن", "I agree with you.", "I agree"),
      v("news", "خبر / اخبار", "I have good news.", "good news"),
      v("doesn’t", "نشانهٔ منفی با he، she و it", "She doesn’t like coffee.", "doesn’t like"),
    ],
    choice(
      "کدام جمله درست است؟",
      ["I am agree.", "I agree.", "I agrees."],
      "I agree.",
      "agree خودش فعل است؛ نیازی به am نیست.",
    ),
    "این دو جمله را درست کن: She have a car. He can swims.",
  ],
[
    "numbers-1-19",
    "اعداد ۱ تا ۱۹",
    "🔢",
    "listening",
    `LEVEL A1 – BEGINNER\nLESSON 03: NUMBERS 1–19\nدرس سوم: اعداد ۱ تا ۱۹\n\nسطح: A1 – مبتدی مطلق\nبخش: Basic English Foundations\n\nبخش اول: اهداف آموزشی – Learning Objectives\nدر پایان این درس، زبان‌آموز می‌تواند:\n۱. اعداد ۱ تا ۱۹ را به انگلیسی بشناسد.\n۲. شکل نوشتاری اعداد را تشخیص دهد.\n۳. اعداد ۱ تا ۱۹ را به انگلیسی تلفظ کند.\n۴. از ۱ تا ۱۹ به انگلیسی بشمارد.\n۵. اعداد گفته‌شده را تشخیص دهد.\n۶. تعداد اشیای ساده را با عدد مناسب بیان کند.\n۷. شکل نوشتاری اعداد را بدون نگاه کردن به نمونه بنویسد.\n\nبخش دوم: معرفی اعداد انگلیسی – Introduction to Numbers\nدر زبان انگلیسی، برای بیان تعداد چیزها از اعداد استفاده می‌کنیم. در این درس با نوزده عدد اول آشنا می‌شویم.\n1 — one — وان — /wʌn/\n2 — two — تو — /tuː/\n3 — three — ثری — /θriː/\n4 — four — فور — /fɔːr/\n5 — five — فایو — /faɪv/\n6 — six — سیکس — /sɪks/\n7 — seven — سِوِن — /ˈsev.ən/\n8 — eight — اِیت — /eɪt/\n9 — nine — ناین — /naɪn/\n10 — ten — تِن — /ten/\nنکته: تلفظ فارسی فقط برای نزدیک شدن به صدای انگلیسی است. برای تلفظ دقیق‌تر به آوانگاری IPA توجه کنید.\n\nبخش سوم: بانک واژگان – Vocabulary Bank\nONE\nIPA: /wʌn/\nمعنی: یک\nOne book.\nیک کتاب.\nI have one pen.\nمن یک خودکار دارم.\nOne apple is red.\nیک سیب قرمز است.\n\nTWO\nIPA: /tuː/\nمعنی: دو\nTwo books.\nدو کتاب.\nI have two pens.\nمن دو خودکار دارم.\nTwo cats are here.\nدو گربه اینجا هستند.\n\nTHREE\nIPA: /θriː/\nمعنی: سه\nThree apples.\nسه سیب.\nI have three books.\nمن سه کتاب دارم.\nThree students are here.\nسه دانش‌آموز اینجا هستند.\n\nFOUR\nIPA: /fɔːr/\nمعنی: چهار\nFour chairs.\nچهار صندلی.\nI have four pens.\nمن چهار خودکار دارم.\nFour birds are in the tree.\nچهار پرنده روی درخت هستند.\n\nFIVE\nIPA: /faɪv/\nمعنی: پنج\nFive books.\nپنج کتاب.\nI have five apples.\nمن پنج سیب دارم.\nFive students are here.\nپنج دانش‌آموز اینجا هستند.\n\nSIX\nIPA: /sɪks/\nمعنی: شش\nSix eggs.\nشش تخم‌مرغ.\nI have six pencils.\nمن شش مداد دارم.\nSix cats are outside.\nشش گربه بیرون هستند.\n\nSEVEN\nIPA: /ˈsev.ən/\nمعنی: هفت\nSeven days.\nهفت روز.\nI have seven books.\nمن هفت کتاب دارم.\nSeven birds are in the garden.\nهفت پرنده در باغ هستند.\n\nEIGHT\nIPA: /eɪt/\nمعنی: هشت\nEight chairs.\nهشت صندلی.\nI have eight pencils.\nمن هشت مداد دارم.\nEight apples are on the table.\nهشت سیب روی میز هستند.\n\nNINE\nIPA: /naɪn/\nمعنی: نه\nNine books.\nنه کتاب.\nI have nine pens.\nمن نه خودکار دارم.\nNine students are here.\nنه دانش‌آموز اینجا هستند.\n\nTEN\nIPA: /ten/\nمعنی: ده\nTen fingers.\nده انگشت.\nI have ten books.\nمن ده کتاب دارم.\nTen apples are in the bag.\nده سیب در کیف هستند.\n\nبخش چهارم: نکات تلفظ – Pronunciation Focus\nتفاوت THREE و TREE\nTHREE\n/θriː/\nTREE\n/triː/\nدر THREE صدای /θ/ وجود دارد. برای تولید این صدا، نوک زبان را کمی بین دندان‌ها قرار دهید و هوا را بیرون بدهید. در TREE صدای /t/ وجود دارد و زبان پشت دندان‌های بالایی قرار می‌گیرد.\nتمرین تلفظ:\nthree\nthree books\nthree pens\nthree apples\n\nتفاوت TWO و TEN\nTWO\n/tuː/\nTEN\n/ten/\nدر TWO صدای کشیده /uː/ شنیده می‌شود؛ اما در TEN صدای /e/ کوتاه است.\nتمرین تلفظ:\ntwo\nten\ntwo books\nten books\n\nتفاوت FIVE و NINE\nFIVE\n/faɪv/\nNINE\n/naɪn/\nهر دو دارای صدای /aɪ/ هستند.\nتمرین تلفظ:\nfive\nnine\nfive pens\nnine pens\n\nبخش پنجم: ترتیب اعداد – Number Sequence\nترتیب عددها:\n1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10\nOne → Two → Three → Four → Five → Six → Seven → Eight → Nine → Ten\nتمرین شمارش رو به جلو: از ۱ تا ۱۹ با صدای بلند بشمارید.\nتمرین شمارش معکوس:\nTen → Nine → Eight → Seven → Six → Five → Four → Three → Two → One\nتمرین عدد جاافتاده:\nOne, Two, ___, Four\nTwo, Three, ___, Five\nFour, Five, ___, Seven\nSix, Seven, ___, Nine\nSeven, Eight, ___, Ten\n\nبخش ششم: اعداد و تعداد اشیا – Numbers and Objects\nOne book\nیک کتاب\nTwo books\nدو کتاب\nThree pens\nسه خودکار\nFour chairs\nچهار صندلی\nFive apples\nپنج سیب\nSix eggs\nشش تخم‌مرغ\nSeven bags\nهفت کیف\nEight pencils\nهشت مداد\nNine students\nنه دانش‌آموز\nTen fingers\nده انگشت\nنکته گرامری مقدماتی: بیشتر اسم‌های قابل‌شمارش وقتی تعدادشان بیشتر از یک باشد، با s جمع بسته می‌شوند.\nOne book\nیک کتاب\nTwo books\nدو کتاب\nOne pen\nیک خودکار\nThree pens\nسه خودکار\nدر این درس فقط با شکل ساده این تفاوت آشنا می‌شویم. آموزش کامل اسم‌های مفرد و جمع در درس ۵۱ ارائه خواهد شد.\n\nبخش هفتم: عبارت‌های ساده با اعداد – Simple Number Expressions\nOne apple.\nیک سیب.\nTwo books.\nدو کتاب.\nThree pens.\nسه خودکار.\nFour chairs.\nچهار صندلی.\nFive students.\nپنج دانش‌آموز.\nSix eggs.\nشش تخم‌مرغ.\nSeven days.\nهفت روز.\nEight pencils.\nهشت مداد.\nNine cats.\nنه گربه.\nTen fingers.\nده انگشت.\nپرسش و پاسخ بسیار ساده:\nHow many?\nچند تا؟\nHow many books?\nچند کتاب؟\nTwo books.\nدو کتاب.\nHow many apples?\nچند سیب؟\nFive apples.\nپنج سیب.\nاین عبارت‌ها برای آشنایی اولیه هستند. آموزش کامل سؤال‌سازی با How many در درس ۵۵ ارائه می‌شود.\n\nبخش هشتم: تمرین‌های کلاسی – Classroom Activities\nتمرین اول: تکرار اعداد. مدرس هر عدد را می‌خواند و زبان‌آموز آن را سه بار تکرار می‌کند. نمونه:\nTeacher: One\nمدرس: یک\nStudent: One, One, One\nزبان‌آموز: وان، وان، وان\nاین فعالیت برای تمام اعداد ۱ تا ۱۹ انجام شود.\nتمرین دوم: شمارش با انگشتان. یک انگشت: One؛ دو انگشت: Two؛ سه انگشت: Three؛ چهار انگشت: Four؛ پنج انگشت: Five؛ شش انگشت: Six؛ هفت انگشت: Seven؛ هشت انگشت: Eight؛ نه انگشت: Nine؛ ده انگشت: Ten.\nتمرین سوم: شمارش اشیای واقعی. مدرس تعدادی مداد، کتاب یا خودکار روی میز قرار می‌دهد و زبان‌آموز تعداد آن‌ها را به انگلیسی می‌گوید. نمونه:\nOne\nیک\nThree\nسه\nFive\nپنج\nتمرین چهارم: تشخیص عدد شنیده‌شده. مدرس یکی از اعداد ۱ تا ۱۹ را می‌گوید و زبان‌آموز رقم درست را روی کاغذ نشان می‌دهد.\nتمرین پنجم: نوشتن از روی شنیده‌ها. مدرس یک عدد را تلفظ می‌کند و زبان‌آموز شکل نوشتاری آن را می‌نویسد. نمونه:\nFive\nزبان‌آموز می‌نویسد: Five\n\nبخش نهم: تمرین‌های نوشتاری – Written Practice\nتمرین ۱: وصل کردن عدد به کلمه. ستون‌ها را به هم وصل کنید:\n۱ — Five\n۲ — One\n۳ — Seven\n۴ — Three\n۵ — Nine\n۶ — Two\n۷ — Ten\n۸ — Four\n۹ — Six\n۱۰ — Eight\nتمرین ۲: عددها را با حروف انگلیسی بنویسید:\n1 = ________\n2 = ________\n3 = ________\n4 = ________\n5 = ________\n6 = ________\n7 = ________\n8 = ________\n9 = ________\n10 = ________\nتمرین ۳: رقم مناسب را بنویسید:\nOne = ____\nThree = ____\nFive = ____\nSeven = ____\nNine = ____\nTwo = ____\nFour = ____\nSix = ____\nEight = ____\nTen = ____\nتمرین ۴: ترتیب اعداد را کامل کنید:\nOne, Two, ______\nThree, Four, ______\nFive, ______, Seven\nSix, Seven, ______\nEight, ______, Ten\nتمرین ۵: شمارش اشیا. تعداد شکل‌ها را بشمارید و عدد انگلیسی مناسب را بنویسید:\n🍎\n🍎 🍎\n🍎 🍎 🍎\n🍎 🍎 🍎 🍎\n🍎 🍎 🍎 🍎 🍎\n✏️ ✏️ ✏️ ✏️ ✏️ ✏️\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐\n⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽\n📚 📚 📚 📚 📚 📚 📚 📚 📚\n🍌 🍌 🍌 🍌 🍌 🍌 🍌 🍌 🍌 🍌\n\nبخش دهم: آزمون کتبی – Written Test\nتعداد سؤال‌ها: ۳۰؛ نمره کل: ۳۰؛ زمان پیشنهادی: ۲۰ دقیقه. تمام دستورالعمل‌ها فارسی هستند.\nبخش اول: تشخیص عدد، سؤال‌های ۱ تا ۵. گزینه درست را انتخاب کنید.\n۱. عدد ۱ کدام است؟ الف) Two؛ ب) One؛ ج) Five؛ د) Ten\n۲. عدد ۴ کدام است؟ الف) Four؛ ب) Five؛ ج) Three؛ د) Nine\n۳. عدد ۷ کدام است؟ الف) Six؛ ب) Eight؛ ج) Seven؛ د) Ten\n۴. عدد ۹ کدام است؟ الف) Five؛ ب) Four؛ ج) Eight؛ د) Nine\n۵. عدد ۱۰ کدام است؟ الف) Two؛ ب) Ten؛ ج) Three؛ د) Seven\nبخش دوم: تشخیص رقم، سؤال‌های ۶ تا ۱۰. رقم درست را انتخاب کنید.\n۶. One: الف) ۲؛ ب) ۳؛ ج) ۱؛ د) ۵\n۷. Three: الف) ۳؛ ب) ۴؛ ج) ۶؛ د) ۸\n۸. Six: الف) ۵؛ ب) ۶؛ ج) ۷؛ د) ۹\n۹. Eight: الف) ۴؛ ب) ۶؛ ج) ۷؛ د) ۸\n۱۰. Ten: الف) ۹؛ ب) ۵؛ ج) ۱۰؛ د) ۲\nبخش سوم: ترتیب اعداد، سؤال‌های ۱۱ تا ۱۵. گزینه درست را انتخاب کنید.\n۱۱. One, Two, ____: الف) Four؛ ب) Three؛ ج) Five؛ د) Six\n۱۲. Three, Four, ____: الف) Six؛ ب) Seven؛ ج) Five؛ د) Two\n۱۳. Five, Six, ____: الف) Seven؛ ب) Eight؛ ج) Four؛ د) Ten\n۱۴. Seven, Eight, ____: الف) Six؛ ب) Ten؛ ج) Five؛ د) Nine\n۱۵. Eight, Nine, ____: الف) Seven؛ ب) Ten؛ ج) Six؛ د) Four\nبخش چهارم: عدد جاافتاده، سؤال‌های ۱۶ تا ۲۰. عدد انگلیسی مناسب را بنویسید.\n۱۶. One, Two, __________\n۱۷. Four, __________, Six\n۱۸. Six, Seven, __________\n۱۹. Seven, Eight, __________\n۲۰. Nine, __________\nبخش پنجم: تطبیق عدد و کلمه، سؤال‌های ۲۱ تا ۲۵. هر کلمه را به رقم مناسب وصل کنید.\n۲۱. Five؛ ۲۲. Two؛ ۲۳. Nine؛ ۲۴. One؛ ۲۵. Seven\nگزینه‌ها: الف) ۹؛ ب) ۵؛ ج) ۱؛ د) ۷؛ هـ) ۲\nبخش ششم: شمارش اشیا، سؤال‌های ۲۶ تا ۳۰. تعداد شکل‌ها را بشمارید و گزینه درست را انتخاب کنید.\n۲۶. 🍎 🍎 🍎 — الف) Two؛ ب) Three؛ ج) Four؛ د) Five\n۲۷. ⭐ ⭐ ⭐ ⭐ ⭐ — الف) Five؛ ب) Six؛ ج) Seven؛ د) Eight\n۲۸. ⚽ ⚽ — الف) One؛ ب) Three؛ ج) Two؛ د) Four\n۲۹. 🍌 🍌 🍌 🍌 🍌 🍌 🍌 — الف) Five؛ ب) Six؛ ج) Seven؛ د) Nine\n۳۰. 📚 📚 📚 📚 📚 📚 📚 📚 📚 📚 — الف) Eight؛ ب) Nine؛ ج) Seven؛ د) Ten\n\nبخش یازدهم: آزمون شفاهی – Speaking and Listening Test\nنمره کل: ۱۰؛ زمان پیشنهادی: ۵ تا ۷ دقیقه. آزمون توسط مدرس اجرا می‌شود و زبان‌آموز نیازی به خواندن متن انگلیسی ندارد.\nبخش اول: تلفظ اعداد، ۳ نمره. زبان‌آموز این اعداد را تلفظ کند:\n2\n5\n8\nتلفظ صحیح هر عدد: ۱ نمره؛ تلفظ قابل‌فهم با اشتباه جزئی: ۰٫۵؛ تلفظ نادرست یا بدون پاسخ: صفر.\nبخش دوم: شمارش، ۲ نمره. از ۱ تا ۵ و سپس از ۶ تا ۱۰ بشمارد. هر شمارش صحیح: ۱ نمره.\nبخش سوم: تشخیص عدد شنیده‌شده، ۳ نمره. مدرس می‌گوید و زبان‌آموز رقم را می‌نویسد:\nFour\nNine\nOne\nهر پاسخ صحیح: ۱ نمره.\nبخش چهارم: شمارش اشیای واقعی، ۲ نمره. مدرس دو گروه شیء مانند سه مداد و پنج کتاب نشان می‌دهد. زبان‌آموز تعداد هر گروه را به انگلیسی بیان می‌کند. هر پاسخ صحیح: ۱ نمره.\n\nبخش دوازدهم: پاسخ‌نامه آزمون کتبی – Answer Key\nسؤال‌های ۱ تا ۵: ۱) ب؛ ۲) الف؛ ۳) ج؛ ۴) د؛ ۵) ب.\nسؤال‌های ۶ تا ۱۰: ۶) ج؛ ۷) الف؛ ۸) ب؛ ۹) د؛ ۱۰) ج.\nسؤال‌های ۱۱ تا ۱۵: ۱۱) ب؛ ۱۲) ج؛ ۱۳) الف؛ ۱۴) د؛ ۱۵) ب.\nسؤال‌های ۱۶ تا ۲۰:\n۱۶. Three\n۱۷. Five\n۱۸. Eight\n۱۹. Nine\n۲۰. Ten\nسؤال‌های ۲۱ تا ۲۵: ۲۱) ب؛ ۲۲) هـ؛ ۲۳) الف؛ ۲۴) ج؛ ۲۵) د.\nسؤال‌های ۲۶ تا ۳۰: ۲۶) ب؛ ۲۷) الف؛ ۲۸) ج؛ ۲۹) ج؛ ۳۰) د.\n\nبخش سیزدهم: توضیح پاسخ‌ها – Answer Explanations\nسؤال‌های ۱ تا ۵ توانایی تشخیص شکل نوشتاری اعداد را می‌سنجند. سؤال‌های ۶ تا ۱۰ توانایی ارتباط دادن کلمه انگلیسی به رقم را ارزیابی می‌کنند. سؤال‌های ۱۱ تا ۱۵ ترتیب متوالی اعداد را می‌سنجند. سؤال‌های ۱۶ تا ۲۰ توانایی تشخیص عدد جاافتاده را بررسی می‌کنند. سؤال‌های ۲۱ تا ۲۵ توانایی تطبیق کلمه و رقم را ارزیابی می‌کنند. سؤال‌های ۲۶ تا ۳۰ توانایی شمارش اشیا و انتخاب عدد مناسب را می‌سنجند. پاسخ‌های بخش شفاهی باید بر اساس اجرای واقعی آزمون و معیارهای اعلام‌شده توسط مدرس نمره‌دهی شوند.\n\nبخش چهاردهم: معیار ارزیابی – Assessment Criteria\nآزمون کتبی:\n۲۷ تا ۳۰: عالی؛ تسلط مناسب بر اعداد ۱ تا ۱۹.\n۲۳ تا ۲۶: خوب؛ شناخت مناسب با چند اشتباه جزئی.\n۱۸ تا ۲۲: قابل قبول؛ یادگیری اولیه و نیازمند تمرین بیشتر.\n۰ تا ۱۷: نیازمند تمرین؛ نیاز به مرور و آموزش مجدد.\nآزمون شفاهی:\n۹ تا ۱۰: تلفظ و تشخیص بسیار خوب.\n۷ تا ۸: عملکرد خوب با اشتباهات محدود.\n۵ تا ۶: عملکرد متوسط و نیازمند تمرین.\n۰ تا ۴: نیازمند مرور کامل درس.\nشرایط پیشنهادی قبولی: حداقل ۲۳ از ۳۰ در آزمون کتبی و حداقل ۷ از ۱۰ در آزمون شفاهی. برای اطمینان از یادگیری، زبان‌آموز باید بتواند اعداد را هم به ترتیب و هم به‌صورت تصادفی تشخیص دهد.\n\nبخش پانزدهم: نکات آموزشی برای مدرس – Teacher Notes\n۱. در شروع درس، از زبان‌آموز انتظار خواندن مستقل کلمات انگلیسی نداشته باشید.\n۲. ابتدا هر عدد را تلفظ کنید و از زبان‌آموز بخواهید تکرار کند.\n۳. از انگشتان دست و اشیای واقعی برای آموزش تعداد استفاده کنید.\n۴. ابتدا ترتیب ۱ تا ۱۰ و سپس تشخیص تصادفی آن‌ها را تمرین کنید.\n۵. تفاوت تلفظ THREE و TWO را با دقت آموزش دهید.\n۶. از زبان‌آموز بخواهید اعداد را بدون مشاهده نمونه بنویسد.\n۷. در آزمون شفاهی، اعداد را با سرعت طبیعی اما واضح بیان کنید.\n۸. برای ارزیابی تشخیص شنیداری، از اشاره یا حرکت دست به‌عنوان راهنمای پاسخ استفاده نکنید.\n۹. اگر زبان‌آموز در تشخیص عددی مشکل دارد، تمرین‌های تصویری و شمارش اشیای واقعی را تکرار کنید.\n۱۰. پیش از ورود به درس بعدی، مطمئن شوید زبان‌آموز می‌تواند هر نوزده عدد را به‌صورت تصادفی تشخیص دهد.\n\nبخش شانزدهم: یادداشت اعتبارسنجی آزمون – Test Quality Notes\nاین آزمون بر اساس اهداف آموزشی همین درس طراحی شده است.\nروایی (Validity): سؤال‌ها مستقیماً توانایی‌های هدف درس، یعنی شناخت، شمارش، تشخیص و نوشتن اعداد ۱ تا ۱۹ را ارزیابی می‌کنند.\nپایایی (Reliability): برای افزایش پایایی، دستورالعمل‌ها، شیوه اجرای آزمون شفاهی و معیارهای نمره‌دهی باید برای تمام زبان‌آموزان یکسان باشد.\nعملی بودن (Practicality): آزمون با کاغذ، مداد، کارت عدد و اشیای ساده قابل اجراست و به تجهیزات تخصصی نیاز ندارد.\nتحلیل سؤال‌ها: شاخص‌های Item Facility (IF)، Item Discrimination (ID) و Distractor Analysis پس از اجرای واقعی آزمون و جمع‌آوری پاسخ زبان‌آموزان قابل محاسبه‌اند. تا پیش از اجرای واقعی آزمون، هیچ مقدار آماری برای این شاخص‌ها گزارش نمی‌شود.\n\nبخش هفدهم: اعداد ۱۱ تا ۱۹ – Numbers 11–19\n۱۱ — eleven — اِلِوِن — /ɪˈlev.ən/\n۱۲ — twelve — توِلو — /twelv/\n۱۳ — thirteen — ثِرتین — /ˌθɜːrˈtiːn/\n۱۴ — fourteen — فورتین — /ˌfɔːrˈtiːn/\n۱۵ — fifteen — فیفتین — /ˌfɪfˈtiːn/\n۱۶ — sixteen — سیکستین — /ˌsɪkˈstiːn/\n۱۷ — seventeen — سِوِنتین — /ˌsev.ənˈtiːn/\n۱۸ — eighteen — اِیتین — /ˌeɪˈtiːn/\n۱۹ — nineteen — ناینتین — /ˌnaɪnˈtiːn/\n\nنکته تلفظی: در اعداد ۱۳ تا ۱۹، بخش پایانی teen معمولاً کشیده و دارای تکیه است. این الگو را با اعداد دهگان مانند thirty و forty مقایسه کنید.\nنمونه‌ها:\nEleven books.\nیازده کتاب.\nTwelve pencils.\nدوازده مداد.\nThirteen students.\nسیزده دانش‌آموز.\nFourteen apples.\nچهارده سیب.\nFifteen chairs.\nپانزده صندلی.\nSixteen pens.\nشانزده خودکار.\nSeventeen books.\nهفده کتاب.\nEighteen students.\nهجده دانش‌آموز.\nNineteen cards.\nنوزده کارت.\n\nتمرین شمارش: از ۱ تا ۱۹ به ترتیب بشمارید؛ سپس از ۱۹ تا ۱ به عقب بشمارید.\nتمرین تشخیص: مدرس یکی از اعداد ۱۱ تا ۱۹ را می‌خواند و زبان‌آموز رقم آن را می‌نویسد.\nتمرین نوشتاری: اعداد ۱۱ تا ۱۹ را با حروف انگلیسی بنویسید و سپس شکل نوشتاری آن‌ها را با رقم مناسب وصل کنید.\n\nپایان درس ۰۳\nعنوان درس بعدی: درس ۰۴ – Numbers 20–100\nاعداد ۲۰ تا ۱۰۰`,
    [
      "One — وان — /wʌn/",
      "Two — تو — /tuː/",
      "Three — ثری — /θriː/",
      "Four — فور — /fɔːr/",
      "Five — فایو — /faɪv/",
      "Six — سیکس — /sɪks/",
      "Seven — سِوِن — /ˈsev.ən/",
      "Eight — اِیت — /eɪt/",
      "Nine — ناین — /naɪn/",
      "Ten — تِن — /ten/",
      "Eleven — اِلِوِن — /ɪˈlev.ən/",
      "Twelve — توِلو — /twelv/",
      "Thirteen — ثِرتین — /ˌθɜːrˈtiːn/",
      "Fourteen — فورتین — /ˌfɔːrˈtiːn/",
      "Fifteen — فیفتین — /ˌfɪfˈtiːn/",
      "Sixteen — سیکستین — /ˌsɪkˈstiːn/",
      "Seventeen — سِوِنتین — /ˌsev.ənˈtiːn/",
      "Eighteen — اِیتین — /ˌeɪˈtiːn/",
      "Nineteen — ناینتین — /ˌnaɪnˈtiːn/",
      "How many? — چند تا؟",
      "How many books? — چند کتاب؟",
    ],
    [
      v("one", "یک", "One book.", "one book"),
      v("two", "دو", "Two books.", "two books"),
      v("three", "سه", "Three apples.", "three apples"),
      v("four", "چهار", "Four chairs.", "four chairs"),
      v("five", "پنج", "Five books.", "five books"),
      v("six", "شش", "Six eggs.", "six eggs"),
      v("seven", "هفت", "Seven days.", "seven days"),
      v("eight", "هشت", "Eight pencils.", "eight pencils"),
      v("nine", "نه", "Nine books.", "nine books"),
      v("ten", "ده", "Ten fingers.", "ten fingers"),
      v("eleven", "یازده", "Eleven books.", "eleven books"),
      v("twelve", "دوازده", "Twelve pencils.", "twelve pencils"),
      v("thirteen", "سیزده", "Thirteen students.", "thirteen students"),
      v("fourteen", "چهارده", "Fourteen apples.", "fourteen apples"),
      v("fifteen", "پانزده", "Fifteen chairs.", "fifteen chairs"),
      v("sixteen", "شانزده", "Sixteen pens.", "sixteen pens"),
      v("seventeen", "هفده", "Seventeen books.", "seventeen books"),
      v("eighteen", "هجده", "Eighteen students.", "eighteen students"),
      v("nineteen", "نوزده", "Nineteen cards.", "nineteen cards"),
      v("how many", "چند تا؟", "How many books?", "how many books"),
    ],
    choice(
      "عدد انگلیسی Three کدام رقم را نشان می‌دهد؟",
      ["2", "3", "5", "8"],
      "3",
      "Three به معنی سه است و با رقم 3 نشان داده می‌شود.",
    ),
    "اعداد One تا Nineteen را یک بار به ترتیب و یک بار به‌صورت تصادفی با صدای بلند بگو. سپس پنج گروه شیء را بشمار و تعداد هر گروه را به انگلیسی بیان کن.",
  ],
[
    "greetings",
    "سلام و احوالپرسی",
    "👋",
    "speaking",
    `LEVEL A1 – BEGINNER
LESSON 06: GREETINGS
درس ششم: سلام و احوالپرسی

سطح: A1 – مبتدی
بخش: Basic English Foundations

بخش اول: آزمون ترکیبی – Mixed Skills Test
مدت پیشنهادی: ۲۰ تا ۲۵ دقیقه
نمره کل: ۳۰

راهنمای اجرای آزمون
این آزمون سه نوع فعالیت دارد:
کتبی (Written): زبان‌آموز پاسخ را می‌نویسد یا گزینه مناسب را انتخاب می‌کند.
گفتاری (Speaking): زبان‌آموز با صدای بلند پاسخ می‌دهد یا مکالمه کوتاه انجام می‌دهد.
شنیداری (Listening): مدرس عبارت یا مکالمه را می‌خواند و زبان‌آموز بر اساس شنیده‌ها پاسخ می‌دهد.
فعالیت‌ها عمداً ترکیب شده‌اند. آزمون را به همین ترتیب اجرا کنید و فعالیت‌های گفتاری و شنیداری را به پایان آزمون منتقل نکنید.

بخش دوم: سؤال‌های آزمون زبان‌آموز

سؤال ۱ – کتبی | انتخاب پاسخ مناسب | ۱ نمره
برای هر موقعیت عبارت مناسب را انتخاب کنید.
۱. صبح، وقتی دوستتان را می‌بینید:
الف) Good morning
ب) Good night
ج) Goodbye
۲. هنگام خداحافظی:
الف) How are you?
ب) Goodbye
ج) Nice to meet you

سؤال ۲ – کتبی | درست یا نادرست | ۱ نمره
درستی یا نادرستی جمله‌ها را مشخص کنید.
۱. Good morning برای سلام کردن در صبح استفاده می‌شود.
۲. Goodbye برای شروع احوالپرسی استفاده می‌شود.
۳. Hi یک روش دوستانه برای سلام کردن است.
۴. Nice to meet you معمولاً هنگام آشنایی با فرد جدید گفته می‌شود.

سؤال ۳ – گفتاری | سلام کردن | ۲ نمره
موقعیت اول: صبح وارد کلاس شده‌اید و معلمتان را می‌بینید؛ به او سلام کنید.
موقعیت دوم: عصر دوستتان را می‌بینید؛ به او سلام کنید.
انتظار: برای هر موقعیت یک عبارت مناسب را با صدای بلند بگویید.

سؤال ۴ – کتبی | وصل کردن عبارت‌ها | ۱ نمره
عبارت انگلیسی را به معنی فارسی وصل کنید.
Hello — الف) از دیدنت خوشحالم؛ ب) حالت چطور است؟؛ ج) می‌بینمت؛ د) سلام
How are you? — الف) از دیدنت خوشحالم؛ ب) حالت چطور است؟؛ ج) می‌بینمت؛ د) سلام
See you — الف) از دیدنت خوشحالم؛ ب) حالت چطور است؟؛ ج) می‌بینمت؛ د) سلام
Nice to meet you — الف) از دیدنت خوشحالم؛ ب) حالت چطور است؟؛ ج) می‌بینمت؛ د) سلام

سؤال ۵ – کتبی | کامل کردن مکالمه | ۲ نمره
با استفاده از عبارت‌های داخل کادر جاهای خالی را کامل کنید.
Hello – I'm fine, thanks – And you? – Goodbye
A: __________!
B: Hi! How are you?
A: __________. __________
B: I'm fine, too.
A: __________!

سؤال ۶ – شنیداری | تشخیص عبارت شنیده‌شده | ۲ نمره
به عبارت‌هایی که مدرس می‌خواند گوش دهید و گزینه مناسب را انتخاب کنید.
۱. الف) Good morning؛ ب) Good evening؛ ج) Good night
۲. الف) See you؛ ب) Thank you؛ ج) How are you?
۳. الف) Goodbye؛ ب) Hello؛ ج) Nice to meet you
۴. الف) Good afternoon؛ ب) Good morning؛ ج) Good evening

سؤال ۷ – گفتاری | پاسخ به احوالپرسی | ۲ نمره
مدرس بگوید:
Hello! How are you?
زبان‌آموز باید به سلام پاسخ دهد، به پرسش How are you? جواب دهد و از مدرس نیز احوالپرسی کند.

سؤال ۸ – کتبی | انتخاب پاسخ مناسب | ۱ نمره
۱. A: Nice to meet you. B:
الف) Nice to meet you, too.؛ ب) Good morning.؛ ج) I'm fine, thanks.
۲. A: How are you? B:
الف) Goodbye.؛ ب) I'm fine, thanks.؛ ج) Nice to meet you.

سؤال ۹ – کتبی | مرتب کردن مکالمه | ۱ نمره
جمله‌ها را به ترتیب درست مرتب کنید.
الف) I'm fine, thanks. And you?
ب) Hi!
ج) I'm fine, too.
د) Hello! How are you?

سؤال ۱۰ – گفتاری | آشنایی با فرد جدید | ۲ نمره
فرض کنید برای اولین بار با فردی آشنا شده‌اید. با مدرس مکالمه کوتاهی اجرا کنید: سلام کنید، عبارت Nice to meet you را به کار ببرید و به پاسخ او واکنش مناسب نشان دهید.

سؤال ۱۱ – کتبی | تشخیص موقعیت | ۱ نمره
برای هر موقعیت عبارت مناسب را بنویسید.
۱. ساعت ۸ صبح است و وارد کلاس می‌شوید.
۲. هنگام خروج می‌خواهید خداحافظی کنید.
۳. فرد جدیدی را ملاقات می‌کنید.

سؤال ۱۲ – شنیداری | تشخیص معنی مکالمه | ۲ نمره
به مکالمه مدرس گوش دهید و پاسخ دهید.
۱. آیا دو نفر در حال سلام کردن هستند یا خداحافظی؟
۲. آیا فرد اول حالش خوب است؟
۳. آیا دو نفر برای اولین بار با هم آشنا می‌شوند؟
۴. آیا در پایان مکالمه از Goodbye استفاده می‌شود؟

سؤال ۱۳ – کتبی | کامل کردن عبارت‌ها | ۱ نمره
۱. Good __________! (صبح)
۲. How __________ you?
۳. Nice to __________ you.
۴. See __________!

سؤال ۱۴ – گفتاری | مکالمه کامل | ۲ نمره
با مدرس مکالمه کوتاهی اجرا کنید. سلام کنید، حال یکدیگر را بپرسید، پاسخ دهید و مکالمه را با خداحافظی مناسب تمام کنید.

سؤال ۱۵ – کتبی | تشخیص عبارت نامناسب | ۱ نمره
۱. برای سلام کردن در صبح کدام عبارت نامناسب است؟
الف) Good morning؛ ب) Hello؛ ج) Goodbye
۲. برای پاسخ به How are you? کدام عبارت نامناسب است؟
الف) I'm fine, thanks.؛ ب) Nice to meet you.؛ ج) I'm fine.

سؤال ۱۶ – شنیداری | درست یا نادرست | ۲ نمره
به متن مدرس گوش دهید و مشخص کنید جمله‌ها درست هستند یا نادرست.
۱. گوینده اول صبح سلام می‌کند.
۲. گوینده دوم می‌گوید حالش خوب است.
۳. دو نفر برای اولین بار با هم آشنا می‌شوند.
۴. مکالمه با خداحافظی تمام می‌شود.

سؤال ۱۷ – کتبی | انتخاب پاسخ مناسب در مکالمه | ۱ نمره
۱. A: Good evening!
الف) Good evening!؛ ب) I'm fine, thanks.؛ ج) Goodbye!
۲. A: See you tomorrow!
الف) Nice to meet you.؛ ب) See you!؛ ج) How are you?

سؤال ۱۸ – گفتاری | واکنش سریع | ۲ نمره
بدون نوشتن، به موقعیت‌ها با صدای بلند پاسخ دهید.
۱. مدرس می‌گوید: Hello!
۲. مدرس می‌پرسد: How are you?
۳. مدرس می‌گوید: Nice to meet you.
۴. مدرس می‌گوید: Goodbye!

سؤال ۱۹ – کتبی | تشخیص کاربرد عبارت | ۱ نمره
۱. Good afternoon
الف) سلام کردن در بعدازظهر؛ ب) خداحافظی هنگام شب؛ ج) پاسخ به احوالپرسی
۲. Nice to meet you
الف) خداحافظی؛ ب) آشنایی با فرد جدید؛ ج) پرسیدن حال یک دوست

سؤال ۲۰ – گفتاری | مکالمه مستقل | ۲ نمره
بدون خواندن متن آماده با مدرس مکالمه کنید. مکالمه باید شامل سلام، پرسیدن حال، پاسخ به احوالپرسی، استفاده مناسب از Nice to meet you و خداحافظی باشد.

بخش سوم: پاسخ‌نامه کتبی – Written Answer Key
سؤال ۱: ۱) الف – Good morning؛ ۲) ب – Goodbye.
سؤال ۲: ۱) درست؛ ۲) نادرست؛ ۳) درست؛ ۴) درست.
سؤال ۴: Hello = د؛ How are you? = ب؛ See you = ج؛ Nice to meet you = الف.
سؤال ۵:
A: Hello!
A: I'm fine, thanks.
A: And you?
A: Goodbye!
سؤال ۸: ۱) الف؛ ۲) ب.
سؤال ۹: ب ← د ← الف ← ج.
سؤال ۱۱: ۱) Good morning؛ ۲) Goodbye یا Bye؛ ۳) Nice to meet you.
سؤال ۱۳: ۱) morning؛ ۲) are؛ ۳) meet؛ ۴) you.
سؤال ۱۵: ۱) ج – Goodbye؛ ۲) ب – Nice to meet you.
سؤال ۱۷: ۱) الف؛ ۲) ب.
سؤال ۱۹: ۱) الف؛ ۲) ب.

بخش چهارم: متن‌های شنیداری مخصوص مدرس – Listening Scripts
این متن‌ها فقط برای مدرس هستند و نباید به زبان‌آموز نشان داده شوند. هر مورد را با سرعت طبیعی و واضح دو بار بخوانید و بین دو بار مکث کوتاهی داشته باشید.

متن سؤال ۶:
۱. Good morning!
۲. See you!
۳. Goodbye!
۴. Good evening!
پاسخ‌ها: ۱) الف؛ ۲) الف؛ ۳) الف؛ ۴) ج.

متن سؤال ۱۲:
A: Hello! Good morning.
B: Good morning! How are you?
A: I'm fine, thanks.
B: Nice to meet you.
A: Nice to meet you, too.
B: Goodbye!
پاسخ‌ها: ۱) سلام کردن؛ ۲) بله؛ ۳) بله؛ ۴) بله.

متن سؤال ۱۶:
A: Good morning!
B: Good morning! How are you?
A: I'm fine, thanks.
B: Nice to meet you.
A: Nice to meet you, too.
B: Goodbye!
پاسخ‌ها: هر چهار گزاره درست هستند.

بخش پنجم: معیار ارزیابی گفتاری – Speaking Rubric
برای سؤال‌های ۳، ۷، ۱۰، ۱۴، ۱۸ و ۲۰، عملکرد زبان‌آموز را بر اساس این معیارها ارزیابی کنید:
انتخاب عبارت مناسب برای موقعیت: ۱ نمره.
بیان قابل فهم و تلفظ قابل قبول: ۱ نمره.
در سؤال‌های چندمرحله‌ای، نمره هر بخش را متناسب با عملکردهای خواسته‌شده تقسیم کنید. هدف سنجش ارتباط مقدماتی است؛ تلفظ لازم نیست کاملاً شبیه گوینده بومی باشد، اما باید قابل فهم و متناسب با موقعیت باشد.

بخش ششم: جدول نمره‌دهی اصلاح‌شده – Scoring
برای هماهنگی با نمره کل ۳۰، نمره سؤال ۹ از ۲ به ۱ کاهش یافته است. سایر نمره‌ها بدون تغییر باقی مانده‌اند.
کتبی: ۱۲ نمره.
شنیداری: ۶ نمره.
گفتاری: ۱۲ نمره.
مجموع: ۳۰ نمره.
در سؤال ۹، یک نمره برای ترتیب کامل و صحیح چهار جمله در نظر گرفته می‌شود.

بخش هفتم: نکات اجرایی مدرس – Teacher Notes
۱. ترتیب سؤال‌ها را تغییر ندهید؛ تنوع فعالیت‌ها بخشی از طراحی آزمون است.
۲. هنگام اجرای Speaking پاسخ را به زبان‌آموز نگویید و فقط موقعیت را توضیح دهید.
۳. هنگام اجرای Listening متن شنیداری را در اختیار زبان‌آموز قرار ندهید.
۴. اشتباه جزئی تلفظی را فقط زمانی نمره‌کاهشی محسوب کنید که فهم عبارت را دشوار کند.
۵. نمره کتبی، شنیداری و گفتاری را جداگانه ثبت کنید.
۶. برای بررسی کیفیت آزمون، پس از اجرا دشواری و قدرت تمایز سؤال‌ها را بر اساس پاسخ‌های واقعی تحلیل کنید.

بخش هشتم: یادداشت کیفیت آزمون – Test Quality Notes
روایی (Validity): فعالیت‌ها توانایی استفاده از عبارت‌های سلام و خداحافظی، پاسخ به احوالپرسی، آشنایی با فرد جدید و درک مکالمه را می‌سنجند.
پایایی (Reliability): دستورالعمل‌ها، متن‌های شنیداری و معیارهای نمره‌دهی برای همه زبان‌آموزان یکسان اجرا شوند.
عملی بودن (Practicality): آزمون با برگه، مداد و خواندن متن توسط مدرس قابل اجراست و به تجهیزات تخصصی نیاز ندارد.
تحلیل سؤال‌ها: شاخص‌های Item Facility (IF)، Item Discrimination (ID) و Distractor Analysis فقط پس از اجرای واقعی و گردآوری پاسخ‌ها محاسبه می‌شوند.

پایان درس ۰۶ – Greetings
عنوان درس بعدی: مطابق برنامه آموزشی دوره` ,
    [
      "Good morning! — صبح بخیر!",
      "Good afternoon! — بعدازظهر بخیر!",
      "Good evening! — عصر بخیر!",
      "Good night! — شب بخیر (هنگام خداحافظی یا خواب)",
      "Hello! — سلام!",
      "Hi! — سلام! (دوستانه)",
      "How are you? — حالت چطور است؟",
      "I'm fine, thanks. — خوبم، ممنون.",
      "And you? — تو چطور؟",
      "Nice to meet you. — از آشنایی با شما خوشحالم.",
      "Goodbye! — خداحافظ!",
      "See you! — می‌بینمت!",
    ],
    [
      v("hello", "سلام", "Hello! How are you?", "say hello"),
      v("good morning", "صبح بخیر", "Good morning, teacher.", "good morning"),
      v("good afternoon", "بعدازظهر بخیر", "Good afternoon, everyone.", "good afternoon"),
      v("good evening", "عصر بخیر", "Good evening, welcome.", "good evening"),
      v("good night", "شب بخیر (هنگام خداحافظی یا خواب)", "Good night! See you tomorrow.", "say good night"),
      v("how are you", "حالت چطور است؟", "Hello! How are you?", "how are you"),
      v("fine", "خوب", "I'm fine, thanks.", "I'm fine"),
      v("nice to meet you", "از آشنایی با شما خوشحالم", "Nice to meet you, too.", "nice to meet you"),
      v("goodbye", "خداحافظ", "Goodbye! See you soon.", "say goodbye"),
      v("see you", "می‌بینمت", "See you tomorrow!", "see you soon"),
    ],
    choice(
      "صبح هنگام ورود به کلاس، کدام عبارت مناسب‌تر است؟",
      ["Good morning!", "Good night!", "Goodbye!"],
      "Good morning!",
      "برای سلام کردن در صبح از Good morning استفاده می‌کنیم.",
    ),
    "یک مکالمه کوتاه بنویس و اجرا کن که در آن سلام کنی، احوالپرسی کنی، با فرد جدید آشنا شوی و در پایان خداحافظی کنی.",
  ]
] as const;
const specificationsA2 = [
[
    "a2-simple",
    "حال ساده و تعداد دفعات",
    "🔁",
    "speaking",
    "حال ساده برای عادت‌ها و کارهای تکراری است. برای گفتن تعداد دفعات از once، twice و three times استفاده کن: once a week یعنی هفته‌ای یک بار.",
    [
      "I go swimming twice a week.",
      "She visits her parents every weekend.",
      "We eat out from time to time.",
      "My father works in a hospital.",
    ],
    [
      v("once a week", "هفته‌ای یک بار", "I call my uncle once a week.", "once a week"),
      v("twice a month", "ماهی دو بار", "We visit the museum twice a month.", "twice a month"),
      v(
        "three times a year",
        "سالی سه بار",
        "He travels three times a year.",
        "three times a year",
      ),
      v("every other day", "یک روز در میان", "I swim every other day.", "every other day"),
      v("from time to time", "هر از گاهی", "We eat out from time to time.", "from time to time"),
    ],
    choice(
      "«ماهی دو بار» به انگلیسی کدام است؟",
      ["twice a month", "two times month", "second a month"],
      "twice a month",
      "برای دو بار از twice استفاده می‌کنیم: twice a month.",
    ),
    "بگو هر کاری را چند بار در هفته یا ماه انجام می‌دهی.",
  ]
] as const;
const specificationsB1 = [
[
    "b1-simplecont",
    "حال ساده و استمراری: مرور پیشرفته",
    "🔄",
    "reading",
    "حال ساده برای عادت، حقیقت و وضعیت ثابت است و حال استمراری برای کار موقت، اتفاق در حال انجام و تغییر تدریجی. بعضی فعل‌ها بسته به معنی فرق می‌کنند: I think you’re right (نظر) و I’m thinking about changing my job (فکر کردن).",
    [
      "I work for an international company.",
      "I’m working on an important project this week.",
      "The weather is getting colder.",
      "I’m thinking about changing my job.",
    ],
    [
      v("gradually", "به‌تدریج", "The weather is gradually getting colder.", "change gradually"),
      v(
        "international",
        "بین‌المللی",
        "She works for an international company.",
        "an international company",
      ),
      v("permanent", "دائمی", "This is a permanent job.", "a permanent address"),
      v("temporary", "موقت", "It’s a temporary solution.", "a temporary job"),
    ],
    choice(
      "کدام جمله تغییر تدریجی را نشان می‌دهد؟",
      ["The weather is getting colder.", "The weather gets colder.", "The weather got cold."],
      "The weather is getting colder.",
      "برای تغییر تدریجی از حال استمراری استفاده می‌کنیم.",
    ),
    "دو عادت ثابت و دو تغییر تدریجی در زندگی خودت را بگو.",
  ]
] as const;
type Specification = readonly [
  id: string,
  title: string,
  icon: string,
  skill: Skill,
  explanation: string,
  examples: readonly string[],
  vocabulary: readonly Vocabulary[],
  firstActivity: Activity,
  task: string,
];
const toUnit = (s: Specification, i: number, level: Level): Unit => ({
  id: s[0],
  level,
  title: s[1],
  description:
    level === "B1"
      ? "گفت‌وگو و نوشتن با اعتمادبه‌نفس"
      : level === "A2"
        ? "گام بعدی برای انگلیسی روان‌تر"
        : i < 5
          ? "قدم‌های اول برای ارتباط واقعی"
          : "انگلیسی کاربردی در زندگی روزمره",
  lessons: [
    {
      id: s[0],
      title: s[1],
      icon: s[2],
      skill: s[3],
      explanation: s[4],
      examples: [...s[5]],
      vocabulary: [...s[6]],
      activities: [
        s[7],
        {
          kind: "writing",
          prompt: "جملهٔ زیر را با دقت بازنویسی کن.",
          answer: s[5][0],
          explanation: "به ترتیب کلمه‌ها و شکل درست آن‌ها توجه کن.",
        },
        {
          kind: "speaking",
          prompt: "جمله را بشنو و با صدای بلند تکرار کن.",
          answer: s[5][0],
          explanation: "آرام و واضح صحبت کن؛ تمرکز روی رساندن معناست.",
        },
      ],
      task: s[8],
    },
  ],
});
const a1LessonOrder = [
  "english-alphabet",       // 01 – الفبای انگلیسی (نسخه کامل‌تر)
  "spelling",               // 02 – هجی کردن کلمات و اسامی
  "numbers-1-19",           // 03 – اعداد ۱ تا ۱۹
  "numbers",                // 04 – اعداد ۲۰ تا ۱۰۰
  "greetings",              // 06 – سلام و احوالپرسی
];
export const units: Unit[] = [
  ...a1LessonOrder.map((id, i) => {
    const specification = specifications.find((s) => s[0] === id);
    if (!specification) throw new Error(`Missing A1 lesson specification: ${id}`);
    return toUnit(specification, i, "A1");
  }),
  ...specificationsA2.map((s, i) => toUnit(s, i, "A2")),
  ...specificationsB1.map((s, i) => toUnit(s, i, "B1")),
];
export const lessons = units.flatMap((u) => u.lessons);
export const levelNames: Record<Level, string> = { A1: "مبتدی", A2: "ابتدایی", B1: "متوسط" };
export const levelOf = (lessonId: string): Level =>
  units.find((u) => u.id === lessonId)?.level ?? "A1";
export const vocabulary = [
  ...new Map(lessons.flatMap((l) => l.vocabulary).map((word) => [word.word, word])).values(),
];
export const skillNames: Record<Skill, string> = {
  listening: "شنیداری",
  speaking: "گفتاری",
  reading: "خواندن",
  writing: "نوشتن",
};
export const faNumber = (n: number) => n.toLocaleString("fa-IR");
export function normalizeAnswer(value: string) {
  return value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[.,!?—]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
export function placementLevel(correct: number, total: number) {
  return correct / total >= 0.8 ? "A1-ready" : "A1";
}
