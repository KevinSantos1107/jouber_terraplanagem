export const WHATSAPP_NUMBER = '5531996686933';
export const PHONE_TEL = '+5531996686933';
export const sections = {
  testimonials: { enabled: true },
  videos: { enabled: true },
  partners: { enabled: false },
  licenses: { enabled: false },
};
export const stats = [
  { id:'years', label:'anos de experiência', value:'15', suffix:'', enabled: true },
  { id:'clients', label:'clientes atendidos', value:'100', suffix:'+', enabled: true },
  { id:'projects', label:'obras realizadas', value:'SUBSTITUIR', suffix:'', enabled: false },
  { id:'volume', label:'m³ movimentados', value:'SUBSTITUIR', suffix:'', enabled: false },
];
export const cities = ['Sete Lagoas', 'SUBSTITUIR'];
export const compliance = {
  licenses: { enabled: false, text: 'SUBSTITUIR - Licenças e certificações em dia' },
  correctDisposal: { enabled: false, text: 'SUBSTITUIR - Descarte correto e licenciado de entulho' },
};

// ── Portfólio de Vídeos ──────────────────────────────────────────────────────
// Como adicionar vídeos:
//   1. Faça upload do vídeo no Cloudinary (plano free é suficiente).
//   2. Copie a URL do vídeo (ex: https://res.cloudinary.com/SEU_CLOUD/video/upload/v.../nome.mp4)
//   3. Cole em `src`. O `poster` (thumbnail) é gerado automaticamente pelo Cloudinary:
//      basta trocar "/video/upload/" por "/video/upload/so_0/" e ".mp4" por ".jpg"
//   4. Preencha `title` com o nome do serviço.
//
// Para vídeos do WhatsApp/celular, use Cloudinary (arraste e solte no painel deles).
// Cada categoria = um bloco com título e linha horizontal, como no exemplo enviado.
// ─────────────────────────────────────────────────────────────────────────────
export const videoPortfolio = [
  {
    category: 'Terraplanagem',
    videos: [
      {
        title: 'Terraplanagem',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0050.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0050.jpg',
      },
      {
        title: 'Terraplanagem',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0020.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0020.jpg',
      },
      {
        title: 'Terraplanagem',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0054.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0054.jpg',
      },
      {
        title: 'Terraplanagem',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0053.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0053.jpg',
      },
      {
        title: 'Terraplanagem',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0033.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0033.jpg',
      },
      {
        title: 'Terraplanagem',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0021.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0021.jpg',
      },
      {
        title: 'Terraplanagem',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0023.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0023.jpg',
      },
      {
        title: 'Terraplanagem',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0036.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0036.jpg',
      },
    ],
  },
  {
    category: 'Aterro e Desaterro',
    videos: [
      // { title: 'Aterro e Desaterro', src: '...', poster: '...' },
    ],
  },
  {
    category: 'Demolição de Casas e Limpeza de Lotes',
    videos: [
      {
        title: 'Demolição e Limpeza',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0027_1.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0027_1.jpg',
      },
      {
        title: 'Demolição e Limpeza',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0052.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0052.jpg',
      },
      {
        title: 'Demolição e Limpeza',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0063.mp4?v=2',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0063.jpg?v=2',
      },
      {
        title: 'Demolição e Limpeza',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/VID-20261001-WA0034.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/VID-20261001-WA0034.jpg',
      },
      {
        title: 'Demolição e Limpeza',
        src: 'https://res.cloudinary.com/ho1h5rp7/video/upload/lv_0_20261001215916.mp4',
        poster: 'https://res.cloudinary.com/ho1h5rp7/video/upload/so_0/lv_0_20261001215916.jpg',
      },
    ],
  },
  {
    category: 'Terraplanagem Residencial',
    videos: [
      // { title: 'Terraplanagem Residencial', src: '...', poster: '...' },
    ],
  },
  {
    category: 'Remoção de Entulho e Materiais',
    videos: [
      // { title: 'Remoção de Entulho', src: '...', poster: '...' },
    ],
  },
];
