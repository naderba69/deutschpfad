# ═══════════════════════════════════════════════════════════
#  صورة الإنتاج — درب الألمانية
#  Node 22.6+ (المطلوب في package.json و.nvmrc)
#  البناء:  docker build -t deutschpfad .
#  التشغيل: docker run -p 3000:3000 --env-file .env deutschpfad
# ═══════════════════════════════════════════════════════════

# 1) الاعتماديات
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# 2) البناء — DOCKER_BUILD=1 يفعّل الإخراج المستقل (standalone)
FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV DOCKER_BUILD=1 NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 3) التشغيل — مستخدم غير جذر، والحد الأدنى من الملفات
FROM node:22-alpine AS run
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
RUN addgroup -S app && adduser -S app -G app
COPY --from=build --chown=app:app /app/.next/standalone ./
COPY --from=build --chown=app:app /app/.next/static ./.next/static
COPY --from=build --chown=app:app /app/public ./public
USER app
EXPOSE 3000
CMD ["node", "server.js"]
