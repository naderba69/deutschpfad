"use client";

import {useEffect} from "react";

import {registerServiceWorker} from "@/lib/register-sw";

/**
 * مكوّن غير مرئي يسجّل الـ Service Worker عند تحميل الصفحة
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return null;
}
