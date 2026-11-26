function scrollToId(id){
  var el = document.getElementById(id);
  if(el){ el.scrollIntoView({behavior:'smooth'}); }
}

// Scroll-triggered reveal: elements with .sr fade/slide in once, the first
// time they enter the viewport.
var srEls = document.querySelectorAll('.sr');
if('IntersectionObserver' in window && srEls.length){
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        en.target.classList.add('in');
        obs.unobserve(en.target);
      }
    });
  }, {threshold:0.15, rootMargin:'0px 0px -40px 0px'});
  srEls.forEach(function(el){ obs.observe(el); });
} else {
  srEls.forEach(function(el){ el.classList.add('in'); });
}

// Cursor-tracking glow on project cards.
document.querySelectorAll('.proj-card, .proj-featured').forEach(function(card){
  card.addEventListener('mousemove', function(e){
    var rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
  });
});

// Nav compresses slightly once you've scrolled past the hero's top edge.
var navEl = document.querySelector('nav');
function onScroll(){
  navEl.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// ---------- Certificates ----------
var CERT_IMAGES = {
  devfest: '/static/images/devfest.jpeg',
  techtrack: '/static/images/techtrack.jpeg',
  networking: '/static/images/networking.jpeg',
  webdesign: '/static/images/webdesign.jpeg'
};

function openCert(key, title){
  var modal = document.getElementById('certModal');
  document.getElementById('certModalImg').src = CERT_IMAGES[key] || '';
  document.getElementById('certModalTitle').textContent = title || 'CERTIFICATE';
  modal.classList.add('open');
  requestAnimationFrame(function(){ modal.classList.add('show'); });
  document.body.style.overflow = 'hidden';
}
function closeCert(){
  var modal = document.getElementById('certModal');
  if(!modal.classList.contains('open')) return;
  modal.classList.remove('show');
  document.body.style.overflow = '';
  setTimeout(function(){ modal.classList.remove('open'); }, 250);
}

// ---------- Project modals ----------
function openModal(id){
  var modal = document.getElementById('modal-' + id);
  if(!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  initCarousel(modal);
}
function closeModal(id){
  var modal = document.getElementById('modal-' + id);
  if(modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('.proj-modal-overlay').forEach(function(overlay){
  overlay.addEventListener('click', function(e){
    if(e.target === overlay){
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// One Escape handler for every modal on the page.
document.addEventListener('keydown', function(e){
  if(e.key !== 'Escape') return;
  closeCert();
  document.querySelectorAll('.proj-modal-overlay.open').forEach(function(el){
    el.classList.remove('open');
  });
  document.body.style.overflow = '';
});

function initCarousel(modal){
  var track = modal.querySelector('.proj-carousel-track');
  if(!track) return;
  var total = track.querySelectorAll('.proj-carousel-slide').length;
  var dots = modal.querySelectorAll('.proj-carousel-dot');
  var countEl = modal.querySelector('.proj-carousel-count');
  var idx = 0;
  function goTo(n){
    idx = (n + total) % total;
    track.style.transform = 'translateX(-' + (idx * 100) + '%)';
    dots.forEach(function(d, i){ d.classList.toggle('active', i === idx); });
    if(countEl) countEl.textContent = (idx + 1) + ' / ' + total;
  }
  var prev = modal.querySelector('.proj-carousel-prev');
  var next = modal.querySelector('.proj-carousel-next');
  if(prev) prev.onclick = function(e){ e.stopPropagation(); goTo(idx - 1); };
  if(next) next.onclick = function(e){ e.stopPropagation(); goTo(idx + 1); };
  dots.forEach(function(d, i){ d.onclick = function(){ goTo(i); }; });
  goTo(0);
}
