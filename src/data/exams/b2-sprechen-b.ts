/**
 * ═══════════════════════════════════════════════════════════
 *  بنك التحدث — الطقم الثاني (B2-Set B) — Goethe-Zertifikat B2 (2019+)
 *  Sprechen: زوجي · ~15 دقيقة (تحضير 15 دقيقة) — المدد الرسمية نفسها
 *   Teil 1: Vortrag (~4 دقائق) — موضوع + أسئلة إرشادية، **ومعه إجابة نموذجية**
 *   Teil 2: Diskussion (~5 دقائق) — قضية خلافية بحجج Pro/Kontra + إجابة نموذجية
 *
 *  الإجابة النموذجية (`modelAr`) مكتوبة للمراجعة **بعد** المحاولة: توجيه بالعربية
 *  + جمل ألمانية بين «...» تُقرأ كما تُقال، فيرى المتعلم بنية العرض والنقاش
 *  لا مجرد موضوع. الحارس يتحقق أن كل إجابة نموذجية تحمل توجيهاً عربياً وجملتين
 *  ألمانيتين على الأقل — فلا تبقى حقل عرض بلا محتوى.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSprechen } from "@/types/exam";

export const B2_SPRECHEN_B: ExamSprechen = {
  vorbereitungMinutes: 15,
  teil1Minutes: 4,
  teil2Minutes: 5,
  vortrag: [
    {
      id: "b-v1",
      topicDe: "Sollten Kinder schon ab der Grundschule ein eigenes Handy haben?",
      topicAr: "هل ينبغي أن يملك الأطفال هاتفاً خاصاً بهم من المرحلة الابتدائية؟",
      leitfragen: [
        "Wie nutzen Kinder heute Handys?",
        "Welche Risiken entstehen durch frühen Handybesitz?",
        "Wie können Eltern sinnvolle Regeln festlegen?",
      ],
      modelAr:
        "البنية: مقدمة (تعريف بالمشكلة) ← استخدام اليوم ← مخاطر ← حلول (قواعد) ← خاتمة برأي واضح.\n" +
        "المقدمة: «Heute besitzen viele Kinder schon in der Grundschule ein eigenes Handy. Diese Frage betrifft fast jede Familie.»\n" +
        "وضع حالي: «Kinder nutzen Handys vor allem für Spiele, Videos und um mit den Eltern in Kontakt zu bleiben.»\n" +
        "مخاطر: «Zu viel Bildschirmzeit kann die Konzentration und den Schlaf beeinträchtigen.»\n" +
        "حلول: «Sinnvoll sind feste Zeiten, kindgerechte Apps und ein Handyvertrag mit klaren Regeln.»\n" +
        "خاتمة: «Meiner Meinung nach ist ein einfaches Handy mit Regeln besser als ein Verbot, das niemand kontrollieren kann.»",
    },
    {
      id: "b-v2",
      topicDe: "Sport im Verein oder allein im Fitnessstudio?",
      topicAr: "الرياضة في النادي أم منفرداً في صالة اللياقة؟",
      leitfragen: [
        "Warum treiben Menschen Sport?",
        "Welche Vorteile hat ein Verein, welche das Fitnessstudio?",
        "Was motiviert Sie persönlich, regelmäßig Sport zu machen?",
      ],
      modelAr:
        "البنية: أسباب الرياضة ← مقارنة (نادٍ / صالة) ← تجربة شخصية ← خاتمة.\n" +
        "أسباب: «Viele Menschen treiben Sport, um gesund zu bleiben, Stress abzubauen und Kontakte zu knüpfen.»\n" +
        "النادي: «In einem Verein ist man Teil einer Gruppe, und die Trainer kennen die Mitglieder persönlich.»\n" +
        "الصالة: «Im Fitnessstudio kann man dagegen flexibel trainieren, wann immer man Zeit hat.»\n" +
        "تجربة شخصية: «Ich habe selbst ein Jahr im Verein Fußball gespielt und dabei mehr Ausdauer aufgebaut als vorher allein.»\n" +
        "خاتمة: «Für mich ist ein Verein motivierender, aber für Menschen mit wechselnden Arbeitszeiten ist ein Studio praktischer.»",
    },
    {
      id: "b-v3",
      topicDe: "Reisen mit dem Zug oder mit dem Flugzeug?",
      topicAr: "السفر بالقطار أم بالطائرة؟",
      leitfragen: [
        "Wie reisen Menschen heute in den Urlaub?",
        "Welche Vor- und Nachteile haben Zug und Flugzeug?",
        "Wie kann man umweltfreundlich reisen?",
      ],
      modelAr:
        "البنية: وضع عام ← مقارنة ← بدائل صديقة للبيئة ← خاتمة برأي.\n" +
        "مقدمة: «Reisen gehört für viele Menschen zum Leben dazu, und die Frage nach dem Verkehrsmittel ist auch eine Klimafrage.»\n" +
        "مقارنة: «Der Zug ist umweltfreundlich und bringt einen mitten in die Stadt, während das Flugzeug bei langen Strecken viel Zeit spart.»\n" +
        "عيب كل وسيلة: «Zugtickets sind oft teuer, und Flüge verursachen deutlich mehr CO₂.»\n" +
        "بدائل: «Nachtzüge, Fernbusse und ein früher gebuchter Sparpreis sind gute Alternativen.»\n" +
        "خاتمة: «Ich fahre kurze Strecken mit der Bahn und fliege nur, wenn es keine vernünftige Alternative gibt.»",
    },
    {
      id: "b-v4",
      topicDe: "Bibliotheken und Museen: Sollten sie kostenlos sein?",
      topicAr: "المكتبات والمتاحف: هل يجب أن تكون مجانية؟",
      leitfragen: [
        "Wer nutzt Bibliotheken und Museen?",
        "Welche Vorteile hat ein kostenloser Eintritt?",
        "Wie sollten solche Einrichtungen finanziert werden?",
      ],
      modelAr:
        "البنية: تعريف بالفئات المستفيدة ← فوائد المجانية ← طرق التمويل ← خاتمة.\n" +
        "مقدمة: «Bibliotheken und Museen sind Orte des Lernens, die allen offenstehen sollten.»\n" +
        "المستفيدون: «Sie werden von Schülern und Studierenden, aber auch von Familien und Rentnern genutzt.»\n" +
        "الفوائد: «Ohne Eintritt kommen mehr Menschen, auch diejenigen mit kleinem Einkommen, und Bildung wird gerechter.»\n" +
        "التمويل: «Statt Eintritt könnten Sponsoren, Spenden und ein kleiner Beitrag aus dem Steuerbudget die Kosten decken.»\n" +
        "خاتمة: «Ich finde, der Eintritt sollte frei sein, sonst entscheidet das Portemonnaie darüber, wer dazugehören darf.»",
    },
  ],
  diskussion: [
    {
      id: "b-d1",
      themaDe: "Sollten Autos aus den Innenstädten verbannt werden?",
      themaAr: "هل يجب منع السيارات من وسط المدن؟",
      positionAr:
        "خذ موقفاً واضحاً (منع كامل / قيود فقط)، ادعمه ببيئتك المحلية، ورد على حجة الخصم بالاقتصاد والعمل.",
      pro: [
        "Weniger Autos bedeuten sauberere Luft und mehr Platz für Fußgänger.",
        "Innenstädte würden sicherer, besonders für Kinder und Senioren.",
        "Der Lärm würde deutlich abnehmen und die Aufenthaltsqualität steigen.",
      ],
      kontra: [
        "Nicht jeder kann auf öffentliche Verkehrsmittel umsteigen – in ländlichen Gebieten fährt kaum ein Bus.",
        "Kleine Geschäfte leiden, wenn Kunden nicht mehr mit dem Auto anreisen können.",
        "Lieferverkehr und Handwerker brauchen den Zugang zur Stadt.",
      ],
      modelAr:
        "التوجيه: ابدأ بموقفك في جملة واحدة، ثم حجتان داعمتان، ثم اعترف بحجة الخصم وردّ عليها.\n" +
        "الموقف: «Ich bin dafür, Autos schrittweise aus der Innenstadt zu verbannen, aber nicht von heute auf morgen.»\n" +
        "حجة أولى: «Zum einen leiden Anwohner heute unter Lärm und schlechter Luft.»\n" +
        "حجة ثانية: «Zum anderen gewinnt der Einzelhandel Kunden, wenn die Innenstadt einladend wird.»\n" +
        "الاعتراف والرد: «Natürlich brauchen Handwerker und Lieferdienste Ausnahmen, die man in solchen Modellen regeln kann.»\n" +
        "خاتمة: «Mit Ausnahmen und besseren Bussen wäre die Innenstadt für alle lebenswerter.»",
    },
    {
      id: "b-d2",
      themaDe: "Sollten Studiengebühren in Deutschland eingeführt werden?",
      themaAr: "هل يجب إدخال رسوم دراسية في ألمانيا؟",
      positionAr:
        "اتخذ موقفاً واضحاً (تعليم مجاني / رسوم رمزية)، واربط الحجة بالعدالة الاجتماعية وجودة التعليم.",
      pro: [
        "Zusätzliche Einnahmen könnten die Ausstattung der Universitäten verbessern.",
        "Studierende würden ihr Fach vielleicht bewusster wählen.",
        "Wer später gut verdient, könnte stärker an den Kosten beteiligt werden.",
      ],
      kontra: [
        "Bildung darf nicht vom Einkommen der Eltern abhängen.",
        "Gebühren könnten gerade Geringverdiener vom Studium abhalten.",
        "Der gesellschaftliche Nutzen von Absolventen ist höher als die Gebühren einbringen würden.",
      ],
      modelAr:
        "التوجيه: موقف + حجة مبدأ + مثال واقعي + رد على حجة الخصم (الجودة) + خاتمة.\n" +
        "الموقف: «Ich lehne allgemeine Studiengebühren ab, weil Bildung eine Investition in die Gesellschaft ist.»\n" +
        "حجة مبدأ: «Wenn Geld über den Zugang zum Studium entscheidet, verlieren wir Talente aus einkommensschwachen Familien.»\n" +
        "مثال: «In Deutschland ist das Studium kostenlos, und trotzdem gehört das Land zu den stärksten Volkswirtschaften Europas.»\n" +
        "الرد على الخصم: «Bessere Ausstattung ist wichtig, aber dafür gibt es öffentliche Mittel und Stipendien statt Hürden für alle.»\n" +
        "خاتمة: «Statt Gebühren sollte man lieber in Stipendien und gute Lehre investieren.»",
    },
    {
      id: "b-d3",
      themaDe: "Sollte Werbung für Süßigkeiten und Fast Food verboten werden?",
      themaAr: "هل يجب منع الإعلانات عن الحلويات والوجبات السريعة؟",
      positionAr:
        "حدد موقفك (منع كامل / قيود على الأطفال فقط)، واستشهد بقيود التبغ، وتناول حرية الاختيار.",
      pro: [
        "Werbung beeinflusst besonders Kinder, die die Folgen noch nicht einschätzen können.",
        "Weniger Werbung kann den Konsum von Zucker und Fett senken.",
        "Bei Tabak gab es ähnliche Verbote, und sie haben funktioniert.",
      ],
      kontra: [
        "Erwachsene dürfen nicht bevormundet werden – sie entscheiden selbst.",
        "Ein Werbeverbot löst das Problem nicht, solange es die Produkte gibt.",
        "Hersteller und Werbeagenturen verlieren Arbeitsplätze und Einnahmen.",
      ],
      modelAr:
        "التوجيه: ميّز بين البالغين والأطفال، استشهد بمثال التبغ، ثم اقترح حلاً وسطاً.\n" +
        "الموقف: «Ich bin für ein Werbeverbot, aber nur in Sendungen und Medien, die Kinder nutzen.»\n" +
        "حجة: «Kinder können Werbung nicht von Information unterscheiden, deshalb trifft sie die Verantwortung nicht.»\n" +
        "مثال: «Beim Tabak hat sich gezeigt, dass ein Werbeverbot den Einstieg junger Menschen deutlich erschwert.»\n" +
        "الاعتراف والرد: «Erwachsene dürfen weiterhin selbst entscheiden, aber Kinder brauchen Schutz.»\n" +
        "خاتمة: «Ein gezieltes Verbot schützt die Jüngsten, ohne alle Erwachsenen zu bevormunden.»",
    },
    {
      id: "b-d4",
      themaDe: "Sollten Smartphones in Schulen verboten werden?",
      themaAr: "هل يجب منع الهواتف الذكية في المدارس؟",
      positionAr:
        "خذ موقفاً (منع كامل / استخدام منظّم)، واحتجّ بالأدلة على التركيز والمهارات الرقمية، واقترح قاعدة عملية.",
      pro: [
        "Ohne Handy sinkt die Ablenkung im Unterricht deutlich.",
        "In den Pausen sprechen die Schüler wieder mehr miteinander.",
        "Lehrkräfte können sich auf den Stoff statt auf Kontrollen konzentrieren.",
      ],
      kontra: [
        "Das Smartphone ist auch ein Lernwerkzeug für Recherche und Vokabeln.",
        "Pauschale Verbote sind im Schulalltag schwer zu kontrollieren.",
        "Medienkompetenz lernt man nur durch begleitete Nutzung, nicht durch Verbote.",
      ],
      modelAr:
        "التوجيه: فرّق بين الاستخدام التعليمي والخاص، اقترح نظاماً واضحاً، واذكر تجربة مدرسة.\n" +
        "الموقف: «Ich bin gegen ein pauschales Verbot, aber für klare Regeln während des Unterrichts.»\n" +
        "حجة: «Das Handy kann im Unterricht sinnvoll sein, etwa für Recherche oder Vokabel-Apps.»\n" +
        "مثال: «An vielen Schulen werden Handys morgens eingesammelt und in der Mittagspause zurückgegeben – das funktioniert.»\n" +
        "الاعتراف والرد: «Natürlich lenken Spiele und Chats ab, aber genau deshalb braucht es Regeln statt Verbote.»\n" +
        "خاتمة: «Mit klaren Regeln lernen die Schüler den verantwortungsvollen Umgang – das ist wichtiger als ein Verbot.»",
    },
  ],
};
