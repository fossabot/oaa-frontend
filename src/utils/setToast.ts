let toastInstance: any = null
// 供 App.vue 用的初始化方法
export const initToast = (instance: any) => {
    toastInstance = instance
}

const activeToasts = new Map<string, number>()

export default function (severity: string, summary: string, detail?: string) {
    if (!toastInstance) {
        console.warn('Toast 尚未初始化')
        return
    }

    const now = Date.now()
    for (const [key, expiry] of activeToasts) {
        if (expiry <= now) activeToasts.delete(key)
    }

    const key = `${severity}|${summary}|${detail ?? ''}`
    if (activeToasts.has(key)) return

    activeToasts.set(key, now + 2000) // 防抖，2s内不重复弹出同内容 Toast
    toastInstance.add({ severity, summary, detail, life: 4500 })
}
