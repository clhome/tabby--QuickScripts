let isChinese = false
try {
  const lang = (navigator?.language || process.env.LANG || '').toLowerCase()
  isChinese = lang.startsWith('zh')
} catch {
  // ignore
}

export function t(zhText: string, enText: string): string {
  return isChinese ? zhText : enText
}

export function isZh(): boolean {
  return isChinese
}
