// src/utils/share.js
// ترميز/فك ترميز حالة المعاينة إلى/من معاملات الرابط (URL parameters)
// لدعم ميزة "مشاركة المعاينة".

export function encodeStateToUrl(state) {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  params.set('font', state.fontId);
  params.set('text', state.text);
  params.set('size', String(state.fontSize));
  params.set('weight', String(state.weight));
  params.set('color', state.color);
  params.set('bg', state.bgColor);
  params.set('align', state.align);
  params.set('ls', String(state.letterSpacing));
  params.set('lh', String(state.lineHeight));
  url.search = params.toString();
  return url.toString();
}

export function decodeStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('font')) return null;
  return {
    fontId: params.get('font'),
    text: params.get('text') ?? 'مبادئ أولية إعلام آلي',
    fontSize: Number(params.get('size') ?? 48),
    weight: Number(params.get('weight') ?? 400),
    color: params.get('color') ?? '#EDE6D8',
    bgColor: params.get('bg') ?? '#12100E',
    align: params.get('align') ?? 'right',
    letterSpacing: Number(params.get('ls') ?? 0),
    lineHeight: Number(params.get('lh') ?? 1.6)
  };
}

export function clearUrlParams() {
  const url = new URL(window.location.href);
  url.search = '';
  window.history.replaceState({}, '', url.toString());
}
