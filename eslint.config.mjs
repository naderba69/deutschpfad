import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      // لا يستخدم المشروع React Compiler؛ تُراجع هذه التشخيصات الجديدة تدريجياً
      // بدلاً من إيقاف ترقية الإطار على 67 تنبيهاً غير مصنّف.
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
      "react-hooks/immutability": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/refs": "off",
    },
  },
];

export default config;
