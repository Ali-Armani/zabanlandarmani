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
export interface Unit {
  id: string;
  level: "A1";
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
    "sounds",
    "الفبا و صداهای پایه",
    "🔤",
    "reading",
    "انگلیسی ۲۶ حرف دارد. نام حرف و صدای آن همیشه یکسان نیست. در apple حرف A صدای /æ/ دارد؛ مثل صدای کوتاه «اَ».",
    ["A a — apple", "B b — book", "C c — cat"],
    [
      v("apple", "سیب", "I have an apple.", "an apple"),
      v("book", "کتاب", "This is a book.", "read a book"),
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
    "عددها از ۱ تا ۱۰۰",
    "🔢",
    "listening",
    "ابتدا یک تا ده را یاد بگیر. عددهای ۱۳ تا ۱۹ معمولاً به teen ختم می‌شوند. برای ۲۱ می‌گوییم twenty-one.",
    ["one, two, three, four, five", "thirteen / thirty", "twenty-one, fifty, one hundred"],
    [
      v("twenty", "بیست", "I am twenty.", "twenty years old"),
      v("hundred", "صد", "It costs one hundred dollars.", "one hundred"),
    ],
    choice(
      "عدد ۳۰ را انتخاب کن.",
      ["thirteen", "thirty", "three"],
      "thirty",
      "thirty یعنی سی و thirteen یعنی سیزده.",
    ),
    "سن و شمارهٔ تلفن فرضی خود را به انگلیسی بگو.",
  ],
  [
    "greetings",
    "سلام و معرفی خود",
    "👋",
    "speaking",
    "برای یک گفت‌وگوی دوستانه با Hello یا Hi شروع کن. برای معرفی خودت از I’m و نامت استفاده کن. عبارت Nice to meet you برای اولین دیدار است.",
    ["Hello! I’m Sara.", "What’s your name?", "Nice to meet you!"],
    [
      v("hello", "سلام", "Hello! How are you?", "say hello"),
      v("meet", "آشنا شدن", "Nice to meet you!", "nice to meet you"),
    ],
    choice(
      "برای معرفی خودت کدام جمله درست است؟",
      ["I’m Sara.", "You Sara.", "I Sara is."],
      "I’m Sara.",
      "I’m شکل کوتاه I am است؛ بعد از آن نام خودت را می‌گویی.",
    ),
    "با یک سلام شروع کن، نامت را بگو و نام طرف مقابل را بپرس.",
  ],
  [
    "personal",
    "اطلاعات شخصی",
    "🪪",
    "writing",
    "برای پرسیدن محل زندگی از Where do you live? و برای سن از How old are you? استفاده می‌کنیم. پاسخ را با یک جملهٔ کوتاه و کامل بده.",
    ["I live in Tehran.", "I am twenty-five years old.", "I’m from Iran."],
    [
      v("live", "زندگی کردن", "I live in Tehran.", "live in"),
      v("from", "اهلِ", "I’m from Iran.", "be from"),
    ],
    choice(
      "برای گفتن محل زندگی چه می‌گویی؟",
      ["I live in Tehran.", "I from live.", "I am Tehran."],
      "I live in Tehran.",
      "بعد از live برای نام شهر از in استفاده می‌کنیم.",
    ),
    "یک معرفی دو جمله‌ای شامل نام و شهرت بنویس.",
  ],
  [
    "family",
    "خانوادهٔ من",
    "🏡",
    "reading",
    "برای معرفی اعضای خانواده از This is my … استفاده کن. my یعنی «منِ» مالکیت: my mother یعنی مادر من.",
    ["This is my mother.", "I have one brother.", "My father is a teacher."],
    [
      v("mother", "مادر", "This is my mother.", "my mother"),
      v("brother", "برادر", "I have a brother.", "one brother"),
    ],
    choice(
      "معنی «این مادر من است» کدام است؟",
      ["This is my mother.", "This mother my.", "My is mother."],
      "This is my mother.",
      "This is برای معرفی و my برای مالکیت به کار می‌روند.",
    ),
    "دو نفر از اعضای خانواده‌ات را معرفی کن.",
  ],
  [
    "be",
    "فعل بودن: am، is، are",
    "🌱",
    "writing",
    "با I از am، با he / she / it از is و با you / we / they از are استفاده کن. برای منفی کردن not را اضافه کن.",
    ["I am a student.", "She is a teacher.", "They are not tired."],
    [
      v("student", "دانش‌آموز / دانشجو", "I am a student.", "a student"),
      v("teacher", "معلم", "She is a teacher.", "a teacher"),
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
    "present",
    "حال ساده و کارهای روزمره",
    "☀️",
    "writing",
    "حال ساده برای عادت‌ها و کارهای تکراری است. با he و she معمولاً s به فعل اضافه می‌شود. در سؤال با I و you از Do و با he و she از Does استفاده می‌کنیم.",
    ["I drink tea every day.", "She works in a school.", "Do you like coffee?"],
    [
      v("work", "کار کردن", "I work in Tehran.", "work in"),
      v("every day", "هر روز", "I read every day.", "every day"),
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
    "articles",
    "حرف‌های تعریف a، an، the",
    "📚",
    "reading",
    "برای یک چیز نامشخص از a یا an استفاده کن. an قبل از صدای واکه می‌آید، مثل an apple. the به چیز مشخص یا قبلاً معرفی‌شده اشاره می‌کند.",
    ["a book / an apple", "I have a cat. The cat is small.", "She is an engineer."],
    [
      v("engineer", "مهندس", "She is an engineer.", "an engineer"),
      v("cat", "گربه", "The cat is small.", "a cat"),
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
    "possessives",
    "صفت‌های ملکی",
    "🎒",
    "writing",
    "صفت ملکی قبل از اسم می‌آید: my، your، his، her، its، our، their. برای مثال her book یعنی کتاب او، وقتی مالک زن است.",
    ["This is my bag.", "Her name is Mina.", "Our house is small."],
    [
      v("bag", "کیف", "This is my bag.", "my bag"),
      v("name", "نام", "Her name is Mina.", "first name"),
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
    "there",
    "There is و There are",
    "🛋️",
    "speaking",
    "برای گفتن اینکه چیزی در جایی وجود دارد از There is برای مفرد و There are برای جمع استفاده کن.",
    ["There is a table.", "There are two chairs.", "Is there a window?"],
    [
      v("table", "میز", "There is a table.", "on the table"),
      v("chair", "صندلی", "There are two chairs.", "two chairs"),
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
    ["I can swim.", "She can speak English.", "Can you ride a bike?"],
    [
      v("swim", "شنا کردن", "I can swim.", "can swim"),
      v("ride", "سوار شدن", "I can ride a bike.", "ride a bike"),
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
    "prepositions",
    "مکان و حرف‌های اضافه",
    "📍",
    "reading",
    "in یعنی داخل، on یعنی روی، under یعنی زیر و next to یعنی کنار. at برای یک نقطه یا مکان مشخص هم به کار می‌رود.",
    ["The book is on the table.", "The cat is under the chair.", "I am at school."],
    [
      v("under", "زیر", "The cat is under the chair.", "under the chair"),
      v("next to", "کنار", "The bank is next to the café.", "next to"),
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
    ["What is your name?", "Where do you live?", "How much is this coffee?"],
    [
      v("where", "کجا", "Where do you live?", "where do you"),
      v("how much", "چقدر / چه قیمتی", "How much is it?", "how much is"),
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
    ["a red bag / a blue book", "My car is green.", "The sky is blue."],
    [
      v("green", "سبز", "My car is green.", "a green car"),
      v("blue", "آبی", "The sky is blue.", "a blue sky"),
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
    "food",
    "غذا و نوشیدنی",
    "🍎",
    "listening",
    "برای گفتن علاقه از I like و برای درخواست مؤدبانه از I’d like استفاده کن. این دو عبارت کاربرد متفاوت دارند.",
    ["I like apples.", "I’d like a cup of tea, please.", "I don’t like milk."],
    [
      v("tea", "چای", "I’d like a cup of tea.", "a cup of tea"),
      v("water", "آب", "Can I have some water?", "some water"),
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
    "home",
    "خانه و کلاس درس",
    "🪴",
    "reading",
    "واژه‌ها را در جمله و همراه با ترکیب‌های معمول یاد بگیر؛ مثل open the door و sit on a chair.",
    [
      "Open the door, please.",
      "There is a board in the classroom.",
      "The kitchen is next to the bedroom.",
    ],
    [
      v("door", "در", "Open the door, please.", "open the door"),
      v("classroom", "کلاس درس", "We are in the classroom.", "in the classroom"),
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
    ["I feel tired.", "My head hurts.", "I have two hands."],
    [
      v("head", "سر", "My head hurts.", "my head hurts"),
      v("hand", "دست", "Wash your hands.", "wash your hands"),
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
    "time",
    "روزها و زمان",
    "🕒",
    "listening",
    "برای ساعت از at و برای روزهای هفته از on استفاده کن. برای صبح و عصر معمولاً in the morning و in the afternoon می‌گوییم.",
    ["It’s Monday.", "I work at nine.", "I study on Friday."],
    [
      v("Monday", "دوشنبه", "It’s Monday.", "on Monday"),
      v("morning", "صبح", "I study in the morning.", "in the morning"),
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
    "jobs",
    "شغل‌ها و محیط کار",
    "💼",
    "writing",
    "برای معرفی شغل از I’m a / an … استفاده کن. برای محل کار از I work in / at … استفاده می‌کنیم.",
    ["I’m a doctor.", "She is an engineer.", "He works in a hospital."],
    [
      v("doctor", "پزشک", "I’m a doctor.", "a doctor"),
      v("hospital", "بیمارستان", "She works in a hospital.", "in a hospital"),
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
    "cafe",
    "یک گفت‌وگو در کافه",
    "☕",
    "speaking",
    "در کافه سلام کن، سفارش بده و تشکر کن. عبارت Anything else? یعنی «چیز دیگری هم می‌خواهید؟».",
    [
      "A: Hello! What would you like?",
      "B: I’d like a coffee, please.",
      "A: Anything else? B: No, thank you.",
    ],
    [
      v("coffee", "قهوه", "A coffee, please.", "a cup of coffee"),
      v("please", "لطفاً", "A tea, please.", "yes, please"),
    ],
    choice(
      "پاسخ مناسب به Anything else? کدام است؟",
      ["No, thank you.", "I am Sara.", "It is Monday."],
      "No, thank you.",
      "اگر سفارش دیگری نداری، مؤدبانه می‌گویی No, thank you.",
    ),
    "نقش مشتری را بازی کن: سلام، سفارش، پرسیدن قیمت و تشکر.",
  ],
] as const;
export const units: Unit[] = specifications.map((s, i) => ({
  id: s[0],
  level: "A1",
  title: s[1],
  description: i < 5 ? "قدم‌های اول برای ارتباط واقعی" : "انگلیسی کاربردی در زندگی روزمره",
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
}));
export const lessons = units.flatMap((u) => u.lessons);
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
