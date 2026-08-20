/* ==========================================================================
   INTRO — sequence engine
   Splash -> Profile -> Post (like) -> DM (branching chat) -> Portfolio
   ========================================================================== */

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goToPortfolio() {
  const t = document.getElementById('pageTransition');
  t.classList.add('show');
  setTimeout(() => { window.location.href = 'home.html'; }, 550);
}

/* ---------------- DM conversation graph ----------------
   Every path converges on a node with cta:true, so whichever
   options the visitor picks, they always end up at the portfolio. */
const DM_SCRIPT = {
  start: {
    messages: ['Hai! 👋', 'Gue Fauzan, alias @frikhiii', 'Makasih udah mampir ke profil gue 😄'],
    options: [
      { label: 'Gas liat portofolionya! 🔥', next: 'gas' },
      { label: 'Kepoin dulu ah 👀', next: 'kepo' },
    ],
  },
  gas: {
    messages: ['Mantap, semangat lo nular nih 🚀', 'Langsung meluncur ya ke portofolio gue'],
    cta: true,
  },
  kepo: {
    messages: ['Santai aja, emang enaknya gitu 😄', 'Btw, lo tertarik sama bidang apa nih?'],
    options: [
      { label: 'Web Development 💻', next: 'web' },
      { label: 'Design / UI-UX 🎨', next: 'design' },
      { label: 'Semuanya, penasaran aja 👌', next: 'all' },
    ],
  },
  web: {
    messages: ['Sip, cocok banget berarti 🔥', 'Portofolio gue banyak project web, cus cek'],
    cta: true,
  },
  design: {
    messages: ['Nice, gue juga suka eksplor sisi visual 🎨', 'Yuk liat beberapa karya gue'],
    cta: true,
  },
  all: {
    messages: ['Wih siap eksplor semua ya 😄', 'Cus langsung ke portofolio lengkapnya'],
    cta: true,
  },
};

const dmBody = document.getElementById('dmBody');
const dmOptions = document.getElementById('dmOptions');
const dmCta = document.getElementById('dmCta');

function scrollDm() {
  dmBody.scrollTop = dmBody.scrollHeight;
}

async function typeThemMessage(text) {
  const typing = document.createElement('div');
  typing.className = 'typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  dmBody.appendChild(typing);
  scrollDm();
  await wait(650 + Math.random() * 350);
  typing.remove();

  const bubble = document.createElement('div');
  bubble.className = 'bubble them';
  bubble.textContent = text;
  dmBody.appendChild(bubble);
  scrollDm();
  await wait(250);
}

function addMeBubble(text) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble me';
  bubble.textContent = text;
  dmBody.appendChild(bubble);
  scrollDm();
}

async function playNode(key) {
  const node = DM_SCRIPT[key];
  dmOptions.classList.add('hidden');
  dmOptions.querySelectorAll('button').forEach((b) => b.remove());
  dmCta.classList.add('hidden');

  for (const msg of node.messages) {
    // eslint-disable-next-line no-await-in-loop
    await typeThemMessage(msg);
  }

  if (node.options) {
    dmOptions.classList.remove('hidden');
    node.options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.textContent = opt.label;
      btn.addEventListener('click', () => {
        addMeBubble(opt.label);
        dmOptions.classList.add('hidden');
        dmOptions.querySelectorAll('button').forEach((b) => b.remove());
        setTimeout(() => playNode(opt.next), 350);
      });
      dmOptions.appendChild(btn);
    });
  } else if (node.cta) {
    dmCta.classList.remove('hidden');
  }
}

/* ---------------- Sequence driver ---------------- */
async function runSequence() {
  // Splash
  await wait(1400);
  showScreen('screen-profile');

  // Profile: draw attention to the message button, then auto-open the post
  await wait(2200);
  const cell = document.querySelector('#postGrid .cell');
  cell.style.transform = 'scale(0.94)';
  await wait(160);
  cell.style.transform = 'none';
  showScreen('screen-post');

  // Post: like it, then head to DMs
  await wait(900);
  const heart = document.getElementById('heartIcon');
  const likeCount = document.getElementById('likeCount');
  heart.textContent = '❤️';
  heart.classList.add('liked');
  likeCount.textContent = '1 suka';
  await wait(1500);
  showScreen('screen-dm');

  // DM branching chat
  await wait(300);
  playNode('start');
}

document.getElementById('dmCtaBtn').addEventListener('click', goToPortfolio);

runSequence();
