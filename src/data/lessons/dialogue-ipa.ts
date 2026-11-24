/**
 * ═══════════════════════════════════════════════════════════
 *  النطق الدولي (IPA) لأسطر حوارات الاستماع — بيانات منفصلة
 *
 *  لماذا منفصل؟ حتى لا نعدّل 54 ملف درس. كل قيمة مصفوفة بطول عدد أسطر
 *  الحوار نفسه، بنفس الترتيب، بلا أقواس [ ]. الاختبار يحرس الطول.
 *
 *  ملاحظة: النص مكتوب يدوياً بنطق الألمانية المعيارية (Standarddeutsch).
 *  ليس ناتجاً عن أداة آلية. يبقى قابلاً للمراجعة من متحدث أصلي.
 *  الرموز: ˈ نبرة، ː حركة طويلة، ɐ/ɐ̯ حركات مختزلة، ʁ الراء.
 * ═══════════════════════════════════════════════════════════
 */
import type {Lesson} from "@/types/lesson";

type DialogueIpaMap = Record<string, Record<string, string[]>>;

export const DIALOGUE_IPA: DialogueIpaMap = {
  "a1-00": {
    l1: [
      "ˈhalo, maɪ̯n naːmə ɪst ˈzaːmi bɛn ˈaːli",
      "ˈviː ˈbɪtə? ˈkœnən ziː das bʊʃtaˈbiːʁən?",
      "jaː, naˈtyʁlɪç. ɛs aː ɛm iː. beː eː ɛn. aː ɛl iː.",
      "aː, ˈfiːlən ˈdaŋk, hɛʁ bɛn ˈaːli",
    ],
    l2: [
      "ˈviː ˈʃʁaɪ̯pt man ˈʃuːlə?",
      "ɛs tseː haː uː ɛl eː.",
      "zeːɐ̯ ɡuːt! ʊnt ˈʃtʁaːsə?",
      "ɛs teː ɛʁ aː ɛstsɛt eː.",
      "pɛʁˈfɛkt",
    ],
  },
  "a1-01": {
    l1: [
      "ˈhalo! ɪç ˈhaɪ̯sə ˈana. ˈviː haɪ̯st duː?",
      "ˈhalo ˈana! ɪç ˈhaɪ̯sə ˈzaːmi.",
      "ɪç ˈkɔmə aʊ̯s tuˈneːziən. ʊnt voˈheːɐ̯ kɔmst duː?",
      "ɪç ˈkɔmə aʊ̯s ˈdɔɪ̯tʃlant, aʊ̯s bɛʁˈliːn.",
      "fʁɔɪ̯t mɪç!",
    ],
    l2: [
      "ˈɡuːtən ˈtaːk! ˈviː ˈhaɪ̯sən ziː?",
      "ˈɡuːtən ˈtaːk! ɪç ˈhaɪ̯sə ˈleːila ˈmanzuːɐ̯.",
      "voˈheːɐ̯ ˈkɔmən ziː, fʁaʊ̯ ˈmanzuːɐ̯?",
      "ɪç ˈkɔmə aʊ̯s tuˈneːziən.",
    ],
  },
  "a1-01b": {
    l1: [
      "ˈhalo, ˈzaːʁa! voˈheːɐ̯ kɔmst duː?",
      "ɪç ˈkɔmə aʊ̯s ˈtuːnɪs. ʊnt voˈheːɐ̯ kɔmst duː?",
      "ɪç ˈkɔmə aʊ̯s bɛʁˈliːn.",
      "voː voːnst duː jɛtst, ˈzaːʁa?",
      "ɪç ˈvoːnə ɪn ˈkʁɔɪ̯tsbɛʁk ʊnt ˈlɛʁnə dɔɪ̯tʃ.",
    ],
    l2: [
      "vas ˈmaxst duː, ˈmiːlan?",
      "ɪç ˈaʁbaɪ̯tə ɪn ˈaɪ̯nəm kaˈfeː.",
      "van ˈlɛʁnst duː dɔɪ̯tʃ?",
      "ɪç ˈlɛʁnə am ˈaːbənt. ʊnt voː ˈaʁbaɪ̯təst duː, ˈzaːʁa?",
      "ɪç ˈaʁbaɪ̯tə aʊ̯x ɪn ˈaɪ̯nəm kaˈfeː.",
    ],
  },
  "a1-02": {
    l1: [
      "ˈhalo ˈkaʁiːm! hast duː ɡəˈʃvɪstɐ?",
      "jaː, ɪç ˈhaːbə ˈaɪ̯nən ˈbʁuːdɐ ʊnt ˈaɪ̯nə ˈʃvɛstɐ.",
      "ˈviː ˈhaɪ̯sən ziː?",
      "maɪ̯n ˈbʁuːdɐ haɪ̯st ˈjuːsɛf ʊnt ˈmaɪ̯nə ˈʃvɛstɐ haɪ̯st nuːɐ̯.",
      "ʊnt ˈdaɪ̯nə ˈɛltɐn?",
      "ˈmaɪ̯nə ˈɛltɐn ˈvoːnən ɪn ˈtuːnɪs.",
    ],
    l2: [
      "ˈhalo ˈmoːna! hast duː ɡəˈʃvɪstɐ?",
      "jaː, ɪç ˈhaːbə ˈaɪ̯nə ˈʃvɛstɐ ʊnt ˈaɪ̯nən ˈbʁuːdɐ.",
      "ˈviː haɪ̯st ˈdaɪ̯nə ˈʃvɛstɐ?",
      "ziː haɪ̯st ˈliːna. ziː ɪst ʦvœlf ˈjaːʁə alt.",
      "voː ˈvoːnən ˈdaɪ̯nə ˈɛltɐn?",
      "ziː ˈvoːnən ɪn ˈtuːnɪs. ˈliːna voːnt aʊ̯x dɔʁt.",
    ],
  },
  "a1-03": {
    l1: [
      "ˈɡuːtən ˈtaːk! vas ˈmœçtən ziː bəˈʃtɛlən?",
      "ɪç ˈhɛtə ɡɛʁn ˈaɪ̯nən kaˈfeː ʊnt aɪ̯n ˈbʁøːtçən, ˈbɪtə.",
      "ɡɛʁn. ˈmœçtən ziː noːx ˈɛtvas daˈtsuː?",
      "naɪ̯n, ˈdaŋkə.",
      "ˈaləs ˈklaːɐ̯. das maxt fynf ˈɔʏ̯ʁo.",
    ],
    l2: [
      "ɪç ˈbʁaʊ̯xə ˈaɪ̯nən ˈapfəl ʊnt ˈaɪ̯nə baˈnaːnə.",
      "ʊnt viːɐ̯ ˈkaʊ̯fən aʊ̯x bʁoːt ʊnt mɪlç.",
      "hast duː ˈhʊŋɐ?",
      "jaː, ɪç ˈhaːbə ˈɡʁoːsən ˈhʊŋɐ!",
    ],
    l3: [
      "ˈɡuːtən ˈmɔʁɡən! vas ˈmœçtən ziː?",
      "ɪç ˈmœçtə tsaɪ̯ ˈbʁøːtçən ʊnt ˈaɪ̯nən ˈapfəl, ˈbɪtə.",
      "ˈmœçtən ziː noːx ˈaɪ̯nə baˈnaːnə?",
      "naɪ̯n, ˈdaŋkə. ˈhaːbən ziː mɪlç?",
      "jaː. ˈaɪ̯nə ˈflaʃə mɪlç ˈkɔstət tsaɪ̯ ˈɔʏ̯ʁo.",
      "dan ˈneːmə ɪç diː mɪlç aʊ̯x.",
    ],
  },
  "a1-04": {
    l1: [
      "ˈmaɪ̯nə ˈvoːnʊŋ ɪst ɪn ˈtuːnɪs. ziː hat tsaɪ̯ ˈtsɪmɐ, ˈaɪ̯nə ˈkʏçə ʊnt aɪ̯n baːt.",
      "ˈvɛlçə ˈtsɪmɐ?",
      "aɪ̯n ˈvoːnʦɪmɐ ʊnt aɪ̯n ˈʃlaːfʦɪmɐ.",
      "ʊnt diː ˈkʏçə? ɪst ziː ɡʁoːs?",
      "jaː, diː ˈkʏçə ɪst ɡʁoːs ʊnt moˈdɛʁn.",
    ],
    l2: [
      "voː ɪst das buːx?",
      "das buːx ɪst aʊ̯f deːm tɪʃ.",
      "ʊnt diː ˈlampə?",
      "diː ˈlampə ɪst ɪn deːɐ̯ ˈkʏçə.",
      "voː ʃlɛːfst duː?",
      "ɪç ˈʃlaːfə ɪm ˈʃlaːfʦɪmɐ.",
    ],
    l3: [
      "voː ɪst das ˈʃlaːfʦɪmɐ?",
      "das ˈʃlaːfʦɪmɐ ɪst ˈneːbən deːm baːt.",
      "ʊnt voː ɪst diː ˈkʏçə?",
      "diː ˈkʏçə ɪst ˈneːbən deːm ˈvoːnʦɪmɐ.",
      "ɡiːpt ɛs aʊ̯x ˈaɪ̯nən balˈkoːn?",
      "jaː, deːɐ̯ balˈkoːn ɪst foːɐ̯ deːm ˈvoːnʦɪmɐ.",
    ],
  },
};

/** يُرفق نطق IPA بأسطر الحوار المطابقة؛ لا يغيّر أي حقل آخر */
export function applyDialogueIpa(lesson: Lesson): Lesson {
  const byItem = DIALOGUE_IPA[lesson.id];
  if (!byItem) return lesson;
  return {
    ...lesson,
    listening: {
      ...lesson.listening,
      items: lesson.listening.items.map((item) => {
        const ipa = byItem[item.id];
        if (!ipa || ipa.length !== item.lines.length) return item;
        return {...item, lines: item.lines.map((line, i) => ({...line, ipa: ipa[i]}))};
      }),
    },
  };
}
